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
import { translations, Language } from "./lib/translations";

function UkFlagIcon({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`${className} rounded-[2px] shadow-xs inline-block shrink-0 overflow-hidden ring-1 ring-white/20`}
      aria-hidden="true"
    >
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v40 M0,20 h60" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

function WelshFlagIcon({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`${className} rounded-[2px] shadow-xs inline-block shrink-0 overflow-hidden ring-1 ring-white/20`}
      aria-hidden="true"
    >
      <rect width="60" height="20" fill="#FFFFFF" />
      <rect y="20" width="60" height="20" fill="#00AB39" />
      <g fill="#D30731">
        {/* Dragon head and neck */}
        <path d="M38,10 Q42,9 44,12 Q46,13 47,12 Q45,15 42,16 Q39,18 36,17 Q34,14 38,10 Z" />
        {/* Dragon body and wings */}
        <path d="M22,18 C20,13 26,10 32,13 C35,10 40,11 41,15 C39,18 36,19 33,21 C30,22 25,23 22,25 C20,24 19,20 22,18 Z" />
        {/* Raised wings */}
        <path d="M26,12 L31,5 L33,11 L38,6 L38,13 Z" />
        {/* Tail */}
        <path d="M21,24 Q16,25 14,21 Q12,23 11,20 Q10,23 8,22 Q11,25 16,26 Q19,27 22,25 Z" />
        {/* Legs and claws */}
        <path d="M24,25 L23,30 L26,30 L25,26 Z" />
        <path d="M33,23 L32,30 L35,30 L35,24 Z" />
        <path d="M38,21 L40,28 L43,28 L41,22 Z" />
      </g>
    </svg>
  );
}

