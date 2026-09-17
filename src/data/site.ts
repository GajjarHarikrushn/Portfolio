/**
 * Edit this file to change almost everything on the site.
 * Logos live in /public/assets/logos
 *
 * Sections in this file:
 *   1. Assets & logos
 *   2. Profile / hero
 *   3. Navigation
 *   4. Organizations (logo strip)
 *   5. About
 *   6. Selected work (projects)
 *   7. Experience (work + volunteer)
 *   8. Skills
 *   9. Education
 *  10. Contact
 *  11. Resume page
 */

// ---------------------------------------------------------------------------
// 1. ASSETS & LOGOS
// ---------------------------------------------------------------------------
export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

export const resumePdf = asset("assets/Harikrushn-Gajjar-Resume.pdf");
export const photo = asset("assets/hari.jpg");
export const favicon = asset("assets/favicon.svg");

export const logos = {
  umanitoba: asset("assets/logos/umanitoba.jpg"),
  aksharDigital: asset("assets/logos/akshar-digital.png"),
  aksharElectric: asset("assets/logos/akshar-electric.png"),
  baps: asset("assets/logos/baps.webp"),
  superstore: asset("assets/logos/superstore.png"),
  canadapost: asset("assets/logos/canadapost.webp"),
};

// ---------------------------------------------------------------------------
// 2. PROFILE / HERO
// ---------------------------------------------------------------------------
export const site = {
  name: "Harikrushn Gajjar",
  firstName: "Harikrushn",
  lastName: "Gajjar",
  title: "Delivery, service, and software",
  location: "Winnipeg, Manitoba, Canada",
  locationShort: "Winnipeg, MB",
  kicker: "Winnipeg · Delivery, service, and software",
  availability: "Open to operations, service, and software roles",
  educationLine: "B.Sc. Computer Science, University of Manitoba · June 2026",
  description:
    "Portfolio of Harikrushn Gajjar in Winnipeg — Canada Post letter carrier, Superstore Click & Collect veteran, BAPS youth mentor, and Computer Science graduate.",
  lede:
    "I deliver mail on Winnipeg routes, ran a busy Superstore Click & Collect floor, mentor youth at BAPS, and ship software when a role needs it. A Computer Science degree is one tool — reliability with the public is another.",
  photoAlt:
    "Harikrushn Gajjar in University of Manitoba graduation attire, class of 2026",
  photoBadgeLabel: "Class of 2026",
  photoBadge: "University of Manitoba",
  footerNote: "Built with React and TypeScript.",
};

