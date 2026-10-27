export type Language = "en" | "cy";

export interface Translations {
  nav: {
    whyNow: string;
    phase1Summary: string;
    theGaps: string;
    phase2Plan: string;
    theSystem: string;
    ecosystemMap: string;
    collaboration: string;
    coordination: string;
    getInvolved: string;
    menu: string;
  };
  hero: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    lead: string;
    p1: string;
    p2: string;
    p3: string;
    btnLearning: string;
    btnSupport: string;
    readEnBtn: string;
    readCyBtn: string;
  };
  whyNow: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    cards: {
      title: string;
      desc: string;
    }[];
    connectiveTag: string;
    connectiveText: string;
  };
  phase1: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    timelineTitle: string;
    timeline: {
      num: string;
      month: string;
      title: string;
      desc: string;
    }[];
    partnersTitle: string;
    readEnBtn: string;
    readCyBtn: string;
    partnerLogos: {
      title: string;
      desc: string;
      getInvolvedLink: string;
    };
  };
  journey: {
    tag: string;
    title: string;
    lead: string;
    takeawayTag: string;
    takeawayText: string;
    stages: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  phase2: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    aimsTitle: string;
    aim1Title: string;
    aim1Desc: string;
    aim2Title: string;
    aim2Desc: string;
    aim3Title: string;
    aim3Desc: string;
    roadmapTag: string;
    roadmapLead: string;
    sprints: {
      num: string;
      title: string;
      desc: string;
    }[];
    deliverablesTag: string;
    deliverablesText: string;
  };
  system: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    returnsTitle: string;
    returnsList: string[];
    actionCycleTag: string;
    actionCycleTitle: string;
    pillars: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  ecosystem: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    contributeBtn: string;
    statusTag: string;
    statusText: string;
  };
  nextStage: {
    tag: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    p3: string;
  };
  needs: {
    tag: string;
    title: string;
    lead: string;
    cards: {
      title: string;
      desc: string;
    }[];
  };
  coordination: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
  };
  getInvolved: {
    tag: string;
    title: string;
    tabs: {
      employers: string;
      partners: string;
      education: string;
      government: string;
      funders: string;
    };
    tabContent: {
      employers: { title: string; desc: string };
      partners: { title: string; desc: string };
      education: { title: string; desc: string };
      government: { title: string; desc: string };
      funders: { title: string; desc: string };
    };
    form: {
      fullName: string;
      namePlaceholder: string;
      organisation: string;
      orgPlaceholder: string;
      role: string;
      rolePlaceholder: string;
      orgType: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      involvementOption: string;
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
    };
    options: {
      employers: string;
      partners: string;
      education: string;
      government: string;
      funders: string;
      all: { label: string; value: string }[];
    };
    orgTypes: { label: string; value: string }[];
    success: {
      title: string;
      desc: (name: string, org: string) => string;
      mockNote: string;
      instantBackupPrompt: string;
      emailBackupBtn: string;
      submitAnotherBtn: string;
    };
  };
  mapModal: {
    tag: string;
    title: string;
    recipientNote: string;
    howContributeLabel: string;
    contributionTypes: { label: string; value: string }[];
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    cancelBtn: string;
    successTitle: string;
    successDesc: (name: string, type: string) => string;
    emailBackupBtn: string;
    submitAnotherBtn: string;
  };
  footer: {
    mainText: string;
    returnMain: string;
    orConnect: string;
    copyright: string;
    bilingualNotice: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      whyNow: "Why Now",
      phase1Summary: "Phase 1 Summary",
      theGaps: "The Gaps",
      phase2Plan: "Phase 2 Plan",
      theSystem: "The System",
      ecosystemMap: "Ecosystem Map",
      collaboration: "Collaboration",
      coordination: "Coordination",
      getInvolved: "Get Involved",
      menu: "Menu"
    },
    hero: {
      tag: "Wales Progress update",
      titleMain: "Turning regional growth",
      titleAccent: "into visible opportunity",
      lead: "A place-based collaboration helping Wales connect investment, skills, employers, community insight and youth voice into clearer routes for young people.",
      p1: "Wales has significant commitment, activity and investment already underway. But young people do not always see how that connects to their future.",
      p2: "This work is helping build the connective infrastructure between economic growth, employer demand, local provision and trusted community pathways, so opportunity becomes easier to see, access and move through.",
      p3: "We are now moving from insight into action: strengthening the evidence base, testing priorities with partners and shaping the next stage of place-based delivery.",
      btnLearning: "WHAT WE ARE LEARNING",
      btnSupport: "SUPPORT THE NEXT PHASE",
      readEnBtn: "Read the Phase 1 summary in English",
      readCyBtn: "Read the Phase 1 summary in Welsh"
    },
    whyNow: {
      tag: "Strategic Convergence",
      title: "Why Now?",
      p1: "Policy, funding, business need and youth voice are converging. Wales has a rare opportunity to make sure regional growth is not just planned at system level, but seen and felt by young people, families and communities.",
      p2: "The next step is to connect future skills, employer demand, education pathways and community support so young people can understand the opportunities growing around them early enough to prepare for them.",
      cards: [
        {
          title: "Place-based investment",
          desc: "Long-term neighbourhood and regeneration investment creates a route to connect place funding with people outcomes."
        },
        {
          title: "Skills, Education and Devolved Policy",
          desc: "Welsh Government’s focus on current and future skills creates an opportunity to align education, training and employer demand."
        },
        {
          title: "Youth Pathways and Support",
          desc: "The Young Person’s Guarantee and Youth Hubs strengthen routes into education, training, employment and wider support."
        },
        {
          title: "Business and enterprise investment",
          desc: "Investment in SMEs, technology and growth sectors needs to translate into visible routes for young people."
        },
        {
          title: "Evidence for Regional Action",
          desc: "Evidence from partners, open data and lived experience points to the need for a clearer shared picture of what exists, where the gaps are, and where coordinated action could make the greatest difference."
        },
        {
          title: "New political and economic direction",
          desc: "The focus on economic renewal, good jobs, procurement and Welsh-owned businesses makes this a timely moment to act."
        }
      ],
      connectiveTag: "Connective Action",
      connectiveText: "The opportunity now is to connect these forces before investment, skills planning and youth support continue to develop in separate lanes."
    },
    phase1: {
      tag: "Context Summary",
      title: "What we have learnt and built so far",
      p1: "Phase 1 deliberately focused on understanding the system before jumping to solutions. This matters because well-intentioned activity can still miss the point if it is not tested against the real experience of young people, families, schools, employers and community organisations. Through partner engagement, discovery work, ecosystem mapping and journey analysis, the work has moved from shared intent to a clearer picture.",
      p2: "We now understand where pathways are strong, where they are fragmented, and where collective action could make the greatest difference.",
      p3: "This gives us the foundation for the next stage: connecting insight, evidence and partner action in a more coordinated way.",
      timelineTitle: "Phase 1 Timeline",
      timeline: [
        {
          num: "01",
          month: "September",
          title: "Cardiff UNGC roundtable",
          desc: "Early momentum and shared intent around a place-based approach."
        },
        {
          num: "02",
          month: "December",
          title: "Call to Action",
          desc: "Partners agreed to move from discussion toward practical next steps."
        },
        {
          num: "03",
          month: "Jan–Feb",
          title: "Phase 1 discovery",
          desc: "Desktop research, open data scan, learner journey map and ecosystem scan."
        },
        {
          num: "04",
          month: "March",
          title: "Working session",
          desc: "Journey validated, handoff challenges sharpened and early priorities surfaced."
        },
        {
          num: "05",
          month: "May/June",
          title: "Youth Validation and Partner Design",
          desc: "Tested emerging themes with young people and partners. Used design-led methods, including the LEGO Serious Play workshop, to explore where pathways connect, where they break, and which opportunities should move toward pilot design."
        }
      ],
      partnersTitle: "Participating Partners & Working Group Contributors",
      readEnBtn: "Read the Phase 1 summary in English",
      readCyBtn: "Read the Phase 1 summary in Welsh",
      partnerLogos: {
        title: "Early collaboration partners and contributors",
        desc: "These partners are part of a wider growing network of employers, funders, educators, charities, community organisations and civic stakeholders contributing to the work.",
        getInvolvedLink: "See how to get involved"
      }
    },
    journey: {
      tag: "Systemic Friction",
      title: "The Learner Journey in Friction",
      lead: "Phase 1 mapped the pathway of learners from home and community through schooling, post-16 learning, and entry into sustainable work. Six recurring systemic barriers emerged.",
      takeawayTag: "Key Takeaway",
      takeawayText: "This is why the next phase must connect evidence, growth, skills, employers, schools, families, community trust and youth voice; so Wales strengthens the pathways that already exist, rather than adding another disconnected programme.",
      stages: [
        {
          id: "journey-stage-1",
          title: "Visibility",
          description: "Pathways may exist, but they are not always visible, relatable or easy to understand early enough. Young people may not always see how local growth, future jobs or employer demand connect to what they are learning now."
        },
        {
          id: "journey-stage-2",
          title: "Family awareness",
          description: "Parents, carers and trusted adults shape choices, but routes into local jobs and future sectors are not always clear, current or easy to explain."
        },
        {
          id: "journey-stage-3",
          title: "Transitions",
          description: "Real jobs, future skills and employer demand do not always translate into learner awareness, curriculum links or pathway design."
        },
        {
          id: "journey-stage-4",
          title: "Navigation",
          description: "Non-linear routes can involve repeated retelling, weak advocacy and complex thresholds."
        },
        {
          id: "journey-stage-5",
          title: "Translation",
          description: "Employers may understand the skills and capabilities they need, but this does not always translate into practical experiences, language or support that young people, schools and families can use."
        },
        {
          id: "journey-stage-6",
          title: "Progression",
          description: "Access alone is not progression if cultures still reward familiarity and narrow ideas of “fit”."
        }
      ]
    },
    phase2: {
      tag: "Strategic Document",
      title: "From insight to action",
      p1: "Phase 1 has helped build a clearer view of the ecosystem, the learner journey and the points where opportunity becomes harder to see or access.",
      p2: "The next phase is about moving from insight to coordinated action: strengthening the evidence base, deepening employer engagement and identifying a small number of practical, place-based pilots.",
      p3: "The ambition is to help partners work from a clearer shared picture of need, provision and opportunity, so future investment and delivery can be better targeted.",
      aimsTitle: "Three Simple Aims:",
      aim1Title: "1. Strengthen the evidence base",
      aim1Desc: "Bring together insight from partners, young people, communities, employers and available data.",
      aim2Title: "2. Shape practical pilot opportunities",
      aim2Desc: "Identify where coordinated action could make the biggest difference.",
      aim3Title: "3. Build the case for investment",
      aim3Desc: "Show where funding could strengthen existing pathways rather than duplicate them.",
      roadmapTag: "Phase 2 Roadmap",
      roadmapLead: "We are now in Sprint 1 of Phase 2. This phase is focused on strengthening the evidence base, testing priorities with partners and shaping pilot opportunities that could move into delivery.",
      sprints: [
        {
          num: "Sprint 1",
          title: "Strengthen the evidence base",
          desc: "Bring together Phase 1 outputs, ecosystem mapping, youth insight, employer input and available place-based data to sharpen the picture of need, provision and opportunity."
        },
        {
          num: "Sprint 2",
          title: "Shape pilot concepts",
          desc: "Develop a small number of practical pilot concepts linked to the strongest opportunities, including the problem, target cohort, place, partners, outcomes and delivery conditions."
        },
        {
          num: "Sprint 3",
          title: "Test with partners",
          desc: "Sense-check each pilot concept with young people, schools, employers, community organisations, funders and public bodies."
        },
        {
          num: "Sprint 4",
          title: "Build the investment case",
          desc: "Prioritise what moves forward and define the funding, coordination, evidence and delivery support needed for the next stage."
        }
      ],
      deliverablesTag: "Phase 2 Deliverables",
      deliverablesText: "By the end of Phase 2, partners will have a stronger shared evidence base, 2–3 prioritised pilot opportunities and a clearer investment case for the next stage of place-based delivery."
    },
    system: {
      tag: "Systemic Lens",
      title: "Why this matters beyond any one organisation",
      p1: "No single organisation can fix the pathway alone. The value of this work is in seeing the whole system: what already exists, where the gaps and duplications are, and where shared action could make the biggest difference for young people, communities and employers.",
      p2: "For employers, this means clearer routes to future talent. For charities and community organisations, it means lived insight shaping decisions. For public bodies and funders, it means better evidence about where shared action can create the greatest impact.",
      p3: "The next stage is about making that shared picture clearer, so partners can make better decisions about where to focus time, funding and delivery.",
      returnsTitle: "What Stakeholders Can Expect in Return",
      returnsList: [
        "Earlier sight of where the work is heading and which ideas are gaining traction.",
        "A chance to influence what becomes pilot-ready, before decisions are set elsewhere.",
        "Better visibility of adjacent partners, programmes and gaps across the Welsh ecosystem.",
        "Stronger relationships across employers, educators, youth organisations, civic partners and funders.",
        "A clearer shared narrative to support future commissioning, funding or policy conversations.",
        "A clearer role in shaping practical solutions before they are funded, commissioned or scaled."
      ],
      actionCycleTag: "Core Action Cycle",
      actionCycleTitle: "Four pillars of place-based alignment",
      pillars: [
        {
          num: "01",
          title: "Identify Gaps and Duplication",
          desc: "Make existing provision easier to see, understand and connect — so partners can build on what works rather than repeat it."
        },
        {
          num: "02",
          title: "Strengthen Pathways",
          desc: "Improve how young people move between systems, especially from school to post-16, post-16 to work, and into second-chance routes."
        },
        {
          num: "03",
          title: "Ground Action in Evidence and Lived Experience",
          desc: "Test ideas with young people, practitioners and employers before scaling, so solutions reflect lived experience and local conditions."
        },
        {
          num: "04",
          title: "Build a Stronger Collective Case",
          desc: "Create credible evidence for government, funders and place-based investors about where shared action will have the greatest impact."
        }
      ]
    },
    ecosystem: {
      tag: "Ecosystem Mapping",
      title: "The Wales Social Mobility Ecosystem Map",
      p1: "We are building a shared view of the Welsh social mobility ecosystem: who is working with young people, where they operate, which stage of the journey they support, and where there may be gaps, duplication or weak handoffs.",
      p2: "The map is not intended to judge individual organisations. It is designed to help partners see the system more clearly, so they can align effort, strengthen pathways and identify where collective action is needed most.",
      contributeBtn: "Contribute to the Ecosystem Map",
      statusTag: "Ecosystem Status",
      statusText: "This is a living map and will continue to evolve as more partners contribute insight."
    },
    nextStage: {
      tag: "Next Stage Ambition",
      title: "Building the infrastructure for coordinated place-based action",
      lead: "We have built the insight and early evidence. The next step is to build the capacity and infrastructure to move this into coordinated delivery.",
      p1: "The next stage of the work is about turning insight into practical coordination.",
      p2: "With the right investment, OAHA wants to develop the shared infrastructure needed to help partners see the system more clearly, coordinate activity more effectively and understand what is changing for young people over time.",
      p3: "This will be developed carefully with partners, building on the evidence, relationships and priorities already surfaced through Phase 1 and Phase 2."
    },
    needs: {
      tag: "Collaboration Needs",
      title: "What we need now",
      lead: "We are now looking for partners who can help move the work into its next phase.",
      cards: [
        {
          title: "Insight",
          desc: "Share what you are seeing in communities, schools, workplaces or local systems."
        },
        {
          title: "Access",
          desc: "Connect us to young people, families, schools, colleges, employers or community groups."
        },
        {
          title: "Capacity",
          desc: "Join a workshop, host a conversation, test pilot ideas or support delivery."
        },
        {
          title: "Investment",
          desc: "Help fund the coordination, evidence, youth voice, design and pilot development needed to move from insight to action."
        }
      ]
    },
    coordination: {
      tag: "Convening & Coordination",
      title: "Who is coordinating this work?",
      p1: "OAHA and Lewis Silkin are helping to convene and coordinate this collaboration, working with partners across Wales to move from insight to practical action. The role is not to create another standalone programme, but to provide light-touch backbone support: connecting people, synthesising insight, identifying gaps and helping partners shape pilot-ready solutions. The intention is not to create another standalone programme, but to help partners build on what already exists and move toward more coordinated action.",
      p2: "The work is intentionally collaborative. It will evolve as more employers, community organisations, charities, educators, funders and public bodies contribute insight and capacity."
    },
    getInvolved: {
      tag: "Immediate Collaboration",
      title: "How to get involved",
      tabs: {
        employers: "Employers",
        partners: "Community & Charity Partners",
        education: "Schools, Colleges & Universities",
        government: "Government & Public Bodies",
        funders: "Funders & Strategic Partners"
      },
      tabContent: {
        employers: {
          title: "Help connect future workforce demand to visible opportunity.",
          desc: "This could include sharing future skills needs, hosting design workshops, offering workplace exposure, supporting mentoring, or helping shape a pilot linked to real jobs and growth sectors."
        },
        partners: {
          title: "Help ensure solutions are grounded in lived experience and community trust.",
          desc: "Community groups and charities can share what they are seeing locally, identify where young people and families face barriers, help test emerging ideas, and connect the work to the people and places it is designed to support."
        },
        education: {
          title: "Help connect young people’s experience with future pathways.",
          desc: "Schools, colleges and universities can support youth insight, host design-led workshops, connect learners to employers and community partners, and help test how future jobs and local growth sectors are translated into learner awareness."
        },
        government: {
          title: "Help align policy, commissioning, social value and place-based action.",
          desc: "Government and public bodies can contribute insight, connect policy and delivery priorities, share evidence, align with youth employment and skills strategies, and help identify where practical pilots could support wider regional outcomes."
        },
        funders: {
          title: "Help move the work from insight to practical pilots.",
          desc: "Help fund the next stage of the work: strengthening the evidence base, supporting youth voice, shaping pilot opportunities and building the coordination needed to move from insight to delivery."
        }
      },
      form: {
        fullName: "Full Name",
        namePlaceholder: "Your Name",
        organisation: "Organisation",
        orgPlaceholder: "Organisation Name",
        role: "Role / Job Title",
        rolePlaceholder: "e.g. Director, Partnership Manager",
        orgType: "Organisation Type",
        email: "Email Address",
        emailPlaceholder: "name@organisation.org.uk",
        phone: "Phone Number",
        phonePlaceholder: "e.g., 07123 456789",
        involvementOption: "How would you like to get involved?",
        message: "Message / anything useful to know",
        messagePlaceholder: "Please share details about your objectives or how we can best collaborate...",
        submitBtn: "Submit Inquiry",
        submittingBtn: "Submitting..."
      },
      options: {
        employers: "Share future skills needs",
        partners: "Share community insight",
        education: "Connect us to young people or schools",
        government: "Share relevant data or research",
        funders: "Fund the next phase",
        all: [
          { label: "Share future skills needs", value: "Share future skills needs" },
          { label: "Contribute to the ecosystem map", value: "Contribute to the ecosystem map" },
          { label: "Connect us to young people or schools", value: "Connect us to young people or schools" },
          { label: "Share community insight", value: "Share community insight" },
          { label: "Offer employer encounters", value: "Offer employer encounters" },
          { label: "Offer work experience or mentoring", value: "Offer work experience or mentoring" },
          { label: "Support pilot design", value: "Support pilot design" },
          { label: "Fund the next phase", value: "Fund the next phase" },
          { label: "Join a design workshop", value: "Join a design workshop" },
          { label: "Share relevant data or research", value: "Share relevant data or research" },
          { label: "Discuss strategic partnership", value: "Discuss strategic partnership" }
        ]
      },
      orgTypes: [
        { label: "Employer", value: "Employer" },
        { label: "Community & Charity Partner", value: "Community & Charity Partner" },
        { label: "School, College or University", value: "School, College or University" },
        { label: "Government & Public Body", value: "Government & Public Body" },
        { label: "Funder & Strategic Partner", value: "Funder & Strategic Partner" },
        { label: "Other", value: "Other" }
      ],
      success: {
        title: "Inquiry Sent Successfully!",
        desc: (name, org) => `Thank you, ${name || "Partner"} of ${org || "your organisation"}. Your collaboration details have been sent directly to info.oaha.uk@gmail.com.`,
        mockNote: "Developer Note: The form submitted successfully in simulation mode because RESEND_API_KEY is not yet configured. To make real emails fly, add your Resend API key to the Secrets/Settings panel.",
        instantBackupPrompt: "If you require an instant backup copy or would like to send manually, you may use the button below.",
        emailBackupBtn: "Open Email Client (Backup)",
        submitAnotherBtn: "Submit Another Response"
      }
    },
    mapModal: {
      tag: "Shared Contribution Form",
      title: "Contribute to the ecosystem map",
      recipientNote: "Answers will be sent directly to info.oaha.uk@gmail.com",
      howContributeLabel: "How would you like to contribute?",
      contributionTypes: [
        { label: "Add my organisation", value: "Add my organisation" },
        { label: "Share insight", value: "Share insight" },
        { label: "Suggest another organisation", value: "Suggest another organisation" },
        { label: "Highlight a gap", value: "Highlight a gap" },
        { label: "Offer data or evidence", value: "Offer data or evidence" }
      ],
      nameLabel: "Your Name",
      namePlaceholder: "e.g. John Evans",
      contactLabel: "Contact Details",
      contactPlaceholder: "e.g. email@organisation.org.uk or 07123456789",
      messageLabel: "Contribution Details / Message (Optional)",
      messagePlaceholder: "Provide details about your organisation, the gap mapping, suggestions, or evidence...",
      sendBtn: "Send Contribution",
      sendingBtn: "Sending...",
      cancelBtn: "Cancel",
      successTitle: "Contribution Sent Successfully!",
      successDesc: (name, type) => `Thank you, ${name}. Your choice "${type}" has been sent directly to info.oaha.uk@gmail.com.`,
      emailBackupBtn: "Open Email Client (Backup)",
      submitAnotherBtn: "Submit Another Contribution"
    },
    footer: {
      mainText: "This is a public progress update on a place-based collaboration helping Wales connect growth, skills, employers, community insight and youth voice into clearer routes for young people.",
      returnMain: "Return to our main site at",
      orConnect: "or connect with us on LinkedIn:",
      copyright: "© 2026 OAHA UK. Operational Update Initiative.",
      bilingualNotice: "Available in English and Welsh / Ar gael yn Saesneg ac yn Gymraeg."
    }
  },
  cy: {
    nav: {
      whyNow: "Pam Nawr",
      phase1Summary: "Crynodeb Cam 1",
      theGaps: "Y Bylchau",
      phase2Plan: "Cynllun Cam 2",
      theSystem: "Y System",
      ecosystemMap: "Map yr Ecosystem",
      collaboration: "Cydweithredu",
      coordination: "Cydlynu",
      getInvolved: "Cymryd Rhan",
      menu: "Dewislen"
    },
    hero: {
      tag: "Diweddariad Cynnydd Cymru",
      titleMain: "Troi twf rhanbarthol",
      titleAccent: "yn gyfle gweladwy",
      lead: "Cydweithrediad seiliedig ar le sy'n helpu Cymru i gysylltu buddsoddiad, sgiliau, cyflogwyr, mewnwelediad cymunedol a llais ieuenctid yn llwybrau cliriach i bobl ifanc.",
      p1: "Mae gan Gymru ymrwymiad, gweithgarwch a buddsoddiad sylweddol ar waith eisoes. Ond nid yw pobl ifanc bob amser yn gweld sut mae hynny'n cysylltu â'u dyfodol.",
      p2: "Mae'r gwaith hwn yn helpu i adeiladu'r seilwaith cysylltiol rhwng twf economaidd, galw cyflogwyr, darpariaeth leol a llwybrau cymunedol dibynadwy, fel bod cyfle yn dod yn haws i'w weld, ei gyrraedd a symud drwyddo.",
      p3: "Rydym bellach yn symud o fewnwelediad i weithredu: cryfhau'r sylfaen dystiolaeth, profi blaenoriaethau gyda phartneriaid a llunio'r cam nesaf o gyflenwi seiliedig ar le.",
      btnLearning: "BETH RYDYM YN EI DDYSGU",
      btnSupport: "CEFNOGI'R CAM NESAF",
      readEnBtn: "Darllenwch grynodeb Cam 1 yn Saesneg",
      readCyBtn: "Darllenwch grynodeb Cam 1 yn y Gymraeg"
    },
    whyNow: {
      tag: "Cydgyfeirio Strategol",
      title: "Pam Nawr?",
      p1: "Mae polisi, cyllid, angen busnes a llais ieuenctid yn cydgyfeirio. Mae gan Gymru gyfle prin i sicrhau bod twf rhanbarthol nid yn unig yn cael ei gynllunio ar lefel system, ond yn cael ei weld a'i deimlo gan bobl ifanc, teuluoedd a chymunedau.",
      p2: "Y cam nesaf yw cysylltu sgiliau'r dyfodol, galw cyflogwyr, llwybrau addysg a chymorth cymunedol fel y gall pobl ifanc ddeall y cyfleoedd sy'n tyfu o'u cwmpas yn ddigon cynnar i baratoi ar eu cyfer.",
      cards: [
        {
          title: "Buddsoddiad seiliedig ar le",
          desc: "Mae buddsoddiad tymor hir mewn cymdogaethau ac adfywio yn creu llwybr i gysylltu cyllid lle â chanlyniadau i bobl."
        },
        {
          title: "Sgiliau, Addysg a Pholisi Datganoledig",
          desc: "Mae ffocws Llywodraeth Cymru ar sgiliau cyfredol ac ar gyfer y dyfodol yn creu cyfle i alinio addysg, hyfforddiant a galw cyflogwyr."
        },
        {
          title: "Llwybrau a Chefnogaeth Ieuenctid",
          desc: "Mae'r Warant i Bobl Ifanc a Hybiau Ieuenctid yn cryfhau llwybrau i addysg, hyfforddiant, cyflogaeth a chefnogaeth ehangach."
        },
        {
          title: "Buddsoddiad mewn busnes a menter",
          desc: "Mae angen i fuddsoddiad mewn BBaCh, technoleg a sectorau twf drosi'n llwybrau gweladwy i bobl ifanc."
        },
        {
          title: "Tystiolaeth ar gyfer Gweithredu Rhanbarthol",
          desc: "Mae tystiolaeth gan bartneriaid, data agored a phrofiad byw yn pwysleisio'r angen am ddarlun cliriach a rennir o'r hyn sy'n bodoli, ble mae'r bylchau, a ble gallai gweithredu ar y cyd wneud y gwahaniaeth mwyaf."
        },
        {
          title: "Cyfeiriad gwleidyddol ac economaidd newydd",
          desc: "Mae'r ffocws ar adnewyddu economaidd, swyddi da, caffael a busnesau sy'n eiddo i Gymru yn golygu bod hwn yn foment amserol i weithredu."
        }
      ],
      connectiveTag: "Gweithredu Cysylltiol",
      connectiveText: "Y cyfle nawr yw cysylltu'r grymoedd hyn cyn i fuddsoddiad, cynllunio sgiliau a chymorth ieuenctid barhau i ddatblygu mewn lonydd ar wahân."
    },
    phase1: {
      tag: "Crynodeb Cyd-destun",
      title: "Yr hyn rydym wedi'i ddysgu a'i adeiladu hyd yma",
      p1: "Canolbwyntiodd Cam 1 yn bwrpasol ar ddeall y system cyn llamu at atebion. Mae hyn yn bwysig oherwydd gall gweithgarwch llawn bwriad da fethu'r nod os na chaiff ei brofi yn erbyn profiad go iawn pobl ifanc, teuluoedd, ysgolion, cyflogwyr a sefydliadau cymunedol. Trwy ymgysylltu â phartneriaid, gwaith darganfod, mapio'r ecosystem a dadansoddi'r daith, mae'r gwaith wedi symud o fwriad a rennir i ddarlun cliriach.",
      p2: "Rydym bellach yn deall lle mae llwybrau'n gryf, lle maent yn ddameidiog, a lle gallai gweithredu ar y cyd wneud y gwahaniaeth mwyaf.",
      p3: "Mae hyn yn rhoi'r sylfaen i ni ar gyfer y cam nesaf: cysylltu mewnwelediad, tystiolaeth a gweithredu partneriaid mewn ffordd fwy cydlynus.",
      timelineTitle: "Llinell Amser Cam 1",
      timeline: [
        {
          num: "01",
          month: "Medi",
          title: "Bwrdd crwn UNGC Caerdydd",
          desc: "Momentwm cynnar a bwriad ar y cyd o amgylch ymagwedd seiliedig ar le."
        },
        {
          num: "02",
          month: "Rhagfyr",
          title: "Galwad i Weithredu",
          desc: "Cytunodd partneriaid i symud o drafodaeth tuag at gamau ymarferol nesaf."
        },
        {
          num: "03",
          month: "Ion–Chwef",
          title: "Darganfod Cam 1",
          desc: "Ymchwil desg, sgan data agored, map taith dysgwr a sgan ecosystem."
        },
        {
          num: "04",
          month: "Mawrth",
          title: "Sesiwn weithio",
          desc: "Dilysu'r daith, mireinio heriau trosglwyddo a thynnu blaenoriaethau cynnar i'r amlwg."
        },
        {
          num: "05",
          month: "Mai/Mehefin",
          title: "Dilysu Ieuenctid a Dylunio Partner",
          desc: "Profi themâu sy'n dod i'r amlwg gyda phobl ifanc a phartneriaid. Defnyddio dulliau dylunio, gan gynnwys gweithdy LEGO Serious Play, i archwilio lle mae llwybrau'n cysylltu, lle maent yn torri, a pha gyfleoedd a ddylai symud tuag at ddylunio peilot."
        }
      ],
      partnersTitle: "Partneriaid a Chyfranwyr y Gweithgor",
      readEnBtn: "Darllenwch grynodeb Cam 1 yn Saesneg",
      readCyBtn: "Darllenwch grynodeb Cam 1 yn y Gymraeg",
      partnerLogos: {
        title: "Partneriaid cydweithredu a chyfranwyr cynnar",
        desc: "Mae'r partneriaid hyn yn rhan o rwydwaith cynyddol ehangach o gyflogwyr, cyllidwyr, addysgwyr, elusennau, sefydliadau cymunedol a rhanddeiliaid dinesig sy'n cyfrannu at y gwaith.",
        getInvolvedLink: "Gweld sut i gymryd rhan"
      }
    },
    journey: {
      tag: "Ffrithiant Systemig",
      title: "Taith y Dysgwr o dan Ffrithiant",
      lead: "Fe wnaeth Cam 1 fapio llwybr dysgwyr o'r cartref a'r gymuned drwy addysg, dysgu ôl-16, a mynediad i waith cynaliadwy. Daeth chwe rhwystr systemig cyson i'r amlwg.",
      takeawayTag: "Prif Ddysgeidiaeth",
      takeawayText: "Dyna pam y mae'n rhaid i'r cam nesaf gysylltu tystiolaeth, twf, sgiliau, cyflogwyr, ysgolion, teuluoedd, ymddiriedaeth gymunedol a llais pobl ifanc; er mwyn i Gymru gryfhau'r llwybrau sydd eisoes yn bodoli, yn hytrach nag ychwanegu rhaglen ddatgysylltiedig arall.",
      stages: [
        {
          id: "journey-stage-1",
          title: "Gwelededd",
          description: "Gall llwybrau fodoli, ond nid ydynt bob amser yn weladwy, yn berthnasol nac yn hawdd eu deall yn ddigon cynnar. Efallai na fydd pobl ifanc bob amser yn gweld sut mae twf lleol, swyddi'r dyfodol neu alw cyflogwyr yn cysylltu â'r hyn maent yn ei ddysgu nawr."
        },
        {
          id: "journey-stage-2",
          title: "Ymwybyddiaeth teuluoedd",
          description: "Mae rhieni, gofalwyr ac oedolion dibynadwy yn siapio dewisiadau, ond nid yw llwybrau i swyddi lleol a sectorau'r dyfodol bob amser yn glir, yn gyfredol nac yn hawdd eu hegluro."
        },
        {
          id: "journey-stage-3",
          title: "Trosglwyddiadau",
          description: "Nid yw swyddi go iawn, sgiliau'r dyfodol a galw cyflogwyr bob amser yn trosi'n ymwybyddiaeth i ddysgwyr, cysylltiadau cwricwlwm na dyluniad llwybrau."
        },
        {
          id: "journey-stage-4",
          title: "Llywio",
          description: "Gall llwybrau nad ydynt yn llinol olygu ailadrodd straeon, eiriolaeth wan a throthwyon mynediad cymhleth."
        },
        {
          id: "journey-stage-5",
          title: "Cyfieithu",
          description: "Gall cyflogwyr ddeall y sgiliau a'r galluoedd sydd eu hangen arnynt, ond nid yw hyn bob amser yn trosi'n brofiadau ymarferol, iaith na chefnogaeth y gall pobl ifanc, ysgolion a theuluoedd eu defnyddio."
        },
        {
          id: "journey-stage-6",
          title: "Dilyniant",
          description: "Nid yw mynediad ar ei ben ei hun yn ddilyniant os yw diwylliannau'n parhau i ffafrio cyfarwyddrwydd a syniadau cul o 'ffit'."
        }
      ]
    },
    phase2: {
      tag: "Dogfen Strategol",
      title: "O fewnwelediad i weithredu",
      p1: "Mae Cam 1 wedi helpu i adeiladu darlun cliriach o'r ecosystem, taith y dysgwr a'r pwyntiau lle mae cyfle'n dod yn anoddach ei weld neu ei gyrraedd.",
      p2: "Mae'r cam nesaf yn ymwneud â symud o fewnwelediad i weithredu cydlynol: cryfhau'r sylfaen dystiolaeth, dyfnhau ymgysylltiad cyflogwyr a nodi nifer fach o beilotiaid ymarferol seiliedig ar le.",
      p3: "Yr uchelgais yw helpu partneriaid i weithio o ddarlun a rennir sy'n gliriach o ran angen, darpariaeth a chyfle, er mwyn gallu targedu buddsoddiad a chyflawniad yn well yn y dyfodol.",
      aimsTitle: "Tri Nod Syml:",
      aim1Title: "1. Cryfhau'r sylfaen dystiolaeth",
      aim1Desc: "Dod â mewnwelediad ynghyd gan bartneriaid, pobl ifanc, cymunedau, cyflogwyr a data sydd ar gael.",
      aim2Title: "2. Siapio cyfleoedd peilot ymarferol",
      aim2Desc: "Nodi ble y gallai gweithredu cydlynol wneud y gwahaniaeth mwyaf.",
      aim3Title: "3. Adeiladu'r achos dros fuddsoddi",
      aim3Desc: "Dangos ble y gallai cyllid gryfhau llwybrau presennol yn hytrach na'u dyblygu.",
      roadmapTag: "Map Ffordd Cam 2",
      roadmapLead: "Rydym bellach yn Sbrint 1 o Gam 2. Mae'r cam hwn yn canolbwyntio ar gryfhau'r sylfaen dystiolaeth, profi blaenoriaethau gyda phartneriaid a siapio cyfleoedd peilot a allai symud i gyflawniad.",
      sprints: [
        {
          num: "Sbrint 1",
          title: "Cryfhau'r sylfaen dystiolaeth",
          desc: "Dod ag allbynnau Cam 1, mapio'r ecosystem, mewnwelediad ieuenctid, mewnbwn cyflogwyr a data seiliedig ar le ynghyd i egluro'r darlun o angen, darpariaeth a chyfle."
        },
        {
          num: "Sbrint 2",
          title: "Siapio cysyniadau peilot",
          desc: "Datblygu nifer fach o gysyniadau peilot ymarferol sy'n gysylltiedig â'r cyfleoedd cryfaf, gan gynnwys y broblem, y garfan darged, y lle, partneriaid, canlyniadau ac amodau cyflawni."
        },
        {
          num: "Sbrint 3",
          title: "Profi gyda phartneriaid",
          desc: "Profi pob cysyniad peilot gyda phobl ifanc, ysgolion, cyflogwyr, sefydliadau cymunedol, cyllidwyr a chyrff cyhoeddus."
        },
        {
          num: "Sbrint 4",
          title: "Adeiladu'r achos buddsoddi",
          desc: "Blaenoriaethu'r hyn sy'n symud ymlaen a diffinio'r cyllid, y cydlynu, y dystiolaeth a'r gefnogaeth gyflawni sydd eu hangen ar gyfer y cam nesaf."
        }
      ],
      deliverablesTag: "Allbynnau Cam 2",
      deliverablesText: "Erbyn diwedd Cam 2, bydd gan bartneriaid sylfaen dystiolaeth gryfach a rennir, 2–3 o gyfleoedd peilot wedi'u blaenoriaethu ac achos buddsoddi cliriach ar gyfer y cam nesaf o gyflawni seiliedig ar le."
    },
    system: {
      tag: "Lens Systemig",
      title: "Pam mae hyn yn bwysig y tu hwnt i unrhyw un sefydliad",
      p1: "Ni all unrhyw un sefydliad drwsio'r llwybr ar ei ben ei hun. Gwerth y gwaith hwn yw gweld y system gyfan: yr hyn sydd eisoes yn bodoli, ble mae'r bylchau a'r dyblygu, a ble y gallai gweithredu ar y cyd wneud y gwahaniaeth mwyaf i bobl ifanc, cymunedau a chyflogwyr.",
      p2: "I gyflogwyr, mae hyn yn golygu llwybrau cliriach at dalent y dyfodol. I elusennau a sefydliadau cymunedol, mae'n golygu mewnwelediad byw yn siapio penderfyniadau. I gyrff cyhoeddus a chyllidwyr, mae'n golygu gwell tystiolaeth am ble y gall gweithredu ar y cyd greu'r effaith fwyaf.",
      p3: "Mae'r cam nesaf yn ymwneud â gwneud y darlun hwnnw a rennir yn gliriach, fel y gall partneriaid wneud penderfyniadau gwell am ble i ganolbwyntio amser, cyllid a chyflenwi.",
      returnsTitle: "Yr Hyn y Gall Rhanddeiliaid ei Ddisgwyl yn Ôl",
      returnsList: [
        "Golwg gynharach ar ble mae'r gwaith yn anelu a pha syniadau sy'n ennill momentwm.",
        "Cyfle i ddylanwadu ar yr hyn sy'n dod yn barod ar gyfer peilot, cyn i benderfyniadau gael eu gosod mewn mannau eraill.",
        "Gwell gwelededd o bartneriaid cyfagos, rhaglenni a bylchau ar draws ecosystem Cymru.",
        "Perthnasoedd cryfach ar draws cyflogwyr, addysgwyr, sefydliadau ieuenctid, partneriaid dinesig a chyllidwyr.",
        "Naratif a rennir sy'n gliriach i gefnogi sgyrsiau comisiynu, cyllido neu bolisi yn y dyfodol.",
        "Rôl gliriach wrth lunio atebion ymarferol cyn iddynt gael eu hariannu, eu comisiynu neu eu hehangu."
      ],
      actionCycleTag: "Cylch Gweithredu Craidd",
      actionCycleTitle: "Pedair colofn o aliniad seiliedig ar le",
      pillars: [
        {
          num: "01",
          title: "Nodi Bylchau a Dyblygu",
          desc: "Gwneud darpariaeth bresennol yn haws i'w gweld, ei deall a'i chysylltu — fel y gall partneriaid adeiladu ar yr hyn sy'n gweithio yn hytrach na'i ailadrodd."
        },
        {
          num: "02",
          title: "Cryfhau Llwybrau",
          desc: "Gwella sut mae pobl ifanc yn symud rhwng systemau, yn enwedig o'r ysgol i ôl-16, ôl-16 i waith, ac i lwybrau ail gyfle."
        },
        {
          num: "03",
          title: "Sylfaenu Gweithredu mewn Tystiolaeth a Phrofiad Byw",
          desc: "Profi syniadau gyda phobl ifanc, ymarferwyr a chyflogwyr cyn graddio, fel bod atebion yn adlewyrchu profiad byw ac amodau lleol."
        },
        {
          num: "04",
          title: "Adeiladu Achos Cyfunol Gryfach",
          desc: "Creu tystiolaeth gredadwy i lywodraeth, cyllidwyr a buddsoddwyr seiliedig ar le ynghylch lle bydd gweithredu ar y cyd yn cael yr effaith fwyaf."
        }
      ]
    },
    ecosystem: {
      tag: "Mapio'r Ecosystem",
      title: "Map Ecosystem Symudedd Cymdeithasol Cymru",
      p1: "Rydym yn adeiladu darlun a rennir o ecosystem symudedd cymdeithasol Cymru: pwy sy'n gweithio gyda phobl ifanc, ble maent yn gweithredu, pa gam ar y daith y maent yn ei gefnogi, a lle gall fod bylchau, dyblygu neu drosglwyddiadau gwan.",
      p2: "Nid yw'r map wedi'i fwriadu i farnu sefydliadau unigol. Mae wedi'i gynllunio i helpu partneriaid i weld y system yn gliriach, fel y gallant alinio ymdrech, cryfhau llwybrau a nodi lle mae angen gweithredu ar y cyd fwyaf.",
      contributeBtn: "Cyfrannu at Fap yr Ecosystem",
      statusTag: "Statws yr Ecosystem",
      statusText: "Mae hwn yn fap byw a bydd yn parhau i esblygu wrth i fwy o bartneriaid gyfrannu mewnwelediad."
    },
    nextStage: {
      tag: "Uchelgais y Cam Nesaf",
      title: "Adeiladu'r seilwaith ar gyfer gweithredu seiliedig ar le cydlynus",
      lead: "Rydym wedi adeiladu'r mewnwelediad a'r dystiolaeth gynnar. Y cam nesaf yw adeiladu'r gallu a'r seilwaith i symud hyn i gyflenwi cydlynus.",
      p1: "Mae cam nesaf y gwaith yn ymwneud â throi mewnwelediad yn gydlynu ymarferol.",
      p2: "Gyda'r buddsoddiad cywir, mae OAHA am ddatblygu'r seilwaith a rennir sydd ei angen i helpu partneriaid i weld y system yn gliriach, cydlynu gweithgarwch yn fwy effeithiol a deall beth sy'n newid i bobl ifanc dros amser.",
      p3: "Bydd hyn yn cael ei ddatblygu'n ofalus gyda phartneriaid, gan adeiladu ar y dystiolaeth, y berthnasoedd a'r blaenoriaethau a ddaeth i'r amlwg eisoes trwy Gam 1 a Gam 2."
    },
    needs: {
      tag: "Anghenion Cydweithredu",
      title: "Yr hyn sydd ei angen arnom nawr",
      lead: "Rydym bellach yn chwilio am bartneriaid a all helpu i symud y gwaith i'w gam nesaf.",
      cards: [
        {
          title: "Mewnwelediad",
          desc: "Rhannwch yr hyn rydych chi'n ei weld mewn cymunedau, ysgolion, gweithleoedd neu systemau lleol."
        },
        {
          title: "Mynediad",
          desc: "Cysylltwch ni â phobl ifanc, teuluoedd, ysgolion, colegau, cyflogwyr neu grwpiau cymunedol."
        },
        {
          title: "Gallu",
          desc: "Ymunwch â gweithdy, cynhaliwch sgwrs, profwch syniadau peilot neu gefnogwch ddarpariaeth."
        },
        {
          title: "Buddsoddiad",
          desc: "Helpu i ariannu'r cydlynu, tystiolaeth, llais ieuenctid, dylunio a datblygu peilot sydd eu hangen i symud o fewnwelediad i weithredu."
        }
      ]
    },
    coordination: {
      tag: "Cynnull a Chydlynu",
      title: "Pwy sy'n cydlynu'r gwaith hwn?",
      p1: "Mae OAHA a Lewis Silkin yn helpu i gynnull a chydlynu'r cydweithrediad hwn, gan weithio gyda phartneriaid ledled Cymru i symud o fewnwelediad i weithredu ymarferol. Nid creu rhaglen ar wahân arall yw'r rôl, ond darparu cymorth asgwrn cefn ysgafn: cysylltu pobl, syntheseiddio mewnwelediad, nodi bylchau a helpu partneriaid i lunio atebion parod ar gyfer peilot. Y bwriad yw helpu partneriaid i adeiladu ar yr hyn sy'n bodoli eisoes a symud tuag at weithredu mwy cydlynus.",
      p2: "Mae'r gwaith yn gydweithredol yn fwriadol. Bydd yn esblygu wrth i fwy o gyflogwyr, sefydliadau cymunedol, elusennau, addysgwyr, cyllidwyr a chyrff cyhoeddus gyfrannu mewnwelediad a gallu."
    },
    getInvolved: {
      tag: "Cydweithredu Ar Unwaith",
      title: "Sut i gymryd rhan",
      tabs: {
        employers: "Cyflogwyr",
        partners: "Partneriaid Cymunedol ac Elusennol",
        education: "Ysgolion, Colegau a Phrifysgolion",
        government: "Llywodraeth a Chyrff Cyhoeddus",
        funders: "Cyllidwyr a Phartneriaid Strategol"
      },
      tabContent: {
        employers: {
          title: "Helpu i gysylltu galw gweithlu'r dyfodol â chyfle gweladwy.",
          desc: "Gallai hyn gynnwys rhannu anghenion sgiliau'r dyfodol, cynnal gweithdai dylunio, cynnig profiad o'r gweithle, cefnogi mentora, neu helpu i siapio peilot sy'n gysylltiedig â swyddi go iawn a sectorau twf."
        },
        partners: {
          title: "Helpu i sicrhau bod atebion wedi'u seilio ar brofiad byw ac ymddiriedaeth gymunedol.",
          desc: "Gall grwpiau cymunedol ac elusennau rannu'r hyn maent yn ei weld yn lleol, nodi ble mae pobl ifanc a theuluoedd yn wynebu rhwystrau, helpu i brofi syniadau sy'n dod i'r amlwg, a chysylltu'r gwaith â'r bobl a'r lleoedd y mae wedi'i ddylunio i'w cefnogi."
        },
        education: {
          title: "Helpu i gysylltu profiad pobl ifanc â llwybrau'r dyfodol.",
          desc: "Gall ysgolion, colegau a phrifysgolion gefnogi mewnwelediad ieuenctid, cynnal gweithdai dylunio, cysylltu dysgwyr â chyflogwyr a phartneriaid cymunedol, a helpu i brofi sut mae swyddi'r dyfodol a sectorau twf lleol yn cael eu trosi'n ymwybyddiaeth i ddysgwyr."
        },
        government: {
          title: "Helpu i alinio polisi, comisiynu, gwerth cymdeithasol a gweithredu seiliedig ar le.",
          desc: "Gall y llywodraeth a chyrff cyhoeddus gyfrannu mewnwelediad, cysylltu blaenoriaethau polisi a chyflawni, rhannu tystiolaeth, alinio â strategaethau cyflogaeth a sgiliau ieuenctid, a helpu i nodi ble y gallai peilotiaid ymarferol gefnogi canlyniadau rhanbarthol ehangach."
        },
        funders: {
          title: "Helpu i symud y gwaith o fewnwelediad i beilotiaid ymarferol.",
          desc: "Helpu i ariannu cam nesaf y gwaith: cryfhau'r sylfaen dystiolaeth, cefnogi llais ieuenctid, siapio cyfleoedd peilot ac adeiladu'r cydlynu sydd ei angen i symud o fewnwelediad i gyflawni."
        }
      },
      form: {
        fullName: "Enw Llawn",
        namePlaceholder: "Eich Enw",
        organisation: "Sefydliad",
        orgPlaceholder: "Enw'r Sefydliad",
        role: "Rôl / Teitl Swydd",
        rolePlaceholder: "e.e. Cyfarwyddwr, Rheolwr Partneriaeth",
        orgType: "Math o Sefydliad",
        email: "Cyfeiriad E-bost",
        emailPlaceholder: "enw@sefydliad.cymru",
        phone: "Rhif Ffôn",
        phonePlaceholder: "e.e., 07123 456789",
        involvementOption: "Sut hoffech chi gymryd rhan?",
        message: "Neges / unrhyw beth defnyddiol i'w wybod",
        messagePlaceholder: "Rhannwch fanylion am eich amcanion neu sut y gallwn gydweithio orau...",
        submitBtn: "Cyflwyno Ymholiad",
        submittingBtn: "Yn cyflwyno..."
      },
      options: {
        employers: "Rhannu anghenion sgiliau'r dyfodol",
        partners: "Rhannu mewnwelediad cymunedol",
        education: "Cysylltu ni â phobl ifanc neu ysgolion",
        government: "Rhannu data neu ymchwil berthnasol",
        funders: "Ariannu'r cam nesaf",
        all: [
          { label: "Rhannu anghenion sgiliau'r dyfodol", value: "Share future skills needs" },
          { label: "Cyfrannu at fap yr ecosystem", value: "Contribute to the ecosystem map" },
          { label: "Cysylltu ni â phobl ifanc neu ysgolion", value: "Connect us to young people or schools" },
          { label: "Rhannu mewnwelediad cymunedol", value: "Share community insight" },
          { label: "Cynnig cyfarfyddiadau â chyflogwyr", value: "Offer employer encounters" },
          { label: "Cynnig profiad gwaith neu fentora", value: "Offer work experience or mentoring" },
          { label: "Cefnogi dylunio peilot", value: "Support pilot design" },
          { label: "Ariannu'r cam nesaf", value: "Fund the next phase" },
          { label: "Ymuno â gweithdy dylunio", value: "Join a design workshop" },
          { label: "Rhannu data neu ymchwil berthnasol", value: "Share relevant data or research" },
          { label: "Trafod partneriaeth strategol", value: "Discuss strategic partnership" }
        ]
      },
      orgTypes: [
        { label: "Cyflogwr", value: "Employer" },
        { label: "Partner Cymunedol ac Elusennol", value: "Community & Charity Partner" },
        { label: "Ysgol, Coleg neu Brifysgol", value: "School, College or University" },
        { label: "Llywodraeth a Chorff Cyhoeddus", value: "Government & Public Body" },
        { label: "Cyllidiwr a Phartner Strategol", value: "Funder & Strategic Partner" },
        { label: "Arall", value: "Other" }
      ],
      success: {
        title: "Anfonwyd yr Ymholiad yn Llwyddiannus!",
        desc: (name, org) => `Diolch, ${name || "Bartner"} o ${org || "eich sefydliad"}. Mae eich manylion cydweithredu wedi'u hanfon yn uniongyrchol at info.oaha.uk@gmail.com.`,
        mockNote: "Nodyn Datblygwr: Cyflwynwyd y ffurflen yn llwyddiannus mewn modd efelychu oherwydd nid yw RESEND_API_KEY wedi'i ffurfweddu eto.",
        instantBackupPrompt: "Os oes angen copi wrth gefn ar unwaith arnoch neu os hoffech anfon â llaw, gallwch ddefnyddio'r botwm isod.",
        emailBackupBtn: "Agor Cleient E-bost (Cefn)",
        submitAnotherBtn: "Cyflwyno Ymateb Arall"
      }
    },
    mapModal: {
      tag: "Ffurflen Gyfrannu a Rennir",
      title: "Cyfrannu at fap yr ecosystem",
      recipientNote: "Anfonir atebion yn uniongyrchol at info.oaha.uk@gmail.com",
      howContributeLabel: "Sut hoffech chi gyfrannu?",
      contributionTypes: [
        { label: "Ychwanegu fy sefydliad", value: "Add my organisation" },
        { label: "Rhannu mewnwelediad", value: "Share insight" },
        { label: "Awgrymu sefydliad arall", value: "Suggest another organisation" },
        { label: "Tynnu sylw at fwlch", value: "Highlight a gap" },
        { label: "Cynnig data neu dystiolaeth", value: "Offer data or evidence" }
      ],
      nameLabel: "Eich Enw",
      namePlaceholder: "e.e. Dafydd Evans",
      contactLabel: "Manylion Cyswllt",
      contactPlaceholder: "e.e. ebost@sefydliad.cymru neu 07123456789",
      messageLabel: "Manylion Cyfrannu / Neges (Dewisol)",
      messagePlaceholder: "Rhowch fanylion am eich sefydliad, y mapio bylchau, awgrymiadau, neu dystiolaeth...",
      sendBtn: "Anfon Cyfraniad",
      sendingBtn: "Yn anfon...",
      cancelBtn: "Canslo",
      successTitle: "Anfonwyd y Cyfraniad yn Llwyddiannus!",
      successDesc: (name, type) => `Diolch, ${name}. Mae eich dewis "${type}" wedi'i anfon yn uniongyrchol at info.oaha.uk@gmail.com.`,
      emailBackupBtn: "Agor Cleient E-bost (Cefn)",
      submitAnotherBtn: "Cyflwyno Cyfraniad Arall"
    },
    footer: {
      mainText: "Mae hwn yn ddiweddariad cynnydd cyhoeddus ar gydweithrediad seiliedig ar le sy'n helpu Cymru i gysylltu twf, sgiliau, cyflogwyr, mewnwelediad cymunedol a llais ieuenctid yn llwybrau cliriach i bobl ifanc.",
      returnMain: "Dychwelwch i'n prif wefan yn",
      orConnect: "neu cysylltwch â ni ar LinkedIn:",
      copyright: "© 2026 OAHA UK. Menter Diweddaru Gweithredol.",
      bilingualNotice: "Available in English and Welsh / Ar gael yn Saesneg ac yn Gymraeg."
    }
  }
};
