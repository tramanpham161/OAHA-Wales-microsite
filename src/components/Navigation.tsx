import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, BookOpen, BarChart3, Mail, Heart, Menu, X } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestMeeting?: () => void;
}

export default function Navigation({ activeTab, setActiveTab, onRequestMeeting }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Overview", icon: BookOpen },
    { id: "stats", label: "Reach & Stats", icon: BarChart3 },
    { id: "partnership", label: "Media Kit", icon: Sparkles },
    { id: "analyzer", label: "Collaboration Portal", icon: Mail },
    { id: "assistant", label: "Review Writer Lab", icon: Heart },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#fbfbf9]/95 backdrop-blur-md shadow-sm border-b border-[#e1e1db]/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab("home")}>
            <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#3c2a1e]">
              The Honest Mum <span className="text-[#bf8f6b] font-editorial-italic font-normal">Hub</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#3c2a1e] bg-[#edeae4] font-semibold"
                      : "text-[#625950] hover:text-[#3c2a1e] hover:bg-[#edeae4]/30"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#bf8f6b]" : "text-[#8c8075]"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <button
              onClick={onRequestMeeting}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#3c2a1e] text-[#fbfbf9] hover:bg-[#bf8f6b] text-xs uppercase tracking-widest font-bold rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Review</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#3c2a1e] hover:text-[#bf8f6b] p-2 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfbf9] border-b border-[#e1e1db]/80 px-4 pt-2 pb-4 space-y-1 animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? "text-[#3c2a1e] bg-[#edeae4] font-semibold"
                    : "text-[#625950] hover:text-[#3c2a1e] hover:bg-[#edeae4]/30"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-[#bf8f6b]" : "text-[#8c8075]"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-[#e1e1db]/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRequestMeeting) onRequestMeeting();
              }}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-[#3c2a1e] text-[#fbfbf9] rounded-lg text-sm font-bold uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Collaboration</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
