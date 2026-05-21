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

export default function LearnerJourneyFlow() {
  const journeyStages = [
    {
      id: "journey-stage-1",
      title: "AWARENESS AND INTERPRETATION",
      description: "Pathways may exist on paper, but they are not visible, relatable or easy to understand early enough.",
      svgComponent: <StageBabySvg className="w-20 h-36 text-[#3AB03A] mx-auto group-hover:text-[#FF9900] transition-colors duration-300" />,
      colorClass: "border-[#3AB03A] text-[#3AB03A]",
    },
    {
      id: "journey-stage-2",
      title: "OWNERSHIP AT TRANSITION",
      description: "School-to-post-16 and school-to-support handoffs are often too cold, too late and too unclear.",
      svgComponent: <StageToddlerSvg className="w-20 h-36 text-[#2EBBB8] mx-auto group-hover:text-[#3AB03A] transition-colors duration-300" />,
      colorClass: "border-[#2EBBB8] text-[#2EBBB8]",
    },
    {
      id: "journey-stage-3",
      title: "NAVIGATION AND DIGNITY",
      description: "For non-linear routes, the system can feel exhausting: repeated retelling, weak advocacy and complex thresholds.",
      svgComponent: <StageSchoolchildSvg className="w-20 h-36 text-[#FF9900] mx-auto group-hover:text-[#2EBBB8] transition-colors duration-300" />,
      colorClass: "border-[#FF9900] text-[#FF9900]",
    },
    {
      id: "journey-stage-4",
      title: "EDUCATION–EMPLOYER DISCONNECT",
      description: "Real jobs and real routes are not translating clearly enough into learner awareness, pathway design or SME engagement.",
      svgComponent: <StageYoungAdultSvg className="w-20 h-36 text-[#9E9E9E] mx-auto group-hover:text-[#3AB03A] transition-colors duration-300" />,
      colorClass: "border-[#9E9E9E] text-slate-500",
    },
    {
      id: "journey-stage-5",
      title: "BELONGING AND PROGRESSION",
      description: "Access alone is not enough if workplaces still prize familiarity and narrow ideas of “fit”.",
      svgComponent: <StageAdultSvg className="w-20 h-36 text-[#4A132C] mx-auto group-hover:text-[#FF9900] transition-colors duration-300" />,
      colorClass: "border-[#4A132C] text-[#4A132C]",
    },
  ];

  return (
    <div className="w-full space-y-12 border-t border-[#969696]/30 pt-16 pb-8" id="learner-transition-flow-section">
      {/* Header of the Journey */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#FF9900]">
          The Ecosystem In Friction
        </span>
        <h3 className="text-2xl font-normal text-[#3AB03A] tracking-tight">
          Five Strategic Gaps Across the Learner Journey
        </h3>
        <p className="text-sm text-[#51615a] max-w-3xl leading-relaxed">
          The collaborative Phase 1 study maps these fundamental breakdowns as young people progress from childhood to adult employment in Wales. Hover over each stage to explore the friction.
        </p>
      </div>

      {/* Horizontal Flow on screens >= md, and Vertical Stack on smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
        {journeyStages.map((stage, i) => (
          <div
            key={stage.id}
            id={stage.id}
            className="group flex flex-col justify-start bg-white border border-[#969696]/20 hover:border-[#3AB03A]/70 shadow-xs hover:shadow-md rounded-lg p-5 transition-all duration-300 relative overflow-hidden"
          >
            {/* Visual connector lines on desktop */}
            {i < journeyStages.length - 1 && (
              <div 
                className="hidden md:block absolute top-[100px] left-[85%] w-[33%] h-[2px] bg-gradient-to-r from-[#969696]/20 to-transparent z-10 pointer-events-none" 
                aria-hidden="true"
              />
            )}

            {/* Character Sketch Image Box on Top of the Card */}
            <div className="w-full h-44 flex items-center justify-center bg-[#faf9f6]/60 rounded border border-[#969696]/10 mb-4 relative group-hover:bg-[#faf9f6] transition-colors duration-300">
              {stage.svgComponent}
            </div>

            {/* Content Box - Aligned to top */}
            <div className="space-y-3 flex-1 flex flex-col justify-start text-left pt-1">
              <div className="md:h-16 flex items-start">
                <h4 className="text-xs font-bold tracking-wider text-slate-800 uppercase leading-snug group-hover:text-[#3AB03A] transition-colors duration-200">
                  {stage.title}
                </h4>
              </div>
              <p className="text-xs text-[#51615a] leading-relaxed border-t border-gray-100 pt-3">
                {stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
