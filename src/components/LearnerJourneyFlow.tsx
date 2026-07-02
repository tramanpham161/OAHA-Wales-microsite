import React from "react";

// Stage 1: Baby (Clean vector line art of an infant crawling/sitting elegantly)
export function StageBabySvg({ className = "w-20 h-40 text-slate-900" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sitting Baby Outline */}
      {/* Head */}
      <circle cx="50" cy="55" r="14" />
      {/* Hair curl */}
      <path d="M 49,41 Q 52,36 55,40" strokeWidth="2" />
      
      {/* Back and Diaper Bottom curves */}
      <path d="M 39,66 C 35,76 34,92 38,100 C 42,108 52,108 58,102 C 64,96 61,78 58,66" />
      {/* Crawling/Sitting base crease */}
      <path d="M 38,100 Q 48,106 58,102" strokeWidth="1.5" />

      {/* Arm reaching out slightly */}
      <path d="M 42,72 Q 54,76 60,70" />
      
      {/* Little legs curved in front */}
      <path d="M 38,98 Q 42,118 52,118 Q 58,118 56,104" />

      {/* Ground indicator line */}
      <line x1="20" y1="130" x2="80" y2="130" stroke="#969696" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// Stage 2: Toddler/Young Child (Growing child walking gracefully right)
export function StageToddlerSvg({ className = "w-20 h-40 text-slate-900" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Toddler Outlines */}
      {/* Head */}
      <circle cx="50" cy="46" r="12" />
      <path d="M 47,34 Q 50,30 53,33" strokeWidth="2" /> {/* Hair */}

      {/* Body & Shirt */}
      <path d="M 43,58 L 57,58 L 56,90 H 44 Z" />
      
      {/* Shorts */}
      <path d="M 44,90 L 42,102 H 48 L 48,90" />
      <path d="M 50,90 L 49,102 H 55 L 56,90" strokeWidth="2" />

      {/* Swinging arm */}
      <path d="M 57,60 Q 64,74 61,84" />
      <path d="M 43,60 Q 37,74 40,84" />

      {/* Walking legs */}
      <path d="M 45,102 L 42,122 H 47" />
      <path d="M 52,102 L 55,122 H 60" />

      {/* Ground Line */}
      <line x1="20" y1="130" x2="80" y2="130" stroke="#969696" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// Stage 3: Schoolchild with dual-strap backpack on back walking rightward
export function StageSchoolchildSvg({ className = "w-20 h-40 text-slate-900" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="48" cy="42" r="11" />
      <path d="M 43,31 Q 48,27 50,30" strokeWidth="2" />

      {/* Torso */}
      <path d="M 42,53 H 56 L 54,92 H 40 Z" />

      {/* Distinct Backpack Outline */}
      <rect x="30" y="55" width="12" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M 36,55 C 36,50 40,50 40,55" strokeWidth="1.5" />

      {/* Backpack Shoulder Strap */}
      <path d="M 38,55 C 41,61 43,72 41,80" />

      {/* ARM swinging forward */}
      <path d="M 55,55 Q 61,72 59,84" />

      {/* Walking Trousers Legs */}
      <path d="M 43,92 L 39,122 H 44" />
      <path d="M 51,92 L 54,122 H 58" />

      {/* Ground lines */}
      <line x1="20" y1="130" x2="80" y2="130" stroke="#969696" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// Stage 4: Teen/Young Adult walking with hands relaxed posture
export function StageYoungAdultSvg({ className = "w-20 h-40 text-slate-900" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="50" cy="38" r="10" />
      <path d="M 44,28 Q 50,22 53,26" strokeWidth="2" /> {/* Haircut */}

      {/* Relaxed Sweatshirt */}
      <path d="M 41,48 H 57 L 55,88 H 39 Z" />

      {/* Arms in pockets or relaxed */}
      <path d="M 40,50 Q 33,68 40,76" />
      <path d="M 56,50 Q 62,68 58,76" />

      {/* Long Jeans */}
      <path d="M 42,88 L 38,122 H 43" />
      <path d="M 51,88 L 54,122 H 59" />

      {/* Ground shadows line */}
      <line x1="20" y1="130" x2="80" y2="130" stroke="#969696" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// Stage 5: Grown Adult with formal business outline (shirt with collar, slate-styled)
export function StageAdultSvg({ className = "w-20 h-40 text-slate-100" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="50" cy="35" r="9" />
      <path d="M 45,26 Q 50,20 52,24" strokeWidth="2" /> {/* Stylized adult wave */}

      {/* Collar lines */}
      <path d="M 46,44 L 50,49 L 54,44" strokeWidth="2" />

      {/* Tucked Collar Shirt */}
      <path d="M 42,44 H 56 L 54,82 H 41 Z" />

      {/* Belt segment */}
      <line x1="41" y1="82" x2="54" y2="82" stroke="currentColor" strokeWidth="3" />

      {/* Smart slacks legs */}
      <path d="M 43,84 L 39,122 H 44" />
      <path d="M 52,84 L 55,122 H 60" />

      {/* Confident arm swing */}
      <path d="M 56,46 Q 61,64 58,80" strokeWidth="2.5" />

      {/* Ground boundary line */}
      <line x1="20" y1="130" x2="80" y2="130" stroke="#969696" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// Stage 6: Professional Specialist (Senior, coat/suit lapels, glasses and briefcase, representing career progression)
export function StageProfessionalSvg({ className = "w-20 h-40 text-slate-900" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="50" cy="32" r="8" />
      {/* Hair outline */}
      <path d="M 45,24 Q 50,19 55,23" strokeWidth="2" />
      
      {/* Blazer lapel V-neck line */}
      <path d="M 42,42 L 50,54 L 58,42" strokeWidth="2" />
      <path d="M 50,54 L 50,82" strokeWidth="1.5" />

      {/* Fitted professional suit body */}
      <path d="M 39,42 H 61 L 58,84 H 42 Z" />

      {/* Confident arm structure holding a tablet/document */}
      <path d="M 39,44 C 35,56 42,66 50,66 C 58,66 65,56 61,44" />
      {/* Clipboard asset */}
      <rect x="46" y="52" width="8" height="11" rx="1" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />

      {/* Tailored formal suit trousers */}
      <path d="M 43,84 L 40,122 H 45" />
      <path d="M 52,84 L 55,122 H 60" />

      {/* Ground indicator line */}
      <line x1="20" y1="130" x2="80" y2="130" stroke="#969696" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

export default function LearnerJourneyFlow() {
  const journeyStages = [
    {
      id: "journey-stage-1",
      title: "Visibility",
      description: "Pathways may exist, but they are not always visible, relatable or easy to understand early enough.",
      svgComponent: <StageBabySvg className="w-20 h-28 text-[#2BB7BA] mx-auto group-hover:text-[#FF9900] transition-colors duration-300" />,
      colorClass: "border-[#2BB7BA]",
      textColor: "text-[#2BB7BA]",
      hoverBorder: "hover:border-[#2BB7BA]/70",
      hoverTitle: "group-hover:text-[#2BB7BA]",
    },
    {
      id: "journey-stage-2",
      title: "Family awareness",
      description: "Parents, carers and trusted adults shape choices, but routes into local jobs and future sectors are not always clear, current or easy to explain.",
      svgComponent: <StageToddlerSvg className="w-20 h-28 text-[#FF9900] mx-auto group-hover:text-[#3AB03A] transition-colors duration-300" />,
      colorClass: "border-[#FF9900]",
      textColor: "text-[#FF9900]",
      hoverBorder: "hover:border-[#FF9900]/70",
      hoverTitle: "group-hover:text-[#FF9900]",
    },
    {
      id: "journey-stage-3",
      title: "Transitions",
      description: "Real jobs, future skills and employer demand do not always translate into learner awareness, curriculum links or pathway design.",
      svgComponent: <StageSchoolchildSvg className="w-20 h-28 text-[#3AB03A] mx-auto group-hover:text-[#2BB7BA] transition-colors duration-300" />,
      colorClass: "border-[#3AB03A]",
      textColor: "text-[#3AB03A]",
      hoverBorder: "hover:border-[#3AB03A]/70",
      hoverTitle: "group-hover:text-[#3AB03A]",
    },
    {
      id: "journey-stage-4",
      title: "Navigation",
      description: "Non-linear routes can involve repeated retelling, weak advocacy and complex thresholds.",
      svgComponent: <StageYoungAdultSvg className="w-20 h-28 text-[#986430] mx-auto group-hover:text-[#2E536B] transition-colors duration-300" />,
      colorClass: "border-[#986430]",
      textColor: "text-[#986430]",
      hoverBorder: "hover:border-[#986430]/70",
      hoverTitle: "group-hover:text-[#986430]",
    },
    {
      id: "journey-stage-5",
      title: "Translation",
      description: "Real jobs and employer demand do not always translate into learner awareness or pathway design.",
      svgComponent: <StageAdultSvg className="w-20 h-28 text-[#969696] mx-auto group-hover:text-[#2BB7BA] transition-colors duration-300" />,
      colorClass: "border-[#969696]",
      textColor: "text-[#969696]",
      hoverBorder: "hover:border-[#969696]/70",
      hoverTitle: "group-hover:text-[#969696]",
    },
    {
      id: "journey-stage-6",
      title: "Progression",
      description: "Access alone is not progression if cultures still reward familiarity and narrow ideas of “fit”.",
      svgComponent: <StageProfessionalSvg className="w-20 h-28 text-[#2E536B] mx-auto group-hover:text-[#FF9900] transition-colors duration-300" />,
      colorClass: "border-[#2E536B]",
      textColor: "text-[#2E536B]",
      hoverBorder: "hover:border-[#2E536B]/70",
      hoverTitle: "group-hover:text-[#2E536B]",
    },
  ];

  return (
    <div className="w-full space-y-8" id="learner-transition-flow-section">
      {/* Header of the Journey */}
      <div className="space-y-2 text-left max-w-4xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] block">
          The Ecosystem In Friction
        </span>
        <h2 className="text-3xl font-normal text-[#2E536B] tracking-tight">
          Six gaps that make opportunity hard to see and move through
        </h2>
        <p className="text-base text-[#51615a] leading-relaxed max-w-3xl">
          The issue is not simply the amount of provision. It is what happens at the handoffs.
        </p>
      </div>

      {/* Moved Coalition & Systems Audit statistics boxes transformed to 3 distinct visual card callouts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
        <div className="bg-white border-l-4 border-l-[#2BB7BA] border-y border-r border-[#969696]/15 hover:border-[#2BB7BA]/50 p-4 rounded shadow-xs hover:shadow-sm transition-all duration-300">
          <p className="text-3xl sm:text-4xl font-light text-[#2BB7BA] tracking-tight leading-none font-sans">
            40+
          </p>
          <p className="text-sm text-[#51615a] leading-relaxed mt-2 font-sans">
            organisations engaged
          </p>
        </div>

        <div className="bg-white border-l-4 border-l-[#3AB03A] border-y border-r border-[#969696]/15 hover:border-[#3AB03A]/50 p-4 rounded shadow-xs hover:shadow-sm transition-all duration-300">
          <p className="text-3xl sm:text-4xl font-light text-[#3AB03A] tracking-tight leading-none font-sans">
            171
          </p>
          <p className="text-sm text-[#51615a] leading-relaxed mt-2 font-sans">
            organisation-stage touchpoints mapped
          </p>
        </div>

        <div className="bg-white border-l-4 border-l-[#2E536B] border-y border-r border-[#969696]/15 hover:border-[#2E536B]/50 p-4 rounded shadow-xs hover:shadow-sm transition-all duration-300">
          <p className="text-3xl sm:text-4xl font-light text-[#2E536B] tracking-tight leading-none font-sans">
            6
          </p>
          <p className="text-sm text-[#51615a] leading-relaxed mt-2 font-sans">
            journey stages from community to progression
          </p>
        </div>
      </div>

      {/* Horizontal Flow on screens >= lg, and Grid on smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
        {journeyStages.map((stage, i) => (
          <div
            key={stage.id}
            id={stage.id}
            className={`group flex flex-col justify-start bg-white border border-[#969696]/20 ${stage.hoverBorder} shadow-xs hover:shadow-md rounded-lg p-5 transition-all duration-300 relative overflow-hidden`}
          >
            {/* Visual connector lines on desktop */}
            {i < journeyStages.length - 1 && (
              <div 
                className="hidden lg:block absolute top-[100px] left-[85%] w-[33%] h-[2px] bg-gradient-to-r from-[#969696]/20 to-transparent z-10 pointer-events-none" 
                aria-hidden="true"
              />
            )}

            {/* Character Sketch Image Box on Top of the Card */}
            <div className="w-full h-34 flex items-center justify-center bg-[#faf9f6]/60 rounded border border-[#969696]/10 mb-3 relative group-hover:bg-[#faf9f6] transition-colors duration-300">
              {stage.svgComponent}
            </div>

            {/* Content Box - Aligned to top */}
            <div className="space-y-2 flex-1 flex flex-col justify-start text-left pt-1">
              <div className="md:h-12 flex items-start">
                <h4 className={`text-sm font-bold tracking-wider text-slate-800 uppercase leading-snug ${stage.hoverTitle} transition-colors duration-200`}>
                  {stage.title}
                </h4>
              </div>
              <p className="text-sm text-[#51615a] leading-relaxed border-t border-gray-100 pt-3 font-sans">
                {stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
