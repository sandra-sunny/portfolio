// ============================================================
// EDIT YOUR PORTFOLIO CONTENT HERE
// All text, links, and data live in this one file.
// ============================================================

export const siteContent = {
  // ── PERSONAL INFO ──────────────────────────────────────────
  name: "Sandra Sunny",
  title: "Product Manager · Product Operations · AI & Health-Tech",
  location: "New York, NY",
  linkedin: "https://linkedin.com/in/sandra-liz-sunny",
  github: "https://github.com/sandraliz601-png",
  email: "", // optional — leave blank to hide

  // ── BRAND STATEMENT ────────────────────────────────────────
  headline: "I close the gap between AI capability and real-world adoption.",
  subheadline:
    "Translating complex systems into products that people actually use, with a focus on AI-driven healthcare and femtech.",

  // ── STORY MODE ──────────────────────────────────────────────
  game: {
    startLabel: "Begin Story ▸",
    ticker: [
      "400+ onboarded at D.E. Shaw",
      "75% backlog cut",
      "LLM evals at Bloomberg",
      "First woman ELC President",
      "Graduate Marshal '26",
      "Equal access, always",
      "Columbia MSBA '26",
    ],
    chapters: [
      { number: "01", title: "Origin Story", id: "origin" },
      { number: "02", title: "Achievements Unlocked", id: "achievements" },
      { number: "03", title: "Character Stats", id: "stats" },
      { number: "04", title: "Quest Log", id: "quests" },
      { number: "05", title: "Choose Your Path", id: "path" },
    ],
    journey: [
      {
        kind: "milestone",
        location: "Dubai",
        title: "The mystery kid",
        icon: "Blocks",
        text: "I grew up in Dubai on a steady diet of Lego, puzzles, and mystery novels. Nancy Drew, Hardy Boys, Famous Five, Secret Seven. If something had a secret, I wanted to crack it. Then Dan Brown's Digital Fortress showed me that people crack codes for a living.",
      },
      {
        kind: "milestone",
        location: "St. Stephen's College, Delhi",
        title: "Math with a mission",
        icon: "Sigma",
        text: "I chose math and loved the theory in Number Theory, Group Theory, and Real Analysis, but I wanted to see math do things in the real world. CS electives opened that door, and they led to an offer from D.E. Shaw.",
      },
      {
        kind: "milestone",
        location: "D.E. Shaw, Hyderabad",
        title: "Outsider to owner",
        icon: "Building2",
        text: "I joined the IT team as one of the few women and one of the few non-tech hires, and I built my technical knowledge from scratch. Along the way I found what I'm really good at: making complex technical ideas click for people. I rebuilt our documentation, onboarded over 400 new hires, and ran training programs across the team.",
      },
      {
        kind: "checkpoint",
        text: "Checkpoint: everyone deserves equal access to knowledge, tools, and opportunity. I've believed that since college.",
      },
      {
        kind: "milestone",
        location: "Columbia, New York",
        title: "Level up",
        icon: "GraduationCap",
        text: "I came to Columbia for my Masters in Business Analytics to combine my love of math and patterns with strategic leadership. Moving to New York changed how I see myself, and startup internships lit a fire. I loved the pace, the ambiguity, and the energy of building something now.",
      },
      {
        kind: "side",
        location: "Side quest",
        title: "SousSunny",
        icon: "ChefHat",
        text: "I product-manage my own life too. I don't enjoy cooking, so I'm building SousSunny, my own sous chef that breaks meal planning into small, winnable goals. Going live soon.",
      },
      {
        kind: "milestone",
        location: "Next stop: your team?",
        title: "What's next",
        icon: "Rocket",
        highlight: true,
        text: "I'm looking for the next place to close the gap, where rigorous technical thinking meets real human adoption, and where equal access is the mission rather than a side project.",
      },
    ],
    // SunnyStreak is a SousSunny brand concept, demoed live on the quest card.
    // It is not a shipped feature, and the copy keeps that honest.
    sunnystreak: {
      kicker: "Bonus Level · Feature Concept",
      title: "SunnyStreak",
      intro:
        "The habit streak I'm designing for SousSunny, playable right here. Log a cook, real or aspirational, and keep the sun up.",
      button: "Log today's cook ▸",
      buttonDone: "Logged for today ✓",
      countLabel: "day streak",
      msgZero: "No streak yet. The pan is cold.",
      msgOne: "Day 1. Every streak starts with one slightly burnt meal.",
      msgKeepAlive:
        "Streak alive. Come back tomorrow to keep it going, or skip the wait and just message me.",
      msgBuilding: "{n} days in a row. Look at you go.",
      msgWeek: "{n} days. A full week. Honestly, better than me.",
    },
    pathChoices: [
      {
        label: "Connect on LinkedIn",
        flavor: "Route: Direct Connection",
        icon: "Link",
      },
      {
        label: "View GitHub",
        flavor: "Route: See the Code",
        icon: "GitBranch",
      },
    ],
  },

  // ── KEY WINS ───────────────────────────────────────────────
  wins: [
    {
      stat: "400+",
      label: "New Hires Onboarded",
      detail:
        "Redesigned Systems Induction at D.E. Shaw, running over 300 virtual sessions and the firm's largest in-person session since the pandemic, with 102 attendees.",
      icon: "Users",
    },
    {
      stat: "75%",
      label: "Daily Backlog Cut",
      detail:
        "Redesigned D.E. Shaw's global IT operations workflow across the Americas, APAC, and EMEA, cutting the daily backlog by 75 percent through process redesign, automation, and proactive data analysis.",
      icon: "Zap",
    },
    {
      stat: "90%",
      label: "Engagement Rate",
      detail:
        "Partnered with HR and leadership to redesign employee incentives for early adoption, reaching a 90 percent engagement rate and stronger cross-team collaboration.",
      icon: "TrendingUp",
    },
    {
      stat: "Bloomberg",
      label: "LLM Eval Pipeline",
      detail:
        "Built an LLM evaluation framework before tools like LangSmith existed, and presented the findings at the Columbia-Bloomberg ML in Finance Conference.",
      icon: "FlaskConical",
    },
    {
      stat: "St. Stephen's",
      label: "President, Enabling Unit",
      detail:
        "Elected President of the Enabling Unit at St. Stephen's College, a society for the welfare of disabled students. It was my first elected role, and where my belief in equalizing access took root.",
      icon: "Accessibility",
    },
    {
      stat: "2025",
      label: "IEOR Department Representative",
      detail:
        "Elected by my peers to represent the IEOR department at Columbia, advocating for the student body across the program.",
      icon: "Vote",
    },
    {
      stat: "Columbia Engineering",
      label: "First Woman President, ELC Club",
      detail:
        "First woman elected President of the Entrepreneurship, Leadership & Consulting Club at Columbia Engineering, continuing a pattern of stepping up wherever I am.",
      icon: "Crown",
    },
    {
      stat: "2025",
      label: "Outstanding Student Service Award",
      detail:
        "Awarded by Columbia for elected leadership as IEOR Department Representative and as the first woman elected ELC Club President.",
      icon: "Award",
    },
    {
      stat: "1,500+",
      label: "Graduates Led as Marshal",
      detail:
        "Selected as a Class Day Marshal, leading over 1,500 graduates during Columbia Engineering's May 2026 Commencement ceremonies.",
      icon: "GraduationCap",
    },
  ],

  // ── SKILLS ─────────────────────────────────────────────────
  skills: [
    {
      category: "Product & Strategy",
      level: 5,
      items: [
        "Product roadmap ownership",
        "User research & discovery",
        "Requirements & PRDs",
        "AI/ML product scoping",
        "Feature prioritization",
      ],
    },
    {
      category: "Technical Fluency",
      level: 4,
      items: [
        "Python · SQL · R",
        "LLM APIs (OpenAI, Anthropic)",
        "Next.js · TypeScript · Supabase",
        "NLP · CLIP · BERT · LIME",
        "Mixpanel · Power BI",
      ],
    },
    {
      category: "Platform Operations",
      level: 4,
      items: [
        "Confluence Administration",
        "Knowledge systems design",
        "Incident coordination",
        "Cross-org process design",
        "Software governance (EULA)",
      ],
    },
    {
      category: "Leadership & Delivery",
      level: 5,
      items: [
        "Stakeholder communication",
        "Cross-functional collaboration",
        "Onboarding at scale",
        "Team mentoring",
        "Agile / TPM delivery",
      ],
    },
  ],

  // ── PROJECTS ───────────────────────────────────────────────
  projects: [
    {
      id: "swim",
      number: "01",
      title: "Donor Retention Analytics",
      company: "Swim Across America",
      period: "May 2026 – Present",
      tags: ["Tableau", "Analytics Consulting", "Nonprofit"],
      description:
        "Building a Tableau dashboard that visualizes multi-year donor contribution trends, supporting donor retention strategy and diagnosing the drivers behind lost recurring donations.",
      outcome: "Active quest: in progress right now",
      link: "",
      difficulty: "Active Quest",
      xp: 450,
    },
    {
      id: "bloomberg",
      number: "02",
      title: "LLM Failure Mode Research",
      company: "Bloomberg",
      period: "May – Aug 2025",
      tags: ["AI Research", "NLP", "Computer Vision"],
      description:
        "Built optical-illusion datasets and applied CLIP, BERT, Word2Vec, and GloVe to evaluate how LLMs fail on perceptual tasks. Designed an explainability pipeline with LIME to surface why models break.",
      outcome: "Presented a poster at the 11th Annual Columbia-Bloomberg ML in Finance Conference",
      link: "", // add link if you have one
      difficulty: "Boss Quest",
      xp: 500,
    },
    {
      id: "avo",
      number: "03",
      title: "Clinical AI Analytics Capstone",
      company: "AVOMD",
      period: "Jan – May 2025",
      tags: ["Healthcare Analytics", "Dashboards", "Python"],
      description:
        "Analyzed AI-scribed clinical queries as my Columbia capstone, building dashboards and client-ready reports that healthcare leadership used to prioritize roadmap decisions. Surfaced 3 recurring unmet needs that shaped business strategy.",
      outcome: "Cut leadership decision-making time by 20%",
      link: "",
      difficulty: "Main Quest",
      xp: 400,
    },
    {
      id: "soussunny",
      number: "04",
      title: "SousSunny",
      company: "Solo Build",
      tags: ["Consumer App", "0 to 1", "Side Project"],
      description:
        "I don't enjoy cooking, so I'm building my own sous chef: a daily meal planner that breaks cooking into small, winnable goals. Designed, built, and shipped solo, end to end. Yes, the name is a pun on my name. No regrets.",
      outcome: "Going live soon",
      link: "", // add the live URL at launch
      difficulty: "Active Quest",
      xp: 350,
      demo: "sunnystreak",
    },
    {
      id: "citibike",
      number: "05",
      title: "Citi Bike Adventures",
      company: "Columbia Design Challenge",
      period: "Sep – Dec 2025",
      tags: ["Product Design", "User Research", "Go-to-Market"],
      description:
        "Conducted text mining and user interviews to surface adoption barriers in NYC bike-share. Designed product concepts, seasonal ride routes and local-business partnerships, built to create economic advantages for participating neighborhoods.",
      outcome: "Full PRD with go/no-go decision framework and A/B testing plan",
      link: "",
      difficulty: "Side Quest",
      xp: 250,
    },
    {
      id: "pavus",
      number: "06",
      title: "AI Procurement Platform",
      company: "Pavus AI",
      period: "Jun – Jul 2025",
      tags: ["AI Features", "Product Prototyping", "Startup"],
      description:
        "Prototyped and tested new AI features for procurement software as a Strategy and Product Intern, working directly with product and engineering stakeholders.",
      outcome: "Findings translated into roadmap recommendations",
      link: "",
      difficulty: "Main Quest",
      xp: 400,
    },
  ],

  // ── CLOSING / VALUE STATEMENT ──────────────────────────────
  closing: {
    headline: "Why Me",
    points: [
      "I've run global IT operations across three continents at D.E. Shaw and cut the daily backlog by 75% through process redesign and automation.",
      "I've owned platforms at scale as Confluence Administrator and Product Owner, from version upgrades to SQL-level automation, with 400+ hires onboarded along the way.",
      "I've built AI evaluation tooling at Bloomberg before it was a category, so I know what breaks and why.",
      "I've worked inside clinical AI workflows, building the dashboards healthcare leadership used to cut decision-making time by 20%.",
      "I ship. I'm building SousSunny, my meal-planning app, solo and end to end. It goes live soon.",
      "I connect the dots between what AI teams build and what users will actually adopt.",
    ],
    cta: "Let's build products that humans actually use.",
    ctaLabel: "Connect on LinkedIn",
    ctaLink: "https://linkedin.com/in/sandra-liz-sunny",
  },
};
