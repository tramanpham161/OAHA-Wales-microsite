import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables for local testing
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper for lazy client initialization
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined in Settings.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. API Endpoint: Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
    time: new Date().toISOString()
  });
});

// 2. API Endpoint: Brand pitch analysis using Gemini-3.5-flash
app.post("/api/gemini/analyze-pitch", async (req, res) => {
  try {
    const { pitchText, brandName, productName } = req.body;
    if (!pitchText) {
      return res.status(400).json({ error: "Pitch text is required." });
    }

    // Check if key is present; otherwise give an intelligent, detailed error response or simulated mock response
    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        isMockMode: true,
        evaluation: {
          brandName: brandName || "Simulated Brand Co.",
          productName: productName || "Simulated Organic Product",
          estimatedTier: "Mid",
          fitScore: 82,
          pros: [
            "Matches professional reviewing credentials of Vicki Broadbent",
            "High public interest in organic and ethical products",
            "Great opportunities for multi-channel video and lifestyle integration"
          ],
          cons: [
            "Demands fast turn-around without clear details on asset usage terms",
            "Doesn't explicitly specify initial budget range"
          ],
          suggestedRates: {
            blogPost: "£650 - £850",
            instagramPost: "£450 - £600",
            bundledPackage: "£1,200 - £1,500"
          },
          suggestedDrafts: {
            accept: "Dear Team,\n\nThank you for reaching out! I would love to explore a campaign. My team handles all brand partnerships for The Honest Mum. Let's arrange a quick discussion of details.\n\nWarmly,\nVicki",
            negotiate: "Hello,\n\nWe appreciate the exciting pitch! To proceed, can you clarify if you have dedicated campaign budgets? Our standard editorial reviews begin at £650, which includes thorough family testing.\n\nBest regards,\nVicki",
            decline: "Hi there,\n\nThank you for thinking of us! Unfortunately, we cannot take on additional reviews in this category this month due to prior exclusives. I wish you the very best!\n\nBest wishes,\nVicki"
          },
          redFlags: ["Short deadline specified", "Usage rights of imagery undefined"]
        }
      });
    }

    const ai = getAiClient();
    const systemInstruction = 
      "You are a stellar agent and business manager for Vicki Broadbent, the award-winning online influencer, broadcaster, and author of 'The Honest Mum Reviews'. " +
      "Analyze brand inquiries or pitches sent to her and output extremely customized analysis of the proposal, rating the fit from 0 to 100 based on parenting/lifestyle brand synergy, editorial value, " +
      "reputation, and alignment with Vicki's elite brand. Generate three distinct, highly persuasive email response drafts: 1. Accept / Express Interest, 2. Negotiate Pricing, 3. Elegant and courteous decline. Output JSON corresponding exactly to the requested schema.";

    const prompt = 
      `Analyze this partnership pitch:
       Brand Name: ${brandName || "unspecified"}
       Product Name: ${productName || "unspecified"}
       Pitch Content: "${pitchText}"`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["brandName", "productName", "estimatedTier", "fitScore", "pros", "cons", "suggestedRates", "suggestedDrafts", "redFlags"],
          properties: {
            brandName: { type: Type.STRING },
            productName: { type: Type.STRING },
            estimatedTier: { type: Type.STRING, description: "Micro, Mid, High-End or Spam" },
            fitScore: { type: Type.INTEGER, description: "Sponsorship fit rating 0-100" },
            pros: { type: Type.ARRAY, items: { type: Type.STRING } },
            cons: { type: Type.ARRAY, items: { type: Type.STRING } },
            suggestedRates: {
              type: Type.OBJECT,
              required: ["blogPost", "instagramPost", "bundledPackage"],
              properties: {
                blogPost: { type: Type.STRING, description: "e.g., £600 - £800" },
                instagramPost: { type: Type.STRING, description: "e.g., £500 - £700" },
                bundledPackage: { type: Type.STRING, description: "e.g., £1,200 - £1,500" }
              }
            },
            suggestedDrafts: {
              type: Type.OBJECT,
              required: ["accept", "negotiate", "decline"],
              properties: {
                accept: { type: Type.STRING, description: "Email draft to show interest" },
                negotiate: { type: Type.STRING, description: "Email draft politely outlining rate guidelines or negotiation" },
                decline: { type: Type.STRING, description: "Email draft to politely decline" }
              }
            },
            redFlags: { type: Type.ARRAY, items: { type: Type.STRING } }
          }
        }
      }
    });

    const parsedData = JSON.parse(response.text.trim());
    res.json({ isMockMode: false, evaluation: parsedData });

  } catch (error: any) {
    console.error("Error analyzing pitch:", error);
    res.status(500).json({ error: error.message || "Failed to analyze pitch." });
  }
});

