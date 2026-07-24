// -----------------------------------------------------------------------------
// EDIT ME: This file holds ALL the content for your portfolio.
// Replace the placeholder values below with your own details.
// No other file needs to change to update your name, projects, links, etc.
// -----------------------------------------------------------------------------

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Optional short label (e.g. "Self Project", "Team Project"). */
  kind?: string;
  /** Optional date/period label. */
  period?: string;
  /** Live demo URL. Leave as "" to hide the button. */
  liveUrl?: string;
  /** Source code URL. Leave as "" to hide the button. */
  repoUrl?: string;
  /** Set to true to show a "Featured" badge. */
  featured?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  url: string;
};

export type Stat = {
  label: string;
  value: string;
};

export const portfolio = {
  // --- Basic identity -------------------------------------------------------
  name: "Gururaja J",
  role: "Full-Stack Java Developer",
  /** Short tagline shown under your name in the hero. */
  tagline:
    "I build scalable, well-crafted web applications with Java, Spring Boot, React.js, and PostgreSQL — from clean REST APIs to polished front ends.",
  /** Longer intro used in the About section. */
  about:
    "I'm a Full-Stack Java Developer and 2026 B.E. Computer Science graduate with hands-on experience building scalable web applications using Java, Spring Boot, React.js, and PostgreSQL. I enjoy designing RESTful APIs, implementing microservices architecture, and turning ideas into reliable products. With a strong foundation in OOP, Data Structures & Algorithms, and the SDLC — backed by 300+ problems solved on LeetCode — I'm seeking a Software Engineer role at a product-based company.",
  location: "Coimbatore, Tamil Nadu, India",
  phone: "+91 99761 85318",
  /** Path (in /public) or URL to your resume. Leave "" to hide the button. */
  resumeUrl: "/Gururaja_J_Resume.pdf",
  /** Contact email. Used by the "Get in touch" button. */
  email: "jgururaja2004@gmail.com",

  // --- Quick stats shown in the hero ----------------------------------------
  stats: [
    { label: "LeetCode problems solved", value: "300+" },
    { label: "Full-stack projects", value: "3" },
    { label: "CGPA", value: "7.89" },
  ] as Stat[],

  // --- Social / contact links ----------------------------------------------
  socials: [
    { label: "GitHub", url: "https://github.com/GururajaJ" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gururaja-j" },
    { label: "LeetCode", url: "https://leetcode.com/u/gururaja_j" },
  ] as SocialLink[],

  // --- Skills ---------------------------------------------------------------
  skills: [
    {
      category: "Languages",
      items: ["Java", "SQL", "C"],
    },
    {
      category: "Backend & Frameworks",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "RESTful APIs",
        "Microservices",
      ],
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman"],
    },
    {
      category: "Core Concepts",
      items: ["OOP", "Data Structures & Algorithms", "SDLC"],
    },
  ] as SkillGroup[],

  // --- Projects -------------------------------------------------------------
  projects: [
    {
      title: "Leave Management System",
      kind: "Self Project",
      period: "March 2025",
      description:
        "Full-stack leave management system with a React.js front end and a Spring Boot (MVC) backend, letting students submit leave requests with real-time status tracking. Designed a relational PostgreSQL schema with full CRUD, plus role-based approval workflows so wardens and teachers can securely review, approve, or reject requests.",
      tags: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST API"],
      featured: true,
    },
    {
      title: "Employee Status Management System",
      kind: "Self Project",
      period: "November 2024",
      description:
        "Full-stack employee status tracking system using React.js (Vite) and Spring Boot, enabling employees to log and update daily work status through an intuitive interface. Built a centralized admin dashboard for real-time reporting and a normalized PostgreSQL schema for efficient, reliable CRUD.",
      tags: ["Java", "Spring Boot", "React.js", "Vite", "PostgreSQL"],
    },
    {
      title: "Complaint Register Website",
      kind: "Team Project",
      period: "June 2025",
      description:
        "Microservices-based complaint management platform in Java and Spring Boot with a React.js front end, enabling citizens to report and track civic issues end-to-end. Implemented RESTful APIs across the full complaint lifecycle with Role-Based Access Control, and optimized backend services and PostgreSQL queries for concurrent users.",
      tags: [
        "Java",
        "Spring Boot",
        "React.js",
        "PostgreSQL",
        "Microservices",
        "REST API",
      ],
      featured: true,
    },
  ] as Project[],

  // --- Experience (optional) ------------------------------------------------
  experience: [] as ExperienceItem[],

  // --- Education ------------------------------------------------------------
  education: [
    {
      degree: "B.E., Computer Science and Engineering",
      institution: "Karpagam College of Engineering, Coimbatore (Anna University)",
      period: "2022 – 2026",
      detail: "CGPA: 7.89",
    },
    {
      degree: "HSC — Higher Secondary (State Board)",
      institution: "A.K.T Academic Matriculation Higher Secondary School",
      period: "2022",
      detail: "Percentage: 82%",
    },
    {
      degree: "SSLC — Secondary (State Board)",
      institution: "A.K.T Memorial High School",
      period: "2020",
      detail: "Percentage: 75%",
    },
  ] as EducationItem[],

  // --- Certifications -------------------------------------------------------
  certifications: [
    "React.js Certification — Coursera (October 2024)",
    "Master Spring Boot 3 & Spring Framework 6 with Java — Udemy (January 2025)",
    "Java Programming — NPTEL, Elite Medal (May 2024)",
  ],

  // --- Achievements ---------------------------------------------------------
  achievements: [
    "Solved 300+ Data Structures and Algorithms problems on LeetCode, strengthening problem-solving and coding efficiency.",
    "Participated in a 24-hour Hackathon at Karpagam College of Engineering.",
  ],
};

export type Portfolio = typeof portfolio;
