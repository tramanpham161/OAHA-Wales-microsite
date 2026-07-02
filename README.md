# OAHA Wales Portal — Social Mobility Initiative

Welcome to the **OAHA Wales Portal**, a beautifully crafted digital hub designed to support, visualize, and scale social mobility initiatives across Wales. 

This interactive application serves as a bridge between learners, employers, educators, youth organisations, civic bodies, and funders. It offers a clear, structured narrative of Wales's social mobility ecosystem, highlighting key action areas, stakeholder roles, and the journey of learners.

---

## 🌟 Key Features

### 1. The 6-Step Learner Journey Flow
A custom-designed visual timeline showcasing the step-by-step progress of a learner through the Welsh social mobility ecosystem.
* Powered by lightweight, responsive, and beautifully integrated SVG vector illustrations (featuring a unique, customized "stick-person" design system).
* Richly detailed with clear descriptions of each stage, from early engagement and skills identification to employment transition and long-term mentorship.

### 2. Social Mobility Ecosystem Map & Directory
An interactive, collaborative directory mapping out adjacent partners, programs, and gaps across Wales.
* **Propose Contributions**: Users can submit resources, program details, or partner listings directly to the directory using a built-in contribution form.

### 3. Smart Multi-Stakeholder Inquiry Form
A tailored engagement engine for different partner groups:
* **Employers**: Share skills needs, offer work placements, or co-design opportunities.
* **Educators**: Connect classrooms with real-world programs.
* **Youth & Community Organisations**: Align support structures with local opportunities.
* **Civic & Public Bodies**: Coordinate regional priorities and structural resources.
* **Funders & Strategic Partners**: Explore funding alignments and policy conversations.

### 4. Direct Email Integration via Resend
All collaboration inquiries and ecosystem contributions are securely emailed directly to **info.oaha.uk@gmail.com**.
* Built using a full-stack **server-side proxy** model to ensure your secret API keys are never exposed in the browser.
* Graceful developer fallback: If no API key is set, the portal runs in an elegant simulated demo mode so developers can test layouts without interruption.

---

## 🛠️ Technical Architecture

This application is built as a highly performant full-stack Node.js app using the latest standards:
* **Frontend**: React 18+, Vite, Tailwind CSS, and `motion` (for fluid layout animations and micro-interactions).
* **Backend**: Express.js server on Node, serving as both the static file router and the server-side API proxy for secure services.
* **Email Engine**: Resend API integration.
* **Iconography**: Clean, professional UI icons imported directly from `lucide-react`.

---

## 🔑 Environment Configuration

To send real emails to your inbox, the application uses **Resend**. This requires configuring environment variables.

Because systems often hide files starting with a dot (like `.env`), we have provided a visible guide file called **`env_configuration.txt`** in the project root.

### Required Keys:
```env
# Get your API key from https://resend.com
RESEND_API_KEY=re_your_secret_api_key

# The email address authorized to send emails in Resend (must be domain-verified)
# Defaults to onboarding@resend.dev for testing accounts
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### ⚙️ How to configure in Google AI Studio:
1. Click the **Settings** (gear icon) in the bottom-left or top-right of your workspace.
2. Go to **Secrets** / **Environment Variables**.
3. Add a new secret named `RESEND_API_KEY` and paste your actual Resend key.
4. Add a new secret named `RESEND_FROM_EMAIL` set to your sending address.
5. Restart your development server!

---

## 💻 Running the Portal Locally

When you export or download this project as a ZIP, running it on your own computer is simple:

### 1. Show Hidden Files (To find configuration files)
* **macOS**: Open the project folder in Finder and press `Command + Shift + . (dot)` to show hidden files.
* **Windows**: Open File Explorer, click the **View** tab at the top, and check the **Hidden items** box.

### 2. Rename the Configuration File
Rename the `env_configuration.txt` file at the root of the project to **`.env`** (deleting the `.txt` extension) and add your API keys inside.

### 3. Launch Development Server
Open your terminal in the project directory and execute:
```bash
# 1. Install all dependencies
npm install

# 2. Start the full-stack server
npm run dev
```
Your terminal will show:
```
Server running on http://localhost:3000
```
Open your browser and navigate to **`http://localhost:3000`** to interact with the portal!

---

## 📐 Project Structure

Here are the important files to help you understand where things are:

* **`/server.ts`**: The full-stack Express server. This manages security headers, routes, serves static assets in production, and contains the `/api/send-email` secure endpoint for Resend email processing.
* **`/src/App.tsx`**: The main entry point of the website interface. This handles layout, cards, color bars, menu interactions, maps, and submission logic.
* **`/src/components/LearnerJourneyFlow.tsx`**: Contains the full design, illustration logic, and copy for the **6-Step Learner Journey**.
* **`/src/components/OahaLogo.tsx`**: The newly-designed, geometric vector logo for OAHA UK.
* **`/src/index.css`**: The main stylesheet setting up Tailwind CSS, fonts, and custom root styling variables.
* **`/env_configuration.txt`**: A visible user-friendly guide for setting up environment variables on Windows/macOS.

---

## 🎨 Visual Identity Rules

The portal adheres to a clean, balanced, and premium design language:
* **Brand Accent Colors**: 
  * Deep Teal/Slate (`#2E536B`): Conveying structure, trust, and professional focus.
  * Vibrant Green (`#3AB03A`): Highlighting progress, mobility, and growth.
  * Warm Amber (`#FF9900`): Accenting active calls-to-action, takeaways, and highlight boxes.
* **Typography**:
  * Headings: Modern, high-contrast structural sans-serif tracking.
  * Body: Readable, eye-friendly sans-serif font pairing designed for dense, informative content.
* **Consistency Rules**: All cards, boxes, and sections are laid out with consistent gap matrices (`gap-6` or `gap-8`) to maintain breathing room and visual rhythm.
