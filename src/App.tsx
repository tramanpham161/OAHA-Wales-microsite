import React, { useState } from "react";
import {
  Download,
  Check,
  ExternalLink,
  Sparkles,
  Send,
  ArrowDown,
  MapPin,
  GraduationCap,
  Users,
  Briefcase,
  BarChart3,
  Clock,
  Compass,
  X,
  Lightbulb,
  Network,
  Wrench,
  PoundSterling,
  CalendarDays,
  Menu
} from "lucide-react";
import OahaLogo from "./components/OahaLogo";
import PartnerLogos from "./components/PartnerLogos";
import LearnerJourneyFlow from "./components/LearnerJourneyFlow";
import WalesEcosystemMap from "./components/WalesEcosystemMap";
import walesValleyHero from "./assets/images/wales_valley_hero_1779371646935.png";

export default function App() {
  // Mobile Navigation menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Clean Form states
  const [contactFormName, setContactFormName] = useState<string>("");
  const [activeInvolvedTab, setActiveInvolvedTab] = useState<"employers" | "partners" | "education" | "government" | "funders">("employers");
  const [selectedOption, setSelectedOption] = useState<string>("Share future skills needs");
  const [contactFormEmail, setContactFormEmail] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [contactOrganisation, setContactOrganisation] = useState<string>("");
  const [contactRole, setContactRole] = useState<string>("");
  const [contactOrgType, setContactOrgType] = useState<string>("Employer");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isFormSending, setIsFormSending] = useState<boolean>(false);
  const [formSendError, setFormSendError] = useState<string | null>(null);
  const [isFormMockMode, setIsFormMockMode] = useState<boolean>(false);

  // Ecosystem Map form states
  const [isMapFormOpen, setIsMapFormOpen] = useState<boolean>(false);
  const [mapContributionType, setMapContributionType] = useState<string>("Add my organisation");
  const [mapFormName, setMapFormName] = useState<string>("");
  const [mapFormContact, setMapFormContact] = useState<string>("");
  const [mapFormMessage, setMapFormMessage] = useState<string>("");
  const [isMapSubmitted, setIsMapSubmitted] = useState<boolean>(false);
  const [isMapSending, setIsMapSending] = useState<boolean>(false);
  const [mapSendError, setMapSendError] = useState<string | null>(null);
  const [isMapMockMode, setIsMapMockMode] = useState<boolean>(false);

  // Core metrics & priorities

  const WHY_NOW_CARDS = [
    {
      icon: MapPin,
      title: "Place-based investment",
      desc: "Long-term neighbourhood and regeneration investment creates a route to connect place funding with people outcomes.",
      bgClass: "bg-[#2BB7BA]/10",
      textClass: "text-[#2BB7BA]",
      groupHoverBg: "group-hover:bg-[#2BB7BA]",
      groupHoverText: "group-hover:text-[#2BB7BA]",
      hoverBorder: "hover:border-[#2BB7BA]/60"
    },
    {
      icon: GraduationCap,
      title: "Skills, Education and Devolved Policy",
      desc: "Welsh Government’s focus on current and future skills creates an opportunity to align education, training and employer demand.",
      bgClass: "bg-[#FF9900]/10",
      textClass: "text-[#FF9900]",
      groupHoverBg: "group-hover:bg-[#FF9900]",
      groupHoverText: "group-hover:text-[#FF9900]",
      hoverBorder: "hover:border-[#FF9900]/60"
    },
    {
      icon: Users,
      title: "Youth Pathways and Support",
      desc: "The Young Person’s Guarantee and Youth Hubs strengthen routes into education, training, employment and wider support.",
      bgClass: "bg-[#3AB03A]/10",
      textClass: "text-[#3AB03A]",
      groupHoverBg: "group-hover:bg-[#3AB03A]",
      groupHoverText: "group-hover:text-[#3AB03A]",
      hoverBorder: "hover:border-[#3AB03A]/60"
    },
    {
      icon: Briefcase,
      title: "Business and enterprise investment",
      desc: "Investment in SMEs, technology and growth sectors needs to translate into visible routes for young people.",
      bgClass: "bg-[#986430]/10",
      textClass: "text-[#986430]",
      groupHoverBg: "group-hover:bg-[#986430]",
      groupHoverText: "group-hover:text-[#986430]",
      hoverBorder: "hover:border-[#986430]/60"
    },
    {
      icon: BarChart3,
      title: "Evidence for Regional Action",
      desc: "Evidence from partners, open data and lived experience points to the need for a clearer shared picture of what exists, where the gaps are, and where coordinated action could make the greatest difference.",
      bgClass: "bg-[#969696]/10",
      textClass: "text-[#969696]",
      groupHoverBg: "group-hover:bg-[#969696]",
      groupHoverText: "group-hover:text-[#969696]",
      hoverBorder: "hover:border-[#969696]/60"
    },
    {
      icon: Compass,
      title: "New political and economic direction",
      desc: "The focus on economic renewal, good jobs, procurement and Welsh-owned businesses makes this a timely moment to act.",
      bgClass: "bg-[#2E536B]/10",
      textClass: "text-[#2E536B]",
      groupHoverBg: "group-hover:bg-[#2E536B]",
      groupHoverText: "group-hover:text-[#2E536B]",
      hoverBorder: "hover:border-[#2E536B]/60"
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSending(true);
    setFormSendError(null);
    setIsFormMockMode(false);
    
    const tabName = activeInvolvedTab === "employers" 
      ? "Employers" 
      : activeInvolvedTab === "partners" 
        ? "Community & Charity Partners" 
        : activeInvolvedTab === "education"
          ? "Schools, Colleges & Universities"
          : activeInvolvedTab === "government"
            ? "Government & Public Bodies"
            : "Funders & Strategic Partners";

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "inquiry",
          data: {
            name: contactFormName,
            email: contactFormEmail,
            phone: contactPhone,
            organisation: contactOrganisation,
            role: contactRole,
            orgType: contactOrgType,
            category: tabName,
            option: selectedOption,
            message: contactMessage
          }
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP error ${response.status}`);
      }

      const resData = await response.json();
      if (resData.isMockMode) {
        setIsFormMockMode(true);
      }
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Failed to submit inquiry via Resend:", error);
      setFormSendError(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsFormSending(false);
    }
  };

  const handleResetForm = () => {
    setContactFormName("");
    setContactOrganisation("");
    setContactRole("");
    setContactFormEmail("");
    setContactPhone("");
    setContactOrgType("Employer");
    setContactMessage("");
    setSelectedOption("Share future skills needs");
    setActiveInvolvedTab("employers");
    setIsSubmitted(false);
    setFormSendError(null);
    setIsFormMockMode(false);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]/95 text-[#1a2521] selection:bg-[#FF9900]/15 selection:text-[#3AB03A] flex flex-col font-sans transition-colors duration-200">
      
      {/* 6-Color Brand Top Accent Bar representing all 6 client colors */}
      <div className="w-full h-1 flex sticky top-0 z-[60]">
        <div className="flex-1 bg-[#2BB7BA]" />
        <div className="flex-1 bg-[#FF9900]" />
        <div className="flex-1 bg-[#3AB03A]" />
        <div className="flex-1 bg-[#986430]" />
        <div className="flex-1 bg-[#969696]" />
        <div className="flex-1 bg-[#2E536B]" />
      </div>

      {/* Premium Corporate Navigation Header */}
      <header className="bg-white/80 backdrop-blur border-b border-[#969696]/30 px-6 py-3.5 sticky top-[4px] z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => {
            const elem = document.getElementById("preview-sec-hero");
            if (elem) elem.scrollIntoView({ behavior: "smooth" });
          }}>
            <OahaLogo size={32} className="shadow-xs rounded-sm hover:scale-105 transition-all" />
            <span className="font-semibold tracking-widest text-[#2E536B] text-sm uppercase">OAHA</span>
          </div>

          {/* Desktop Navigation menu with 9 sections */}
          <nav className="hidden xl:flex items-center gap-3 xl:gap-4.5">
            {[
              { label: "Why Now", id: "preview-sec-why-now", hover: "hover:text-[#2BB7BA]" },
              { label: "Phase 1 Summary", id: "preview-sec-story-so-far", hover: "hover:text-[#FF9900]" },
              { label: "The Gaps", id: "preview-sec-ecosystem-friction", hover: "hover:text-[#3AB03A]" },
              { label: "Phase 2 Plan", id: "preview-sec-whitepaper", hover: "hover:text-[#986430]" },
              { label: "The System", id: "preview-sec-why-this-matters", hover: "hover:text-[#2E536B]" },
              { label: "Ecosystem Map", id: "preview-sec-ecosystem-map", hover: "hover:text-[#2BB7BA]" },
              { label: "Collaboration", id: "preview-sec-what-we-need-now", hover: "hover:text-[#FF9900]" },
              { label: "Coordination", id: "preview-sec-coordination", hover: "hover:text-[#3AB03A]" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const elem = document.getElementById(item.id);
                  if (elem) elem.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-[10px] xl:text-[11px] text-[#51615a] uppercase font-bold tracking-wider transition-colors cursor-pointer ${item.hover}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                const elem = document.getElementById("preview-sec-get-involved");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[10px] xl:text-[11px] bg-[#2E536B] hover:bg-[#FF9900] active:bg-[#3AB03A] text-white px-3.5 py-2 font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer rounded-sm"
            >
              Get Involved
            </button>
          </nav>

          {/* Mobile navigation trigger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-2.5 py-1.5 border border-[#969696]/20 rounded-md hover:bg-slate-50 flex items-center gap-1 cursor-pointer focus:outline-none"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E536B]">Menu</span>
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 border-t border-[#969696]/20 pt-3 pb-2 space-y-1 bg-white rounded-lg p-3 shadow-md">
            {[
              { label: "Why Now", id: "preview-sec-why-now" },
              { label: "Phase 1 Summary", id: "preview-sec-story-so-far" },
              { label: "The Gaps", id: "preview-sec-ecosystem-friction" },
              { label: "Phase 2 Plan", id: "preview-sec-whitepaper" },
              { label: "The System", id: "preview-sec-why-this-matters" },
              { label: "Ecosystem Map", id: "preview-sec-ecosystem-map" },
              { label: "Collaboration", id: "preview-sec-what-we-need-now" },
              { label: "Coordination", id: "preview-sec-coordination" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const elem = document.getElementById(item.id);
                  if (elem) elem.scrollIntoView({ behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider text-[#51615a] hover:bg-[#2BB7BA]/5 hover:text-[#2BB7BA] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                const elem = document.getElementById("preview-sec-get-involved");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-center px-4 py-2.5 mt-2 bg-[#2E536B] hover:bg-[#FF9900] hover:scale-[1.01] text-white text-xs font-bold uppercase tracking-wider transition-all rounded-sm"
            >
              Get Involved
            </button>
          </div>
        )}
      </header>

      {/* Beautiful Page Wrapper representing the real website */}
      <main className="flex-1">

        {/* SECTION 1: HERO CONTAINER */}
        <div id="preview-sec-hero" className="relative">
          <section className="relative py-14 sm:py-18 px-6 sm:px-12 bg-[#faf9f6] border-b border-[#969696]/35 overflow-hidden">
            
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
 
            <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Premium Text & Call to Actions */}
              <div className="lg:col-span-7 space-y-4 text-left relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#2BB7BA] bg-[#2BB7BA]/10 rounded-full uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                  <span>Wales Progress update</span>
                </span>
                
                <h1 className="text-4xl sm:text-[3.25rem] lg:text-[3.85rem] font-light tracking-tight text-[#2E536B] leading-[1.12] font-sans">
                  Turning regional growth <br />
                  <span className="text-[#3AB03A] font-normal">into visible opportunity</span>
                </h1>
                
                <p className="text-sm uppercase tracking-wider text-[#51615a] font-semibold leading-relaxed">
                  A place-based collaboration helping Wales connect investment, skills, employers, community insight and youth voice into clearer routes for young people.
                </p>
                
                <div className="text-sm sm:text-base text-[#51615a] max-w-xl leading-relaxed space-y-3">
                  <p>
                    Wales has significant commitment, activity and investment already underway. But young people do not always see how that connects to their future.
                  </p>
                  <p>
                    This work is helping build the connective infrastructure between economic growth, employer demand, local provision and trusted community pathways, so opportunity becomes easier to see, access and move through.
                  </p>
                  <p>
                    We are now moving from insight into action: strengthening the evidence base, testing priorities with partners and shaping the next stage of place-based delivery.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center pt-1">
                  <button
                    onClick={() => {
                      const elem = document.getElementById("preview-sec-story-so-far");
                      if (elem) elem.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 bg-[#2E536B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs rounded-xs"
                  >
                    <span>WHAT WE ARE LEARNING</span>
                    <ArrowDown className="w-3.5 h-3.5 text-[#FF9900]" />
                  </button>
                  <button
                    onClick={() => {
                      const elem = document.getElementById("preview-sec-get-involved");
                      if (elem) elem.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 border-2 border-[#2E536B] text-[#2E536B] text-xs font-semibold uppercase tracking-widest hover:bg-[#2E536B]/5 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 rounded-xs"
                  >
                    <span>SUPPORT THE NEXT PHASE</span>
                    <ArrowDown className="w-3.5 h-3.5 text-[#3AB03A]" />
                  </button>
                </div>
              </div>
 
              {/* Right Column: Left empty to allow the background image to naturally shine through on desktop */}
              <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
 
            </div>
 
            {/* Backdrop Aesthetic Subtle Blur Details */}
            <div className="absolute top-[-20%] left-[20%] w-72 h-72 bg-[#2BB7BA]/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-[#feedd5]/5 rounded-full filter blur-[120px] pointer-events-none" />
          </section>
        </div>

        {/* SECTION 2: WHY NOW? (STRATEGIC CONVERGENCE) */}
        <div id="preview-sec-why-now" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto space-y-10">
              
              {/* WHY NOW? SECTION */}
              <div className="space-y-6" id="why-now-section">
                <div className="space-y-2 max-w-3xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Strategic Convergence</span>
                  <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                    Why Now?
                  </h2>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    Policy, funding, business need and youth voice are converging. Wales has a rare opportunity to make sure regional growth is not just planned at system level, but seen and felt by young people, families and communities.
                  </p>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    The next step is to connect future skills, employer demand, education pathways and community support so young people can understand the opportunities growing around them early enough to prepare for them.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {WHY_NOW_CARDS.map((card, idx) => {
                    const IconComponent = card.icon;
                    return (
                      <div key={idx} className={`group bg-[#faf9f6]/40 hover:bg-white border border-[#969696]/20 ${card.hoverBorder} p-6 rounded-lg transition-all duration-300 hover:shadow-sm`}>
                        <div className={`w-10 h-10 rounded-lg ${card.bgClass} flex items-center justify-center ${card.textClass} mb-4 ${card.groupHoverBg} group-hover:text-white transition-all duration-300`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className={`text-sm font-bold tracking-wider text-slate-800 uppercase mb-2 ${card.groupHoverText} transition-colors`}>
                          {card.title}
                        </h3>
                        <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom text: connective opportunity */}
                <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans mt-8">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">Connective Action</span>
                  <p className="text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium text-sm sm:text-base">
                    The opportunity now is to connect these forces before investment, skills planning and youth support continue to develop in separate lanes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SECTION 2B: THE STORY SO FAR & COALITION PROGRESS */}
        <div id="preview-sec-story-so-far" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto space-y-10">

              <div className="max-w-4xl space-y-3 text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Context Summary</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                  What we have learnt and built so far
                </h2>
                
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  Phase 1 deliberately focused on understanding the system before jumping to solutions. This matters because well-intentioned activity can still miss the point if it is not tested against the real experience of young people, families, schools, employers and community organisations. Through partner engagement, discovery work, ecosystem mapping and journey analysis, the work has moved from shared intent to a clearer picture.
                </p>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  We now understand where pathways are strong, where they are fragmented, and where collective action could make the greatest difference.
                </p>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  This gives us the foundation for the next stage: connecting insight, evidence and partner action in a more coordinated way.
                </p>
              </div>
 
              {/* Horizontal Milestones Timeline */}
              <div className="space-y-6 border-t border-[#969696]/20 pt-8">
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-2xl font-normal text-[#2E536B] tracking-tight">Phase 1 Timeline</h3>
                </div>
                
                <div className="relative pt-4">
                  {/* Horizontal joining connector line running across on medium screens */}
                  <div className="hidden md:block absolute top-[2.1rem] left-10 right-10 h-[1.5px] bg-[#969696]/25 z-0" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                    
                    {/* Month: September */}
                    <div className="space-y-2 relative text-left group flex flex-col justify-start">
                      <div className="flex items-center gap-3 md:block">
                        <div className="w-8 h-8 rounded-full bg-[#3AB03A] text-white flex items-center justify-center text-xs font-bold md:mb-2 shrink-0 shadow-xs border-2 border-white transition-transform duration-300 group-hover:scale-110">
                          01
                        </div>
                        <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">September</span>
                      </div>
                      <div className="pl-11 md:pl-0 space-y-1.5 flex-1 flex flex-col justify-start">
                        <div className="md:h-8 flex items-start">
                          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide leading-snug group-hover:text-[#3AB03A] transition-colors">
                            Cardiff UNGC roundtable
                          </h4>
                        </div>
                        <p className="text-sm text-[#51615a] leading-relaxed border-t border-gray-100 pt-1.5">
                          Early momentum and shared intent around a place-based approach.
                        </p>
                      </div>
                    </div>

                    {/* Month: December */}
                    <div className="space-y-2 relative text-left group flex flex-col justify-start">
                      <div className="flex items-center gap-3 md:block">
                        <div className="w-8 h-8 rounded-full bg-[#3AB03A] text-white flex items-center justify-center text-xs font-bold md:mb-2 shrink-0 shadow-xs border-2 border-white transition-transform duration-300 group-hover:scale-110">
                          02
                        </div>
                        <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">December</span>
                      </div>
                      <div className="pl-11 md:pl-0 space-y-1.5 flex-1 flex flex-col justify-start">
                        <div className="md:h-8 flex items-start">
                          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide leading-snug group-hover:text-[#3AB03A] transition-colors">
                            Call to Action
                          </h4>
                        </div>
                        <p className="text-sm text-[#51615a] leading-relaxed border-t border-gray-100 pt-1.5">
                          Partners agreed to move from discussion toward practical next steps.
                        </p>
                      </div>
                    </div>

                    {/* Month: January-February */}
                    <div className="space-y-2 relative text-left group flex flex-col justify-start">
                      <div className="flex items-center gap-3 md:block">
                        <div className="w-8 h-8 rounded-full bg-[#3AB03A]/90 text-white flex items-center justify-center text-xs font-bold md:mb-2 shrink-0 shadow-xs border-2 border-white transition-transform duration-300 group-hover:scale-110">
                          03
                        </div>
                        <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">Jan–Feb</span>
                      </div>
                      <div className="pl-11 md:pl-0 space-y-1.5 flex-1 flex flex-col justify-start">
                        <div className="md:h-8 flex items-start">
                          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide leading-snug group-hover:text-[#3AB03A] transition-colors">
                            Phase 1 discovery
                          </h4>
                        </div>
                        <p className="text-sm text-[#51615a] leading-relaxed border-t border-gray-100 pt-1.5">
                          Desktop research, open data scan, learner journey map and ecosystem scan.
                        </p>
                      </div>
                    </div>

                    {/* Month: March */}
                    <div className="space-y-2 relative text-left group flex flex-col justify-start">
                      <div className="flex items-center gap-3 md:block">
                        <div className="w-8 h-8 rounded-full bg-[#3AB03A]/90 text-white flex items-center justify-center text-xs font-bold md:mb-2 shrink-0 shadow-xs border-2 border-white transition-transform duration-300 group-hover:scale-110">
                          04
                        </div>
                        <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">March</span>
                      </div>
                      <div className="pl-11 md:pl-0 space-y-1.5 flex-1 flex flex-col justify-start">
                        <div className="md:h-8 flex items-start">
                          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide leading-snug group-hover:text-[#3AB03A] transition-colors">
                            Working session
                          </h4>
                        </div>
                        <p className="text-sm text-[#51615a] leading-relaxed border-t border-gray-100 pt-1.5">
                          Journey validated, handoff challenges sharpened and early priorities surfaced.
                        </p>
                      </div>
                    </div>

                    {/* Month: May/June (Different Circle Colour for future stage) */}
                    <div className="space-y-2 relative text-left group flex flex-col justify-start">
                      <div className="flex items-center gap-3 md:block">
                        <div className="w-8 h-8 rounded-full bg-[#FF9900] text-white flex items-center justify-center text-xs font-bold md:mb-2 shrink-0 shadow-xs border-2 border-white transition-transform duration-300 group-hover:scale-110 ring-4 ring-[#FF9900]/15">
                          05
                        </div>
                        <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF9900]">May/June</span>
                      </div>
                      <div className="pl-11 md:pl-0 space-y-1.5 flex-1 flex flex-col justify-start">
                        <div className="md:h-8 flex items-start">
                          <h4 className="text-sm font-bold text-[#FF9900] uppercase tracking-wide leading-snug">
                            Youth Validation and Partner Design
                          </h4>
                        </div>
                        <p className="text-sm text-[#51615a] leading-relaxed border-t border-gray-100 pt-1.5">
                          Tested emerging themes with young people and partners. Used design-led methods, including the LEGO Serious Play workshop, to explore where pathways connect, where they break, and which opportunities should move toward pilot design.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
 
              {/* Participating Partners Logos Section */}
              <PartnerLogos />

              {/* Call To Action button relocated under participating partners */}
              <div className="pt-1 pb-4 flex justify-center">
                <a
                  href="/whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2E536B] hover:bg-[#2E536B]/95 text-white text-xs font-semibold uppercase tracking-widest transition-all rounded shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#FF9900]" />
                  <span>Read the Phase 1 summary</span>
                </a>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 2C: THE ECOSYSTEM IN FRICTION */}
        <div id="preview-sec-ecosystem-friction" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto space-y-10">

              {/* Interactive 6-stage Learner Journey Flow block inside our Ecosystem in Friction */}
              <LearnerJourneyFlow />

              {/* Key Takeaway Callout */}
              <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">Key Takeaway</span>
                <p className="text-base text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                  This is why the next phase must connect evidence, growth, skills, employers, schools, families, community trust and youth voice; so Wales strengthens the pathways that already exist, rather than adding another disconnected programme.
                </p>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 3: THE WHITE PAPER PRIORITIES */}
        <div id="preview-sec-whitepaper" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#969696]/30">
            <div className="max-w-5xl mx-auto space-y-10">
                       {/* Introduction & Purpose Summary with Three Aims */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left font-sans">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Strategic Document</span>
                  <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">From Insight to Action</h2>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    Phase 1 has helped build a clearer view of the ecosystem, the learner journey and the points where opportunity becomes harder to see or access.
                  </p>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    The next phase is about moving from insight to action: testing the findings with young people and communities, deepening employer engagement, and identifying a small number of practical, place-based pilots that can make opportunity easier to see, access and move through.
                  </p>
                </div>
 
                <div className="lg:col-span-5 bg-white border border-[#969696]/30 p-8 space-y-6 rounded shadow-sm">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-[#2E536B] border-b border-[#969696]/30 pb-2">Three Simple Aims:</h3>
                  <ul className="space-y-4 text-sm text-[#51615a]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2BB7BA] mt-1.5 shrink-0"></span>
                      <span>Make the case for a place-based response to social mobility in Wales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-1.5 shrink-0"></span>
                      <span>Highlight what Phase 1 revealed about fragmented systems, weak handoffs, and hidden pathways.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A] mt-1.5 shrink-0"></span>
                      <span>Propose a practical, collaborative, and proportionate next stage.</span>
                    </li>
                  </ul>
                </div>
              </div>
 
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Phase 2 Roadmap</span>
                </div>
 
                {/* 4 brand-colored interactive cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                  {[
                    {
                      num: "Sprint 1",
                      title: "Consolidate ideas",
                      desc: "Bring together Phase 1 outputs, youth insight and stakeholder feedback. Cluster ideas into concept themes and prioritise the strongest ideas for prototyping."
                    },
                    {
                      num: "Sprint 2",
                      title: "Develop prototypes",
                      desc: "Create a simple prototype canvas for each concept, covering the problem, target cohort/place, user journey, partner roles, handoffs, cost range, measures and risks."
                    },
                    {
                      num: "Sprint 3",
                      title: "Validate feasibility",
                      desc: "Sense-check each prototype with the organisations who would deliver, refer, host or fund it."
                    },
                    {
                      num: "Sprint 4",
                      title: "Decide what moves to pilot",
                      desc: "Score prototypes against impact, feasibility, equity, speed to test and scalability. Select one prototype for Phase 3 mobilisation."
                    }
                  ].map((s, idx) => {
                    const phaseColors = [
                      { text: "text-[#2BB7BA]", bg: "bg-[#2BB7BA]/10", border: "border-t-[#2BB7BA]", hoverBorder: "hover:border-[#2BB7BA]" },
                      { text: "text-[#FF9900]", bg: "bg-[#FF9900]/10", border: "border-t-[#FF9900]", hoverBorder: "hover:border-[#FF9900]" },
                      { text: "text-[#3AB03A]", bg: "bg-[#3AB03A]/10", border: "border-t-[#3AB03A]", hoverBorder: "hover:border-[#3AB03A]" },
                      { text: "text-[#2E536B]", bg: "bg-[#2E536B]/10", border: "border-t-[#2E536B]", hoverBorder: "hover:border-[#2E536B]" },
                    ];
                    const color = phaseColors[idx % phaseColors.length];
 
                    return (
                      <div key={idx} className={`bg-white border-t-[3px] ${color.border} border-x border-b border-[#969696]/20 ${color.hoverBorder} p-6 space-y-3 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-md text-left`}>
                        <span className={`text-xs font-mono font-bold tracking-wider block ${color.text}`}>{s.num}</span>
                        <h4 className="font-medium text-slate-800 text-sm uppercase tracking-wider leading-snug">{s.title}</h4>
                        <p className="text-sm text-[#51615a] leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Outcome summary at the bottom */}
              <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">Phase 2 Deliverables</span>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                  By the end of Phase 2, partners will have 2–3 measurable prototype solutions, one recommended pilot for mobilisation, and a reporting approach that shows how place-based action can create social value, strengthen pathways and support better outcomes for young people.
                </p>
              </div>
 

 
            </div>
          </section>
        </div>
 
        {/* SECTION 4: WHY THIS MATTERS BEYOND ANY ONE ORGANISATION */}
        <div id="preview-sec-why-this-matters" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Cased Title & Stakeholder Bullet Points */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Systemic Lens</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight leading-tight">
                  Why This Matters Beyond Any One Organisation
                </h2>
                
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  No single organisation can fix the pathway alone. The value of this work is in seeing the whole system: what already exists, where the gaps and duplications are, and where shared action could make the biggest difference for young people, communities and employers.
                </p>
                
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  For employers, this means clearer routes to future talent. For charities and community organisations, it means lived insight shaping decisions. For public bodies and funders, it means better evidence about where shared action can create the greatest impact.
                </p>
                
                <div className="space-y-3 pt-4 border-t border-[#969696]/20">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-[#51615a] border-b border-[#969696]/20 pb-2">
                    What Stakeholders Can Expect in Return
                  </h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-2 shrink-0"></span>
                      <p className="text-sm text-[#51615a] leading-relaxed">
                        Earlier sight of where the work is heading and which ideas are gaining traction.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2BB7BA] mt-2 shrink-0"></span>
                      <p className="text-sm text-[#51615a] leading-relaxed">
                        A chance to influence what becomes pilot-ready, before decisions are set elsewhere.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A] mt-2 shrink-0"></span>
                      <p className="text-sm text-[#51615a] leading-relaxed">
                        Better visibility of adjacent partners, programmes and gaps across the Welsh ecosystem.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#986430] mt-2 shrink-0"></span>
                      <p className="text-sm text-[#51615a] leading-relaxed">
                        Stronger relationships across employers, educators, youth organisations, civic partners and funders.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E536B] mt-2 shrink-0"></span>
                      <p className="text-sm text-[#51615a] leading-relaxed">
                        A clearer shared narrative to support future commissioning, funding or policy conversations.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2BB7BA] mt-2 shrink-0"></span>
                      <p className="text-sm text-[#51615a] leading-relaxed">
                        A clearer role in shaping practical solutions before they are funded, commissioned or scaled.
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
                          fill="#e6faf9"
                          stroke="#2BB7BA"
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
                    <div className="absolute left-[2%] top-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#2BB7BA] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Make existing provision easier to see, understand and connect — so partners can build on what works rather than repeat it.
                      </p>
                    </div>

                    {/* Top Right Callout */}
                    <div className="absolute right-[2%] top-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#FF9900] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Improve how young people move between systems, especially from school to post-16, post-16 to work, and into second-chance routes.
                      </p>
                    </div>

                    {/* Bottom Left Callout */}
                    <div className="absolute left-[2%] bottom-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#3AB03A] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Test ideas with young people, practitioners and employers before scaling, so solutions reflect lived experience and local conditions.
                      </p>
                    </div>

                    {/* Bottom Right Callout */}
                    <div className="absolute right-[2%] bottom-[10px] w-[200px] lg:w-[240px] min-h-[140px] bg-white border-2 border-[#969696] p-5 rounded-2xl shadow-sm text-center flex items-center justify-center hover:shadow transition-all duration-200">
                      <p className="text-xs lg:text-sm font-normal text-[#51615a] leading-relaxed">
                        Create credible evidence for government, funders and place-based investors about where shared action will have the greatest impact.
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
                          fill="#e6faf9"
                          stroke="#2BB7BA"
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
                      <div className="bg-white border-l-4 border-[#2BB7BA] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#2BB7BA] uppercase tracking-wider block mb-1">01. Reduce Duplication</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Make existing provision easier to see, understand and connect — so partners can build on what works rather than repeat it.
                        </p>
                      </div>

                      {/* Top-Right Box Mobile */}
                      <div className="bg-white border-l-4 border-[#FF9900] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#FF9900] uppercase tracking-wider block mb-1">02. Strengthen Pathways</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Improve how young people move between systems, especially from school to post-16, post-16 to work, and into second-chance routes.
                        </p>
                      </div>

                      {/* Bottom-Left Box Mobile */}
                      <div className="bg-white border-l-4 border-[#3AB03A] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#3AB03A] uppercase tracking-wider block mb-1">03. Ground Action in Reality</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Test ideas with young people, practitioners and employers before scaling, so solutions reflect lived experience and local conditions.
                        </p>
                      </div>

                      {/* Bottom-Right Box Mobile */}
                      <div className="bg-white border-l-4 border-[#969696] p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-bold text-[#969696] uppercase tracking-wider block mb-1">04. Build a Stronger Collective Case</span>
                        <p className="text-xs text-[#51615a] leading-relaxed">
                          Create credible evidence for government, funders and place-based investors about where shared action will have the greatest impact.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 4B: THE WALES SOCIAL MOBILITY ECOSYSTEM MAP */}
        <div id="preview-sec-ecosystem-map" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto space-y-10">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual of Wales map: small, on the left */}
                <div className="lg:col-span-5 w-full max-w-sm lg:max-w-md mx-auto flex flex-col items-stretch space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block lg:hidden">Ecosystem Map</span>
                  <WalesEcosystemMap />
                </div>
                
                {/* Text and CTA: on the right */}
                <div className="lg:col-span-7 space-y-4 text-left flex flex-col justify-center h-full pt-2 lg:pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] hidden lg:block">Ecosystem Mapping</span>
                  
                  <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight leading-tight">
                    The Wales Social Mobility Ecosystem Map
                  </h2>
                  
                  <div className="text-sm sm:text-base text-[#51615a] leading-relaxed space-y-4 font-sans">
                    <p>
                      We are building a shared view of the Welsh social mobility ecosystem: who is working with young people, where they operate, which stage of the journey they support, and where there may be gaps, duplication or weak handoffs.
                    </p>
                    <p>
                      The map is not intended to judge individual organisations. It is designed to help the system see itself more clearly — so that partners can align effort, strengthen pathways and identify where collective action is needed most.
                    </p>
                  </div>
 
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setMapFormName("");
                        setMapFormContact("");
                        setMapFormMessage("");
                        setMapContributionType("Add my organisation");
                        setIsMapFormOpen(true);
                        setIsMapSubmitted(false);
                      }}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2E536B] hover:bg-[#2E536B]/95 text-white text-xs font-semibold uppercase tracking-widest transition-all rounded shadow-xs cursor-pointer"
                    >
                      <MapPin className="w-4 h-4 text-[#FF9900]" />
                      <span>Contribute to the ecosystem map</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom text: living map */}
              <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">Ecosystem Status</span>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                  This is a living map and will continue to evolve as more partners contribute insight.
                </p>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 4C: WHAT WE NEED NOW */}
        <div id="preview-sec-what-we-need-now" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto space-y-8">
              
              <div className="space-y-2 text-left max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Collaboration Needs</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                  What we need now
                </h2>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  We are now looking for partners who can help move the work into its next phase.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1 */}
                <div className="group bg-[#faf9f6]/40 hover:bg-white border border-[#969696]/20 hover:border-[#2BB7BA]/60 p-6 rounded-lg transition-all duration-300 hover:shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#2BB7BA]/10 flex items-center justify-center text-[#2BB7BA] mb-4 group-hover:bg-[#2BB7BA] group-hover:text-white transition-all duration-300">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-slate-800 uppercase mb-2 group-hover:text-[#2BB7BA] transition-colors">
                    Insight
                  </h3>
                  <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                    Share what you are seeing in communities, schools, workplaces or local systems.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group bg-[#faf9f6]/40 hover:bg-white border border-[#969696]/20 hover:border-[#FF9900]/60 p-6 rounded-lg transition-all duration-300 hover:shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FF9900]/10 flex items-center justify-center text-[#FF9900] mb-4 group-hover:bg-[#FF9900] group-hover:text-white transition-all duration-300">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-slate-800 uppercase mb-2 group-hover:text-[#FF9900] transition-colors">
                    Access
                  </h3>
                  <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                    Connect us to young people, families, schools, colleges, employers or community groups.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group bg-[#faf9f6]/40 hover:bg-white border border-[#969696]/20 hover:border-[#3AB03A]/60 p-6 rounded-lg transition-all duration-300 hover:shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#3AB03A]/10 flex items-center justify-center text-[#3AB03A] mb-4 group-hover:bg-[#3AB03A] group-hover:text-white transition-all duration-300">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-slate-800 uppercase mb-1.5 group-hover:text-[#3AB03A] transition-colors">
                    Capacity
                  </h3>
                  <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                    Join a workshop, test a prototype, host a conversation or support delivery.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="group bg-[#faf9f6]/40 hover:bg-white border border-[#969696]/20 hover:border-[#2E536B]/60 p-6 rounded-lg transition-all duration-300 hover:shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#2E536B]/10 flex items-center justify-center text-[#2E536B] mb-4 group-hover:bg-[#2E536B] group-hover:text-white transition-all duration-300">
                    <PoundSterling className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-slate-800 uppercase mb-2 group-hover:text-[#2E536B] transition-colors">
                    Investment
                  </h3>
                  <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                    Help fund the coordination, youth voice, mapping, design and pilot development needed to move from insight to action.
                  </p>
                </div>

              </div>

            </div>
          </section>
        </div>

        {/* SECTION 4D: WHO IS COORDINATING THIS WORK? */}
        <div id="preview-sec-coordination" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-[#faf9f6]/30 border-b border-[#969696]/30">
            <div className="max-w-4xl mx-auto text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Convening & Coordination</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                  Who is coordinating this work?
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#51615a] leading-relaxed font-sans">
                OAHA and Lewis Silkin are helping to convene and coordinate this collaboration, working with partners across Wales to move from insight to practical action. The role is not to create another standalone programme, but to provide light-touch backbone support: connecting people, synthesising insight, identifying gaps and helping partners shape pilot-ready solutions.
              </p>
              <p className="text-sm sm:text-base text-[#51615a] leading-relaxed font-sans">
                The work is intentionally collaborative. It will evolve as more employers, community organisations, charities, educators, funders and public bodies contribute insight and capacity.
              </p>
            </div>
          </section>
        </div>

        {/* SECTION 5: GET INVOLVED (THE ULTRACLEAN FORM) */}
        <div id="preview-sec-get-involved" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-2xl mx-auto space-y-6">
              
              <div className="text-center space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">Immediate Collaboration</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">How to get involved</h2>
              </div>

              {isSubmitted ? (
                <div className="bg-white border border-[#969696]/30 p-8 rounded-2xl text-center space-y-4 shadow-sm max-w-xl mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#2E536B]/10 text-[#2E536B] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-[#2E536B] uppercase tracking-wider">Inquiry Sent Successfully!</h3>
                  <p className="text-xs text-[#51615a] leading-relaxed">
                    Thank you, <strong>{contactFormName || "Partner"}</strong> of <strong>{contactOrganisation || "your organisation"}</strong>. Your collaboration details have been sent directly to <strong>info.oaha.uk@gmail.com</strong>.
                  </p>

                  {isFormMockMode && (
                    <div className="mt-2 p-3.5 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-xl text-left space-y-2">
                      <p className="text-xs text-[#986430] font-sans font-medium">
                        💡 <strong>Developer Note:</strong> The form submitted successfully in simulation mode because <strong>RESEND_API_KEY</strong> is not yet configured. To make real emails fly, add your Resend API key to the Secrets/Settings panel.
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-[#51615a] leading-relaxed">
                    If you require an instant backup copy or would like to send manually, you may use the button below.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={() => {
                        const tabName = activeInvolvedTab === "employers" 
                          ? "Employers" 
                          : activeInvolvedTab === "partners" 
                            ? "Community & Charity Partners" 
                            : activeInvolvedTab === "education"
                              ? "Schools, Colleges & Universities"
                              : activeInvolvedTab === "government"
                                ? "Government & Public Bodies"
                                : "Funders & Strategic Partners";

                        const subject = encodeURIComponent(`OAHA Wales Collaboration Inquiry (${tabName})`);
                        const body = encodeURIComponent(
                          `Hello info.oaha.uk,\n\n` +
                          `I would like to get involved via the Wales Progress/Social Mobility initiative.\n\n` +
                          `Category: ${tabName}\n` +
                          `How would you like to get involved?: ${selectedOption}\n\n` +
                          `Contact Information:\n` +
                          `- Full Name: ${contactFormName}\n` +
                          `- Organisation: ${contactOrganisation}\n` +
                          `- Role / Job Title: ${contactRole}\n` +
                          `- Email Address: ${contactFormEmail}\n` +
                          `- Phone Number: ${contactPhone}\n` +
                          `- Organisation Type: ${contactOrgType}\n\n` +
                          `Message / anything useful to know:\n${contactMessage || "None provided"}\n\n` +
                          `Sent via Wales Progress Update portal.`
                        );
                        window.location.href = `mailto:info.oaha.uk@gmail.com?subject=${subject}&body=${body}`;
                      }}
                      className="px-5 py-3 bg-[#2E536B] text-white text-[10px] uppercase font-bold tracking-wider hover:opacity-90 transition-all cursor-pointer rounded-lg shadow-xs"
                    >
                      Open Email Client (Backup)
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-3 border border-[#2E536B] text-[#2E536B] text-[10px] uppercase font-bold tracking-wider hover:bg-[#faf9f6] transition-all cursor-pointer rounded-lg"
                    >
                      Submit Another Response
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Tabs Selector Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 border-b border-[#969696]/20 pb-px">
                    {[
                      { id: "employers", label: "Employers", activeColor: "border-[#2BB7BA] text-[#2BB7BA]", hoverColor: "hover:text-[#2BB7BA] hover:border-[#2BB7BA]/20" },
                      { id: "partners", label: "Community & Charity Partners", activeColor: "border-[#FF9900] text-[#FF9900]", hoverColor: "hover:text-[#FF9900] hover:border-[#FF9900]/20" },
                      { id: "education", label: "Schools, Colleges & Universities", activeColor: "border-[#3AB03A] text-[#3AB03A]", hoverColor: "hover:text-[#3AB03A] hover:border-[#3AB03A]/20" },
                      { id: "government", label: "Government & Public Bodies", activeColor: "border-[#986430] text-[#986430]", hoverColor: "hover:text-[#986430] hover:border-[#986430]/20" },
                      { id: "funders", label: "Funders & Strategic Partners", activeColor: "border-[#2E536B] text-[#2E536B]", hoverColor: "hover:text-[#2E536B] hover:border-[#2E536B]/20" }
                    ].map((tab) => {
                      const isActive = activeInvolvedTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            setActiveInvolvedTab(tab.id as any);
                            // Set first option as default when tab switches
                            const firstOption = tab.id === "employers" 
                              ? "Share future skills needs"
                              : tab.id === "partners"
                                ? "Share local insight"
                                : tab.id === "education"
                                  ? "Support youth insight"
                                  : tab.id === "government"
                                    ? "Contribute regional insight"
                                    : "Support youth voice and mapping";
                            setSelectedOption(firstOption);

                            // Set organic organisation type to match tab choice
                            const guessedType = tab.id === "employers"
                              ? "Employer"
                              : tab.id === "partners"
                                ? "Community & Charity Partner"
                                : tab.id === "education"
                                  ? "School, College or University"
                                  : tab.id === "government"
                                    ? "Government & Public Body"
                                    : "Funder & Strategic Partner";
                            setContactOrgType(guessedType);
                          }}
                          className={`px-3 py-3 text-[10px] uppercase font-bold tracking-wider transition-all duration-200 border-b-2 text-center -mb-px outline-none ${
                            isActive
                              ? tab.activeColor
                              : `border-transparent text-[#51615a] ${tab.hoverColor}`
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Subtitle & Details */}
                  <div className="bg-[#faf9f6]/40 p-6 sm:p-8 rounded-2xl border border-[#969696]/15 space-y-4 text-left">
                    <h3 className="text-base font-semibold text-[#2E536B] tracking-tight">
                      {activeInvolvedTab === "employers" && "Help connect future workforce demand to visible opportunity."}
                      {activeInvolvedTab === "partners" && "Help ensure solutions are grounded in lived experience and community trust."}
                      {activeInvolvedTab === "education" && "Help connect young people’s experience with future pathways."}
                      {activeInvolvedTab === "government" && "Help align policy, commissioning, social value and place-based action."}
                      {activeInvolvedTab === "funders" && "Help move the work from insight to practical pilots."}
                    </h3>
                    <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                      {activeInvolvedTab === "employers" && "This could include sharing future skills needs, hosting design workshops, offering workplace exposure, supporting mentoring, or helping shape a pilot linked to real jobs and growth sectors."}
                      {activeInvolvedTab === "partners" && "Community groups and charities can share what they are seeing locally, identify where young people and families face barriers, help test emerging ideas, and connect the work to the people and places it is designed to support."}
                      {activeInvolvedTab === "education" && "Schools, colleges and universities can support youth insight, host design-led workshops, connect learners to employers and community partners, and help test how future jobs and local growth sectors are translated into learner awareness."}
                      {activeInvolvedTab === "government" && "Government and public bodies can contribute insight, connect policy and delivery priorities, share evidence, align with youth employment and skills strategies, and help identify where practical pilots could support wider regional outcomes."}
                      {activeInvolvedTab === "funders" && "Funders and strategic partners can support youth voice, ecosystem mapping, design workshops, prototype testing, evaluation and pilot mobilisation. Your support can help existing activity go further and build evidence for what works in place."}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-6 bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl shadow-xs text-left">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={contactFormName}
                          onChange={(e) => setContactFormName(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg"
                        />
                      </div>

                      {/* Organisation */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">Organisation</label>
                        <input
                          type="text"
                          required
                          placeholder="Organisation Name"
                          value={contactOrganisation}
                          onChange={(e) => setContactOrganisation(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg"
                        />
                      </div>

                      {/* Role / job title */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">Role / Job Title</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Director, Partnership Manager"
                          value={contactRole}
                          onChange={(e) => setContactRole(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg"
                        />
                      </div>

                      {/* Organisation type */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">Organisation Type</label>
                        <select
                          value={contactOrgType}
                          onChange={(e) => setContactOrgType(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg cursor-pointer text-[#1a2521]"
                        >
                          <option value="Employer">Employer</option>
                          <option value="Community & Charity Partner">Community & Charity Partner</option>
                          <option value="School, College or University">School, College or University</option>
                          <option value="Government & Public Body">Government & Public Body</option>
                          <option value="Funder & Strategic Partner">Funder & Strategic Partner</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="name@organisation.org.uk"
                          value={contactFormEmail}
                          onChange={(e) => setContactFormEmail(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g., 07123 456789"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg"
                        />
                      </div>

                      {/* How would you like to get involved? */}
                      <div className="col-span-full space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">
                          How would you like to get involved?
                        </label>
                        <select
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg cursor-pointer text-[#1a2521]"
                        >
                          {activeInvolvedTab === "employers" && (
                            <>
                              <option value="Share future skills needs">Share future skills needs</option>
                              <option value="Host design workshops">Host design workshops</option>
                              <option value="Offer workplace exposure">Offer workplace exposure</option>
                              <option value="Support mentoring">Support mentoring</option>
                              <option value="Help shape a pilot">Help shape a pilot</option>
                            </>
                          )}
                          {activeInvolvedTab === "partners" && (
                            <>
                              <option value="Share local insight">Share local insight</option>
                              <option value="Identify barrier areas">Identify barrier areas</option>
                              <option value="Test emerging ideas">Test emerging ideas</option>
                              <option value="Connect youth and families">Connect youth and families</option>
                            </>
                          )}
                          {activeInvolvedTab === "education" && (
                            <>
                              <option value="Support youth insight">Support youth insight</option>
                              <option value="Host design-led workshops">Host design-led workshops</option>
                              <option value="Connect learners to employers">Connect learners to employers</option>
                              <option value="Test future job translation">Test future job translation</option>
                            </>
                          )}
                          {activeInvolvedTab === "government" && (
                            <>
                              <option value="Contribute regional insight">Contribute regional insight</option>
                              <option value="Connect policy and delivery">Connect policy and delivery</option>
                              <option value="Share data and evidence">Share data and evidence</option>
                              <option value="Identify potential pilots">Identify potential pilots</option>
                            </>
                          )}
                          {activeInvolvedTab === "funders" && (
                            <>
                              <option value="Support youth voice and mapping">Support youth voice and mapping</option>
                              <option value="Support prototype testing">Support prototype testing</option>
                              <option value="Support evaluation and pilots">Support evaluation and pilots</option>
                              <option value="Book a conversation">Book a conversation</option>
                            </>
                          )}
                        </select>
                      </div>

                      {/* Message / anything useful to know */}
                      <div className="col-span-full space-y-1.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">
                          Message / anything useful to know
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Please share details about your objectives or how we can best collaborate..."
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg transition-all text-[#1a2521]"
                        />
                      </div>
                    </div>

                    {formSendError && (
                      <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-medium">
                        ⚠️ {formSendError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isFormSending}
                      className="w-full bg-[#2E536B] text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#2E536B]/95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-3.5 h-3.5 text-[#FF9900]" />
                      <span>{isFormSending ? "Submitting..." : "Submit Inquiry"}</span>
                    </button>
                  </form>
                </div>
              )}

            </div>
          </section>
        </div>
 
        {/* SECTION 6: ULTRA-MINIMAL FOOTNOTE */}
        <div id="preview-sec-footnote" className="relative">
          <footer className="bg-white py-16 px-6 border-t border-[#969696]/30">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-xs text-[#51615a] leading-relaxed max-w-lg mx-auto">
                This microsite is a simple progress space for OAHA. Return to our main site at{" "}
                <a
                  href="https://oaha.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2E536B] font-semibold underline hover:text-[#2BB7BA] transition-colors"
                >
                  oaha.uk
                </a>{" "}
                or connect with us on LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/oahasocialsustainability/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2E536B] font-semibold underline hover:text-[#2BB7BA] transition-colors"
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

      {/* ECOSYSTEM REGISTRATION DIALOG MODAL */}
      {isMapFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop blur */}
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMapFormOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="relative bg-white border border-[#969696]/35 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl z-10 transition-all max-h-[85vh] overflow-y-auto text-left">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#969696]/10 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#FF9900] uppercase tracking-widest block">Shared Contribution Form</span>
                <h3 className="text-xl font-normal text-[#2E536B] tracking-tight">Contribute to the ecosystem map</h3>
                <p className="text-xs text-[#51615a] font-sans">
                  Answers will be sent directly to <strong className="text-[#2E536B]">info.oaha.uk@gmail.com</strong>
                </p>
              </div>
              <button 
                onClick={() => setIsMapFormOpen(false)}
                className="p-1 px-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-all cursor-pointer font-mono text-xs font-semibold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {isMapSubmitted ? (
              <div className="space-y-6 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#3AB03A]/10 text-[#3AB03A] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-[#2E536B] uppercase tracking-wider">Contribution Sent Successfully!</h4>
                  <p className="text-xs text-[#51615a] leading-relaxed">
                    Thank you, <strong>{mapFormName}</strong>. Your choice <strong>"{mapContributionType}"</strong> has been sent directly to <strong>info.oaha.uk@gmail.com</strong>.
                  </p>
                  
                  {isMapMockMode && (
                    <div className="mt-2 p-3.5 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-xl text-left space-y-2">
                      <p className="text-xs text-[#986430] font-sans font-medium">
                        💡 <strong>Developer Note:</strong> The form submitted successfully in simulation mode because <strong>RESEND_API_KEY</strong> is not yet configured. To make real emails fly, add your Resend API key to the Secrets/Settings panel.
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-[#51615a] leading-relaxed">
                    If you require an instant backup copy or would like to send manually, you may use the button below.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent(`Ecosystem Map Contribution: ${mapContributionType}`);
                      const body = encodeURIComponent(
                        `Hi info.oaha.uk,\n\n` +
                        `I would like to contribute to the Wales Social Mobility Ecosystem Map.\n\n` +
                        `Contribution Type: ${mapContributionType}\n\n` +
                        `Contact Name: ${mapFormName}\n` +
                        `Contact Details: ${mapFormContact}\n\n` +
                        `Details / Message:\n${mapFormMessage || "None provided"}\n\n` +
                        `Regards,\n\n` +
                        `Submitted via Wales Ecosystem Portal.`
                      );
                      window.location.href = `mailto:info.oaha.uk@gmail.com?subject=${subject}&body=${body}`;
                    }}
                    className="w-full py-3 bg-[#2E536B] hover:bg-[#2E536B]/95 text-white text-xs font-semibold uppercase tracking-widest transition-all rounded shadow-xs cursor-pointer text-center"
                  >
                    Open Email Client (Backup)
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setIsMapSubmitted(false);
                      setMapFormName("");
                      setMapFormContact("");
                      setMapFormMessage("");
                      setMapSendError(null);
                      setIsMapMockMode(false);
                    }}
                    className="w-full py-2.5 border border-[#969696]/40 hover:bg-[#faf9f6]/45 text-[#51615a] text-xs font-semibold uppercase tracking-widest transition-all rounded cursor-pointer text-center"
                  >
                    Submit Another Contribution
                  </button>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsMapSending(true);
                  setMapSendError(null);
                  setIsMapMockMode(false);

                  try {
                    const response = await fetch("/api/send-email", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        type: "map",
                        data: {
                          contributionType: mapContributionType,
                          name: mapFormName,
                          contact: mapFormContact,
                          message: mapFormMessage
                        }
                      })
                    });

                    if (!response.ok) {
                      const errData = await response.json().catch(() => ({}));
                      throw new Error(errData.error || `HTTP error ${response.status}`);
                    }

                    const resData = await response.json();
                    if (resData.isMockMode) {
                      setIsMapMockMode(true);
                    }
                    setIsMapSubmitted(true);
                  } catch (error: any) {
                    console.error("Failed to submit ecosystem contribution via Resend:", error);
                    setMapSendError(error.message || "An unexpected error occurred. Please try again.");
                  } finally {
                    setIsMapSending(false);
                  }
                }} 
                className="space-y-4 text-left"
              >
                
                {/* 1. Contribution Type */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">How would you like to contribute?</label>
                  <select
                    value={mapContributionType}
                    onChange={(e) => setMapContributionType(e.target.value)}
                    className="w-full bg-slate-50 border border-[#969696]/30 p-2.5 text-xs focus:outline-none focus:border-[#2E536B] rounded-lg cursor-pointer font-sans text-[#51615a]"
                  >
                    <option value="Add my organisation">Add my organisation</option>
                    <option value="Share insight">Share insight</option>
                    <option value="Suggest another organisation">Suggest another organisation</option>
                    <option value="Highlight a gap">Highlight a gap</option>
                    <option value="Offer data or evidence">Offer data or evidence</option>
                  </select>
                </div>

                {/* 2. Full Name */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#2E536B] font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={mapFormName}
                    onChange={(e) => setMapFormName(e.target.value)}
                    placeholder="e.g. John Evans"
                    className="w-full bg-slate-50 border border-[#969696]/30 p-2.5 text-xs focus:outline-none focus:border-[#2E536B] rounded transition-all"
                  />
                </div>

                {/* 3. Contact Details */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#2E536B] font-semibold">Contact Details</label>
                  <input
                    type="text"
                    required
                    value={mapFormContact}
                    onChange={(e) => setMapFormContact(e.target.value)}
                    placeholder="e.g. email@organisation.org.uk or 07123456789"
                    className="w-full bg-slate-50 border border-[#969696]/30 p-2.5 text-xs focus:outline-none focus:border-[#2E536B] rounded transition-all"
                  />
                </div>

                {/* 4. Support details or message */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#2E536B] font-semibold">Contribution Details / Message (Optional)</label>
                  <textarea
                    rows={4}
                    value={mapFormMessage}
                    onChange={(e) => setMapFormMessage(e.target.value)}
                    placeholder="Provide details about your organisation, the gap mapping, suggestions, or evidence..."
                    className="w-full bg-slate-50 border border-[#969696]/30 p-2.5 text-xs focus:outline-none focus:border-[#2E536B] rounded transition-all"
                  />
                </div>

                {mapSendError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded font-medium">
                    ⚠️ {mapSendError}
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-4 flex gap-3 border-t border-[#969696]/10">
                  <button
                    type="submit"
                    disabled={isMapSending}
                    className="flex-1 py-3 bg-[#2E536B] hover:bg-[#2E536B]/95 text-white text-xs font-semibold uppercase tracking-widest transition-all rounded shadow-xs cursor-pointer text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isMapSending ? "Sending..." : "Send Contribution"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMapFormOpen(false)}
                    className="px-5 py-3 border border-[#969696]/30 hover:bg-[#faf9f6]/45 text-[#51615a] text-xs font-semibold uppercase tracking-widest transition-all rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
