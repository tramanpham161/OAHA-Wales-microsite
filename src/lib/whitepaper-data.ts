export interface PageSection {
  type: "heading" | "subheading" | "paragraph" | "list" | "table" | "core-proposition" | "meta";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

export interface WhitepaperPage {
  pageNum: number;
  title: string;
  sections: PageSection[];
}

export const WHITEPAPER_PAGES: WhitepaperPage[] = [
  {
    pageNum: 1,
    title: "Accelerating Social Mobility in Wales",
    sections: [
      {
        type: "meta",
        text: "Lead author: Nina Slingsby OAHA | Lewis Silkin in partnership with Wales Social Mobility Working Group. May 2026."
      },
      {
        type: "heading",
        text: "Accelerating Social Mobility in Wales"
      },
      {
        type: "subheading",
        text: "A white paper for place-based action, stronger transitions, and coordinated opportunity"
      },
      {
        type: "paragraph",
        text: "Based on Phase 1 discovery work undertaken by OAHA and Lewis Silkin with insight and contribution for the Wales Social Mobility Working Group - May 2026."
      },
      {
        type: "core-proposition",
        text: "Core proposition: Wales already has significant activity, insight and commitment. While provision exists across much of the journey, gaps remain for particular cohorts, transitions and places, including learners with additional learning needs and some pre-16 to post-16 pathways. The deeper challenge is fragmentation, visibility and weak handoffs across the journey. For too many young people and families, support is still difficult to see, difficult to navigate, and too dependent on whether someone can interpret the options around them. This paper therefore argues for a place-based response that improves handoffs, coordination and pathway visibility, rather than adding another disconnected initiative."
      }
    ]
  },
  {
    pageNum: 2,
    title: "Foreword & Signatories",
    sections: [
      {
        type: "heading",
        text: "Foreword"
      },
      {
        type: "paragraph",
        text: "Wales has a genuine opportunity to lead with a more place-based, connected and human-centred approach to social mobility. Across the country there is already considerable activity: employers investing in talent, educators supporting progression, community organisations holding trusted relationships, and public bodies working to improve outcomes. Yet from the perspective of many young people and families, the route through education, employability and work can still feel difficult to see, difficult to navigate, and too dependent on where someone lives or who can help them interpret the system."
      },
      {
        type: "paragraph",
        text: "This white paper brings together the outcomes from a working group comprising organisations across Wales that want to collaborate to improve social mobility outcomes. It translates workshop insight, early ecosystem mapping and stakeholder reflection into a clearer policy-style narrative. Its purpose is not to duplicate the work already taking place. Its purpose is to clarify where collective effort could add most value, and to provide a stronger basis for conversations with government, funders and delivery partners."
      },
      {
        type: "paragraph",
        text: "It also makes a broader proposition: Wales has an opportunity to demonstrate UK-leading practice in how devolved policy, regional insight, local relationships and practical delivery can be connected more effectively. Mapping the collective effort already in play is not peripheral to that ambition; it is fundamental to helping local authorities, funders and delivery partners operate more coherently around the needs of young people and communities."
      },
      {
        type: "paragraph",
        text: "The core message is simple. Wales does not need another disconnected initiative. It needs stronger handoffs, clearer pathways, better visibility of what already exists, and a practical place-based mechanism for turning insight into pilot-ready action."
      },
      {
        type: "heading",
        text: "Working Group Signatories"
      },
      {
        type: "paragraph",
        text: "This white paper has been developed through Phase 1 discovery work led by OAHA and Lewis Silkin, with the support and insight of a cross-sector working group committed to improving social mobility outcomes across Wales."
      },
      {
        type: "paragraph",
        text: "Over recent months, the collaboration has engaged more than 40 organisations across the Welsh ecosystem, including employers, charities, community partners, education and youth organisations, civic stakeholders and policy-linked bodies. The organisations listed below have contributed to the working group and are happy to be cited as part of this collective effort."
      },
      {
        type: "list",
        items: [
          "Browne Jacobson",
          "Cardiff & Vale College",
          "The Mullany Fund",
          "We are Cowshed"
        ]
      },
      {
        type: "paragraph",
        text: "Their involvement signals support for the direction of travel set out in this paper: the need for stronger handoffs, clearer pathways, better visibility of existing provision and more coordinated, place-based action."
      }
    ]
  },
  {
    pageNum: 3,
    title: "Executive Summary",
    sections: [
      {
        type: "heading",
        text: "Executive Summary"
      },
      {
        type: "paragraph",
        text: "This paper sets out the case for a place-based social mobility approach in Wales, grounded in Phase 1 discovery work led through the OAHA and Lewis Silkin collaboration. It argues that Wales does not lack intent, and nor does it lack activity. However, gaps remain for specific cohorts, transitions and places, and the system still feels fragmented at key points in the journey. Young people can still fall through the gaps between education, support, employability and work, especially where handoffs are weak, pathways are unclear, or continuity of support is lost."
      },
      {
        type: "paragraph",
        text: "Phase 1 focused on understanding the system before proposing solutions. The work validated the Welsh context, mapped the learner journey from home and community through to school, post-16 routes, re-entry and second-chance pathways, developed a first-cut ecosystem map, tested early hypotheses with stakeholders, and began identifying no-regrets areas for collective action. The current initial scan captures 171 mapped organisation-stage touchpoints across the learner journey (J1-J6). This should be read as a pathway-touchpoint count rather than a de-duplicated census of unique organisations, but it already demonstrates that Wales has substantial activity across the journey."
      },
      {
        type: "paragraph",
        text: "Between December 2025 and April 2026, Phase 1 did more than generate insight. It helped grow the collaboration from an initial core of around 10 organisations to a wider cross-sector group of more than 40 organisations across Wales. That growth matters not simply as a participation measure, but because it has enabled a richer understanding of the charities, community organisations and wider actors active across the learner journey. It has also strengthened shared journey intelligence: clarifying where handoffs are weak, where routes remain difficult to interpret, and where collective effort could add the greatest value. Just as importantly, the process has started to build trust, social cohesion and a shared willingness among organisations to work together in a more connected way. These are not peripheral outcomes. They are part of the enabling infrastructure required for credible place-based action."
      },
      {
        type: "paragraph",
        text: "The strongest finding is that the issue is not simply the amount of provision available. The issue is what happens at the handoffs. Pathways are often hard to see and interpret early enough. Transition support can be cold, late or unclear. Non-linear routes can feel exhausting to navigate. Real jobs and local pathways are not always translating clearly into learner awareness. Access alone does not guarantee progression where workplace cultures continue to privilege familiarity and narrow ideas of fit."
      },
      {
        type: "paragraph",
        text: "On the basis of this evidence, the paper proposes a practical next phase built around six priorities:"
      },
      {
        type: "list",
        items: [
          "A Cardiff-focused, South East Wales Metro-enabled regional pilot;",
          "Stronger education-to-work pathway design;",
          "Better family and career awareness;",
          "Deeper employer connection;",
          "Structured youth voice and lived experience;",
          "Continual updating of the Wales Social Mobility Ecosystem Map."
        ]
      },
      {
        type: "paragraph",
        text: "This version should be read as the core neutral draft of the paper. It is designed to be credible across multiple audiences, including civil servants, ministers, local authorities, funders and delivery partners, and can be lightly tailored for different audiences while retaining the same central argument and evidence base."
      },
      {
        type: "paragraph",
        text: "It should also be understood as complementary to the wider Welsh policy and delivery landscape, including several documents, partnerships and work being undertaken (Well-being of Future Generations framework, the Socio-economic Duty, the Youth Engagement and Progression Framework, the Young Person’s Guarantee, Careers Wales, Regional Skills Partnerships, the Child Poverty Strategy, and the Social Partnership and Public Procurement agenda)."
      },
      {
        type: "paragraph",
        text: "The intention is not to compete with that infrastructure, but to help it connect more effectively around place, pathway clarity and pilot-ready action."
      }
    ]
  },
  {
    pageNum: 4,
    title: "Proposal Purpose & Priorities",
    sections: [
      {
        type: "heading",
        text: "Proposal"
      },
      {
        type: "subheading",
        text: "Purpose & Strategic Alignment"
      },
      {
        type: "table",
        headers: ["Priority", "What it means"],
        rows: [
          ["1. Regional pilot", "Use Cardiff as the operational hub within a Cardiff and South East Wales Metro regional pilot, generating learning that reflects transport, labour-market and community realities across the wider region."],
          ["2. Stronger transitions", "Improve support at school-to-post-16, post-16-to-work, and re-entry points rather than adding parallel activity."],
          ["3. Youth-led validation", "Test the emerging themes directly with young people and lived experience before shaping pilots."],
          ["4. Light backbone function", "Maintain momentum, coordination and synthesis without introducing heavy bureaucracy or duplicating statutory roles."],
          ["5. Shared roadmap", "Translate evidence into pilot-ready propositions and a stronger case for commissioning, policy and investment."],
          ["6. Shared ecosystem map", "Continue to create a clearer picture of who is doing what, where, for whom, and where handoffs or gaps need attention."]
        ]
      }
    ]
  },
  {
    pageNum: 5,
    title: "1. Introduction & Context",
    sections: [
      {
        type: "heading",
        text: "1. Introduction and purpose"
      },
      {
        type: "paragraph",
        text: "This document draws together the story so far from the Wales collaboration and presents it in a format that is easier to share with external stakeholders, including government, funders and prospective delivery partners. It should be read as the core neutral version of the paper: a base narrative designed to be credible across multiple audiences, including civil servants, ministers, anchor institutions, commissioners, local government, and philanthropic or corporate funders. It is envisaged that later versions may be lightly tailored for specific audiences, while retaining the same central evidence base and strategic logic."
      },
      {
        type: "paragraph",
        text: "The paper has three aims:"
      },
      {
        type: "list",
        items: [
          "To set out clearly why a place-based response to social mobility matters in Wales.",
          "Summarise what Phase 1 has already revealed about fragmentation, weak handoffs and uneven pathway visibility.",
          "To propose a credible next stage that remains collaborative, practical and proportionate."
        ]
      },
      {
        type: "paragraph",
        text: "This is not a final programme blueprint. Nor is it an attempt to create a new system alongside existing Welsh structures. Rather, it is an enabling paper: one that seeks to clarify how existing intent, activity and infrastructure could be connected more effectively in practice. The ambition is system change, but the method is practical and staged: build the shared picture, strengthen coordination, validate with youth voice, test in place, and use that learning to shape wider policy and investment conversations."
      },
      {
        type: "heading",
        text: "2. Why Wales, and why now"
      },
      {
        type: "paragraph",
        text: "The argument for action in Wales is both strategic and practical. Wales has devolved responsibilities, a strong policy basis for prevention and collaboration, and an established architecture for youth engagement, progression and employability. The Youth Engagement and Progression Framework and Young Person’s Guarantee already provide important foundations, while Careers Wales, local authorities and wider regional structures all play critical roles in helping young people move through the system. These are important assets. They mean Wales is not starting from scratch."
      },
      {
        type: "paragraph",
        text: "At the same time, the urgency is clear. Transition remains a pressure point. Young people face uneven movement between school, post-16 routes, employability support and work. Families do not always have the information or confidence to interpret what opportunities really exist. Employers can struggle to connect their demand for talent with the learner pathways around them. Community organisations often hold the strongest trusted relationships, but they are not always connected into wider system design."
      },
      {
        type: "paragraph",
        text: "The result is that activity can be strong in pockets while the overall experience remains fragmented. That is why the central task is connective. The question is not whether Wales has enough people trying to make a difference. The question is how to help those efforts align more effectively around the moments where people are most at risk of falling through the gaps."
      },
      {
        type: "heading",
        text: "3. Rationale for a place-based response"
      },
      {
        type: "paragraph",
        text: "A place-based approach is not about narrowing ambition to one locality. It is about recognising that barriers are experienced in places, not on paper. Housing, transport, confidence, local labour markets, trusted relationships, institutional handoffs and available routes all combine differently from one area to another. A strategy that ignores those realities risks staying too abstract to change lived experience."
      },
      {
        type: "paragraph",
        text: "This is why the next phase should be framed not as a Cardiff-only pilot, but as a Cardiff-focused, South East Wales Metro-enabled regional pilot. Cardiff should remain the operational hub because it offers convening power, institutional density and visibility. But the learning frame should extend across the wider regional system, including connected towns and Valleys communities, where transport dependency, labour-market interdependence and uneven opportunity are especially visible."
      }
    ]
  },
  {
    pageNum: 6,
    title: "4. Phase 1 & Ecosystem Scan",
    sections: [
      {
        type: "paragraph",
        text: "The case for place-based action is therefore practical. It allows partners to start where the friction is visible, work with the organisations already operating in that place, test what works under real conditions, and generate evidence strong enough to influence wider policy and funding conversations."
      },
      {
        type: "paragraph",
        text: "For Wales, this also fits the broader policy logic of long-term, preventative and collaborative action. It supports a model that learns by doing, builds trust across sectors, and strengthens the infrastructure needed for more coherent opportunity pathways. It also aligns with the current emphasis on digital enablement, data sharing, socially responsible procurement, fair work, and stronger place-based investment."
      },
      {
        type: "heading",
        text: "4. Phase 1"
      },
      {
        type: "paragraph",
        text: "Phase 1 deliberately prioritised discovery over premature solution design. The work began with desktop research and an initial open-data scan to ground the discussion in the Welsh context. It then mapped the learner journey from home and community through school, post-16 routes, entry to work, in-work progression, and re-entry or second-chance pathways. Alongside this, stakeholders helped develop a first-cut ecosystem map and tested early hypotheses about where the journey appears to break down. In its current form, the initial scan captures 171 mapped organisation-stage touchpoints across J1-J6, showing the breadth of activity touching the pathway."
      },
      {
        type: "paragraph",
        text: "This sequencing matters. The aim has been to understand the system first, then refine opportunities with stakeholders, then shape pilots that are more likely to be credible, collaborative and useful in practice."
      },
      {
        type: "heading",
        text: "4.1 What Phase 1 has already achieved"
      },
      {
        type: "paragraph",
        text: "Phase 1 has already created meaningful progress in a relatively short period of time. Between December 2025 and April 2026, the collaboration grew from an initial group of around 10 organisations to a broader cross-sector coalition of more than 40 organisations across Wales. This matters not only because the network has expanded, but because the quality of understanding has deepened alongside it."
      },
      {
        type: "paragraph",
        text: "Through this process, the collaboration has developed a stronger picture of the charities, community organisations and wider stakeholders active across the social mobility journey. It has also built more detailed journey intelligence, helping to identify where support is present, where pathways remain unclear, where handoffs are weakest, and where young people and communities are most likely to experience friction."
      },
      {
        type: "paragraph",
        text: "Alongside this, Phase 1 has begun to create something that is less visible, but no less important. It has helped generate early trust, stronger social cohesion and a shared desire among organisations to work together on this issue in a more aligned and practical way. In a system where fragmentation is itself part of the challenge, that increased willingness to collaborate should be recognised as a meaningful outcome in its own right."
      },
      {
        type: "paragraph",
        text: "This insight also aligns with the wider place-based argument now being made nationally: that local ecosystems matter, and that social mobility improves when transport, skills, employers, local institutions and community relationships are understood as part of one connected opportunity system rather than as separate policy silos."
      },
      {
        type: "paragraph",
        text: "Taken together, these achievements mean that Phase 1 should be understood not simply as a discovery exercise, but as the beginning of the enabling infrastructure for collective action in Wales. It has strengthened the evidence base, widened participation, improved visibility of the ecosystem, and created a stronger platform from which to move into pilot-ready design."
      },
      {
        type: "heading",
        text: "Initial ecosystem scan: 171 mapped organisations against the journey (J1-J6)"
      },
      {
        type: "table",
        headers: ["Journey stage", "Organisation-stage entries"],
        rows: [
          ["Home and community", "8"],
          ["School", "18"],
          ["Post-16 (FE / sixth form / training)", "25"],
          ["Entry to work", "63"]
        ]
      }
    ]
  },
  {
    pageNum: 7,
    title: "Key Findings & Action Priorities",
    sections: [
      {
        type: "table",
        headers: ["Journey stage", "Organisation-stage entries"],
        rows: [
          ["In-work progression", "11"],
          ["Re-entry / second chance", "46"],
          ["Total mapped touchpoints", "171"]
        ]
      },
      {
        type: "paragraph",
        text: "Note: the 171 figure reflects the current initial scan of mapped organisation-stage touchpoints, not a final de-duplicated census of unique charities or VCSE organisations. The map should be treated as a live working asset that will continue to be cleaned, expanded and updated as the project progresses."
      },
      {
        type: "heading",
        text: "How this collaboration compliments existing Welsh systems"
      },
      {
        type: "paragraph",
        text: "This collaboration is intended to compliment existing Welsh structures, not duplicate them. Wales already has statutory and funded infrastructure that matters to this agenda, including the Youth Engagement and Progression Framework, the Young Person’s Guarantee, Careers Wales, local authority-led coordination, Regional Skills Partnerships, regional governance arrangements and wider funded services for young people."
      },
      {
        type: "paragraph",
        text: "The distinctive value of this collaboration is to build an agile programme to bring corporates, charities and enablers together so we can act as a connective and enabling layer across the space between policy intent, local delivery and lived experience. In practice, helping partners build a shared picture of the ecosystem, identifying where handoffs are weak, surfacing specific friction points by cohort and place, testing what young people say would make the system easier to navigate, and shaping pilot-ready propositions where collective action can add value."
      },
      {
        type: "paragraph",
        text: "In that sense, the work is not a parallel programme. It is a practical mechanism for strengthening coherence across what already exists, especially where existing systems are experienced by young people and families as fragmented, unclear or inconsistent."
      },
      {
        type: "heading",
        text: "4.2 Key findings"
      },
      {
        type: "paragraph",
        text: "Together, these findings amount to five uncomfortable truths about how opportunity is still experienced in practice:"
      },
      {
        type: "list",
        items: [
          "Wales has substantial activity, but activity is not the same as coherence. Pathways may exist on paper without feeling visible, relatable or easy to understand early enough.",
          "Transition remains a system challenge. School-to-post-16 and school-to-support handoffs are often too cold, too late and too unclear, with continuity of support too often lost at the point it matters most.",
          "For people taking non-linear routes, navigation can feel exhausting, with repeated retelling, weak advocacy and complex thresholds.",
          "Education-to-employer translation remains inconsistent: real jobs, real routes and future demand do not always convert into clear learner awareness or pathway design.",
          "Access is not the same as progression. Belonging, confidence, workplace culture and assumptions about fit still shape who gets on."
        ]
      },
      {
        type: "heading",
        text: "4.3 Phase 1: Emerging priorities for collective action"
      },
      {
        type: "paragraph",
        text: "Stakeholders active within the working group have already begun to converge around a small number of themes where collective effort appears most likely to add value. These are not yet fixed policy commitments. They are the strongest current priorities to test and refine with youth insight before shaping pilot propositions."
      },
      {
        type: "table",
        headers: ["Priority", "What it means in practice"],
        rows: [
          ["Families and career awareness", "Make local and regional pathways easier for families and trusted adults to understand through clearer language, relatable examples and more visible routes into work."]
        ]
      }
    ]
  },
  {
    pageNum: 8,
    title: "5. Recommended Activities",
    sections: [
      {
        type: "table",
        headers: ["Priority", "What it means in practice"],
        rows: [
          ["Education-to-work pathways", "Strengthen post-16 route clarity, understanding of apprenticeships, earlier exposure to options and better support for learners who may not have guidance at home."],
          ["Employer connection", "Help young people see what jobs actually exist, how these connect to skills and subjects, and where employers need talent now and in the future."],
          ["Youth voice and lived experience", "Use direct input from young people to test what feels meaningful, what feels unrealistic and what would land best in practice."]
        ]
      },
      {
        type: "heading",
        text: "5. Recommended activities for the next phase"
      },
      {
        type: "paragraph",
        text: "The next phase should remain deliberately practical. It should not attempt to solve everything at once. Instead, it should create enough shared infrastructure, evidence and confidence to move from discussion into credible place-based testing."
      },
      {
        type: "heading",
        text: "Activity 1: Establish a Cardiff-focused, South East Wales Metro-enabled regional pilot"
      },
      {
        type: "paragraph",
        text: "Cardiff should be used as the operational hub for an initial place-based pilot, but the learning frame should extend across the wider South East Wales regional system. This better reflects the real geography of opportunity, commuting, transport dependency and institutional interdependence."
      },
      {
        type: "heading",
        text: "Activity 2: Create clearer transition pathways"
      },
      {
        type: "paragraph",
        text: "The collaboration should focus especially on transition points where ownership currently feels weak or fragmented. This includes school-to-post-16, post-16-to-work, and re-entry routes. Particular attention should be paid to transitions involving learners with more complex needs, including ALN, and to the continuity of support across handoff points."
      },
      {
        type: "heading",
        text: "Activity 3: Embed youth-led testing before pilot design is finalised"
      },
      {
        type: "paragraph",
        text: "The priority themes identified so far are strong enough to test, but not yet fixed. Youth-led and lived-experience validation should therefore be treated as a design requirement rather than a final-stage consultation exercise."
      },
      {
        type: "heading",
        text: "Activity 4: Create a light-touch backbone function"
      },
      {
        type: "paragraph",
        text: "The work will need a small coordination mechanism to maintain cadence, synthesis and decision points. Its role should be tightly defined. It should convene, connect, synthesise and clarify. It should not duplicate statutory functions, hold delivery ownership for activity that already sits elsewhere, or create heavy governance."
      },
      {
        type: "heading",
        text: "Activity 5: Produce pilot-ready propositions and a shared roadmap"
      },
      {
        type: "paragraph",
        text: "By the end of the next phase, partners should be able to articulate which opportunities are ready for testing, what should not be pursued, and what evidence, partnerships or investment would be needed to move forward."
      },
      {
        type: "heading",
        text: "Activity 6: Build the Wales Social Mobility Ecosystem Map (v1)"
      },
      {
        type: "paragraph",
        text: "The map should combine stakeholder insight with open-source data to make it easier to understand who is doing what, where, and for whom. Its purpose is not simply descriptive. It should help identify friction points, duplication risks, adjacent activity and opportunities for stronger handoffs."
      }
    ]
  },
  {
    pageNum: 9,
    title: "6. Delivery Model & Sign-off",
    sections: [
      {
        type: "heading",
        text: "6. Delivery model and participation"
      },
      {
        type: "paragraph",
        text: "Participation should remain modular, practical and time-bound. Not every stakeholder needs to play the same role. A simple three-layer model provides enough structure to support momentum without over-engineering the collaboration."
      },
      {
        type: "paragraph",
        text: "The backbone or coordination group should be small and time-limited. Its job is to convene, synthesise insight, maintain momentum and prepare decision points. It should act as facilitator and connector, not as a new decision-making body or substitute for statutory structures."
      },
      {
        type: "table",
        headers: ["Participation layer", "Role", "Indicative contribution"],
        rows: [
          ["Backbone / coordination group", "Convene, synthesise, maintain momentum and prepare decision points.", "Light weekly coordination and periodic cross-workstream check ins."],
          ["Workstream contributors", "Join focused sessions linked to expertise; sense-check feasibility; shape what good looks like.", "Two to three sessions over a defined period, plus targeted input where relevant."],
          ["Informed network", "Stay connected, review updates, and step in later if pilots or scale become relevant.", "Update-only involvement with the option to engage later."]
        ]
      },
      {
        type: "heading",
        text: "7. What this phase should produce"
      },
      {
        type: "paragraph",
        text: "A successful next phase would produce a clear set of tangible outputs rather than another broad statement of intent. At minimum, the collaboration should aim to deliver:"
      },
      {
        type: "list",
        items: [
          "A Wales Social Mobility Ecosystem Map (v1), showing who is doing what, where, and for whom.",
          "A gap and duplication insight note, identifying priority cohorts, places, friction points and weak handoffs.",
          "A shortlist of pilot-ready opportunities, shaped through professional insight and youth validation.",
          "A clear articulation of what not to pursue, so that time and resource are not lost to duplication.",
          "A stronger shared narrative for future commissioning, policy, funding and investment conversations."
        ]
      },
      {
        type: "heading",
        text: "8. Implications for government and system leaders"
      },
      {
        type: "paragraph",
        text: "For government and system leaders, the significance of this work is not only that it may generate useful local pilots. It is that it offers a practical method for improving how opportunity is coordinated across systems that too often operate in parallel."
      },
      {
        type: "paragraph",
        text: "Wales also has an opportunity to position itself as a leader in UK place-based social mobility practice: not by creating a headline initiative in isolation, but by showing how devolved levers, local@insight, regional coordination and community voice can be brought together more coherently."
      },
      {
        type: "list",
        items: [
          "Transition points should be treated as a system design issue, not simply an individual resilience issue.",
          "Place matters. Barriers and assets combine differently across Wales, so local and regional testing is essential.",
          "Youth voice must be built into design, not added once solutions are already formed.",
          "Light but intentional coordination is necessary if collective effort is to produce something more than goodwill. That coordination should support existing systems, not duplicate them.",
          "Stronger evidence, shared language and practical data infrastructure will be critical if Wales is to build a more credible case for future commissioning, investment and policy action.",
          "Social mobility should be connected more explicitly to the tools government is already leaning on, including socially responsible procurement, regional skills planning, local well-being assessment, and place-based regeneration and transport investment."
        ]
      }
    ]
  },
  {
    pageNum: 10,
    title: "9. Conclusion",
    sections: [
      {
        type: "heading",
        text: "9. Conclusion"
      },
      {
        type: "paragraph",
        text: "Wales has the ingredients needed to become a model for place-based social mobility: strong policy intent, committed stakeholders, devolved levers, and a growing coalition that wants to move from discussion into action. The opportunity now is not to build a parallel system, but to make the existing landscape work more coherently for the people it is meant to serve."
      },
      {
        type: "paragraph",
        text: "The central insight from Phase 1 is connective. Wales has meaningful activity already in play, but activity alone does not guarantee a navigable journey. The next phase should therefore focus on enabling infrastructure: a clearer shared map, stronger handoffs, structured youth validation, a light backbone that supports rather than controls, and a Cardiff-focused, South East Wales Metro-enabled regional pilot capable of generating learning for wider Welsh application."
      },
      {
        type: "paragraph",
        text: "That is the case for the next phase: not another disconnected initiative, but a more visible, coordinated and place-rooted route into opportunity."
      }
    ]
  },
  {
    pageNum: 11,
    title: "Appendices A & B",
    sections: [
      {
        type: "heading",
        text: "Appendices"
      },
      {
        type: "heading",
        text: "Appendix A. Phase 1 approach"
      },
      {
        type: "paragraph",
        text: "Phase 1 has focused on understanding and describing the system before moving prematurely to solution design. The work has included desktop research, a high-level open-data scan, early stakeholder engagement, a first-cut ecosystem map, and collaborative testing of emerging hypotheses."
      },
      {
        type: "list",
        items: [
          "Validated the Welsh context through desk research and initial data scanning.",
          "Mapped the learner journey from home and community through to work and re-entry routes.",
          "Built a first-cut ecosystem map to understand current activity and reduce duplication risk.",
          "Tested early handoff hypotheses with employers, educators and community partners.",
          "Identified no-regrets opportunities and issues that need further lived-experience validation."
        ]
      },
      {
        type: "heading",
        text: "Appendix B. Evidence and policy context"
      },
      {
        type: "paragraph",
        text: "This paper sits within a wider policy and evidence context that supports stronger place-based action on social mobility, youth transitions, inclusive growth and social impact in Wales. The policy context is not peripheral to this work: it is one of the reasons the proposal is timely."
      },
      {
        type: "paragraph",
        text: "Selected evidence also reinforces the paper’s central argument that the challenge is not simply whether activity exists, but whether activity is visible, connected and experienced by young people as a coherent route."
      },
      {
        type: "heading",
        text: "Core Welsh policy and delivery alignment"
      },
      {
        type: "list",
        items: [
          "Well-being of Future Generations (Wales) Act 2015. This paper aligns strongly with the five ways of working and with the goals of A More Equal Wales, A Prosperous Wales, Cohesive Communities and A Globally Responsible Wales.",
          "The Socio-economic Duty. The paper’s focus on handoffs, access, navigation and unequal transitions supports the Duty’s requirement to put socio-economic disadvantage more clearly into strategic decision-making.",
          "Youth Engagement and Progression Framework (YEPF) and the Young Person’s Guarantee (YPG). These provide an existing architecture for coordinated support, progression and employability, which this work is intended to compliment rather than replace.",
          "Careers Wales, local authority coordinators and wider youth support structures. These remain central to delivery and progression support in practice.",
          "Regional Skills Partnerships and wider regional governance. These already provide a basis for aligning labour-market intelligence, employer demand and regional planning."
        ]
      },
      {
        type: "heading",
        text: "Evidence on transitions, handoffs and place"
      },
      {
        type: "list",
        items: [
          "Welsh Government and Estyn material on YEPF and lead worker support highlights the importance of continuity through post-16 transition, stronger collaboration, and better data sharing across the system.",
          "Recent Welsh and UK evidence reinforces that learners with more complex needs, including some young people with ALN, can experience sharper gaps in post-16 transition and support.",
          "The South East Wales regional economic framework underlines the need for regionally aware approaches that reflect contrast, connectivity and labour-market interdependence across Cardiff and the wider region.",
          "The Social Mobility Commission’s recent place-based work argues that local insight and devolved decision making are essential to solving regional inequality.",
          "The UN Global Compact Network UK’s social mobility consultations, including work in Cardiff, reinforce the case for stronger regional coordination, partnership and clearer pathways between business, policy and community action."
        ]
      }
    ]
  },
  {
    pageNum: 12,
    title: "Appendices C, D & E",
    sections: [
      {
        type: "heading",
        text: "Selected comparable models and references"
      },
      {
        type: "list",
        items: [
          "Welsh Government, Youth Engagement and Progression Framework: overview and guidance.",
          "Welsh Government / Estyn, Youth engagement and progression lead worker review: government response.",
          "Young Person’s Guarantee Highlight Report: March 2025 to March 2026.",
          "South East Wales Regional Economic Framework.",
          "Business Wales, Regional Skills Partnerships.",
          "Social Mobility Commission, Regional Insights: Creating fairer chances across the regions, and associated place based commentary.",
          "Social Mobility Commission, 'Manchesterism': Building the UK’s Leading Engine of Social Mobility, with Andy Burnham.",
          "UN Global Compact Network UK, Social Mobility Consultations and Blueprint Report."
        ]
      },
      {
        type: "heading",
        text: "Appendix C. Indicative workstreams for the next phase"
      },
      {
        type: "paragraph",
        text: "The earlier action-planning material suggested five initial workstreams. These remain a useful organising frame for the next phase, subject to refinement:"
      },
      {
        type: "list",
        items: [
          "Ecosystem mapping and visibility.",
          "Education-to-work pathways and apprenticeships.",
          "SME engagement and shared pathways.",
          "Social value and procurement alignment.",
          "Communications, language and storytelling."
        ]
      },
      {
        type: "heading",
        text: "Appendix D. Policy, digital and social impact alignment"
      },
      {
        type: "paragraph",
        text: "To strengthen the paper for government, funders and civic stakeholders, the following interpretation should be read alongside the core argument. This is not simply a discussion paper about social mobility in the abstract. It is a place based proposal that can help existing policy commitments land more coherently in practice:"
      },
      {
        type: "list",
        items: [
          "It gives practical expression to the Well-being of Future Generations principle by focusing on prevention, long term outcomes, collaboration and involvement.",
          "It reinforces the Socio-economic Duty by putting unequal access, navigation and progression at the centre of system design.",
          "It compliments Welsh Government’s current youth and employability architecture, particularly YEPF, YPG, Careers Wales and the youth work reform agenda.",
          "It gives public bodies, anchors and suppliers a clearer route to connect social mobility ambitions to socially responsible procurement, fair work and community benefit expectations.",
          "It supports the Digital Strategy for Wales by proposing shared data, improved visibility and stronger public-service collaboration around open information.",
          "It fits the wider place agenda visible through regeneration, transport and regional growth thinking, where local people, local institutions and local evidence need to work together over time."
        ]
      },
      {
        type: "heading",
        text: "Appendix E. Ecosystem mapping note"
      },
      {
        type: "paragraph",
        text: "The ecosystem map should be read as an initial scan rather than a finished census. The current working version captures 171 mapped organisation-stage touchpoints across the J1-J6 journey, showing the breadth of activity that touches the pathway from home and community through to work, progression and re-entry."
      },
      {
        type: "paragraph",
        text: "This headline number is intentionally different from a de-duplicated organisation count. Many organisations support more than one journey stage, while some entries represent programmes, partnerships or pathway routes rather than standalone charities. Current working estimates suggest that the 171 touchpoints sit above a smaller core of around 55 to 60 charities within a broader 60-plus direct-delivery VCSE and community landscape. These lower figures are useful for stakeholder counting, but the larger figure is the better headline for understanding how much of the journey is already occupied by activity."
      },
      {
        type: "paragraph",
        text: "The key point is not simply that the ecosystem is large. It is that volume of activity can coexist with genuine gaps for particular cohorts, transitions and geographies, and with fragmentation across the wider journey. Future refreshes should therefore distinguish between overall activity, specific provision gaps, and weak handoffs between existing offers."
      }
    ]
  },
  {
    pageNum: 13,
    title: "Appendix F. Signatures & Collaborators",
    sections: [
      {
        type: "paragraph",
        text: "The map will continue to be refined as the project progresses. Future refreshes should clean duplicates, distinguish direct-delivery organisations from system infrastructure, strengthen the care-experienced and prison-experienced overlay, and update the geography and relevance of organisations operating in Cardiff and across Wales. The purpose is not to claim a final number too early, but to build a stronger and more usable asset over time."
      },
      {
        type: "heading",
        text: "Appendix F. Working group participants and signatories"
      },
      {
        type: "paragraph",
        text: "Thank you to all stakeholders, civic leaders, contributors, and the Wales Social Mobility Working Group members who made Phase 1 of this vital report possible."
      }
    ]
  }
];
