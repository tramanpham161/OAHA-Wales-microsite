import React, { useState, useEffect } from "react";
import {
  BookOpen,
  ArrowRight,
  Download,
  Users,
  Check,
  Copy,
  ExternalLink,
  Code,
  Eye,
  Linkedin,
  Calendar,
  Layers,
  Sparkles,
  Info,
  ChevronRight,
  Send,
  ArrowDown
} from "lucide-react";

// --- MICROSITE SECTION COPIES & RESEARCH DATA IN BRITISH ENGLISH ---
interface SectionModel {
  id: string;
  name: string;
  layoutGuidance: string;
  onScreenCopy: {
    title: string;
    sub?: string;
    body: string;
    items?: string[];
    actionLabel?: string;
    linkUrl?: string;
  };
  htmlMarkup: string;
}

const MICROSITE_SECTIONS: SectionModel[] = [
  {
    id: "hero",
    name: "1. Hero Section",
    layoutGuidance: "Centred spacious layout with a soft warming sand background (#faf9f6), deep forest text (#1F362B) for brand authority, and crisp system sans-serif typography. Keep primary interactions side-by-side with crisp white margins.",
    onScreenCopy: {
      title: "Accelerating Social Mobility in Wales",
      sub: "Phase 1 Progress Update & White Paper",
      body: "Welcome to OAHA’s Wales progress portal. Explore real-world discoveries from our collaborative Phase 1 study, mapping learner journeys, and removing system disconnects to support young people.",
      actionLabel: "Read the White Paper",
      linkUrl: "https://your-whitepaper-link-here.com"
    },
    htmlMarkup: `<section class="relative py-24 text-center bg-[#faf9f6] border-b border-[#e5e3dc] px-6">
  <div class="max-w-4xl mx-auto space-y-8">
    <span class="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-[#1F362B] bg-[#1F362B]/10 rounded-full uppercase">
      Wales Progress Portal
    </span>
    <h1 class="text-4xl sm:text-6xl font-normal tracking-tight text-[#1F362B] leading-[1.1] font-sans">
      Accelerating Social <br class="hidden sm:inline" /> Mobility in Wales
    </h1>
    <p class="text-xs uppercase tracking-widest text-[#51615a] font-semibold">
      Phase 1 Progress Update & White Paper
    </p>
    <p class="text-base sm:text-lg text-[#51615a] max-w-xl mx-auto leading-relaxed">
      Welcome to OAHA’s Wales progress portal. Explore real-world discoveries from our collaborative Phase 1 study, mapping learner journeys, and removing system disconnects to support young people.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
      <a href="https://your-whitepaper-link-here.com" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all text-center">
        Read the White Paper
      </a>
      <a href="#get-involved" class="w-full sm:w-auto px-8 py-3.5 border-2 border-[#1F362B] text-[#1F362B] text-xs font-semibold uppercase tracking-widest hover:bg-[#1F362B]/5 transition-all text-center">
        Get Involved
      </a>
    </div>
  </div>
</section>`
  },
  {
    id: "story-so-far",
    name: "2. The Story So Far",
    layoutGuidance: "Two-column grid layout on medium/large screens. Left column presents clean, highly legible body copy detailing the transition handoff problem. Right column highlights the key metrics inside minimalist cards with a soft sand background to capture focus. Includes our 5-Step Progress timeline and highlighted key takeaway callout.",
    onScreenCopy: {
      title: "The Story So Far",
      body: "Wales does not lack commitment or activity. Across the region, brilliant charities, schools, and employers are working hard to support young people. However, the system is fragmented. Young people are slipping through the gaps during cold, unclear transitions between school, training, and work. Our goal is not to create a new, parallel system. We want to act as a practical bridge—strengthening coordination, listening to youth insight, and connecting existing work to national priorities.",
      items: [
        "10 to 40+ Partner Organisations Joined",
        "171 Pathway Touchpoints Mapped Across the Learner Journey",
        "Step 1: Validated the Welsh context - Used desktop research and an open data scan to ground the work in the Welsh reality.",
        "Step 2: Mapped the learner journey - From home & community through post-16 into entry to work & re-entry.",
        "Step 3: Built a first-cut ecosystem map - Showing who is doing what to uncover hidden gaps.",
        "Step 4: Tested early handoff hypotheses - Brought partners together to challenge what we thought we were seeing.",
        "Step 5: Started shaping no-regrets actions - Identifying where collective effort adds value quickly.",
        "Key Takeaway: Sequencing matters. Understand the system first, refine opportunities with stakeholders, then move toward pilots."
      ]
    },
    htmlMarkup: `<section class="py-20 bg-white border-b border-[#e5e3dc] px-6">
  <div class="max-w-6xl mx-auto space-y-16 animate-fade-in">
    <!-- Context & Metrics Row -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-7 space-y-6">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#D48D52]">Introduction & Context</span>
        <h2 class="text-3xl font-normal text-[#1F362B] tracking-tight">
          The Story So Far
        </h2>
        <p class="text-base text-[#51615a] leading-relaxed">
          Wales does not lack commitment or activity. Across the region, brilliant charities, schools, and employers are working hard to support young people. However, the system is fragmented. Young people are slipping through the gaps during cold, unclear transitions between school, training, and work.
        </p>
        <p class="text-base text-[#51615a] leading-relaxed">
          Our goal is not to create a new, parallel system. We want to act as a practical bridge—strengthening coordination, listening to youth insight, and connecting existing work to national priorities.
        </p>
      </div>
      <div class="lg:col-span-5 space-y-4">
        <div class="bg-[#faf9f6]/80 border border-[#e5e3dc] rounded-lg p-7 relative">
          <p class="text-4xl font-light text-[#1F362B] tracking-tight leading-none">
            10 to 40+
          </p>
          <p class="text-xs uppercase tracking-wider text-[#D48D52] font-semibold mt-2">
            Partner Organisations Joined
          </p>
          <p class="text-xs text-[#51615a] leading-relaxed mt-2">
            Pooling insights and resources across traditional regional boundaries.
          </p>
        </div>
        <div class="bg-[#faf9f6]/80 border border-[#e5e3dc] rounded-lg p-7 relative">
          <p class="text-4xl font-light text-[#1F362B] tracking-tight leading-none">
            171 Pathway
          </p>
          <p class="text-xs uppercase tracking-wider text-[#D48D52] font-semibold mt-2">
            Touchpoints Mapped Across the Learner Journey
          </p>
          <p class="text-xs text-[#51615a] leading-relaxed mt-2">
            Conducted regional systems audit mapping school-to-work pathways.
          </p>
        </div>
      </div>
    </div>

    <!-- 5-Step Progress Timeline -->
    <div class="space-y-8 border-t border-[#e5e3dc] pt-12">
      <div class="space-y-2">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#D48D52]">Methodology & Framework</span>
        <h3 class="text-2xl font-normal text-[#1F362B] tracking-tight">Our 5-Step Progress</h3>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div class="space-y-3 relative">
          <div class="text-2.5xl font-mono text-[#D48D52]">01</div>
          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Validated context</h4>
          <p class="text-[11px] text-[#51615a] leading-relaxed">Used desktop research and a high-level open data scan to ground the work in the Welsh reality.</p>
        </div>
        <div class="space-y-3 relative">
          <div class="text-2.5xl font-mono text-[#D48D52]">02</div>
          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Mapped journey</h4>
          <p class="text-[11px] text-[#51615a] leading-relaxed">From home and community through school, post-16, entry to work, in-work progression and re-entry.</p>
        </div>
        <div class="space-y-3 relative">
          <div class="text-2.5xl font-mono text-[#D48D52]">03</div>
          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Ecosystem map</h4>
          <p class="text-[11px] text-[#51615a] leading-relaxed">Started to show who is doing what, where and for whom, so we can amplify rather than duplicate.</p>
        </div>
        <div class="space-y-3 relative">
          <div class="text-2.5xl font-mono text-[#D48D52]">04</div>
          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Tested hypotheses</h4>
          <p class="text-[11px] text-[#51615a] leading-relaxed">Brought employers, educators and community partners together to challenge what we thought we were seeing.</p>
        </div>
        <div class="space-y-3 relative">
          <div class="text-2.5xl font-mono text-[#D48D52]">05</div>
          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Shaped actions</h4>
          <p class="text-[11px] text-[#51615a] leading-relaxed">Began identifying where collective effort could add value quickly, and what we should not pursue.</p>
        </div>
      </div>
    </div>

    <!-- Key Takeaway Beautiful Callout Box -->
    <div class="bg-[#faf9f6] border-l-4 border-[#1F362B] p-8 space-y-2">
      <span class="text-[10px] uppercase tracking-widest text-[#D48D52] font-bold">Key Takeaway</span>
      <p class="text-sm text-[#1F362B] font-normal leading-relaxed italic">
        "What matters most here is sequencing: understand the system first, then refine the opportunities with stakeholders, then move toward pilots that are credible and collaborative."
      </p>
    </div>
  </div>
</section>`
  },
  {
    id: "whitepaper",
    name: "3. The White Paper",
    layoutGuidance: "Rich, clean grid layout. Centered intro layout outlining the 3 aims in standard typographic cards, and 6 priorities formatted inside a custom HTML simple grid or text table layout, preventing visual clutter.",
    onScreenCopy: {
      title: "Introduction & Purpose",
      body: "This document brings together the story of our Wales collaboration so far into a shared narrative for government, funders, and delivery partners. It acts as a foundational, neutral base that can be lightly tailored for different audiences while keeping the same core evidence and strategic logic. Our goal is systemic change achieved through practical, staged steps: build the shared picture, strengthen coordination, validate with youth voices, test ideas locally, and use those lessons to shape future policy and investment.",
      items: [
        "Aim: Make the case for a place-based response to social mobility in Wales.",
        "Aim: Highlight what Phase 1 revealed about fragmented systems, weak handoffs, and hidden pathways.",
        "Aim: Propose a practical, collaborative, and proportionate next stage.",
        "Priority 01: Regional Pilot - Cardiff & South East Wales Metro hub focus.",
        "Priority 02: Stronger Transitions - Improve school-to-work & re-entry points.",
        "Priority 03: Youth-Led Validation - Direct verification prior to regional pilots.",
        "Priority 04: Light Backbone Function - Maintain active coordination without bureaucracy.",
        "Priority 05: Shared Roadmap - Translate key findings for policy & investment.",
        "Priority 06: Shared Ecosystem Map - Active, ongoing mapping to uncover gaps."
      ],
      actionLabel: "Read the Full White Paper",
      linkUrl: "https://your-whitepaper-link-here.com"
    },
    htmlMarkup: `<section class="py-20 bg-[#faf9f6]/40 border-b border-[#e5e3dc] px-6">
  <div class="max-w-5xl mx-auto space-y-16 animate-fade-in">
    <!-- Introduction & Purpose Segment -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-7 space-y-6">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#D48D52]">Strategic Document</span>
        <h2 class="text-3xl font-normal text-[#1F362B] tracking-tight">Introduction & Purpose</h2>
        <p class="text-base text-[#51615a] leading-relaxed">
          This document brings together the story of our Wales collaboration so far into a shared narrative for government, funders, and delivery partners. It acts as a foundational, neutral base that can be lightly tailored for different audiences while keeping the same core evidence and strategic logic.
        </p>
        <p class="text-base text-[#51615a] leading-relaxed">
          This is not a final blueprint or an attempt to build a new system alongside existing Welsh structures. Instead, it is an enabling paper designed to better connect existing activity and intent. Our goal is systemic change achieved through practical, staged steps: build the shared picture, strengthen coordination, validate with youth voices, test ideas locally, and use those lessons to shape future policy and investment.
        </p>
      </div>

      <div class="lg:col-span-5 bg-white border border-[#e5e3dc] p-8 space-y-6 rounded-lg">
        <h3 class="text-xs uppercase tracking-wider font-bold text-[#1F362B] border-b border-[#e5e3dc] pb-2">Three Simple Aims:</h3>
        <ul class="space-y-4 text-xs text-[#51615a]">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
            <span>Make the case for a place-based response to social mobility in Wales.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
            <span>Highlight what Phase 1 revealed about fragmented systems, weak handoffs, and hidden pathways.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
            <span>Propose a practical, collaborative, and proportionate next stage.</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- The 6 priorities table / grid layout -->
    <div class="space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#D48D52]">6 Core Priorities</span>
        <h3 class="text-2xl font-normal text-[#1F362B] tracking-tight">The 6 Strategic Priorities</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors">
          <span class="text-xs font-mono text-[#D48D52]">Priority 01</span>
          <h4 class="font-semibold text-[#1F362B] text-sm uppercase tracking-wider">Regional Pilot</h4>
          <p class="text-xs text-[#51615a] leading-relaxed">Use Cardiff and the South East Wales Metro as an operational hub to test local realities.</p>
        </div>

        <div class="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors">
          <span class="text-xs font-mono text-[#D48D52]">Priority 02</span>
          <h4 class="font-semibold text-[#1F362B] text-sm uppercase tracking-wider">Stronger Transitions</h4>
          <p class="text-xs text-[#51615a] leading-relaxed">Improve school-to-work and re-entry points instead of adding parallel activity.</p>
        </div>

        <div class="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors">
          <span class="text-xs font-mono text-[#D48D52]">Priority 03</span>
          <h4 class="font-semibold text-[#1F362B] text-sm uppercase tracking-wider">Youth-Led Validation</h4>
          <p class="text-xs text-[#51615a] leading-relaxed">Test findings directly with young people before designing pilots.</p>
        </div>

        <div class="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors">
          <span class="text-xs font-mono text-[#D48D52]">Priority 04</span>
          <h4 class="font-semibold text-[#1F362B] text-sm uppercase tracking-wider">Light Backbone Function</h4>
          <p class="text-xs text-[#51615a] leading-relaxed">Maintain momentum and coordination without creating heavy bureaucracy.</p>
        </div>

        <div class="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors">
          <span class="text-xs font-mono text-[#D48D52]">Priority 05</span>
          <h4 class="font-semibold text-[#1F362B] text-sm uppercase tracking-wider">Shared Roadmap</h4>
          <p class="text-xs text-[#51615a] leading-relaxed">Translate evidence into clear propositions for investment and policy.</p>
        </div>

        <div class="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors">
          <span class="text-xs font-mono text-[#D48D52]">Priority 06</span>
          <h4 class="font-semibold text-[#1F362B] text-sm uppercase tracking-wider">Shared Ecosystem Map</h4>
          <p class="text-xs text-[#51615a] leading-relaxed">Keep mapping who is doing what to uncover hidden gaps.</p>
        </div>
      </div>
    </div>

    <!-- Read Whitepaper CTA -->
    <div class="text-center pt-4">
      <a href="https://your-whitepaper-link-here.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all">
        <span>Read the Full White Paper</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </a>
    </div>
  </div>
</section>`
  },
  {
    id: "workshop",
    name: "4. Upcoming Workshop",
    layoutGuidance: "High-contrast action box calling regional focus to 27 May. Use spacious design and clear call to action registers.",
    onScreenCopy: {
      title: "Upcoming Workshop",
      body: "As we finalise Phase 1, we are holding a youth-led workshop on 27 May to test these findings directly with young people. Your insight will shape Phase 2.",
      actionLabel: "Register for the Workshop on Luma",
      linkUrl: "https://luma.com/jhbmor51"
    },
    htmlMarkup: `<section class="py-20 bg-white border-b border-[#e5e3dc] px-6">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <span class="inline-block px-3 py-1 bg-[#D48D52] text-white text-[10px] font-semibold uppercase tracking-widest">
      Active Event • 27 May
    </span>
    <h2 class="text-3xl font-normal text-[#1F362B] tracking-tight">Upcoming Workshop</h2>
    <p class="text-base text-[#51615a] max-w-xl mx-auto leading-relaxed">
      As we finalise Phase 1, we are holding a youth-led workshop on 27 May to test these findings directly with young people. Your insight will shape Phase 2.
    </p>
    <div class="pt-4">
      <a href="https://luma.com/jhbmor51" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all">
        <span>Register for the Workshop on Luma</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </a>
    </div>
  </div>
</section>`
  },
  {
    id: "get-involved",
    name: "5. Get Involved",
    layoutGuidance: "Minimalist action form layout framing immediate registrations inputs. Simple text description side-by-side with full-screen custom, clean input boxes.",
    onScreenCopy: {
      title: "Get Involved",
      body: "If you are an employer, funder, charity leader, policymaker, or community partner, we need your help to build practical pilots."
    },
    htmlMarkup: `<section id="get-involved" class="py-20 bg-[#faf9f6]/40 border-b border-[#e5e3dc] px-6">
  <div class="max-w-xl mx-auto space-y-8">
    <div class="text-center space-y-2">
      <span class="text-xs font-semibold uppercase tracking-widest text-[#D48D52]">Collaborate</span>
      <h2 class="text-3xl font-normal text-[#1F362B] tracking-tight">Get Involved</h2>
      <p class="text-sm text-[#51615a]">
        If you are an employer, funder, charity leader, policymaker, or community partner, we need your help to build practical pilots.
      </p>
    </div>

    <form class="space-y-4 bg-white border border-[#e5e3dc] p-8 rounded-lg">
      <div class="space-y-1">
        <label class="block text-xs uppercase tracking-wider text-[#1F362B] font-semibold">Full Name</label>
        <input type="text" required class="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]" />
      </div>

      <div class="space-y-1">
        <label class="block text-xs uppercase tracking-wider text-[#1F362B] font-semibold">Who You Are</label>
        <select class="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B] appearance-none">
          <option value="Employer">Employer</option>
          <option value="Charity Leader">Charity Leader</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="space-y-1">
        <label class="block text-xs uppercase tracking-wider text-[#1F362B] font-semibold">Email / Contact</label>
        <input type="email" required class="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]" />
      </div>

      <div class="space-y-1">
        <label class="block text-xs uppercase tracking-wider text-[#1F362B] font-semibold">Message</label>
        <textarea required rows="4" class="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B] resize-none"></textarea>
      </div>

      <button type="submit" class="w-full bg-[#1F362B] text-white py-3 text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all">
        Send Message
      </button>
    </form>
  </div>
</section>`
  },
  {
    id: "footnote",
    name: "6. Footnote Section",
    layoutGuidance: "Ultra-minimal simple progress footnote linking back to the official oaha.uk channels and UK certified corporate channels.",
    onScreenCopy: {
      title: "Footnote",
      body: "This microsite is a simple progress space for OAHA. Return to our main site at oaha.uk or connect with us on LinkedIn: https://www.linkedin.com/company/oahasocialsustainability/"
    },
    htmlMarkup: `<footer class="bg-[#faf9f6]/95 py-16 px-6 border-t border-[#e5e3dc]">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <p class="text-xs text-[#51615a] leading-relaxed max-w-lg mx-auto">
      This microsite is a simple progress space for OAHA. Return to our main site at 
      <a href="https://oaha.uk" target="_blank" rel="noopener noreferrer" class="text-[#1F362B] font-semibold underline hover:text-[#D48D52]">oaha.uk</a> 
      or connect with us on LinkedIn: 
      <a href="https://www.linkedin.com/company/oahasocialsustainability/" target="_blank" rel="noopener noreferrer" class="text-[#1F362B] font-semibold underline hover:text-[#D48D52]">LinkedIn</a>.
    </p>
    <div class="w-8 h-[1px] bg-[#e5e3dc] mx-auto"></div>
    <p class="text-[9px] text-[#818e87] uppercase tracking-widest">&copy; 2026 OAHA UK. Operational Update Initiative.</p>
  </div>
</footer>`
  }
];

