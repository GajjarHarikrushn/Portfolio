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
      "Bare-metal game on a Microchip Curiosity Nano. Direct register config, 1 ms RMS scheduler, SPI OLED, and a renderer rewrite that lifted the display from ~10 to 30+ FPS.",
    tags: ["C", "Embedded", "RMS"],
    linkLabel: "",
  },
  {
    title: "CTF challenge engineering",
    description:
      "Designed web, crypto, and maze challenges for a university Capture the Flag event, including containerized instances and dynamic layouts so answers could not be hardcoded.",
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
      "Concurrent socket and HTTP service with a JavaScript client, REST plus WebSockets, and thick / thin / chubby client modes to study real protocol tradeoffs.",
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
      "Keep to service standards while working independently in all weather.",
      "Coordinate with depot staff so daily delivery stays accurate and on time.",
      "Stay accountable for the mail, vehicle checks, and public-facing service on every shift.",
    ],
    skills: [
      "Time management",
      "Route planning",
      "Customer service",
      "Working independently",
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
        before: "Run my studio and shipped ",
        label: "aksharelectric.ca",
        href: "https://aksharelectric.ca/",
        after: " with TypeScript, React, and Firebase.",
      },
      "Took AI-assisted drafts, then rewrote the pieces that failed on reliability, security, and brand fit.",
      "Left the codebase structured for later pages, hosting, and content updates.",
      "Owned client communication, visual design decisions, and the full delivery from first mock to live site.",
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
      "Opened and closed a high-volume department with accurate order picking, packing, and staging.",
      "Coordinated across front-end and warehouse teams during peak periods.",
      "Learned to stay calm, exact, and accountable when the queue does not wait.",
      "Handled customer substitutions and handoffs while keeping the floor ready for the next rush.",
    ],
    skills: [
      "Customer service",
      "Team coordination",
      "Time management",
      "Accuracy under pressure",
      "Department operations",
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
      "Inventory tracking web app for large events: TypeScript, React, Firebase, SQL.",
      "Telegram definition bot with async handlers, inline navigation, and fallback search.",
      "Documented architecture and workflows so production support can continue without me in the room.",
      "Debugged frontend/backend communication and wrote unit tests for the pieces that had to stay reliable.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Firebase",
      "SQL",
      "Python",
      "Telegram API",
      "Documentation",
      "Unit testing",
    ],
  },
  {
    title: "Youth supervisor / mentor",
    org: "BAPS Youth Program · Events · Charities",
    when: "2016 - present",
    logo: logos.baps,
    kind: "volunteer",
    highlights: [
      "Mentored youth in leadership and teamwork for 6+ years.",
      "Designed lesson plans and ran community events.",
    ],
    bullets: [
      "Six-plus years teaching cultural values, leadership, and teamwork to youth.",
      "Designed lesson plans, ran events, and coached volunteers in high-trust settings.",
      "Coordinated parking, crowd flow, and task assignment during large public gatherings.",
      "Kept a safe, structured environment while assigning people work that matched their skills.",
    ],
    skills: [
      "Leadership",
      "Mentoring",
      "Event planning",
      "Volunteer coordination",
      "Public speaking",
      "Conflict resolution",
    ],
  },
];

export const workRoles = jobs.filter((role) => role.kind === "work");
export const volunteerRoles = jobs.filter((role) => role.kind === "volunteer");

// ---------------------------------------------------------------------------
// 8. SKILLS
//    Written for hiring managers in public service, retail, and community
//    work — computing is one column, not the whole story.
// ---------------------------------------------------------------------------
export const skillsSection = {
  eyebrow: "Skills",
  heading: "What I bring to a team.",
  lede:
    "Operations, people, and workplace tools first. Computing is there when a role needs it — this site is also for hiring managers who are not filling a programmer seat.",
};

export const skillGroups = [
  {
    title: "Operations",
    items: [
      "Mail and parcel delivery",
      "Click & Collect order picking",
      "Opening and closing a department",
      "Inventory and stock tracking",
      "Route planning",
      "Safety-conscious fieldwork",
    ],
  },
  {
    title: "People & service",
    items: [
      "Customer service",
      "Mentoring youth",
      "Event and crowd coordination",
      "Volunteer leadership",
      "Public speaking",
      "Calm under pressure",
    ],
  },
  {
    title: "Workplace tools",
    items: [
      "Microsoft Office",
      "Canva",
      "Inventory systems",
      "Class 4 driver's licence",
      "Android devices",
      "Independent shift work",
    ],
  },
  {
    title: "Computing",
    items: [
      "Python, Java, JavaScript",
      "React, Firebase, SQL",
      "Git and Linux",
      "Websites from brief to live",
      "Clear documentation",
      "Debugging under a deadline",
    ],
  },
];