// ---------------------------------------------------------------------------
// 3. NAVIGATION
// ---------------------------------------------------------------------------
export const nav = [
  { label: "Work", hash: "work" },
  { label: "Experience", hash: "experience" },
  { label: "Skills", hash: "skills" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", hash: "contact" },
] as const;

// ---------------------------------------------------------------------------
// 4. ORGANIZATIONS (logo strip under the photo)
// ---------------------------------------------------------------------------
export const orgs = [
  {
    name: "Canada Post",
    detail: "Letter carrier · Jul 2026 - present",
    logo: logos.canadapost,
    alt: "Canada Post logo",
    href: "https://www.canadapost-postescanada.ca/",
  },
  {
    name: "Akshar Digital Architecture",
    detail: "My company · 2025 - present",
    logo: logos.aksharDigital,
    alt: "Akshar Digital Architecture logo",
    href: "https://akshardigitalarchitecture.ca/",
  },
  {
    name: "Akshar Electric",
    detail: "Client website · aksharelectric.ca",
    logo: logos.aksharElectric,
    alt: "Akshar Electric logo",
    href: "https://aksharelectric.ca/",
  },
  {
    name: "University of Manitoba",
    detail: "Computer Science · 2020 - 2026",
    logo: logos.umanitoba,
    alt: "University of Manitoba mark",
    href: "https://umanitoba.ca/",
  },
  {
    name: "Real Canadian Superstore",
    detail: "Personal shopper · 2019 - 2023",
    logo: logos.superstore,
    alt: "Superstore mark",
    href: "https://www.realcanadiansuperstore.ca/",
  },
  {
    name: "B.A.P.S.",
    detail: "Volunteer · 2016 - present",
    logo: logos.baps,
    alt: "BAPS mark",
    href: "https://www.baps.org/",
  },
];

// ---------------------------------------------------------------------------
// 5. ABOUT
// ---------------------------------------------------------------------------
export const about = {
  eyebrow: "About",
  heading: "Reliable work, careful craft, community first.",
  paragraphs: [
    "Hiring managers filling letter-carrier, retail, public-service, or community roles should still find me here. I work a Canada Post route, spent years opening and closing Superstore Click & Collect, hold a Class 4 licence, and have mentored youth at BAPS since 2016. On time, calm with the public, used to finishing the shift.",
    "I am also a University of Manitoba Computer Science graduate. When a role needs it I ship live websites, inventory tools for large events, and systems work from class. Operations, people, and computing — that mix is what I bring to a team.",
  ],
  stats: [
    { value: "6+", label: "years mentoring youth at BAPS" },
    { value: "10+", label: "engineering projects from web to embedded" },
    { value: "Jul 2026", label: "started at Canada Post, still present" },
    { value: "Winnipeg", label: "building from Manitoba, Canada" },
  ],
};

// ---------------------------------------------------------------------------
// 6. SELECTED WORK (projects)
// ---------------------------------------------------------------------------
export type Project = {
  title: string;
  description: string;
  tags: string[];
  linkLabel: string;
  href?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Akshar Digital Architecture",
    description:
      "My company. Built a cinematic brand site — custom motion, routing, and a visual system that sells web design without looking like a template.",
    tags: ["React", "TypeScript", "Vite"],
    linkLabel: "My studio · 2025 - present",
    href: "https://akshardigitalarchitecture.ca/",
  },
  {
    title: "Akshar Electric",
    description:
      "Designed and shipped a live marketing site, then hardened AI-assisted output by hand for reliability, security, and a structure that can grow with the business.",
    tags: ["TypeScript", "React", "Firebase"],
    linkLabel: "aksharelectric.ca ↗",
    href: "https://aksharelectric.ca/",
  },
  {
    title: "Event inventory platform",
    description:
      "Volunteer-built inventory system for BAPS events that need huge, fast-moving stock. Relational SQL plus Firebase, OOP-heavy frontend logic, unit tests, and architecture docs so the next volunteer can keep shipping.",
    tags: ["TypeScript", "React", "Firebase", "SQL"],
    linkLabel: "B.A.P.S. volunteer · Apr 2026 - present",
  },
];

export const moreProjects: Project[] = [
  {
    title: "Real-time hardware game",
    description:
      "Bare-metal game on a Microchip Curiosity Nano with joystick, 2x2 buttons, and OLED. Direct register config, 1 ms RMS scheduler, SPI peripherals, and a renderer rewrite that lifted the display from ~10 to ~30–40 FPS.",
    tags: ["C", "Embedded", "RMS"],
    linkLabel: "",
  },
  {
    title: "CTF challenge engineering",
    description:
      "Designed web, crypto, and maze challenges for a university Capture the Flag event — including an SSRF challenge, encoded-message puzzles, Dockerized instances, and dynamic layouts so answers could not be hardcoded.",
    tags: ["Python", "Docker", "Security"],
    linkLabel: "",
  },
  {
    title: "Vachanamrut definition bot",
    description:
      "Async Telegram bot with inline keyboards, pagination, and dictionary lookup so community members can explore scripture terms without leaving chat.",
    tags: ["Python", "Telegram API"],
    linkLabel: "",
  },
  {
    title: "Annakut Seva",
    description:
      "Web app for volunteers to claim food items for Annakut offerings, backed by Firestore and built for a high-traffic festival weekend.",
    tags: ["React", "Firebase"],
    linkLabel: "",
  },
  {
    title: "Client-server lab",
    description:
      "Python server and JavaScript client for real-time exchange over sockets and HTTP. REST plus WebSockets, concurrent clients, JSON validation, and thick / thin / chubby client modes to study protocol tradeoffs.",
    tags: ["Python", "WebSockets", "REST"],
    linkLabel: "",
  },
  {
    title: "Air reservation app",
    description:
      "Led a small team through the software lifecycle: Android client, HSQLDB, and JUnit coverage for a complete booking flow.",
    tags: ["Java", "Android", "HSQLDB"],
    linkLabel: "",
  },
  {
    title: "Weather data analysis",
    description:
      "Statistical analysis of multi-location weather samples in R and SQL — clean, query, and visualize climate trends and regional variance.",
    tags: ["R", "SQL", "Analytics"],
    linkLabel: "",
  },
];

// ---------------------------------------------------------------------------
// 7. EXPERIENCE (work + volunteer)
// ---------------------------------------------------------------------------
export type Bullet =
  | string
  | { before?: string; label: string; href: string; after?: string };