export default function App() {
  // Bilingual state with localStorage persistence
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("oaha_lang") as Language;
      if (stored === "en" || stored === "cy") return stored;
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang") as Language;
      if (urlLang === "en" || urlLang === "cy") return urlLang;
    }
    return "en";
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("oaha_lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  const t = translations[lang];

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

  // Core metrics & priorities mapped to active language
  const WHY_NOW_ICONS = [MapPin, GraduationCap, Users, Briefcase, BarChart3, Compass];
  const WHY_NOW_STYLES = [
    { bgClass: "bg-[#2BB7BA]/10", textClass: "text-[#2BB7BA]", groupHoverBg: "group-hover:bg-[#2BB7BA]", groupHoverText: "group-hover:text-[#2BB7BA]", hoverBorder: "hover:border-[#2BB7BA]/60" },
    { bgClass: "bg-[#FF9900]/10", textClass: "text-[#FF9900]", groupHoverBg: "group-hover:bg-[#FF9900]", groupHoverText: "group-hover:text-[#FF9900]", hoverBorder: "hover:border-[#FF9900]/60" },
    { bgClass: "bg-[#3AB03A]/10", textClass: "text-[#3AB03A]", groupHoverBg: "group-hover:bg-[#3AB03A]", groupHoverText: "group-hover:text-[#3AB03A]", hoverBorder: "hover:border-[#3AB03A]/60" },
    { bgClass: "bg-[#986430]/10", textClass: "text-[#986430]", groupHoverBg: "group-hover:bg-[#986430]", groupHoverText: "group-hover:text-[#986430]", hoverBorder: "hover:border-[#986430]/60" },
    { bgClass: "bg-[#969696]/10", textClass: "text-[#969696]", groupHoverBg: "group-hover:bg-[#969696]", groupHoverText: "group-hover:text-[#969696]", hoverBorder: "hover:border-[#969696]/60" },
    { bgClass: "bg-[#2E536B]/10", textClass: "text-[#2E536B]", groupHoverBg: "group-hover:bg-[#2E536B]", groupHoverText: "group-hover:text-[#2E536B]", hoverBorder: "hover:border-[#2E536B]/60" }
  ];

  const WHY_NOW_CARDS = t.whyNow.cards.map((card, idx) => ({
    icon: WHY_NOW_ICONS[idx % WHY_NOW_ICONS.length],
    title: card.title,
    desc: card.desc,
    ...WHY_NOW_STYLES[idx % WHY_NOW_STYLES.length]
  }));

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
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => {
            const elem = document.getElementById("preview-sec-hero");
            if (elem) elem.scrollIntoView({ behavior: "smooth" });
          }}>
            <OahaLogo size={32} className="shadow-xs rounded-sm hover:scale-105 transition-all" />
            <span className="font-semibold tracking-widest text-[#2E536B] text-sm uppercase">OAHA</span>
          </div>

          {/* Desktop Navigation menu with 8 sections */}
          <nav className="hidden xl:flex items-center gap-3 xl:gap-4.5">
            {[
              { label: t.nav.whyNow, id: "preview-sec-why-now", hover: "hover:text-[#2BB7BA]" },
              { label: t.nav.phase1Summary, id: "preview-sec-story-so-far", hover: "hover:text-[#FF9900]" },
              { label: t.nav.theGaps, id: "preview-sec-ecosystem-friction", hover: "hover:text-[#3AB03A]" },
              { label: t.nav.phase2Plan, id: "preview-sec-whitepaper", hover: "hover:text-[#986430]" },
              { label: t.nav.theSystem, id: "preview-sec-why-this-matters", hover: "hover:text-[#2E536B]" },
              { label: t.nav.ecosystemMap, id: "preview-sec-ecosystem-map", hover: "hover:text-[#2BB7BA]" },
              { label: t.nav.collaboration, id: "preview-sec-what-we-need-now", hover: "hover:text-[#FF9900]" },
              { label: t.nav.coordination, id: "preview-sec-coordination", hover: "hover:text-[#3AB03A]" }
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
          </nav>

          {/* Right Header Area: Language Switcher + Get Involved / Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Always-visible Language Switcher (Desktop & Mobile) */}
            <div className="flex items-center p-1 bg-slate-100 rounded-md border border-slate-200 shadow-xs">
              <button
                onClick={() => handleSetLang("en")}
                className={`px-2 sm:px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                  lang === "en" ? "bg-white text-[#2E536B] shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
                title="Switch website to English"
              >
                <UkFlagIcon className="w-4 h-2.5" />
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
              </button>
              <button
                onClick={() => handleSetLang("cy")}
                className={`px-2 sm:px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                  lang === "cy" ? "bg-white text-[#2E536B] shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
                title="Newid gwefan i'r Gymraeg (Switch website to Welsh)"
              >
                <WelshFlagIcon className="w-4 h-2.5" />
                <span className="hidden sm:inline">Cymraeg</span>
                <span className="sm:hidden">CY</span>
              </button>
            </div>

            <button
              onClick={() => {
                const elem = document.getElementById("preview-sec-get-involved");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:inline-block text-[10px] xl:text-[11px] bg-[#2E536B] hover:bg-[#FF9900] active:bg-[#3AB03A] text-white px-3.5 py-2 font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer rounded-sm"
            >
              {t.nav.getInvolved}
            </button>

            {/* Mobile navigation toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden px-2.5 py-1.5 border border-[#969696]/20 rounded-md hover:bg-slate-50 flex items-center gap-1 cursor-pointer focus:outline-none"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E536B]">{t.nav.menu}</span>
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 border-t border-[#969696]/20 pt-3 pb-2 space-y-2 bg-white rounded-lg p-3 shadow-md">
            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 px-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Iaith / Language</span>
              <div className="flex items-center p-0.5 bg-slate-100 rounded border border-slate-200">
                <button
                  onClick={() => handleSetLang("en")}
                  className={`px-2.5 py-1 text-xs font-bold rounded flex items-center gap-1.5 ${
                    lang === "en" ? "bg-white text-[#2E536B] shadow-xs" : "text-slate-600"
                  }`}
                >
                  <UkFlagIcon className="w-3.5 h-2.5" />
                  <span>English</span>
                </button>
                <button
                  onClick={() => handleSetLang("cy")}
                  className={`px-2.5 py-1 text-xs font-bold rounded flex items-center gap-1.5 ${
                    lang === "cy" ? "bg-white text-[#2E536B] shadow-xs" : "text-slate-600"
                  }`}
                >
                  <WelshFlagIcon className="w-3.5 h-2.5" />
                  <span>Cymraeg</span>
                </button>
              </div>
            </div>

            {[
              { label: t.nav.whyNow, id: "preview-sec-why-now" },
              { label: t.nav.phase1Summary, id: "preview-sec-story-so-far" },
              { label: t.nav.theGaps, id: "preview-sec-ecosystem-friction" },
              { label: t.nav.phase2Plan, id: "preview-sec-whitepaper" },
              { label: t.nav.theSystem, id: "preview-sec-why-this-matters" },
              { label: t.nav.ecosystemMap, id: "preview-sec-ecosystem-map" },
              { label: t.nav.collaboration, id: "preview-sec-what-we-need-now" },
              { label: t.nav.coordination, id: "preview-sec-coordination" }
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
              {t.nav.getInvolved}
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
                  <span>{t.hero.tag}</span>
                </span>
                
                <h1 className="text-4xl sm:text-[3.25rem] lg:text-[3.85rem] font-light tracking-tight text-[#2E536B] leading-[1.12] font-sans">
                  {t.hero.titleMain} <br />
                  <span className="text-[#3AB03A] font-normal">{t.hero.titleAccent}</span>
                </h1>
                
                <p className="text-sm uppercase tracking-wider text-[#51615a] font-semibold leading-relaxed">
                  {t.hero.lead}
                </p>
                
                <div className="text-sm sm:text-base text-[#51615a] max-w-xl leading-relaxed space-y-3">
                  <p>{t.hero.p1}</p>
                  <p>{t.hero.p2}</p>
                  <p>{t.hero.p3}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center pt-1">
                  <button
                    onClick={() => {
                      const elem = document.getElementById("preview-sec-story-so-far");
                      if (elem) elem.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 bg-[#2E536B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs rounded-xs"
                  >
                    <span>{t.hero.btnLearning}</span>
                    <ArrowDown className="w-3.5 h-3.5 text-[#FF9900]" />
                  </button>
                  <button
                    onClick={() => {
                      const elem = document.getElementById("preview-sec-get-involved");
                      if (elem) elem.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 border-2 border-[#2E536B] text-[#2E536B] text-xs font-semibold uppercase tracking-widest hover:bg-[#2E536B]/5 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 rounded-xs"
                  >
                    <span>{t.hero.btnSupport}</span>
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
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.whyNow.tag}</span>
                  <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                    {t.whyNow.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.whyNow.p1}
                  </p>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.whyNow.p2}
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
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">{t.whyNow.connectiveTag}</span>
                  <p className="text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium text-sm sm:text-base">
                    {t.whyNow.connectiveText}
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
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.phase1.tag}</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                  {t.phase1.title}
                </h2>
                
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  {t.phase1.p1}
                </p>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  {t.phase1.p2}
                </p>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  {t.phase1.p3}
                </p>
              </div>
 
              {/* Horizontal Milestones Timeline */}
              <div className="space-y-6 border-t border-[#969696]/20 pt-8">
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-2xl font-normal text-[#2E536B] tracking-tight">{t.phase1.timelineTitle}</h3>
                </div>
                
                <div className="relative pt-4">
                  {/* Horizontal joining connector line running across on medium screens */}
                  <div className="hidden md:block absolute top-[2.1rem] left-10 right-10 h-[1.5px] bg-[#969696]/25 z-0" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                    {t.phase1.timeline.map((item, idx) => {
                      const isLast = idx === t.phase1.timeline.length - 1;
                      return (
                        <div key={idx} className="space-y-2 relative text-left group flex flex-col justify-start">
                          <div className="flex items-center gap-3 md:block">
                            <div className={`w-8 h-8 rounded-full ${isLast ? "bg-[#FF9900] ring-4 ring-[#FF9900]/15" : "bg-[#3AB03A]"} text-white flex items-center justify-center text-xs font-bold md:mb-2 shrink-0 shadow-xs border-2 border-white transition-transform duration-300 group-hover:scale-110`}>
                              {item.num}
                            </div>
                            <span className={`text-xs uppercase tracking-wider font-extrabold ${isLast ? "text-[#FF9900]" : "text-slate-400"}`}>
                              {item.month}
                            </span>
                          </div>
                          <div className="pl-11 md:pl-0 space-y-1.5 flex-1 flex flex-col justify-start">
                            <div className="md:h-12 flex items-start">
                              <h4 className={`text-sm font-bold uppercase tracking-wide leading-snug transition-colors ${isLast ? "text-[#FF9900]" : "text-slate-800 group-hover:text-[#3AB03A]"}`}>
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-sm text-[#51615a] leading-relaxed border-t border-gray-100 pt-1.5 font-sans">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
 
              {/* Participating Partners Logos Section */}
              <PartnerLogos />

              {/* Call To Action buttons relocated under participating partners */}
              <div className="pt-2 pb-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2E536B] hover:bg-[#2E536B]/95 text-white text-xs font-semibold uppercase tracking-widest transition-all rounded shadow-xs"
                >
                  <UkFlagIcon className="w-5 h-3.5" />
                  <span>{t.phase1.readEnBtn}</span>
                </a>
                <a
                  href="/whitepaper-cy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2E536B] hover:bg-[#2E536B]/95 text-white text-xs font-semibold uppercase tracking-widest transition-all rounded shadow-xs"
                >
                  <WelshFlagIcon className="w-5 h-3.5" />
                  <span>{t.phase1.readCyBtn}</span>
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
              <LearnerJourneyFlow lang={lang} />

              {/* Key Takeaway Callout */}
              <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">{t.journey.takeawayTag}</span>
                <p className="text-base text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                  {t.journey.takeawayText}
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
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.phase2.tag}</span>
                  <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">{t.phase2.title}</h2>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.phase2.p1}
                  </p>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.phase2.p2}
                  </p>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.phase2.p3}
                  </p>
                </div>
 
                <div className="lg:col-span-5 bg-white border border-[#969696]/30 p-8 space-y-6 rounded shadow-sm">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-[#2E536B] border-b border-[#969696]/30 pb-2">{t.phase2.aimsTitle}</h3>
                  <ul className="space-y-5 text-sm text-[#51615a]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2BB7BA] mt-1.5 shrink-0"></span>
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#2E536B] block">{t.phase2.aim1Title}</span>
                        <span className="text-xs text-[#51615a]">{t.phase2.aim1Desc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] mt-1.5 shrink-0"></span>
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#2E536B] block">{t.phase2.aim2Title}</span>
                        <span className="text-xs text-[#51615a]">{t.phase2.aim2Desc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A] mt-1.5 shrink-0"></span>
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#2E536B] block">{t.phase2.aim3Title}</span>
                        <span className="text-xs text-[#51615a]">{t.phase2.aim3Desc}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.phase2.roadmapTag}</span>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.phase2.roadmapLead}
                  </p>
                </div>

                {/* 4 brand-colored interactive cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                  {t.phase2.sprints.map((s, idx) => {
                    const phaseColors = [
                      { text: "text-[#2BB7BA]", bg: "bg-[#2BB7BA]/10", border: "border-t-[#2BB7BA]", hoverBorder: "hover:border-[#2BB7BA]" },
                      { text: "text-[#FF9900]", bg: "bg-[#FF9900]/10", border: "border-t-[#FF9900]", hoverBorder: "hover:border-[#FF9900]" },
                      { text: "text-[#3AB03A]", bg: "bg-[#3AB03A]/10", border: "border-t-[#3AB03A]", hoverBorder: "hover:border-[#3AB03A]" },
                      { text: "text-[#2E536B]", bg: "bg-[#2E536B]/10", border: "border-t-[#2E536B]", hoverBorder: "hover:border-[#2E536B]" },
                    ];
                    const color = phaseColors[idx % phaseColors.length];

                    return (
                      <div key={idx} className={`bg-white border-t-[3px] ${color.border} border-x border-b border-[#969696]/20 ${color.hoverBorder} p-6 space-y-3 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-md text-left flex flex-col justify-start h-full`}>
                        <span className={`text-xs font-mono font-bold tracking-wider block ${color.text}`}>{s.num}</span>
                        <h4 className="font-medium text-slate-800 text-sm uppercase tracking-wider leading-snug md:min-h-[3rem]">{s.title}</h4>
                        <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                          {s.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Outcome summary at the bottom */}
              <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">{t.phase2.deliverablesTag}</span>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                  {t.phase2.deliverablesText}
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
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.system.tag}</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight leading-tight">
                  {t.system.title}
                </h2>
                
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  {t.system.p1}
                </p>
                
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  {t.system.p2}
                </p>

                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  {t.system.p3}
                </p>
                
                <div className="space-y-3 pt-4 border-t border-[#969696]/20">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-[#51615a] border-b border-[#969696]/20 pb-2">
                    {t.system.returnsTitle}
                  </h3>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {t.system.returnsList.map((ret, idx) => {
                      const dotColors = ["bg-[#FF9900]", "bg-[#2BB7BA]", "bg-[#3AB03A]", "bg-[#986430]", "bg-[#2E536B]", "bg-[#2BB7BA]"];
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full ${dotColors[idx % dotColors.length]} mt-2 shrink-0`}></span>
                          <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                            {ret}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Right Column: Improved Visual Pipeline Tracker */}
              <div className="lg:col-span-5 w-full">
                <div className="w-full bg-[#faf9f6]/40 border border-[#969696]/20 p-5 sm:p-6 rounded-3xl shadow-xs">
                  <div className="space-y-6">
                    <div className="border-b border-[#969696]/15 pb-4 mb-2 text-left">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">{t.system.actionCycleTag}</span>
                      <h3 className="text-lg font-semibold text-[#2E536B] tracking-tight">{t.system.actionCycleTitle}</h3>
                    </div>

                    <div className="relative pl-6 md:pl-8 space-y-6 before:absolute before:left-[11px] md:before:left-[15px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#2BB7BA] before:via-[#FF9900] before:to-[#969696] before:opacity-30">
                      {t.system.pillars.map((item, idx) => {
                        const pillarColors = [
                          { color: "#2BB7BA", dotBg: "bg-[#2BB7BA]" },
                          { color: "#FF9900", dotBg: "bg-[#FF9900]" },
                          { color: "#3AB03A", dotBg: "bg-[#3AB03A]" },
                          { color: "#969696", dotBg: "bg-[#969696]" }
                        ];
                        const col = pillarColors[idx % pillarColors.length];
                        return (
                          <div key={idx} className="relative group transition-all duration-300">
                            {/* Visual Connector Node */}
                            <div className="absolute -left-[22px] md:-left-[27px] top-1 flex items-center justify-center">
                              <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${col.dotBg} text-white flex items-center justify-center font-mono text-[9px] md:text-[10px] font-bold shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                {item.num}
                              </div>
                            </div>

                            {/* Card */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#969696]/15 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-300 text-left">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1 border-b border-slate-100 mb-2">
                                <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider" style={{ color: col.color }}>
                                  {item.title}
                                </h4>
                                <span className="text-[9px] font-mono text-slate-400 font-semibold uppercase tracking-widest">
                                  {lang === "cy" ? "Colofn" : "Pillar"} {item.num}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#51615a] leading-relaxed font-sans">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
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
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block lg:hidden">{t.ecosystem.tag}</span>
                  <WalesEcosystemMap />
                </div>
                
                {/* Text and CTA: on the right */}
                <div className="lg:col-span-7 space-y-4 text-left flex flex-col justify-center h-full pt-2 lg:pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] hidden lg:block">{t.ecosystem.tag}</span>
                  
                  <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight leading-tight">
                    {t.ecosystem.title}
                  </h2>
                  
                  <div className="text-sm sm:text-base text-[#51615a] leading-relaxed space-y-4 font-sans">
                    <p>{t.ecosystem.p1}</p>
                    <p>{t.ecosystem.p2}</p>
                  </div>
 
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setMapFormName("");
                        setMapFormContact("");
                        setMapFormMessage("");
                        setMapContributionType(lang === "cy" ? "Ychwanegu fy sefydliad" : "Add my organisation");
                        setIsMapFormOpen(true);
                        setIsMapSubmitted(false);
                      }}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2E536B] hover:bg-[#2E536B]/95 text-white text-xs font-semibold uppercase tracking-widest transition-all rounded shadow-xs cursor-pointer"
                    >
                      <MapPin className="w-4 h-4 text-[#FF9900]" />
                      <span>{t.ecosystem.contributeBtn}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom text: living map */}
              <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF9900]">{t.ecosystem.statusTag}</span>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                  {t.ecosystem.statusText}
                </p>
              </div>

            </div>
          </section>
        </div>

        {/* NEW SECTION: NEXT STAGE AMBITION */}
        <div id="preview-sec-next-stage-ambition" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left font-sans">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.nextStage.tag}</span>
                  <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight leading-tight">
                    {t.nextStage.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#51615a] font-semibold leading-relaxed pt-2">
                    {t.nextStage.lead}
                  </p>
                </div>
                <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-8">
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.nextStage.p1}
                  </p>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.nextStage.p2}
                  </p>
                  <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                    {t.nextStage.p3}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SECTION 4C: WHAT WE NEED NOW */}
        <div id="preview-sec-what-we-need-now" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-[#faf9f6]/30 border-b border-[#969696]/30">
            <div className="max-w-6xl mx-auto space-y-8">
              
              <div className="space-y-2 text-left max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.needs.tag}</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                  {t.needs.title}
                </h2>
                <p className="text-sm sm:text-base text-[#51615a] leading-relaxed">
                  {t.needs.lead}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.needs.cards.map((card, idx) => {
                  const cardIcons = [Lightbulb, Network, CalendarDays, PoundSterling];
                  const cardStyles = [
                    { border: "hover:border-[#2BB7BA]/60", bg: "bg-[#2BB7BA]/10", text: "text-[#2BB7BA]", hoverBg: "group-hover:bg-[#2BB7BA]", hoverText: "group-hover:text-[#2BB7BA]" },
                    { border: "hover:border-[#FF9900]/60", bg: "bg-[#FF9900]/10", text: "text-[#FF9900]", hoverBg: "group-hover:bg-[#FF9900]", hoverText: "group-hover:text-[#FF9900]" },
                    { border: "hover:border-[#3AB03A]/60", bg: "bg-[#3AB03A]/10", text: "text-[#3AB03A]", hoverBg: "group-hover:bg-[#3AB03A]", hoverText: "group-hover:text-[#3AB03A]" },
                    { border: "hover:border-[#2E536B]/60", bg: "bg-[#2E536B]/10", text: "text-[#2E536B]", hoverBg: "group-hover:bg-[#2E536B]", hoverText: "group-hover:text-[#2E536B]" }
                  ];
                  const IconComp = cardIcons[idx % cardIcons.length];
                  const st = cardStyles[idx % cardStyles.length];

                  return (
                    <div key={idx} className={`group bg-white border border-[#969696]/20 ${st.border} p-6 rounded-lg transition-all duration-300 hover:shadow-sm`}>
                      <div className={`w-10 h-10 rounded-lg ${st.bg} flex items-center justify-center ${st.text} mb-4 ${st.hoverBg} group-hover:text-white transition-all duration-300`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className={`text-sm font-bold tracking-wider text-slate-800 uppercase mb-2 ${st.hoverText} transition-colors`}>
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 4D: WHO IS COORDINATING THIS WORK? */}
        <div id="preview-sec-coordination" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-white border-b border-[#969696]/30">
            <div className="max-w-4xl mx-auto text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.coordination.tag}</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
                  {t.coordination.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#51615a] leading-relaxed font-sans">
                {t.coordination.p1}
              </p>
              <p className="text-sm sm:text-base text-[#51615a] leading-relaxed font-sans">
                {t.coordination.p2}
              </p>
            </div>
          </section>
        </div>

        {/* SECTION 5: GET INVOLVED (THE ULTRACLEAN FORM) */}
        <div id="preview-sec-get-involved" className="relative">
          <section className="py-12 sm:py-16 px-6 sm:px-12 bg-[#faf9f6]/30 border-b border-[#969696]/30">
            <div className="max-w-2xl mx-auto space-y-6">
              
              <div className="text-center space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">{t.getInvolved.tag}</span>
                <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">{t.getInvolved.title}</h2>
              </div>

              {isSubmitted ? (
                <div className="bg-white border border-[#969696]/30 p-8 rounded-2xl text-center space-y-4 shadow-sm max-w-xl mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#2E536B]/10 text-[#2E536B] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-[#2E536B] uppercase tracking-wider">{t.getInvolved.success.title}</h3>
                  <p className="text-xs text-[#51615a] leading-relaxed">
                    {t.getInvolved.success.desc(contactFormName, contactOrganisation)}
                  </p>

                  {isFormMockMode && (
                    <div className="mt-2 p-3.5 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-xl text-left space-y-2">
                      <p className="text-xs text-[#986430] font-sans font-medium">
                        💡 <strong>{t.getInvolved.success.mockNote}</strong>
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-[#51615a] leading-relaxed">
                    {t.getInvolved.success.instantBackupPrompt}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={() => {
                        const tabName = activeInvolvedTab === "employers" 
                          ? t.getInvolved.tabs.employers 
                          : activeInvolvedTab === "partners" 
                            ? t.getInvolved.tabs.partners 
                            : activeInvolvedTab === "education"
                              ? t.getInvolved.tabs.education
                              : activeInvolvedTab === "government"
                                ? t.getInvolved.tabs.government
                                : t.getInvolved.tabs.funders;

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
                      {t.getInvolved.success.emailBackupBtn}
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-3 border border-[#2E536B] text-[#2E536B] text-[10px] uppercase font-bold tracking-wider hover:bg-[#faf9f6] transition-all cursor-pointer rounded-lg"
                    >
                      {t.getInvolved.success.submitAnotherBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Tabs Selector Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 border-b border-[#969696]/20 pb-px">
                    {[
                      { id: "employers", label: t.getInvolved.tabs.employers, activeColor: "border-[#2BB7BA] text-[#2BB7BA]", activeBg: "bg-[#2BB7BA]/10", hoverBg: "hover:bg-[#2BB7BA]/5", hoverColor: "hover:text-[#2BB7BA] hover:border-[#2BB7BA]/20" },
                      { id: "partners", label: t.getInvolved.tabs.partners, activeColor: "border-[#FF9900] text-[#FF9900]", activeBg: "bg-[#FF9900]/10", hoverBg: "hover:bg-[#FF9900]/5", hoverColor: "hover:text-[#FF9900] hover:border-[#FF9900]/20" },
                      { id: "education", label: t.getInvolved.tabs.education, activeColor: "border-[#3AB03A] text-[#3AB03A]", activeBg: "bg-[#3AB03A]/10", hoverBg: "hover:bg-[#3AB03A]/5", hoverColor: "hover:text-[#3AB03A] hover:border-[#3AB03A]/20" },
                      { id: "government", label: t.getInvolved.tabs.government, activeColor: "border-[#986430] text-[#986430]", activeBg: "bg-[#986430]/10", hoverBg: "hover:bg-[#986430]/5", hoverColor: "hover:text-[#986430] hover:border-[#986430]/20" },
                      { id: "funders", label: t.getInvolved.tabs.funders, activeColor: "border-[#2E536B] text-[#2E536B]", activeBg: "bg-[#2E536B]/10", hoverBg: "hover:bg-[#2E536B]/5", hoverColor: "hover:text-[#2E536B] hover:border-[#2E536B]/20" }
                    ].map((tab) => {
                      const isActive = activeInvolvedTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            setActiveInvolvedTab(tab.id as any);
                            const firstOption = t.getInvolved.options[tab.id as keyof typeof t.getInvolved.options] as string;
                            setSelectedOption(firstOption);

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
                          className={`px-3 py-3 text-[10px] uppercase font-bold tracking-wider transition-all duration-200 border-b-2 text-center -mb-px outline-none rounded-t-lg ${
                            isActive
                              ? `${tab.activeColor} ${tab.activeBg}`
                              : `border-transparent text-[#51615a] bg-transparent ${tab.hoverBg} ${tab.hoverColor}`
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
                      {t.getInvolved.tabContent[activeInvolvedTab].title}
                    </h3>
                    <p className="text-sm text-[#51615a] leading-relaxed font-sans">
                      {t.getInvolved.tabContent[activeInvolvedTab].desc}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-6 bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl shadow-xs text-left">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">{t.getInvolved.form.fullName}</label>
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
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">{t.getInvolved.form.organisation}</label>
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
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">{t.getInvolved.form.role}</label>
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
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">{t.getInvolved.form.orgType}</label>
                        <select
                          value={contactOrgType}
                          onChange={(e) => setContactOrgType(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg cursor-pointer text-[#1a2521]"
                        >
                          {t.getInvolved.orgTypes.map((ot) => (
                            <option key={ot.value} value={ot.value}>{ot.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">{t.getInvolved.form.email}</label>
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
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">{t.getInvolved.form.phone}</label>
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
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">
                          {t.getInvolved.form.involvementOption}
                        </label>
                        <select
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          className="w-full bg-white border border-[#969696]/30 p-3 text-sm focus:outline-none focus:border-[#2E536B] rounded-lg cursor-pointer text-[#1a2521]"
                        >
                          {t.getInvolved.options.all.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message / anything useful to know */}
                      <div className="col-span-full space-y-1.5">
                        <label className="block text-[10px] uppercase font-sans tracking-wider text-[#2E536B] font-bold select-none">
                          {t.getInvolved.form.message}
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
                      <span>{isFormSending ? t.getInvolved.form.submittingBtn : t.getInvolved.form.submitBtn}</span>
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
                {t.footer.mainText} Return to our main site at{" "}
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
                {t.footer.copyright} • {t.footer.bilingualNotice}
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
                <span className="text-[10px] font-mono font-bold text-[#FF9900] uppercase tracking-widest block">{t.mapModal.tag}</span>
                <h3 className="text-xl font-normal text-[#2E536B] tracking-tight">{t.mapModal.title}</h3>
                <p className="text-xs text-[#51615a] font-sans">
                  {t.mapModal.recipientNote}
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
                  <h4 className="text-sm font-bold text-[#2E536B] uppercase tracking-wider">{t.mapModal.successTitle}</h4>
                  <p className="text-xs text-[#51615a] leading-relaxed">
                    {t.mapModal.successDesc(mapFormName, mapContributionType)}
                  </p>
                  
                  {isMapMockMode && (
                    <div className="mt-2 p-3.5 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-xl text-left space-y-2">
                      <p className="text-xs text-[#986430] font-sans font-medium">
                        💡 <strong>Developer Note:</strong> The form submitted successfully in simulation mode because <strong>RESEND_API_KEY</strong> is not yet configured. To make real emails fly, add your Resend API key to the Secrets/Settings panel.
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-[#51615a] leading-relaxed">
                    {t.getInvolved.success.instantBackupPrompt}
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
                    {t.mapModal.emailBackupBtn}
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
                    {t.mapModal.submitAnotherBtn}
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
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">{t.mapModal.howContributeLabel}</label>
                  <select
                    value={mapContributionType}
                    onChange={(e) => setMapContributionType(e.target.value)}
                    className="w-full bg-slate-50 border border-[#969696]/30 p-2.5 text-xs focus:outline-none focus:border-[#2E536B] rounded-lg cursor-pointer font-sans text-[#51615a]"
                  >
                    {t.mapModal.contributionTypes.map((ct) => (
                      <option key={ct.value} value={ct.value}>{ct.label}</option>
                    ))}
                  </select>
                </div>

                {/* 2. Full Name */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#2E536B] font-semibold">{t.mapModal.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={mapFormName}
                    onChange={(e) => setMapFormName(e.target.value)}
                    placeholder={t.mapModal.namePlaceholder}
                    className="w-full bg-slate-50 border border-[#969696]/30 p-2.5 text-xs focus:outline-none focus:border-[#2E536B] rounded transition-all"
                  />
                </div>

                {/* 3. Contact Details */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#2E536B] font-semibold">{t.mapModal.contactLabel}</label>
                  <input
                    type="text"
                    required
                    value={mapFormContact}
                    onChange={(e) => setMapFormContact(e.target.value)}
                    placeholder={t.mapModal.contactPlaceholder}
                    className="w-full bg-slate-50 border border-[#969696]/30 p-2.5 text-xs focus:outline-none focus:border-[#2E536B] rounded transition-all"
                  />
                </div>

                {/* 4. Support details or message */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-[#2E536B] font-semibold">{t.mapModal.messageLabel}</label>
                  <textarea
                    rows={4}
                    value={mapFormMessage}
                    onChange={(e) => setMapFormMessage(e.target.value)}
                    placeholder={t.mapModal.messagePlaceholder}
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
                    {isMapSending ? t.mapModal.sendingBtn : t.mapModal.sendBtn}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMapFormOpen(false)}
                    className="px-5 py-3 border border-[#969696]/30 hover:bg-[#faf9f6]/45 text-[#51615a] text-xs font-semibold uppercase tracking-widest transition-all rounded cursor-pointer"
                  >
                    {t.mapModal.cancelBtn}
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
