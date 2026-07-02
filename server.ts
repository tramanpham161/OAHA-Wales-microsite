import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import PDFDocument from "pdfkit";
import { WHITEPAPER_PAGES } from "./src/lib/whitepaper-data";

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

// Dynamic PDF Generation Endpoint serving 'whitepaper.pdf' inline for a seamless new-tab experience
app.get("/whitepaper.pdf", (req, res) => {
  try {
    // Check if the user has uploaded their original, unmodified PDF file to the workspace
    const possiblePaths = [
      path.join(process.cwd(), "whitepaper.pdf"),
      path.join(process.cwd(), "src", "whitepaper.pdf"),
      path.join(process.cwd(), "src", "assets", "whitepaper.pdf"),
      path.join(process.cwd(), "src", "assets", "images", "whitepaper.pdf"),
      path.join(process.cwd(), "public", "whitepaper.pdf")
    ];

    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=Accelerating_Social_Mobility_In_Wales_White_Paper.pdf");
        return res.sendFile(p);
      }
    }

    // High-fidelity fallback dynamic rendering using pdfkit
    const doc = new PDFDocument({ margin: 55, size: 'A4' });
    
    // Set headers to stream PDF to user's browser in a new tab smoothly
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=Accelerating_Social_Mobility_In_Wales_White_Paper.pdf");
    
    doc.pipe(res);

    // Dynamic rendering of each page in WHITEPAPER_PAGES
    WHITEPAPER_PAGES.forEach((page, index) => {
      if (index > 0) {
        doc.addPage();
      }

      const isCover = page.pageNum === 1;

      if (isCover) {
        // Draw Cover Aesthetic Block
        doc.rect(0, 0, doc.page.width, 18).fill("#3AB03A");
        doc.rect(0, 18, doc.page.width, 8).fill("#FF9900");
        doc.rect(0, 26, doc.page.width, 6).fill("#2EBBB8");

        doc.moveDown(4);
        
        // Metadata / Author
        doc.fillColor("#475569")
           .font("Helvetica-Oblique")
           .fontSize(10)
           .text("OAHA | Lewis Silkin in partnership with Wales Social Mobility Working Group", { align: "center" });

        doc.moveDown(3);

        // Core Title
        doc.fillColor("#1e293b")
           .font("Helvetica-Bold")
           .fontSize(28)
           .text("Accelerating Social Mobility in Wales", { align: "center", lineGap: 8 });

        doc.moveDown(1.5);

        // Subtitle
        doc.fillColor("#3AB03A")
           .font("Helvetica-Bold")
           .fontSize(14)
           .text("A white paper for place-based action, stronger transitions, and coordinated opportunity", { align: "center", lineGap: 6 });

        doc.moveDown(4);

        // Solid Divider Line
        doc.strokeColor("#FF9900")
           .lineWidth(2)
           .moveTo(80, doc.y)
           .lineTo(doc.page.width - 80, doc.y)
           .stroke();

        doc.moveDown(3);

        // Render sections (Meta & Core Proposition)
        page.sections.forEach(sec => {
          if (sec.type === "meta") {
            doc.fillColor("#64748b")
               .font("Helvetica")
               .fontSize(11)
               .text(sec.text || "", { align: "center", lineGap: 4 });
            doc.moveDown(2);
          } else if (sec.type === "core-proposition") {
            // Draw Proposition Box
            const oldY = doc.y;
            doc.rect(50, oldY - 10, doc.page.width - 100, 280).fill("#faf9f6");
            doc.rect(50, oldY - 10, doc.page.width - 100, 280).strokeColor("#2EBBB8").lineWidth(1.5).stroke();

            doc.fillColor("#2EBBB8")
               .font("Helvetica-Bold")
               .fontSize(12)
               .text("Core proposition", 70, oldY, { lineGap: 6 });

            doc.moveDown(0.8);

            doc.fillColor("#334155")
               .font("Helvetica")
               .fontSize(10.5)
               .text("Wales already has significant activity, insight and commitment. While provision exists across much of the journey, gaps remain for particular cohorts, transitions and places, including learners with additional learning needs and some pre-16 to post-16 pathways. The deeper challenge is fragmentation, visibility and weak handoffs across the journey.\n\nFor too many young people and families, support is still difficult to see, difficult to navigate, and too dependent on whether someone can interpret the options around them. This paper therefore argues for a place-based response that improves handoffs, coordination and pathway visibility, rather than adding another disconnected initiative.", { lineGap: 5, width: doc.page.width - 140 });
          }
        });

      } else {
        // Normal Report Page Layout
        // Header
        doc.fillColor("#94a3b8")
           .font("Helvetica-Bold")
           .fontSize(8.5)
           .text("ACCELERATING SOCIAL MOBILITY IN WALES", { lineGap: 2 });
        
        doc.strokeColor("#e2e8f0")
           .lineWidth(1)
           .moveTo(55, 75)
           .lineTo(doc.page.width - 55, 75)
           .stroke();

        doc.moveDown(2);
        
        // Page Title
        doc.fillColor("#1e293b")
           .font("Helvetica-Bold")
           .fontSize(18)
           .text(page.title, 55, 95);

        doc.moveDown(1.5);

        // Stream through page components
        page.sections.forEach(sec => {
          if (sec.type === "heading") {
            doc.fillColor("#3AB03A")
               .font("Helvetica-Bold")
               .fontSize(13)
               .text(sec.text || "", { lineGap: 4 });
            doc.moveDown(0.8);
          } else if (sec.type === "subheading") {
            doc.fillColor("#FF9900")
               .font("Helvetica-Bold")
               .fontSize(11.5)
               .text(sec.text || "", { lineGap: 4 });
            doc.moveDown(0.8);
          } else if (sec.type === "paragraph") {
            doc.fillColor("#334155")
               .font("Helvetica")
               .fontSize(10)
               .text(sec.text || "", { lineGap: 5 });
            doc.moveDown(1.2);
          } else if (sec.type === "list" && sec.items) {
            sec.items.forEach(item => {
              doc.fillColor("#334155")
                 .font("Helvetica")
                 .fontSize(10)
                 .text(`  •  ${item}`, { lineGap: 4.5, paragraphGap: 2 });
            });
            doc.moveDown(1.2);
          } else if (sec.type === "table" && sec.headers && sec.rows) {
            // Simple neat grid layout implementation for tables
            const colWidths = sec.headers.length === 2 ? [150, doc.page.width - 260] : [130, 180, doc.page.width - 365];
            const startX = doc.x;
            let currentTempY = doc.y;

            // Draw Table Headers background
            doc.rect(startX, currentTempY, doc.page.width - 110, 24).fill("#f1f5f9");
            
            // Draw Table Headers text
            doc.fillColor("#1e293b")
               .font("Helvetica-Bold")
               .fontSize(9);

            let offsetCol = 0;
            sec.headers.forEach((h, hIdx) => {
              doc.text(h, startX + offsetCol + 8, currentTempY + 7);
              offsetCol += colWidths[hIdx] || 100;
            });

            currentTempY += 24;
            doc.moveDown(0.2);

            // Draw rows
            sec.rows.forEach(row => {
              doc.font("Helvetica").fontSize(9).fillColor("#334155");
              let rowHeight = 0;

              // Compute required row height based on longest multi-line text
              row.forEach((cell, cellIdx) => {
                const height = doc.heightOfString(cell, { width: (colWidths[cellIdx] || 100) - 10 });
                if (height > rowHeight) rowHeight = height;
              });

              rowHeight = Math.max(rowHeight + 10, 26);

              // Row background alternate striping
              doc.rect(startX, currentTempY, doc.page.width - 110, rowHeight).strokeColor("#e2e8f0").lineWidth(0.5).stroke();

              let offsetCell = 0;
              row.forEach((cell, cellIdx) => {
                doc.text(cell, startX + offsetCell + 8, currentTempY + 6, {
                  width: (colWidths[cellIdx] || 100) - 15,
                  align: "left"
                });
                offsetCell += colWidths[cellIdx] || 100;
              });

              currentTempY += rowHeight;
            });

            doc.y = currentTempY;
            doc.moveDown(1.5);
          }
        });

        // Footer block on report pages
        doc.strokeColor("#e2e8f0")
           .lineWidth(0.8)
           .moveTo(55, doc.page.height - 50)
           .lineTo(doc.page.width - 55, doc.page.height - 50)
           .stroke();

        doc.fillColor("#64748b")
           .font("Helvetica")
           .fontSize(8)
           .text(`Page ${page.pageNum} of 13  |  OAHA Social Mobility Working Group Report`, 55, doc.page.height - 42, { align: "left" });
      }
    });

    doc.end();

  } catch (err: any) {
    console.error("Error generating inline pdf view:", err);
    res.status(500).send("Unable to render Phase 1 White Paper document.");
  }
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