export type Role = {
  title: string;
  org: string;
  when: string;
  logo: string;
  kind: "work" | "volunteer";
  highlights: string[];
  bullets: Bullet[];
  skills: string[];
};

export const jobs: Role[] = [
  {
    title: "Letter carrier",
    org: "Canada Post",
    when: "Jul 2026 – present",
    logo: logos.canadapost,
    kind: "work",
    highlights: [
      "Deliver mail and parcels on assigned Winnipeg routes.",
      "Work independently to service standards in all weather.",
    ],
    bullets: [
      "Deliver mail and parcels on assigned Winnipeg routes as a letter carrier.",
      "Follow depot procedures and service standards while working independently in all weather.",
      "Stay accountable for the mail, vehicle checks, and public-facing service on every shift.",
      "Coordinate with depot staff so daily delivery stays accurate when routes or volumes change.",
      "Keep composure and attention to detail in a public role that depends on trust and on-time work.",
    ],
    skills: [
      "Time management",
      "Route planning",
      "Customer service",
      "Working independently",
      "Following procedures",
      "Attention to detail",
      "Reliability",
    ],
  },
  {
    title: "Founder / web developer",
    org: "Akshar Digital Architecture · Akshar Electric",
    when: "2025 - present",
    logo: logos.aksharDigital,
    kind: "work",
    highlights: [
      "Run my studio and shipped aksharelectric.ca.",
      "Turned AI drafts into production-ready TypeScript and React.",
    ],
    bullets: [
      {
        before: "Designed and shipped a live client site at ",
        label: "aksharelectric.ca",
        href: "https://aksharelectric.ca/",
        after: " with TypeScript, React, and Firebase.",
      },
      "Used AI-assisted tools to prototype quickly, then implemented major customizations by hand so the site matched the client.",
      "Found and fixed AI-generated errors that hurt reliability, security, and usability.",
      "Structured the application for later pages, hosting, content updates, and feature expansion.",
      "Owned client communication, visual design, and the full delivery from first mock to a site that is live in production.",
      "Run Akshar Digital Architecture as the studio behind that work — brief to launch, not just the code.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Firebase",
      "Vite",
      "Client delivery",
      "Brand systems",
      "AI-assisted development",
      "Web security basics",
      "SDLC",
    ],
  },
  {
    title: "Personal shopper",
    org: "Real Canadian Superstore · Click & Collect",
    when: "2019 - 2023",
    logo: logos.superstore,
    kind: "work",
    highlights: [
      "Opened and closed a high-volume Click & Collect department.",
      "Picked, packed, and staged orders with speed and accuracy.",
    ],
    bullets: [
      "Worked in a fast-paced, high-volume Click & Collect department where accuracy and on-time orders were essential.",
      "Managed the full order path: picking, packing, staging, and handoff with front-end and warehouse teams.",
      "Opened and closed the department, including operational readiness and clean shift handovers.",
      "Coordinated across departments to resolve issues during peak volume and competing priorities.",
      "Handled customer substitutions and public-facing conversations professionally in a busy store.",
      "Worked independently while supporting team goals — reliability, time management, and following process.",
    ],
    skills: [
      "Customer service",
      "Team coordination",
      "Time management",
      "Accuracy under pressure",
      "Department operations",
      "Shift handovers",
      "Following procedures",
    ],
  },
  {
    title: "Software volunteer",
    org: "B.A.P.S.",
    when: "2025 - present",
    logo: logos.baps,
    kind: "volunteer",
    highlights: [
      "Built the event inventory web app in TypeScript, React, and Firebase.",
      "Shipped an async Telegram bot for scripture definitions.",
    ],
    bullets: [
      "Architected and maintained relational SQL and Firebase databases to track inventory for large events with huge, fast-moving stock.",
      "Wrote OOP frontend logic, debugged frontend/backend communication, and added unit tests so the system stayed reliable.",
      "Used AI-assisted tools (Lovable) to prototype, then evaluated and refined generated code for correctness and maintainability.",
      "Documented architecture and workflow for production support, onboarding, and ongoing maintenance.",
      "Designed an asynchronous Telegram bot in Python so community members can look up Vachanamrut and cultural definitions without leaving chat.",
      "Built multi-level inline keyboards, pagination, dictionary lookup with fallback search, and stateless handlers that can serve many users at once.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Firebase",
      "SQL",
      "Python",
      "Telegram API",
      "Lovable",
      "Documentation",
      "Unit testing",
      "Data integrity",
    ],
  },
  {
    title: "Youth supervisor / mentor",
    org: "BAPS Youth Program",
    when: "2016 - present",
    logo: logos.baps,
    kind: "volunteer",
    highlights: [
      "Mentored youth in leadership and teamwork for 6+ years.",
      "Designed lesson plans and kept a safe, structured program.",
    ],
    bullets: [
      "Six-plus years mentoring and supervising youth in a structured cultural development program.",
      "Give clear instructions, coaching, and direction to participants and volunteers.",
      "Design lesson plans and facilitate learning sessions while keeping a safe, organized environment.",
      "Work with supervisors and teammates to coordinate programs when requirements change.",
      "Balance several responsibilities at once without losing track of participants' needs and program goals.",
      "Practice active listening, conflict resolution, and interpersonal communication every week with youth, volunteers, and supervisors.",
      "Stay accountable for the safety, organization, and successful operation of the activities I am given.",
    ],
    skills: [
      "Leadership",
      "Mentoring",
      "Active listening",
      "Clear communication",
      "Conflict resolution",
      "Lesson planning",
      "Accountability",
    ],
  },
  {
    title: "Event volunteer",
    org: "BAPS Events · Charities",
    when: "2018 - present",
    logo: logos.baps,
    kind: "volunteer",
    highlights: [
      "Helped run large public events with volunteers and security teams.",
      "Assigned people work that matched their skills when the plan changed.",
    ],
    bullets: [
      "Support planning and execution of large community events with volunteers, management teams, and the public.",
      "Help run traffic and parking with security volunteers so movement stays safe and organized.",
      "Assign volunteers based on their abilities and what the operation needs that day.",
      "Lead volunteer teams and communicate plans so tasks actually get finished.",
      "Sit in team meetings to coordinate responsibilities, spot gaps, and adjust when circumstances change.",
      "Stay calm and professional in busy public environments with competing demands.",
      "Support BAPS Charities events on health, safety, and public awareness, including setup and public-facing help.",
    ],
    skills: [
      "Crowd and traffic coordination",
      "Situational awareness",
      "Volunteer leadership",
      "Decision-making",
      "Public safety",
      "Team meetings",
    ],
  },
];