export default function App() {
  // Navigation modes
  const [studioMode, setStudioMode] = useState<"both" | "preview" | "studio">("both");
  const [selectedSection, setSelectedSection] = useState<string>("hero");

  // Interaction logs / copy state
  const [copiedSectionCode, setCopiedSectionCode] = useState<boolean>(false);
  
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

  const handleCopySectionCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSectionCode(true);
    setTimeout(() => {
      setCopiedSectionCode(false);
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setContactFormName("");
    setContactFormWho("Employer");
    setContactFormEmail("");
    setContactFormMessage("");
    setIsSubmitted(false);
  };

  const currentSectionData = MICROSITE_SECTIONS.find(s => s.id === selectedSection) || MICROSITE_SECTIONS[0];

  return (
    <div className="min-h-screen bg-[#faf9f6]/90 text-[#1a2521] selection:bg-[#D48D52]/15 selection:text-[#1F362B] flex flex-col font-sans">
      
      {/* Upper Control Bar: Switch between the live microsite and the UI Copywriting Deck */}
      <div className="bg-[#1F362B] text-white border-b border-[#0f1b15] px-4 py-3 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D48D52] animate-pulse"></span>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold tracking-tight text-xs uppercase tracking-widest text-[#faf9f6]">OAHA Wales Study</span>
              <span className="text-[9px] bg-white/10 text-white/80 px-2 py-0.5 tracking-wider uppercase font-mono">Micro Lab v2.0</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#a3b8ae]">Studio Workspace:</span>
            <div className="bg-emerald-950/45 p-1 rounded-md flex items-center gap-1">
              <button
                onClick={() => setStudioMode("both")}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded text-[11px] font-semibold cursor-pointer transition-all ${
                  studioMode === "both" ? "bg-[#D48D52] text-[#1F362B]" : "hover:bg-white/5 text-white/70"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden md:inline ml-1">Split Workspace</span>
              </button>
              <button
                onClick={() => setStudioMode("preview")}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded text-[11px] font-semibold cursor-pointer transition-all ${
                  studioMode === "preview" ? "bg-[#D48D52] text-[#1F362B]" : "hover:bg-white/5 text-white/70"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline ml-1">Live Site Preview</span>
                <span className="inline sm:hidden ml-1">Live</span>
              </button>
              <button
                onClick={() => setStudioMode("studio")}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded text-[11px] font-semibold cursor-pointer transition-all ${
                  studioMode === "studio" ? "bg-[#D48D52] text-[#1F362B]" : "hover:bg-white/5 text-white/70"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span className="hidden sm:inline ml-1">Copywriter Deck Only</span>
                <span className="inline sm:hidden ml-1">Deck</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Layout Wrapper */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* ==========================================================
            LEFT SIDEBAR: THE CO-PILOT DEVELOPER & COPYWRITER STUDIO
            Only visible when studioMode !== "preview"
           ========================================================== */}
        {studioMode !== "preview" && (
          <aside className={`lg:w-[460px] bg-white border-b lg:border-b-0 lg:border-r border-[#e5e3dc] flex flex-col shrink-0 ${
            studioMode === "studio" ? "w-full lg:w-full flex-1" : ""
          }`}>
            {/* Studio Header */}
            <div className="p-6 border-b border-[#e5e3dc] bg-[#faf9f6]/40 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D48D52]" />
                <h2 className="text-[10px] uppercase tracking-widest font-bold text-[#1F362B]">
                  UX / UI Copywriter Inspector
                </h2>
              </div>
              <p className="text-xs text-[#51615a] leading-relaxed">
                Review copy decks in British English, view layout guidelines, and instantly export beautiful HTML layouts for GitHub or production CMS structures.
              </p>
            </div>

            {/* Area Swapper list */}
            <div className="p-4 border-b border-[#e5e3dc] flex gap-1.5 overflow-x-auto select-none">
              {MICROSITE_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setSelectedSection(section.id);
                    // Scroll preview section into view
                    if (studioMode === "both") {
                      const elem = document.getElementById(`preview-sec-${section.id}`);
                      if (elem) {
                        elem.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                    selectedSection === section.id
                      ? "bg-[#1F362B] text-white border-[#1F362B]"
                      : "bg-[#faf9f6]/60 text-[#51615a] border-[#e5e3dc] hover:text-[#1F362B] hover:bg-[#faf9f6]"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>

            {/* Inspector Body Details */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6">
              
              {/* Box 1: Layout Guidance */}
              <div className="bg-[#1F362B]/5 border border-[#1F362B]/10 rounded-lg p-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-[#1F362B] font-bold text-[10px] uppercase tracking-wider">
                  <Info className="w-4 h-4 text-[#D48D52]" />
                  <span>[LAYOUT DESIGN SPECIFICATION]</span>
                </div>
                <p className="text-xs text-[#1F362B] leading-relaxed">
                  {currentSectionData.layoutGuidance}
                </p>
              </div>

              {/* Box 2: British English On-Screen Copy Summary */}
              <div className="bg-amber-50/10 border border-[#d48d52]/15 rounded-lg p-5 space-y-4">
                <div className="flex items-center gap-1.5 text-[#1F362B] font-bold text-[10px] uppercase tracking-wider border-b border-[#e5e3dc] pb-2">
                  <span className="w-2 h-2 rounded-full bg-[#D48D52]"></span>
                  <span>[ON-SCREEN COPY DECK]</span>
                </div>
                
                <div className="space-y-4 text-xs text-[#51615a]">
                  <div>
                    <span className="font-bold text-[#1F362B] uppercase tracking-wide text-[9px] block">Primary Title:</span>
                    <p className="bg-white p-3 rounded border border-[#e5e3dc] mt-1 text-[#1F362B] font-medium">
                      {currentSectionData.onScreenCopy.title}
                    </p>
                  </div>

                  {currentSectionData.onScreenCopy.sub && (
                    <div>
                      <span className="font-bold text-[#1F362B] uppercase tracking-wide text-[9px] block">Secondary Subheading:</span>
                      <p className="bg-white p-3 rounded border border-[#e5e3dc] mt-1">
                        {currentSectionData.onScreenCopy.sub}
                      </p>
                    </div>
                  )}

                  <div>
                    <span className="font-bold text-[#1F362B] uppercase tracking-wide text-[9px] block">On-Screen Text Segment:</span>
                    <p className="bg-white p-3 rounded border border-[#e5e3dc] mt-1 leading-relaxed">
                      {currentSectionData.onScreenCopy.body}
                    </p>
                  </div>

                  {currentSectionData.onScreenCopy.items && (
                    <div>
                      <span className="font-bold text-[#1F362B] uppercase tracking-wide text-[9px] block mb-1">Key Items & Priorities:</span>
                      <ul className="space-y-1.5 bg-white p-3 rounded border border-[#e5e3dc]">
                        {currentSectionData.onScreenCopy.items.map((item, idx) => (
                          <li key={idx} className="leading-relaxed flex gap-2">
                            <span className="text-[#D48D52] font-mono font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentSectionData.onScreenCopy.actionLabel && (
                    <div className="flex items-center justify-between bg-white p-3 rounded border border-[#e5e3dc]">
                      <span className="font-semibold text-[#1F362B]">CTA Text Target:</span>
                      <span className="px-2 py-1 bg-[#1F362B]/10 text-[#1F362B] font-bold text-[10px] rounded uppercase tracking-wider">
                        {currentSectionData.onScreenCopy.actionLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Box 3: Production-Ready HTML & CSS Code Output */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#1F362B] font-bold text-[10px] uppercase tracking-wider">
                    <Code className="w-4 h-4 text-[#D48D52]" />
                    <span>[PRODUCTION-READY CODE]</span>
                  </div>
                  <button
                    onClick={() => handleCopySectionCode(currentSectionData.htmlMarkup)}
                    className="text-[9px] uppercase tracking-widest font-bold text-[#1F362B] hover:text-[#D48D52] flex items-center gap-1 bg-[#faf9f6]/90 py-1 px-2.5 rounded border border-[#e5e3dc] cursor-pointer"
                  >
                    {copiedSectionCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-700" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy HTML</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative">
                  <pre className="text-[11px] font-mono bg-[#1E2522] text-[#e0e7e4] p-4 rounded overflow-x-auto max-h-[300px] leading-relaxed border border-[#3e4a45]">
                    {currentSectionData.htmlMarkup}
                  </pre>
                </div>
              </div>

            </div>

            {/* Side Indicator Footer */}
            <div className="p-4 border-t border-[#e5e3dc] text-[9px] font-mono text-center text-[#818e87] select-none uppercase tracking-widest">
              OAHA UK • Phase 1 Verified British Copy
            </div>
          </aside>
        )}

        {/* ==========================================================
            RIGHT CONTENT AREA: THE BEAUTIFUL LIVE MICROSITE PREVIEW
            Only visible when studioMode !== "studio"
           ========================================================== */}
        {studioMode !== "studio" && (
          <div className="flex-1 bg-[#faf9f6] relative flex flex-col overflow-y-auto">
            
            {/* Minimal Sub-Header within Preview */}
            <div className="border-b border-[#e5e3dc] bg-white py-3 px-6 shrink-0 relative z-20">
              <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-700"></span>
                  <p className="text-[11px] font-mono text-[#51615a]">
                    LIVE PREVIEW: www.oaha.uk/wales-mobility
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#818e87] font-mono hidden sm:inline">2026 Wales Study Portal</span>
                  <a
                    href="https://oaha.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#1F362B] hover:text-[#D48D52] font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Main Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Beautiful Page Wrapper */}
            <div className="flex-1">

              {/* SECTION 1: HERO CONTAINER */}
              <div id="preview-sec-hero" className="relative group/sec">
                {studioMode === "both" && (
                  <div className="absolute top-2 left-6 z-30 flex items-center gap-1 z-10 bg-white/95 py-1 px-3 border border-[#D48D52]/40 shadow-sm text-[9px] font-mono uppercase tracking-widest text-[#1F362B]">
                    <span>1. HERO PREVIEW</span>
                  </div>
                )}
                
                <section className="relative py-24 sm:py-32 px-6 sm:px-12 text-center bg-[#faf9f6] border-b border-[#e5e3dc] overflow-hidden">
                  <div className="max-w-4xl mx-auto relative z-10 space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#1F362B] bg-[#1F362B]/10 rounded-full uppercase mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#D48D52]" />
                      <span>Wales Progress update</span>
                    </span>
                    
                    <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#1F362B] leading-[1.1] font-sans">
                      Accelerating Social <br class="hidden sm:inline" />
                      <span className="text-[#1F362B]">Mobility in Wales</span>
                    </h1>
                    
                    <p className="text-xs uppercase tracking-widest text-[#51615a] font-semibold">
                      Phase 1 Progress Update & White Paper
                    </p>
                    
                    <p className="text-base sm:text-lg text-[#51615a] max-w-xl mx-auto leading-relaxed">
                      Welcome to OAHA’s Wales progress portal. Explore real-world discoveries from our collaborative Phase 1 study, mapping learner journeys, and removing system disconnects to support young people.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                      <a
                        href="https://your-whitepaper-link-here.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-[#D48D52]" />
                        <span>Read the White Paper</span>
                      </a>
                      <button
                        onClick={() => {
                          const elem = document.getElementById("preview-sec-get-involved");
                          if (elem) elem.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full sm:w-auto px-8 py-3.5 border-2 border-[#1F362B] text-[#1F362B] text-xs font-semibold uppercase tracking-widest hover:bg-[#1F362B]/5 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Get Involved</span>
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Backdrop Aesthetic Subtle Blur Details */}
                  <div className="absolute top-[-20%] left-[20%] w-72 h-72 bg-[#1F362B]/5 rounded-full filter blur-[100px] pointer-events-none" />
                  <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-[#D48D52]/5 rounded-full filter blur-[120px] pointer-events-none" />
                </section>
              </div>

              {/* SECTION 2: THE STORY SO FAR */}
              <div id="preview-sec-story-so-far" className="relative group/sec">
                {studioMode === "both" && (
                  <div className="absolute top-2 left-6 z-30 flex items-center gap-1 bg-white/95 py-1 px-3 border border-[#D48D52]/40 shadow-sm text-[9px] font-mono uppercase tracking-widest text-[#1F362B]">
                    <span>2. STORY SO FAR PREVIEW</span>
                  </div>
                )}

                <section className="py-24 px-6 sm:px-12 bg-white border-b border-[#e5e3dc]">
                  <div className="max-w-5xl mx-auto space-y-16">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      
                      {/* Left Column: Core story in British English */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Context Summary</span>
                        <h2 className="text-3xl font-normal text-[#1F362B] tracking-tight">
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
                        <div className="bg-[#faf9f6]/80 border border-[#e5e3dc] p-7 rounded relative">
                          <span className="text-[10px] font-semibold text-[#D48D52] uppercase tracking-wider block mb-2">Coalition Metric</span>
                          <p className="text-4xl sm:text-5xl font-light text-[#1F362B] tracking-tight leading-none">
                            10 to 40+
                          </p>
                          <p className="text-xs text-[#51615a] leading-relaxed mt-3">
                            Partner Organisations Joined to pool combined resources.
                          </p>
                        </div>

                        <div className="bg-[#faf9f6]/80 border border-[#e5e3dc] p-7 rounded relative">
                          <span className="text-[10px] font-semibold text-[#D48D52] uppercase tracking-wider block mb-2">Systems Audit Map</span>
                          <p className="text-4xl sm:text-5xl font-light text-[#1F362B] tracking-tight leading-none">
                            171 Pathway
                          </p>
                          <p className="text-xs text-[#51615a] leading-relaxed mt-3">
                            Touchpoints Mapped Across the Learner Journey in regional Wales.
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* 5-Step Process Timeline */}
                    <div className="space-y-8 border-t border-[#e5e3dc] pt-12">
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#D48D52]">Methodology & Framework</span>
                        <h3 className="text-2xl font-normal text-[#1F362B] tracking-tight">Our 5-Step Progress</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="space-y-3 relative">
                          <div className="text-2.5xl font-mono text-[#D48D52]">01</div>
                          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Validated context</h4>
                          <p className="text-xs text-[#51615a] leading-relaxed">Used desktop research and a high-level open data scan to ground the work in the Welsh reality.</p>
                        </div>
                        <div className="space-y-3 relative">
                          <div className="text-2.5xl font-mono text-[#D48D52]">02</div>
                          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Mapped journey</h4>
                          <p className="text-xs text-[#51615a] leading-relaxed">From home and community through school, post-16, entry to work, in-work progression and re-entry.</p>
                        </div>
                        <div className="space-y-3 relative">
                          <div className="text-2.5xl font-mono text-[#D48D52]">03</div>
                          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Ecosystem map</h4>
                          <p className="text-xs text-[#51615a] leading-relaxed">Started to show who is doing what, where and for whom, so we can amplify rather than duplicate.</p>
                        </div>
                        <div className="space-y-3 relative">
                          <div className="text-2.5xl font-mono text-[#D48D52]">04</div>
                          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Tested hypotheses</h4>
                          <p className="text-xs text-[#51615a] leading-relaxed">Brought employers, educators and community partners together to challenge what we thought we were seeing.</p>
                        </div>
                        <div className="space-y-3 relative">
                          <div className="text-2.5xl font-mono text-[#D48D52]">05</div>
                          <h4 class="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Shaped actions</h4>
                          <p className="text-xs text-[#51615a] leading-relaxed">Began identifying where collective effort could add value quickly, and what we should not pursue.</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Takeaway Callout */}
                    <div className="bg-[#faf9f6]/90 border-l-4 border-[#1F362B] p-8 space-y-2 rounded-r">
                      <span className="text-[10px] uppercase tracking-widest text-[#D48D52] font-bold">Key Takeaway</span>
                      <p className="text-sm text-[#1F362B] font-normal leading-relaxed italic">
                        "What matters most here is sequencing: understand the system first, then refine the opportunities with stakeholders, then move toward pilots that are credible and collaborative."
                      </p>
                    </div>

                  </div>
                </section>
              </div>

              {/* SECTION 3: THE WHITE PAPER PRIORITIES */}
              <div id="preview-sec-whitepaper" className="relative group/sec">
                {studioMode === "both" && (
                  <div className="absolute top-2 left-6 z-30 flex items-center gap-1 bg-white/95 py-1 px-3 border border-[#D48D52]/40 shadow-sm text-[9px] font-mono uppercase tracking-widest text-[#1F362B]">
                    <span>3. WHITE PAPER PREVIEW</span>
                  </div>
                )}

                <section className="py-24 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#e5e3dc]">
                  <div className="max-w-5xl mx-auto space-y-16">
                    
                    {/* Introduction & Purpose Summary with Three Aims */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left font-sans">
                      <div className="lg:col-span-7 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Strategic Document</span>
                        <h2 className="text-3xl font-normal text-[#1F362B] tracking-tight">Introduction & Purpose</h2>
                        <p className="text-base text-[#51615a] leading-relaxed">
                          This document brings together the story of our Wales collaboration so far into a shared narrative for government, funders, and delivery partners. It acts as a foundational, neutral base that can be lightly tailored for different audiences while keeping the same core evidence and strategic logic.
                        </p>
                        <p className="text-base text-[#51615a] leading-relaxed">
                          This is not a final blueprint or an attempt to build a new system alongside existing Welsh structures. Instead, it is an enabling paper designed to better connect existing activity and intent. Our goal is systemic change achieved through practical, staged steps: build the shared picture, strengthen coordination, validate with youth voices, test ideas locally, and use those lessons to shape future policy and investment.
                        </p>
                      </div>

                      <div className="lg:col-span-5 bg-white border border-[#e5e3dc] p-8 space-y-6 rounded shadow-sm">
                        <h3 className="text-xs uppercase tracking-wider font-bold text-[#1F362B] border-b border-[#e5e3dc] pb-2">Three Simple Aims:</h3>
                        <ul className="space-y-4 text-xs text-[#51615a]">
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
                            <span>Make the case for a place-based response to social mobility in Wales.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
                            <span>Highlight what Phase 1 revealed about fragmented systems, weak handoffs, and hidden pathways.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
                            <span>Propose a practical, collaborative, and proportionate next stage.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="text-center space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Policy Focus</span>
                        <h3 className="text-2.5xl font-normal text-[#1F362B] tracking-tight">The 6 Strategic Priorities</h3>
                      </div>

                      {/* Simple HTML table-like Grid Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                        {STRATEGIC_PRIORITIES.map((p, idx) => (
                          <div key={idx} className="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors shadow-sm">
                            <span className="text-xs font-mono font-semibold text-[#D48D52] tracking-wider block">Priority {p.num}</span>
                            <h4 className="font-semibold text-[#1F362B] text-xs uppercase tracking-wider leading-none">{p.title}</h4>
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
                        href="https://your-whitepaper-link-here.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer shadow-sm"
                      >
                        <Download className="w-4 h-4 text-[#D48D52]" />
                        <span>Read the Full White Paper</span>
                      </a>
                    </div>

                  </div>
                </section>
              </div>

              {/* SECTION 4: UPCOMING WORKSHOP */}
              <div id="preview-sec-workshop" className="relative group/sec">
                {studioMode === "both" && (
                  <div className="absolute top-2 left-6 z-30 flex items-center gap-1 bg-white/95 py-1 px-3 border border-[#D48D52]/40 shadow-sm text-[9px] font-mono uppercase tracking-widest text-[#1F362B]">
                    <span>4. WORKSHOP PREVIEW</span>
                  </div>
                )}

                <section className="py-24 px-6 sm:px-12 bg-white border-b border-[#e5e3dc]">
                  <div className="max-w-4xl mx-auto text-center space-y-6">
                    <span className="inline-block px-3 py-1 bg-[#D48D52] text-white text-[10px] font-semibold uppercase tracking-widest">
                      Regional Focus • 27 May
                    </span>
                    <h2 class="text-3xl font-normal text-[#1F362B] tracking-tight">Upcoming Workshop</h2>
                    <p className="text-base text-[#51615a] max-w-xl mx-auto leading-relaxed">
                      As we finalise Phase 1, we are holding a youth-led workshop on <strong>27 May</strong> to test these findings directly with young people. Your insight will shape Phase 2.
                    </p>
                    <div className="pt-4">
                      <a
                        href="https://luma.com/jhbmor51"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer"
                      >
                        <span>Register for the Workshop on Luma</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              {/* SECTION 5: GET INVOLVED (THE ULTRACLEAN FORM) */}
              <div id="preview-sec-get-involved" className="relative group/sec">
                {studioMode === "both" && (
                  <div className="absolute top-2 left-6 z-30 flex items-center gap-1 bg-white/95 py-1 px-3 border border-[#D48D52]/40 shadow-sm text-[9px] font-mono uppercase tracking-widest text-[#1F362B]">
                    <span>5. FORM PREVIEW</span>
                  </div>
                )}

                <section className="py-24 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#e5e3dc]">
                  <div className="max-w-xl mx-auto space-y-8">
                    
                    <div className="text-center space-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Immediate Collaboration</span>
                      <h2 className="text-3xl font-normal text-[#1F362B] tracking-tight">Get Involved</h2>
                      <p className="text-sm text-[#51615a] leading-relaxed">
                        If you are an employer, funder, charity leader, policymaker, or community partner, we need your help to build practical pilots.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="bg-white border-2 border-emerald-800 p-8 rounded text-center space-y-4 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#1F362B]/10 text-emerald-800 flex items-center justify-center mx-auto">
                          <Check className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1F362B] uppercase tracking-wider text-xs">Form Transmitted Successfully</h3>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Thank you, <strong>{contactFormName || "Partner"}</strong>. We have logged your details as a <strong>{contactFormWho}</strong>. Our Wales team will connect with you shortly on <strong>{contactFormEmail}</strong> relative to Phase 2.
                        </p>
                        <button
                          onClick={handleResetForm}
                          className="px-4 py-2 border border-[#1F362B] text-[#1F362B] text-[10px] uppercase font-bold tracking-wider hover:bg-[#faf9f6] transition-all cursor-pointer"
                        >
                          Submit Another Response
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-4 bg-white border border-[#e5e3dc] p-8 rounded shadow-sm">
                        <div className="space-y-1.5">
                          <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Alun Davies"
                            value={contactFormName}
                            onChange={(e) => setContactFormName(e.target.value)}
                            className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Who You Are</label>
                          <select
                            value={contactFormWho}
                            onChange={(e) => setContactFormWho(e.target.value as any)}
                            className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]"
                          >
                            <option value="Employer">Employer</option>
                            <option value="Charity Leader">Charity Leader</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Email / Contact</label>
                          <input
                            type="email"
                            required
                            placeholder="name@organisation.org.uk"
                            value={contactFormEmail}
                            onChange={(e) => setContactFormEmail(e.target.value)}
                            className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Message</label>
                          <textarea
                            required
                            rows={4}
                            placeholder="How can you support or coordinate with our regional transition pilots?"
                            value={contactFormMessage}
                            onChange={(e) => setContactFormMessage(e.target.value)}
                            className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B] resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#1F362B] text-white py-3.5 text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                        >
                          <Send className="w-3.5 h-3.5 text-[#D48D52]" />
                          <span>Send Message</span>
                        </button>
                      </form>
                    )}

                  </div>
                </section>
              </div>

              {/* SECTION 6: ULTRA-MINIMAL FOOTNOTE */}
              <div id="preview-sec-footnote" className="relative group/sec">
                {studioMode === "both" && (
                  <div className="absolute top-2 left-6 z-30 flex items-center gap-1 bg-white/95 py-1 px-3 border border-[#D48D52]/40 shadow-sm text-[9px] font-mono uppercase tracking-widest text-[#1F362B]">
                    <span>6. FOOTNOTE PREVIEW</span>
                  </div>
                )}

                <footer className="bg-[#faf9f6]/95 py-16 px-6 border-t border-[#e5e3dc]">
                  <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs text-[#51615a] leading-relaxed max-w-lg mx-auto">
                      This microsite is a simple progress space for OAHA. Return to our main site at{" "}
                      <a
                        href="https://oaha.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1F362B] font-semibold underline hover:text-[#D48D52] transition-colors"
                      >
                        oaha.uk
                      </a>{" "}
                      or connect with us on LinkedIn:{" "}
                      <a
                        href="https://www.linkedin.com/company/oahasocialsustainability/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1F362B] font-semibold underline hover:text-[#D48D52] transition-colors"
                      >
                        LinkedIn
                      </a>.
                    </p>
                    <div className="w-8 h-[1px] bg-[#e5e3dc] mx-auto"></div>
                    <p className="text-[10px] text-[#818e87] uppercase tracking-widest">
                      &copy; 2026 OAHA UK. Operational Update Initiative.
                    </p>
                  </div>
                </footer>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}