// Helper for Resend client initialization
let resendClient: Resend | null = null;
function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not defined in Settings.");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// 4. API Endpoint: Send email via Resend to info.oaha.uk@gmail.com
app.post("/api/send-email", async (req, res) => {
  try {
    const { type, data } = req.body;
    if (!type || !data) {
      return res.status(400).json({ error: "Missing 'type' or 'data' in request body." });
    }

    // Attempt to parse RESEND_API_KEY
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing. Falling back to simulated successful send.");
      return res.json({
        success: true,
        isMockMode: true,
        message: "RESEND_API_KEY environment variable is missing in Settings. Running in simulation mode."
      });
    }

    const resend = getResendClient();
    const toEmail = "info.oaha.uk@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    let subject = "";
    let htmlContent = "";

    if (type === "inquiry") {
      const {
        name,
        email,
        phone,
        organisation,
        role,
        orgType,
        category,
        option,
        message
      } = data;

      subject = `[OAHA Wales Inquiry] - ${name} (${organisation})`;
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="font-size: 24px; font-weight: bold; color: #2E536B;">OAHA UK</div>
            <div style="font-size: 12px; color: #51615a; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px;">Wales Social Mobility Initiative</div>
          </div>
          
          <h2 style="color: #2E536B; border-bottom: 2px solid #3AB03A; padding-bottom: 12px; margin-top: 0; font-size: 18px; font-weight: 600;">New Collaboration Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 180px; font-size: 13px;">Category:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${category}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Involvement Option:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${option}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Full Name:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;"><strong>${name}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Organisation:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${organisation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Role / Job Title:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${role}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Organisation Type:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${orgType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Email Address:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;"><a href="mailto:${email}" style="color: #2E536B; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Phone Number:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${phone}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #faf9f6; border-radius: 8px; border-left: 4px solid #FF9900;">
            <strong style="color: #475569; display: block; margin-bottom: 8px; font-size: 13px;">Message / Collaboration Details:</strong>
            <p style="color: #334155; margin: 0; white-space: pre-wrap; font-size: 13px; line-height: 1.5;">${message || "No message provided."}</p>
          </div>

          <p style="font-size: 11px; color: #94a3b8; margin-top: 32px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 16px;">
            This inquiry was sent securely via the OAHA Wales Progress Update portal using Resend.
          </p>
        </div>
      `;
    } else if (type === "map") {
      const {
        contributionType,
        name,
        contact,
        message
      } = data;

      subject = `[OAHA Wales Ecosystem Map] - ${contributionType} by ${name}`;
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="font-size: 24px; font-weight: bold; color: #2E536B;">OAHA UK</div>
            <div style="font-size: 12px; color: #51615a; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px;">Wales Social Mobility Initiative</div>
          </div>
          
          <h2 style="color: #2E536B; border-bottom: 2px solid #FF9900; padding-bottom: 12px; margin-top: 0; font-size: 18px; font-weight: 600;">Ecosystem Map Contribution</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 180px; font-size: 13px;">Contribution Type:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;"><strong>${contributionType}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Contributor Name:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;"><strong>${name}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; font-size: 13px;">Contact Details:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${contact}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #faf9f6; border-radius: 8px; border-left: 4px solid #2BB7BA;">
            <strong style="color: #475569; display: block; margin-bottom: 8px; font-size: 13px;">Message / Contribution Details:</strong>
            <p style="color: #334155; margin: 0; white-space: pre-wrap; font-size: 13px; line-height: 1.5;">${message || "No details provided."}</p>
          </div>

          <p style="font-size: 11px; color: #94a3b8; margin-top: 32px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 16px;">
            This contribution suggestion was sent securely via the OAHA Wales Progress Update portal using Resend.
          </p>
        </div>
      `;
    } else {
      return res.status(400).json({ error: "Invalid form type." });
    }

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      html: htmlContent
    });

    if (emailResponse.error) {
      console.error("Resend API returned error details:", emailResponse.error);
      return res.status(500).json({ error: emailResponse.error.message || "Failed to send email via Resend API." });
    }

    res.json({ success: true, messageId: emailResponse.data?.id });

  } catch (error: any) {
    console.error("Exception in send-email API:", error);
    res.status(500).json({ error: error.message || "An unexpected error occurred while sending email." });
  }
});

// Setup Vite development middlewares or service static client build in production
async function startServer() {
  const isProd = process.env.NODE_ENV === "production";
  const distPath = path.join(process.cwd(), 'dist');
  const distExists = fs.existsSync(distPath);

  if (isProd && distExists) {
    console.log("Serving static assets from production dist folder.");
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    console.log(`Starting Vite dev server (isProd: ${isProd}, distExists: ${distExists})`);
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server successfully running on host 0.0.0.0 and port ${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