// ---------------------------------------------------------------------------
// 9. EDUCATION
// ---------------------------------------------------------------------------
export const education = {
  heading: "B.Sc. Computer Science",
  copy:
    "University of Manitoba, graduated June 2026. Coursework in software engineering, embedded systems, web development, operating systems, advanced databases, and parallel systems. Coursera project certificate: Build your business brand using Canva.",
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
  subtitle: `Winnipeg, MB · operations, service, and software · harikrushn1972@gmail.com`,
  summary:
    "Dependable Winnipeg worker with a Class 4 licence, Canada Post delivery experience, years on a Superstore Click & Collect floor, and 6+ years mentoring youth at BAPS. Also a Computer Science graduate who can ship websites and inventory tools when a role needs that. Comfortable with the public, independent shift work, Microsoft Office, and documenting so the next person can pick up the job.",
  educationTitle: "Bachelor of Science in Computer Science",
  educationMeta: "University of Manitoba, graduated June 2026",
  coursework:
    "Key coursework: Software Engineering, Embedded Systems, Web Development, Operating Systems, Advanced Databases, Parallel Systems.",
  experience: [
    {
      title: "Letter carrier",
      meta: "Canada Post · Jul 2026 - present",
      bullets: [
        "Deliver mail and parcels on assigned Winnipeg routes.",
        "Keep to service standards while working independently in all weather.",
      ],
    },
    {
      title: "Founder / web developer",
      meta: "Akshar Digital Architecture · TypeScript, React, Firebase · 2026 - present",
      bullets: [
        "Run my studio and shipped a live client site at aksharelectric.ca.",
        "Customized AI-assisted drafts to match client requirements, then fixed reliability, security, and usability issues.",
        "Structured the app for later maintenance and feature expansion.",
      ],
    },
    {
      title: "Personal shopper",
      meta: "Superstore Click & Collect · 2019 - 2023",
      bullets: [
        "Ran order picking, packing, and staging in a high-volume public department, including open and close.",
      ],
    },
  ],
  volunteer: [
    {
      title: "Software volunteer",
      meta: "B.A.P.S. · TypeScript, React, Firebase, SQL, Python · 2026 - present",
      bullets: [
        "Architected relational SQL and Firebase databases to track inventory for large events.",
        "Wrote OOP frontend logic, debugged interfaces, and added unit tests for reliability.",
        "Built an async Telegram bot for scripture and cultural definitions.",
      ],
    },
    {
      title: "Youth supervisor / mentor",
      meta: "BAPS Youth Program · 2016 - present",
      bullets: [
        "Taught and mentored youth in leadership, teamwork, and community values for 6+ years.",
        "Designed lesson plans, organized events, and coached volunteers.",
      ],
    },
  ],
  projects: [
    {
      title: "Capture The Flag challenges",
      detail:
        "Python, Docker · Jan 2026 - Apr 2026. Web security, cryptography, and maze challenges with dynamic instances.",
    },
    {
      title: "Embedded real-time game",
      detail:
        "C, Microchip Curiosity Nano · Sep 2025 - Nov 2025. RMS on a 1 ms timer; OLED rendering improved from ~10 FPS to ~30 FPS.",
    },
    {
      title: "Client-server communication",
      detail:
        "Python, JavaScript · May 2025 - Jun 2025. Sockets, HTTP, REST, WebSockets, concurrent clients.",
    },
    {
      title: "Air reservation system",
      detail:
        "Java, HSQLDB, JUnit · Jan 2025 - Apr 2025. Android app; led a small team through the software lifecycle.",
    },
    {
      title: "Annakut Seva",
      detail: "React, Firebase. Volunteer item-claiming app for festival offerings.",
    },
  ],
  skills: [
    { label: "Operations", value: "Mail delivery, Click & Collect, inventory, opening/closing, route planning" },
    { label: "People", value: "Customer service, mentoring, event coordination, volunteer leadership" },
    { label: "Tools", value: "Microsoft Office, Canva, inventory systems, Class 4 driver's licence" },
    { label: "Computing", value: "Python, Java, JavaScript, React, Firebase, SQL, Git, Linux" },
  ],
};
