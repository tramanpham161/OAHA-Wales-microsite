import React, { useState } from "react";
import {
  Download,
  Check,
  ExternalLink,
  Sparkles,
  Send,
  ArrowDown
} from "lucide-react";
import OahaLogo from "./components/OahaLogo";
import PartnerLogos from "./components/PartnerLogos";
import LearnerJourneyFlow from "./components/LearnerJourneyFlow";
import walesValleyHero from "./assets/images/wales_valley_hero_1779371646935.png";

export default function App() {
  // Clean Form states
  const [contactFormName, setContactFormName] = useState<string>("");
  const [contactFormWho, setContactFormWho] = useState<"Employer" | "Charity Leader" | "Other">("Employer");
  const [contactFormEmail, setContactFormEmail] = useState<string>("");
  const [contactFormMessage, setContactFormMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Core metrics & priorities
  const STRATEGIC_PRIORITIES = [
    {
      num: "01",
      title: "Regional Pilot",
      desc: "Use Cardiff and the South East Wales Metro as an operational hub to test local realities."
    },
    {
      num: "02",
      title: "Stronger Transitions",
      desc: "Improve school-to-work and re-entry points instead of adding parallel activity."
    },
    {
      num: "03",
      title: "Youth-Led Validation",
      desc: "Test findings directly with young people before designing pilots."
    },
    {
      num: "04",
      title: "Light Backbone Function",
      desc: "Maintain momentum and coordination without creating heavy bureaucracy."
    },
    {
      num: "05",
      title: "Shared Roadmap",
      desc: "Translate evidence into clear propositions for investment and policy."
    },
    {
      num: "06",
      title: "Shared Ecosystem Map",
      desc: "Keep mapping who is doing what to uncover hidden gaps."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`OAHA Wales Collaboration Inquiry (${contactFormWho})`);
    const body = encodeURIComponent(
      `Hello Nina,\n\n` +
      `I would like to get involved in the Wales Progress/Social Mobility initiative.\n\n` +
      `Name: ${contactFormName}\n` +
      `Role: ${contactFormWho}\n` +
      `My Email: ${contactFormEmail}\n\n` +
      `Message:\n${contactFormMessage}\n\n` +
      `Sent via Wales Progress Update portal.`
    );
    
    // Launch mail client
    window.location.href = `mailto:nina.slingsby@oaha.uk?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setContactFormName("");
    setContactFormWho("Employer");
    setContactFormEmail("");
    setContactFormMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]/95 text-[#1a2521] selection:bg-[#FF9900]/15 selection:text-[#3AB03A] flex flex-col font-sans transition-colors duration-200">
      
      {/* Premium Corporate Navigation Header */}
      <header className="bg-white/80 backdrop-blur border-b border-[#969696]/30 px-6 py-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OahaLogo size={32} className="shadow-xs rounded-sm hover:scale-105 transition-all" />
            <span className="font-semibold tracking-widest text-[#3AB03A] text-sm uppercase">OAHA</span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="https://oaha.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#51615a] hover:text-[#3AB03A] font-semibold tracking-wider uppercase transition-colors"
            >
              Main Site
            </a>
            <button
              onClick={() => {
                const elem = document.getElementById("preview-sec-get-involved");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs bg-[#3AB03A] text-white px-4 py-2 hover:opacity-90 font-medium tracking-wider uppercase transition-all cursor-pointer rounded-sm"
            >
              Get Involved
            </button>
          </nav>
        </div>
      </header>

      {/* Beautiful Page Wrapper representing the real website */}
      <main className="flex-1">

        {/* SECTION 1: HERO CONTAINER */}
        <div id="preview-sec-hero" className="relative">
          <section className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#faf9f6] border-b border-[#969696]/35 overflow-hidden">
            
            {/* Absolute Background Wales Photo with Left-to-Right Reveal strictly on the right side */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-5/12 pointer-events-none z-0 hidden lg:block">
              <div className="relative w-full h-full">
                <img
                  src={walesValleyHero}
                  alt="Wales Landscape Background"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-right"
                />
                
                {/* 
                  Elegant Gradient Mask:
                  Creates a flawless, exceptionally smooth horizontal transition from the solid background color (#faf9f6) 
                  on the left edge across the entire container width to transparent on the right, slowly and smoothly revealing the mountain valley.
                */}
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/70 to-transparent"></div>
              </div>
            </div>
 
            <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Premium Text & Call to Actions */}
              <div className="lg:col-span-7 space-y-6 text-left relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#2EBBB8] bg-[#2EBBB8]/10 rounded-full uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                  <span>Wales Progress update</span>
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-light tracking-tight text-[#3AB03A] leading-[1.15] font-sans">
                  Accelerating Social <br />
                  <span className="text-[#3AB03A]">Mobility in Wales</span>
                </h1>
                
                <p className="text-xs uppercase tracking-widest text-[#51615a] font-semibold">
                  Phase 1 Progress Update & White Paper
                </p>
                
                <p className="text-base text-[#51615a] max-w-xl leading-relaxed">
                  Welcome to OAHA’s Wales progress portal. Explore real-world discoveries from our collaborative Phase 1 study, mapping learner journeys, and removing system disconnects to support young people.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                  <a
                    href="/whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-[#3AB03A] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Download className="w-4 h-4 text-[#FF9900]" />
                    <span>Read the White Paper</span>
                  </a>
                  <button
                    onClick={() => {
                      const elem = document.getElementById("preview-sec-get-involved");
                      if (elem) elem.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 border-2 border-[#3AB03A] text-[#3AB03A] text-xs font-semibold uppercase tracking-widest hover:bg-[#3AB03A]/5 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Get Involved</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
 
              {/* Right Column: Left empty to allow the background image to naturally shine through on desktop */}
              <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
 
            </div>
 
            {/* Backdrop Aesthetic Subtle Blur Details */}
            <div className="absolute top-[-20%] left-[20%] w-72 h-72 bg-[#3AB03A]/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-[#FF9900]/5 rounded-full filter blur-[120px] pointer-events-none" />
          </section>
        </div>

        {/* SECTION 2: THE STORY SO FAR */}
        <div id="preview-sec-story-so-far" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-5xl mx-auto space-y-16">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Core story in British English */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Context Summary</span>
                  <h2 className="text-3xl font-normal text-[#3AB03A] tracking-tight">
                    The Story So Far
                  </h2>
                  
                  <p className="text-base text-[#51615a] leading-relaxed">
                    Wales does not lack commitment or activity. Across the region, brilliant charities, schools, and employers are working hard to support young people. However, the system is fragmented. Young people are slipping through the gaps during cold, unclear transitions between school, training, and work.
                  </p>
                  <p className="text-base text-[#51615a] leading-relaxed">
                    Our goal is not to create a new, parallel system. We want to act as a practical bridge—strengthening coordination, listening to youth insight, and connecting existing work to national priorities.
                  </p>
                </div>
 
                {/* Right Column: Key Metrics in Minimalist Spacious Layout */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-[#faf9f6]/85 border border-[#969696]/30 p-7 rounded relative">
                    <span className="text-[10px] font-semibold text-[#FF9900] uppercase tracking-wider block mb-2">Coalition Metric</span>
                    <p className="text-4xl sm:text-5xl font-light text-[#2EBBB8] tracking-tight leading-none">
                      10 to 40+
                    </p>
                    <p className="text-xs text-[#51615a] leading-relaxed mt-3">
                      Partner Organisations Joined to pool combined resources.
                    </p>
                  </div>
 
                  <div className="bg-[#faf9f6]/85 border border-[#969696]/30 p-7 rounded relative">
                    <span className="text-[10px] font-semibold text-[#FF9900] uppercase tracking-wider block mb-2">Systems Audit Map</span>
                    <p className="text-4xl sm:text-5xl font-light text-[#2EBBB8] tracking-tight leading-none">
                      171 Pathway
                    </p>
                    <p className="text-xs text-[#51615a] leading-relaxed mt-3">
                      Touchpoints Mapped Across the Learner Journey in regional Wales.
                    </p>
                  </div>
                </div>
 
              </div>
 
              {/* Participating Partners Logos Section */}
              <PartnerLogos />
 
              {/* 5-Step Progress Timeline */}
              <div className="space-y-8 border-t border-[#969696]/30 pt-12">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#FF9900]">Methodology & Framework</span>
                  <h3 className="text-2xl font-normal text-[#3AB03A] tracking-tight">Our 5-Step Progress</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="space-y-3 relative">
                    <div className="h-16 flex items-end">
                      <span className="text-xl font-mono font-semibold text-[#FF9900] leading-none">01</span>
                    </div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3AB03A]">Validated context</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Used desktop research and a high-level open data scan to ground the work in the Welsh reality.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="h-16 flex items-end">
                      <span className="text-2xl font-mono font-semibold text-[#2EBBB8] leading-none">02</span>
                    </div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3AB03A]">Mapped journey</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">From home and community through school, post-16, entry to work, in-work progression and re-entry.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="h-16 flex items-end">
                      <span className="text-3xl font-mono font-semibold text-[#3AB03A] leading-none">03</span>
                    </div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3AB03A]">Ecosystem map</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Started to show who is doing what, where and for whom, so we can amplify rather than duplicate.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="h-16 flex items-end">
                      <span className="text-4xl font-mono font-semibold text-[#969696] leading-none">04</span>
                    </div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3AB03A]">Tested hypotheses</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Brought employers, educators and community partners together to challenge what we thought we were seeing.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="h-16 flex items-end">
                      <span className="text-5xl font-mono font-semibold text-[#FF9900] leading-none">05</span>
                    </div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3AB03A]">Shaped actions</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Began identifying where collective effort could add value quickly, and what we should not pursue.</p>
                  </div>
                </div>
              </div>
 
              {/* Interactive 5-stage Learner Journey Flow block inside our Ecosystem in Friction */}
              <LearnerJourneyFlow />

              {/* Key Takeaway Callout */}
              <div className="bg-[#faf9f6]/95 border-l-4 border-[#3AB03A] p-8 space-y-2 rounded-r">
                <span className="text-[10px] uppercase tracking-widest text-[#FF9900] font-bold">Key Takeaway</span>
                <p className="text-sm text-[#3AB03A] font-normal leading-relaxed italic">
                  "What matters most here is sequencing: understand the system first, then refine the opportunities with stakeholders, then move toward pilots that are credible and collaborative."
                </p>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 3: THE WHITE PAPER PRIORITIES */}
        <div id="preview-sec-whitepaper" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#969696]/30">
            <div className="max-w-5xl mx-auto space-y-16">
              
              {/* Introduction & Purpose Summary with Three Aims */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left font-sans">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Strategic Document</span>
                  <h2 className="text-3xl font-normal text-[#3AB03A] tracking-tight">Introduction & Purpose</h2>
                  <p className="text-base text-[#51615a] leading-relaxed">
                    This document brings together the story of our Wales collaboration so far into a shared narrative for government, funders, and delivery partners. It acts as a foundational, neutral base that can be lightly tailored for different audiences while keeping the same core evidence and strategic logic.
                  </p>
                  <p className="text-base text-[#51615a] leading-relaxed">
                    This is not a final blueprint or an attempt to build a new system alongside existing Welsh structures. Instead, it is an enabling paper designed to better connect existing activity and intent. Our goal is systemic change achieved through practical, staged steps: build the shared picture, strengthen coordination, validate with youth voices, test ideas locally, and use those lessons to shape future policy and investment.
                  </p>
                </div>
 
                <div className="lg:col-span-5 bg-white border border-[#969696]/30 p-8 space-y-6 rounded shadow-sm">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#3AB03A] border-b border-[#969696]/30 pb-2">Three Simple Aims:</h3>
                  <ul className="space-y-4 text-xs text-[#51615a]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-1.5 shrink-0"></span>
                      <span>Make the case for a place-based response to social mobility in Wales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-1.5 shrink-0"></span>
                      <span>Highlight what Phase 1 revealed about fragmented systems, weak handoffs, and hidden pathways.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-1.5 shrink-0"></span>
                      <span>Propose a practical, collaborative, and proportionate next stage.</span>
                    </li>
                  </ul>
                </div>
              </div>
 
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Policy Focus</span>
                  <h3 className="text-2.5xl font-normal text-[#3AB03A] tracking-tight">The 6 Strategic Priorities</h3>
                </div>
 
                {/* Simple HTML table-like Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {STRATEGIC_PRIORITIES.map((p, idx) => (
                    <div key={idx} className="bg-white border border-[#969696]/30 p-6 space-y-3 rounded hover:border-[#FF9900]/60 transition-colors shadow-sm">
                      <span className="text-xs font-mono font-semibold text-[#FF9900] tracking-wider block">Priority {p.num}</span>
                      <h4 className="font-semibold text-[#3AB03A] text-xs uppercase tracking-wider leading-none">{p.title}</h4>
                      <p className="text-xs text-[#51615a] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Centralised CTA Button */}
              <div className="text-center pt-6">
                <a
                  href="/whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3AB03A] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#FF9900]" />
                  <span>Read the Full White Paper</span>
                </a>
              </div>
 
            </div>
          </section>
        </div>
 
        {/* SECTION 4: WHY THIS MATTERS BEYOND ANY ONE ORGANISATION */}
        <div id="preview-sec-why-this-matters" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Cased Title & Stakeholder Bullet Points */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Systemic Lens</span>
                <h2 className="text-3xl font-normal text-[#3AB03A] tracking-tight leading-tight">
                  Why This Matters Beyond Any One Organisation
                </h2>
                
                <p className="text-base text-[#51615a] leading-relaxed">
                  Refining social mobility pathways requires collective action. No single entity owns the entire journey; true impact is achieved when we coordinate our insights and actions.
                </p>
                
                <div className="space-y-4 pt-6 border-t border-[#969696]/20">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#51615a] border-b border-[#969696]/20 pb-2">
                    What Stakeholders Can Expect in Return
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A] mt-2 shrink-0"></span>
                      <p className="text-xs text-[#51615a] leading-relaxed">
                        Earlier sight of where the work is heading and which ideas are gaining traction.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2EBBB8] mt-2 shrink-0"></span>
                      <p className="text-xs text-[#51615a] leading-relaxed">
                        A chance to influence what becomes pilot-ready, before decisions are set elsewhere.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-2 shrink-0"></span>
                      <p className="text-xs text-[#51615a] leading-relaxed">
                        Better visibility of adjacent partners, programmes and gaps across the Welsh ecosystem.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#969696] mt-2 shrink-0"></span>
                      <p className="text-xs text-[#51615a] leading-relaxed">
                        Stronger relationships across employers, educators, youth organisations, civic partners and funders.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A] mt-2 shrink-0"></span>
                      <p className="text-xs text-[#51615a] leading-relaxed">
                        A clearer shared narrative to support future commissioning, funding or policy conversations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Reconstructed Infographic Diagram matching the uploaded blueprint */}
              <div className="lg:col-span-7 w-full flex items-center justify-center">
                <div className="w-full bg-[#faf9f6]/40 border border-[#969696]/20 p-6 rounded-3xl shadow-sm">
                  
                  {/* Desktop/Tablet version: Perfect replica of the infographic layout */}
                  <div className="hidden md:block relative w-full h-[520px] mx-auto select-none overflow-visible">
                    
                    {/* Central 4-Quadrant Circle Graphic */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] z-10">
                      <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow hover:scale-[1.01] transition-transform duration-300 overflow-visible">
                        {/* Top Left Quadrant - Teal */}
                        <path
                          d="M 200 200 L 200 20 A 180 180 0 0 0 20 200 Z"
                          fill="#daf5f3"
                          stroke="#2EBBB8"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[12px] tracking-wider" textAnchor="middle">
                          <tspan x="110" y="115">REDUCE</tspan>
                          <tspan x="110" y="133">DUPLICATION</tspan>
                        </text>

                        {/* Top Right Quadrant - Orange */}
                        <path
                          d="M 200 200 L 200 20 A 180 180 0 0 1 380 200 Z"
                          fill="#feedd5"
                          stroke="#FF9900"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[12px] tracking-wider" textAnchor="middle">
                          <tspan x="290" y="115">STRENGTHEN</tspan>
                          <tspan x="290" y="133">PATHWAYS</tspan>
                        </text>

                        {/* Bottom Left Quadrant - Green */}
                        <path
                          d="M 200 200 L 200 380 A 180 180 0 0 1 20 200 Z"
                          fill="#d2f0d5"
                          stroke="#3AB03A"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[11px] tracking-wider" textAnchor="middle">
                          <tspan x="110" y="260">GROUND</tspan>
                          <tspan x="110" y="278">ACTION IN</tspan>
                          <tspan x="110" y="296">REALITY</tspan>
                        </text>

                        {/* Bottom Right Quadrant - Grey */}
                        <path
                          d="M 200 200 L 200 380 A 180 180 0 0 0 380 200 Z"
                          fill="#e8e8e8"
                          stroke="#969696"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[11px] tracking-wider" textAnchor="middle">
                          <tspan x="290" y="252">BUILD A</tspan>
                          <tspan x="290" y="270">STRONGER</tspan>
                          <tspan x="290" y="288">COLLECTIVE</tspan>
                          <tspan x="290" y="306">CASE</tspan>
                        </text>

                        {/* White dividers on axes exactly matching infographic */}
                        <line x1="20" y1="200" x2="380" y2="200" stroke="#ffffff" strokeWidth="6" />
                        <line x1="200" y1="20" x2="200" y2="380" stroke="#ffffff" strokeWidth="6" />
                      </svg>
                    </div>

                    {/* Surrounding Box Callouts wrapping around sectors */}
                    {/* Top Left Callout */}
                    <div className="absolute left-[2%] top-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#2EBBB8] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Make it easier to see what already exists and where alignment is needed.
                      </p>
                    </div>

                    {/* Top Right Callout */}
                    <div className="absolute right-[2%] top-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#FF9900] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Improve how young people move between systems, not just what is available within them.
                      </p>
                    </div>

                    {/* Bottom Left Callout */}
                    <div className="absolute left-[2%] bottom-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#3AB03A] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Test future ideas with professional insight and lived experience before scaling.
                      </p>
                    </div>

                    {/* Bottom Right Callout */}
                    <div className="absolute right-[2%] bottom-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#969696] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Create more credible evidence for government, funders and place-based investors.
                      </p>
                    </div>

                  </div>

                  {/* Mobile/Tablet version: Elegant vertical split that remains perfectly legible & visually coherent */}
                  <div className="block md:hidden space-y-6">
                    <div className="flex justify-center">
                      <svg viewBox="0 0 400 400" className="w-[240px] h-[240px] filter drop-shadow select-none">
                        {/* Top Left Quadrant - Teal */}
                        <path
                          d="M 200 200 L 200 20 A 180 180 0 0 0 20 200 Z"
                          fill="#daf5f3"
                          stroke="#2EBBB8"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[12px] tracking-wider" textAnchor="middle">
                          <tspan x="110" y="115">REDUCE</tspan>
                          <tspan x="110" y="133">DUPLICATION</tspan>
                        </text>

                        {/* Top Right Quadrant - Orange */}
                        <path
                          d="M 200 200 L 200 20 A 180 180 0 0 1 380 200 Z"
                          fill="#feedd5"
                          stroke="#FF9900"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[12px] tracking-wider" textAnchor="middle">
                          <tspan x="290" y="115">STRENGTHEN</tspan>
                          <tspan x="290" y="133">PATHWAYS</tspan>
                        </text>

                        {/* Bottom Left Quadrant - Green */}
                        <path
                          d="M 200 200 L 200 380 A 180 180 0 0 1 20 200 Z"
                          fill="#d2f0d5"
                          stroke="#3AB03A"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[11px] tracking-wider" textAnchor="middle">
                          <tspan x="110" y="260">GROUND</tspan>
                          <tspan x="110" y="278">ACTION IN</tspan>
                          <tspan x="110" y="296">REALITY</tspan>
                        </text>

                        {/* Bottom Right Quadrant - Grey */}
                        <path
                          d="M 200 200 L 200 380 A 180 180 0 0 0 380 200 Z"
                          fill="#e8e8e8"
                          stroke="#969696"
                          strokeWidth="4"
                        />
                        <text className="fill-[#1A2521] font-sans font-extrabold text-[11px] tracking-wider" textAnchor="middle">
                          <tspan x="290" y="252">BUILD A</tspan>
                          <tspan x="290" y="270">STRONGER</tspan>
                          <tspan x="290" y="288">COLLECTIVE</tspan>
                          <tspan x="290" y="306">CASE</tspan>
                        </text>

                        {/* White dividers on axes */}
                        <line x1="20" y1="200" x2="380" y2="200" stroke="#ffffff" strokeWidth="5" />
                        <line x1="200" y1="20" x2="200" y2="380" stroke="#ffffff" strokeWidth="5" />
                      </svg>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {/* Top-Left Box Mobile */}
                      <div className="bg-white border-l-4 border-[#2EBBB8] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#2EBBB8] uppercase tracking-wider block mb-1">01. Reduce Duplication</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Make it easier to see what already exists and where alignment is needed.
                        </p>
                      </div>

                      {/* Top-Right Box Mobile */}
                      <div className="bg-white border-l-4 border-[#FF9900] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#FF9900] uppercase tracking-wider block mb-1">02. Strengthen Pathways</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Improve how young people move between systems, not just what is available within them.
                        </p>
                      </div>

                      {/* Bottom-Left Box Mobile */}
                      <div className="bg-white border-l-4 border-[#3AB03A] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#3AB03A] uppercase tracking-wider block mb-1">03. Ground Action</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Test future ideas with professional insight and lived experience before scaling.
                        </p>
                      </div>

                      {/* Bottom-Right Box Mobile */}
                      <div className="bg-white border-l-4 border-[#969696] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#969696] uppercase tracking-wider block mb-1">04. Build A Stronger Case</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Create more credible evidence for government, funders and place-based investors.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 5: GET INVOLVED (THE ULTRACLEAN FORM) */}
        <div id="preview-sec-get-involved" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#969696]/30">
            <div className="max-w-xl mx-auto space-y-8">
              
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Immediate Collaboration</span>
                <h2 className="text-3xl font-normal text-[#3AB03A] tracking-tight">Get Involved</h2>
                <p className="text-sm text-[#51615a] leading-relaxed">
                  If you are an employer, funder, charity leader, policymaker, or community partner, we need your help to build practical pilots.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white border border-[#969696]/30 p-8 rounded text-center space-y-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#3AB03A]/10 text-[#3AB03A] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#3AB03A] uppercase tracking-wider text-xs">Message Prepared</h3>
                  <p className="text-xs text-[#51615a] leading-relaxed">
                    Thank you, <strong>{contactFormName || "Partner"}</strong>. Your enquiry details as an active <strong>{contactFormWho}</strong> have been drafted to <strong>nina.slingsby@oaha.uk</strong>.
                  </p>
                  <p className="text-xs text-[#51615a] leading-relaxed">
                    If your email client didn't launch automatically with the message pre-filled, you can trigger it manually below or send a standard message.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={() => {
                        const subject = encodeURIComponent(`OAHA Wales Collaboration Inquiry (${contactFormWho})`);
                        const body = encodeURIComponent(
                          `Hello Nina,\n\n` +
                          `I would like to get involved in the Wales Progress/Social Mobility initiative.\n\n` +
                          `Name: ${contactFormName}\n` +
                          `Role: ${contactFormWho}\n` +
                          `My Email: ${contactFormEmail}\n\n` +
                          `Message:\n${contactFormMessage}\n\n` +
                          `Sent via Wales Progress Update portal.`
                        );
                        window.location.href = `mailto:nina.slingsby@oaha.uk?subject=${subject}&body=${body}`;
                      }}
                      className="px-4 py-2.5 bg-[#3AB03A] text-white text-[10px] uppercase font-bold tracking-wider hover:opacity-90 transition-all cursor-pointer"
                    >
                      Open Email Client Again
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2.5 border border-[#3AB03A] text-[#3AB03A] text-[10px] uppercase font-bold tracking-wider hover:bg-[#faf9f6] transition-all cursor-pointer"
                    >
                      Submit Another Response
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 bg-white border border-[#969696]/30 p-8 rounded shadow-sm">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#3AB03A] font-semibold select-none">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactFormName}
                      onChange={(e) => setContactFormName(e.target.value)}
                      className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#3AB03A]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#3AB03A] font-semibold select-none">Who You Are</label>
                    <select
                      value={contactFormWho}
                      onChange={(e) => setContactFormWho(e.target.value as any)}
                      className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#3AB03A]"
                    >
                      <option value="Employer">Employer</option>
                      <option value="Charity Leader">Charity Leader</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#3AB03A] font-semibold select-none">Email / Contact</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organisation.org.uk"
                      value={contactFormEmail}
                      onChange={(e) => setContactFormEmail(e.target.value)}
                      className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#3AB03A]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#3AB03A] font-semibold select-none">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can you support or coordinate with our regional transition pilots?"
                      value={contactFormMessage}
                      onChange={(e) => setContactFormMessage(e.target.value)}
                      className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#3AB03A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3AB03A] text-white py-3.5 text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-[#FF9900]" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </section>
        </div>

        {/* SECTION 6: ULTRA-MINIMAL FOOTNOTE */}
        <div id="preview-sec-footnote" className="relative">
          <footer className="bg-[#faf9f6]/95 py-16 px-6 border-t border-[#969696]/30">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-xs text-[#51615a] leading-relaxed max-w-lg mx-auto">
                This microsite is a simple progress space for OAHA. Return to our main site at{" "}
                <a
                  href="https://oaha.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3AB03A] font-semibold underline hover:text-[#FF9900] transition-colors"
                >
                  oaha.uk
                </a>{" "}
                or connect with us on LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/oahasocialsustainability/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3AB03A] font-semibold underline hover:text-[#FF9900] transition-colors"
                >
                  LinkedIn
                </a>.
              </p>
              <div className="w-8 h-[1px] bg-[#969696]/35 mx-auto"></div>
              <div className="flex justify-center py-1">
                <OahaLogo size={36} className="opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[10px] text-[#818e87] uppercase tracking-widest">
                &copy; 2026 OAHA UK. Operational Update Initiative.
              </p>
            </div>
          </footer>
        </div>

      </main>

    </div>
  );
}