export const workRoles = jobs.filter((role) => role.kind === "work");
export const volunteerRoles = jobs.filter((role) => role.kind === "volunteer");

// ---------------------------------------------------------------------------
// 8. SKILLS
//    Two blocks: workplace / technical skills, then computer science.
// ---------------------------------------------------------------------------
export const skillSections = [
  {
    eyebrow: "Technical skills",
    heading: "How I work when it counts.",
    lede:
      "Communication, accuracy, leadership, and composure — the skills my public-service and operations applications actually lead with.",
    groups: [
      {
        title: "Communication & leadership",
        items: [
          "Clear communication",
          "Active listening",
          "Mentoring and coaching",
          "Team supervision",
          "Public-facing service",
          "Conflict resolution",
        ],
      },
      {
        title: "Accuracy & pressure",
        items: [
          "Attention to detail",
          "Composure in high-volume work",
          "Task prioritization",
          "Following procedures",
          "Accountability",
          "Structured problem-solving",
          "Learning complex systems",
        ],
      },
    ],
  },
  {
    eyebrow: "Computer science",
    heading: "Languages, systems, and software.",
    lede:
      "Full-stack web work, databases, and systems from class and shipped projects — the computing side of the same person.",
    groups: [
      {
        title: "Languages",
        items: [
          "Python",
          "Java",
          "C / C++",
          "JavaScript",
          "TypeScript",
          "Go",
          "R",
        ],
      },
      {
        title: "Frameworks & web",
        items: [
          "HTML / CSS",
          "React",
          "REST APIs",
          "WebSockets",
          "Vite",
        ],
      },
      {
        title: "Cloud & data",
        items: [
          "Firebase",
          "SQL",
          "HSQLDB",
          "JSON",
        ],
      },
      {
        title: "Tools & methods",
        items: [
          "Git",
          "Linux",
          "JUnit",
          "OOP and SDLC",
          "Agile workflows",
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 9. EDUCATION
// ---------------------------------------------------------------------------
export const education = {
  heading: "B.Sc. Computer Science",
  copy:
    "University of Manitoba, graduated June 2026. Coursework and projects in software engineering, embedded and real-time systems, web development, operating systems, advanced databases, networking, concurrent processing, and parallel systems. Coursera project certificate: Build your business brand using Canva.",
};

// ---------------------------------------------------------------------------
// 10. CONTACT
// ---------------------------------------------------------------------------
export const contacts = [
  {
    label: "Email",
    value: "harikrushn1972@gmail.com",
    href: "mailto:harikrushn1972@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "harikrushn-gajjar",
    href: "https://www.linkedin.com/in/harikrushn-gajjar-658b8a285",
    external: true,
  },
  {
    label: "Phone",
    value: "+1 (204) 881-4394",
    href: "tel:+12048814394",
  },
  {
    label: "Location",
    value: "Winnipeg, Manitoba, Canada",
    href: "#contact",
  },
];

// ---------------------------------------------------------------------------
// 11. RESUME PAGE
// ---------------------------------------------------------------------------
export const resume = {
  subtitle: `Winnipeg, MB · harikrushn1972@gmail.com · +1 (204) 881-4394`,
  summary:
    "Computer Science graduate who also delivers a Canada Post route, opened Superstore Click & Collect, and has mentored youth at BAPS for 6+ years. Hiring managers get the same person either way: accurate under pressure, clear with the public, and able to ship work people actually use.",
  educationTitle: "Bachelor of Science in Computer Science",
  educationMeta: "University of Manitoba, June 2026",
  coursework: "",
  experience: [
    {
      title: "Letter carrier",
      meta: "Canada Post · Jul 2026 - present",
      bullets: [
        "Deliver mail and parcels independently on assigned Winnipeg routes in all weather, keeping to depot procedures and service standards.",
        "Stay accountable for the mail, vehicle checks, and every public interaction — time management, attention to detail, and trust on the shift.",
      ],
    },
    {
      title: "Founder / web developer",
      meta: "Akshar Digital Architecture · 2025 - present",
      bullets: [
        "Shipped aksharelectric.ca live in TypeScript, React, and Firebase — a client site in production, not a mock.",
        "Used AI to prototype, then rewrote the weak parts by hand until reliability, security, and brand fit held up; structured the codebase so later pages and features can land cleanly.",
      ],
    },
    {
      title: "Personal shopper",
      meta: "Superstore Click & Collect · 2019 - 2023",
      bullets: [
        "Opened and closed a high-volume Click & Collect department, including operational readiness and clean shift handovers.",
        "Managed picking, packing, and staging with front-end and warehouse teams. Accuracy and composure mattered when the queue did not wait.",
      ],
    },
  ],
  volunteer: [
    {
      title: "Youth supervisor / mentor",
      meta: "BAPS Youth Program · 2016 - present",
      bullets: [
        "Six-plus years mentoring youth in a structured program: lesson plans, coaching volunteers, and accountability for people's safety.",
        "Practice clear communication, active listening, and conflict resolution with youth, parents, and supervisors every week.",
      ],
    },
    {
      title: "Software volunteer",
      meta: "B.A.P.S. · 2025 - present",
      bullets: [
        "Built the inventory platform large BAPS events actually run on — React, Firebase, and relational SQL — and documented architecture so the next volunteer can keep shipping.",
        "Shipped an async Telegram bot for community definitions (inline navigation, fallback search) and added tests around the pieces that had to stay reliable.",
      ],
    },
    {
      title: "Event volunteer",
      meta: "BAPS Events · 2018 - present",
      bullets: [
        "Support large public gatherings: traffic and parking with security volunteers, crowd flow, and assigning people by skill.",
        "Lead volunteer teams and communicate instructions so tasks get finished; stay calm and professional when the plan changes.",
      ],
    },
  ],
  projects: [
    {
      title: "Event inventory platform",
      detail:
        "React, Firebase, SQL. Inventory for huge, fast-moving festival stock — OOP frontend, unit tests, and architecture docs so production does not depend on me being in the room.",
    },
    {
      title: "Embedded real-time game",
      detail:
        "C on a Microchip Curiosity Nano. Direct register config, RMS on a 1 ms timer, SPI OLED and input; rendering lifted from ~10 FPS to ~30–40 FPS.",
    },
    {
      title: "CTF challenges — The Long Con",
      detail:
        "Python and Docker. Web, crypto, and maze challenges for a university Capture the Flag, including SSRF and dynamically generated instances so answers could not be hardcoded.",
    },
  ],
  skills: [
    {
      label: "Technical",
      value:
        "Clear communication, active listening, accuracy, team leadership, composure under pressure, following procedures, structured problem-solving",
    },
    {
      label: "Computer science",
      value:
        "Python, Java, C/C++, JavaScript, TypeScript, React, Firebase, SQL, Git, Linux, REST, WebSockets",
    },
  ],
};