// 3. API Endpoint: Assistant to brainstorm / draft reviews and captions
app.post("/api/gemini/content-assistant", async (req, res) => {
  try {
    const { topic, platform, tone, wordCount } = req.body;
    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        isMockMode: true,
        content: {
          headings: [
            `Why ${topic} will change your family routine`,
            "Putting it to the test: Our honest thoughts",
            "Is it worth the investment? The final verdict"
          ],
          outline: `1. Introduction: Explaining the common parental struggle with similar items.\n2. In-Depth Testing: Reviewing texture, durability, and kid-friendliness over 2 weeks.\n3. Major Highlights: Practical safety features and cleanability.\n4. Value Assessment: Comparing to market competitors.`,
          keywords: [topic.split(' ')[0] || "parenting", "honest review", "family favorite", "lifestyle hacks"],
          socialCopies: {
            instagram: `💫 AD | We've been test-driving the new ${topic} for the past two weeks, and let's just say it's an absolute game-changer! Swipe to see how we used it. Head to the link in bio for the full, unfiltered verdict. #HonestReview #ParentingAdvice #Lifestyle`,
            twitter: `Is the new ${topic} really worth the hype? 🧐 We did the hard work so you don't have to. Check out the brand-new editorial testing: [link] #review`,
            pinterest: `The ultimate parent guide to ${topic}: Pros, cons, and honest experiences. Pin this for later! 📌 #ParentingHacks`
          },
          summary: `A complete, balanced lifestyle focus on ${topic}, highlighting build quality, ease of cleaning, and kids' reaction during testing, wrapped in a warm, trustworthy review style.`
        }
      });
    }

    const ai = getAiClient();
    const systemInstruction = 
      "You are a professional review writer and editor for 'The Honest Mum Reviews'. " +
      "Create high-converting, deeply engaging, SEO-optimized content structures based on the target topic. " +
      "The response must be strict JSON containing structured review headings, outline bullet points, keywords for SEO search, social captions tailored precisely for Instagram, Twitter/X, and Pinterest, and a meta summary.";

    const prompt = 
      `Generate structured content and social copy assets for:
       Topic: "${topic}"
       Primary Channel: "${platform || "Blog"}"
       Editorial Tone: "${tone || "Warm & Trustworthy"}"
       Desired Word Outline: ${wordCount || 300} words`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["headings", "outline", "keywords", "socialCopies", "summary"],
          properties: {
            headings: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 catchy blog/review post headline ideas" },
            outline: { type: Type.STRING, description: "Detailed section-by-section outline of the editorial piece" },
            keywords: { type: Type.ARRAY, items: { type: Type.STRING }, description: "5 high-volume SEO keywords/tags" },
            socialCopies: {
              type: Type.OBJECT,
              required: ["instagram", "twitter", "pinterest"],
              properties: {
                instagram: { type: Type.STRING, description: "Compelling Instagram post caption with emojis and hashtags" },
                twitter: { type: Type.STRING, description: "Short post with hashtags" },
                pinterest: { type: Type.STRING, description: "Pinterest graphic description/meta write-up with hashtags" }
              }
            },
            summary: { type: Type.STRING, description: "Short 2-sentence marketing pitch summarizing the review's value" }
          }
        }
      }
    });

    const parsedData = JSON.parse(response.text.trim());
    res.json({ isMockMode: false, content: parsedData });

  } catch (error: any) {
    console.error("Error creating content blueprint:", error);
    res.status(500).json({ error: error.message || "Failed to generate content outlines." });
  }
});

// Setup Vite development middlewares or service static client build in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server successfully running on host 0.0.0.0 and port ${PORT}`);
  });
}

startServer();
