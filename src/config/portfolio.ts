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
  role: "Software Engineer",
  /** Short tagline shown under your name in the hero. */
  tagline:
    "I build scalable, well-crafted full-stack applications with Java, Spring Boot, React.js, and PostgreSQL — from clean REST APIs to microservices.",
  /** Longer intro used in the About section. */
  about:
    "I'm a Software Engineer and B.E. Computer Science graduate (2022 – 2026) with hands-on experience building scalable full-stack applications using Java, Spring Boot, React.js, PostgreSQL, and Docker. I'm skilled in designing RESTful APIs, implementing microservices architectures, applying role-based access control (RBAC), and following clean code principles. With a strong foundation in OOP, Data Structures & Algorithms, and the SDLC — backed by 300+ problems solved on LeetCode — I'm seeking to contribute my technical expertise to a fast-paced engineering team.",
  location: "Coimbatore, Tamil Nadu, India",
  phone: "+91 9976185318",
  /** Path (in /public) or URL to your resume. Leave "" to hide the button. */
  resumeUrl: "/Gururaja_J_Resume.pdf",
  /** Contact email. Used by the "Get in touch" button. */
  email: "jgururaja2004@gmail.com",

  // --- Quick stats shown in the hero ----------------------------------------
  stats: [
    { label: "LeetCode problems solved", value: "300+" },
    { label: "Full-stack projects", value: "3" },
    { label: "CGPA", value: "8.07" },
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
      items: ["Java", "SQL"],
    },
    {
      category: "Backend & Frameworks",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "RESTful APIs",
        "Microservices",
        "Spring Security",
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
      items: ["Docker", "Git", "GitHub", "GitLab", "CI/CD", "Maven", "Postman"],
    },
    {
      category: "Core Concepts",
      items: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "SDLC",
        "Role-Based Access Control",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Continuous Learning",
        "Adaptability",
        "Team Collaboration",
        "Communication",
      ],
    },
  ] as SkillGroup[],

  // --- Projects -------------------------------------------------------------
  projects: [
    {
      title: "Leave Management System",
      kind: "Self Project",
      period: "March 2025",
      description:
        "Built a full-stack leave management system where students submit leave requests and track approval status in real time through a React.js frontend backed by a Spring Boot MVC API. Designed a normalized PostgreSQL schema with full CRUD operations and role-based approval workflows for wardens and teachers, replacing a manual, paper-based approval process.",
      tags: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST API"],
      featured: true,
    },
    {
      title: "EmpFlow Hub — Employee Status Tracker",
      kind: "Self Project",
      period: "November 2024",
      description:
        "Built a full-stack employee status tracking system where employees log and update daily work status through a React.js (Vite) interface backed by a Spring Boot API. Built a centralized admin dashboard for real-time status reporting across employees, and containerized frontend/backend services with Docker for consistent local and deployment environments.",
      tags: ["Java", "Spring Boot", "React.js (Vite)", "PostgreSQL", "Docker"],
      featured: true,
    },
    {
      title: "Hospital Management System",
      kind: "Self Project",
      period: "June 2025",
      description:
        "Built a hospital management system covering patient registration, doctor management, and appointment booking. Split the backend into separate Spring Boot microservices for patients, doctors, and appointments, each exposing its own REST APIs.",
      tags: ["Java", "Spring Boot", "Microservices", "React.js", "PostgreSQL"],
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
      detail: "CGPA: 8.07",
    },
    {
      degree: "HSC — A.K.T Academic Matriculation Higher Secondary School",
      institution: "State Board",
      period: "2022",
      detail: "Percentage: 82%",
    },
    {
      degree: "SSLC — A.K.T Memorial High School",
      institution: "State Board",
      period: "2020",
      detail: "Percentage: 75%",
    },
  ] as EducationItem[],

  // --- Certifications -------------------------------------------------------
  certifications: [
    "Java Full Stack Development — Wipro TalentNext Digital Skills Readiness Program (October 2025)",
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
