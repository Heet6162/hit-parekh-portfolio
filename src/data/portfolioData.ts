export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    aiOrGraphics?: string;
    security?: string;
  };
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  category: "AI & LLMs" | "Security" | "Data & Algorithms" | "Development";
  summary: string;
  image: string;
}

export const PERSONAL_INFO = {
  name: "Hit Parekh",
  initials: "HP",
  title: "Full-Stack Web Developer | AI Enthusiast",
  roles: [
    "Full-Stack Web Developer",
    "AI Enthusiast & Integrator",
    "Interactive 3D Web Builder",
    "BCA Scholar (CGPA 8.84)",
    "Software Engineering Explorer",
  ],
  location: "Anand, Gujarat, India",
  email: "parekhheet1@gmail.com",
  phone: "+91 88668 21294",
  phoneFormatted: "+91 88668 21294",
  linkedin: "https://linkedin.com/in/hit-parekh-a34b6031b",
  github: "https://github.com/Heet6162",
  status: "Available for Opportunities",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "CVM University",
    duration: "2024–2027",
    cgpa: "8.84",
    status: "Pursuing (1st / 2nd Year)",
    highlights: [
      "Consistent Academic Distinction with 8.84 CGPA",
      "Core focus on Data Structures, OOP, Relational Databases, and Modern Web Systems",
      "Active participant in technical summits and national AI initiatives",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++, Java)",
      "Relational Database Management (MySQL, PostgreSQL)",
      "Web Technologies & Frameworks",
      "Operating Systems & Computer Networks",
      "Software Engineering & System Design",
    ],
  },
  bio: [
    "I'm a dedicated BCA student at CVM University with a strong foundation in programming, full-stack development, and database management. I enjoy transforming ideas into functional digital products through modern technologies.",
    "My experience includes developing e-commerce platforms, restaurant management systems, 3D browser games, and AI-powered career guidance applications.",
    "I'm continuously exploring new technologies, improving my development skills, and building solutions that are reliable, scalable, and user-friendly.",
  ],
  stats: [
    {
      label: "Major Projects",
      value: "4",
      suffix: " Built",
      subtext: "E-Commerce, Restaurant SaaS, 3D Game & AI Platform",
    },
    {
      label: "Academic CGPA",
      value: "8.84",
      suffix: "",
      subtext: "CVM University BCA Program (Top Percentile)",
    },
    {
      label: "Certifications",
      value: "7",
      suffix: "+",
      subtext: "AI, Cybersecurity, Algorithms & Databases",
    },
    {
      label: "BCA Journey",
      value: "2024–2027",
      suffix: "",
      subtext: "Building modern full-stack & AI software engineering skills",
    },
  ],
};

export const WHAT_I_DO = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    icon: "Layout",
    description:
      "Crafting end-to-end web applications with modern frontend frameworks, structured API architectures, clean codebases, and robust authentication flows.",
    tags: ["React", "Next.js", "PHP", "FastAPI", "TypeScript", "REST APIs"],
  },
  {
    id: "ai-applications",
    title: "AI-Powered Applications",
    icon: "Sparkles",
    description:
      "Integrating cutting-edge LLMs and generative AI capabilities, including Google Gemini API, weighted scoring algorithms, and context-aware conversational mentors.",
    tags: ["Google Gemini API", "LLM Prompting", "Scoring Engines", "Contextual AI"],
  },
  {
    id: "database-design",
    title: "Database Design & Management",
    icon: "Database",
    description:
      "Designing normalized relational database schemas, multi-table queries, indexing, and ORM abstractions using MySQL, PostgreSQL, and SQLAlchemy.",
    tags: ["MySQL", "PostgreSQL", "SQLAlchemy", "10+ Table Schemas", "Role-Based Data"],
  },
  {
    id: "3d-experiences",
    title: "Interactive 3D Web Experiences",
    icon: "Cuboid",
    description:
      "Building engaging WebGL visual experiences and interactive 3D browser games using Three.js, shaders, particle systems, dynamic lighting, and responsive controls.",
    tags: ["Three.js", "WebGL", "Game Physics", "3D Modeling", "Canvas HUD"],
  },
  {
    id: "responsive-uiux",
    title: "Responsive UI/UX Development",
    icon: "Palette",
    description:
      "Designing polished, accessible, and intuitive user interfaces with mobile-first responsiveness, thoughtful glassmorphism, and subtle micro-animations.",
    tags: ["Tailwind CSS", "Framer Motion", "Design Systems", "Glassmorphism", "Accessibility"],
  },
  {
    id: "software-engineering",
    title: "Problem Solving & Engineering",
    icon: "Code2",
    description:
      "Applying structured algorithmic logic, secure password hashing, role-based access control (RBAC), and clean architecture to build reliable digital systems.",
    tags: ["RBAC", "Bcrypt Hashing", "JWT Security", "OOP Principles", "Data Structures"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, logic, algorithms, and web applications",
    skills: [
      { name: "JavaScript", description: "Modern ES6+, async programming, and DOM manipulation" },
      { name: "TypeScript", description: "Static typing, interfaces, and scalable application architecture" },
      { name: "Python", description: "FastAPI backends, scripting, algorithmic logic, and AI integrations" },
      { name: "PHP", description: "Server-side rendering, session management, and relational database apps" },
      { name: "C", description: "Low-level memory management, pointers, and fundamental computing concepts" },
      { name: "C++", description: "Object-oriented programming, standard template library, and algorithms" },
      { name: "Java", description: "Object-oriented design, strong type systems, and software engineering" },
      { name: "SQL", description: "Complex relational queries, indexing, joins, and schema management" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Modern frameworks and technologies for interactive, responsive interfaces",
    skills: [
      { name: "React", description: "Component state, hooks, reusable UI patterns, and virtual DOM" },
      { name: "Next.js", description: "App Router, SSR, Turbopack, partial prefetching, and API routes" },
      { name: "Tailwind CSS", description: "Utility-first design systems, custom themes, and glassmorphism" },
      { name: "Three.js", description: "Interactive 3D environments, camera controls, lighting, and WebGL" },
      { name: "HTML5", description: "Semantic markup, modern web standards, and accessibility structure" },
      { name: "CSS3", description: "Flexbox, Grid, custom keyframe animations, and media queries" },
    ],
  },
  {
    title: "Backend Development",
    description: "Server architecture, API design, security, and external AI services",
    skills: [
      { name: "FastAPI", description: "High-performance Python API framework with automatic OpenAPI docs" },
      { name: "PHP", description: "Server-side web scripting, form handling, and backend logic" },
      { name: "RESTful APIs", description: "Clean endpoint structuring, HTTP status codes, and JSON serialization" },
      { name: "Google Gemini API", description: "Integrating multimodal LLMs, system prompts, and AI mentors" },
      { name: "JWT Authentication", description: "Stateless bearer token generation, verification, and expiration" },
      { name: "Session Authentication", description: "Server-side cookie sessions for traditional web applications" },
    ],
  },
  {
    title: "Database Technologies",
    description: "Data storage, relational modeling, and object-relational mappers",
    skills: [
      { name: "MySQL", description: "Relational table schemas, foreign key constraints, and performance tuning" },
      { name: "PostgreSQL", description: "Enterprise-grade relational database with JSON support and transactions" },
      { name: "MongoDB", description: "Document-oriented NoSQL storage for flexible schemas" },
      { name: "SQLAlchemy", description: "Python Object Relational Mapper for type-safe database interactions" },
    ],
  },
  {
    title: "Developer Tools",
    description: "Tools for version control, containerization, debugging, and productivity",
    skills: [
      { name: "Git", description: "Distributed version control, branching strategies, and commit history" },
      { name: "GitHub", description: "Remote repository collaboration, issue tracking, and code reviews" },
      { name: "Docker", description: "Containerized environments for consistent multi-platform runtime" },
      { name: "VS Code", description: "Advanced IDE workflow with linting, extensions, and debugging" },
      { name: "Postman", description: "API endpoint testing, payload inspection, and request automation" },
      { name: "Microsoft 365", description: "Documentation, presentation, and collaborative workflows" },
    ],
  },
  {
    title: "Core Concepts",
    description: "Fundamental engineering principles applied across all projects",
    skills: [
      { name: "Full-Stack Architecture", description: "Cohesive integration of UI, application layer, and database" },
      { name: "Role-Based Access Control", description: "Admin, staff, and user authorization tiers with permission guards" },
      { name: "Secure Password Hashing", description: "Bcrypt cryptographic salt and hashing to safeguard credentials" },
      { name: "Responsive Web Design", description: "Fluid layouts optimized across desktop, tablet, and mobile screens" },
    ],
  },
  {
    title: "Personal Strengths",
    description: "Core professional attributes and problem-solving mindset",
    skills: [
      { name: "Problem Solving", description: "Analytical decomposition of complex bugs and architectural challenges" },
      { name: "Attention to Detail", description: "Rigorous focus on UI refinement, edge cases, and code cleanliness" },
      { name: "Quick Learner", description: "Rapidly assimilating new frameworks, APIs, and modern toolchains" },
      { name: "Adaptability", description: "Pivoting smoothly between different technology stacks and project requirements" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "watch-hub",
    title: "Premium Watch Hub",
    category: "Full-Stack E-Commerce Web Application",
    tagline: "Luxury horology commerce platform with multi-brand catalog & complete order management",
    description:
      "Developed a luxury watch e-commerce platform featuring a multi-brand product catalog, gender and category filters, shopping cart, and complete order management functionality.",
    longDescription:
      "Premium Watch Hub is an end-to-end luxury timepiece e-commerce solution. It solves the complexity of managing multi-brand catalogs with faceted filtering by gender, brand, collection, and price tier. The application features an administrative suite for catalog curation, real-time inventory adjustments, order lifecycle tracking, customer review moderation, and downloadable PDF-ready invoice receipts.",
    image: "/images/watch-hub.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    keyFeatures: [
      "Multi-brand watch catalog (Patek Philippe, Rolex, Audemars Piguet, Hublot)",
      "Gender, price tier, and category faceted filtering",
      "Dynamic shopping cart and streamlined multi-step checkout",
      "Order management with downloadable invoice generation",
      "Payment processing integration and status confirmation",
      "Customer reviews and star rating submission system",
      "Complete admin dashboard with product, user, and sales management",
      "Normalized relational MySQL database architecture",
    ],
    architecture: {
      frontend: "HTML5, CSS3, JavaScript, Tailwind CSS with dynamic DOM updates",
      backend: "PHP procedural & MVC routing for requests and session management",
      database: "MySQL relational schema with foreign keys linking users, products, and orders",
      security: "Session-based authentication, SQL injection sanitization, and role checks",
    },
    highlights: [
      "Complete E-Commerce Flow: Browse → Filter → Cart → Checkout → Invoice",
      "Full Administrator Privileges: CRUD for products, orders, and user permissions",
      "Clean Relational Data Model ensuring zero data redundancy",
    ],
    githubUrl: "https://github.com/Heet6162",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "taste-of-punjab",
    title: "Taste of Punjab",
    category: "Restaurant Management Web Application",
    tagline: "Authentic dining platform with 29-dish menu, table reservations & admin sales analytics",
    description:
      "Built a restaurant ordering platform featuring a 29-dish menu across 9 categories, online ordering, table reservations, customer reviews, and an administrative management dashboard.",
    longDescription:
      "Taste of Punjab is a specialized restaurant hospitality and ordering platform designed for both diners and restaurant management. Diners can explore 29 curated dishes across 9 culinary categories, place orders with flexible payment options (Cash on Delivery, UPI, and Card), reserve dining tables with specific guest counts and dates, and generate printable order receipts. The back-office dashboard empowers restaurant staff to manage live orders, oversee reservation schedules, and analyze daily sales metrics.",
    image: "/images/taste-of-punjab.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    keyFeatures: [
      "29 curated dishes spanning 9 culinary categories",
      "Interactive food browsing with dish descriptions and dietary badges",
      "Online cart and checkout with multiple payment methods (COD, UPI, Card)",
      "Digital table reservation system with guest count, date, and time slots",
      "Customer review and feedback submission system",
      "Printable customer order receipts with itemized tax summaries",
      "10-table relational MySQL database model",
      "Admin management dashboard with sales reporting and revenue charts",
    ],
    architecture: {
      frontend: "Responsive HTML5/CSS3 with vanilla JavaScript dynamic cart state",
      backend: "PHP backend managing ordering pipelines, table booking validation, and review storage",
      database: "10-table relational MySQL schema handling dishes, categories, orders, reservations, and admin accounts",
      security: "Role-based administrative authentication and server-side request sanitization",
    },
    highlights: [
      "10-Table Relational Schema: Structured to handle complex dining and reservation states",
      "Flexible Checkout: Cash on Delivery, UPI QR integration, and Card payments",
      "Printable Receipts: Instant generation of itemized receipts for diners and kitchen staff",
    ],
    githubUrl: "https://github.com/Heet6162",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "hyper-crown-racing",
    title: "Hyper Crown Racing",
    category: "3D Browser Racing Game",
    tagline: "Interactive WebGL cyber-racing experience with 6 supercars & 5 selectable tracks",
    description:
      "Developed an interactive 3D browser-based racing game featuring six supercars with different performance statistics and five selectable racing tracks.",
    longDescription:
      "Hyper Crown Racing leverages Three.js and WebGL to deliver an adrenaline-fueled racing experience straight in the browser without third-party plugins. Players can choose from six high-performance supercars, each calibrated with unique speed, acceleration, and durability statistics. The game features five neon-lit futuristic circuits, interactive solo and group race modes, dynamic camera chase perspectives, realistic particle exhaust trails, a live telemetry HUD, and immersive background audio with full volume controls.",
    image: "/images/hyper-crown-racing.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Three.js", "WebGL"],
    keyFeatures: [
      "6 high-performance supercars with distinct 3D models and paint schemes",
      "Individual vehicle physics: calibrated speed, acceleration, and durability metrics",
      "5 selectable racing circuits with dynamic lighting and neon aesthetics",
      "Solo time trial mode and competitive group race mode",
      "Live telemetry HUD displaying real-time speed, lap timing, and position",
      "Interactive 3D environment rendered with Three.js WebGL engine",
      "Background music system with customizable volume and audio toggle",
      "Smooth keyboard controls with acceleration, steering, and braking physics",
    ],
    architecture: {
      frontend: "HTML5 Canvas, CSS3 HUD overlay, and vanilla JavaScript event loop",
      backend: "Client-side WebGL engine with local session high-score persistence",
      aiOrGraphics: "Three.js 3D scene graphs, perspective cameras, ambient & directional lighting, mesh geometry, and particle emitters",
      security: "Client-side input debouncing and collision boundary detection",
    },
    highlights: [
      "Zero-Plugin 3D Gaming: High-performance 60 FPS graphics running natively in the browser",
      "Custom Physics Engine: Differentiated handling characteristics for all 6 supercars",
      "Full Audio-Visual Experience: Dynamic neon shaders, particle exhausts, and synthwave soundtrack",
    ],
    githubUrl: "https://github.com/Heet6162",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "careersync",
    title: "CareerSync",
    category: "AI-Powered Career Guidance Platform",
    tagline: "Intelligent career pathfinder powered by Google Gemini, weighted scoring & 18-page architecture",
    description:
      "Built an AI-powered career guidance platform that helps students discover suitable career paths through a structured assessment, weighted scoring engine, personalized AI explanations, and progress-tracked learning roadmaps.",
    longDescription:
      "CareerSync is an extensive 18-page AI-powered web platform engineered to solve student career indecision. It features a proprietary 5-step assessment backed by a mathematical weighted scoring engine that allocates importance across Skills (40%), Interests (25%), Academics (15%), Preferences (10%), and Goals (10%). Integrated with Google Gemini API, CareerSync delivers tailored career advice, skill-gap analysis against real industry benchmarks, and generates dynamic step-by-step learning roadmaps with progress tracking. The platform includes a context-aware AI mentor chat assistant capable of answering role-specific questions in real time.",
    image: "/images/careersync.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Google Gemini API",
    ],
    keyFeatures: [
      "Comprehensive 5-step structured student career assessment",
      "Mathematical weighted scoring engine (Skills: 40%, Interests: 25%, Academics: 15%, Preferences: 10%, Goals: 10%)",
      "Personalized career recommendations powered by Google Gemini API",
      "Context-aware AI mentor chat assistant for real-time career guidance",
      "Industry benchmark-based skill-gap analysis with actionable improvement metrics",
      "Interactive progress-tracked career learning roadmaps with milestones",
      "Stateless JWT token authentication with secure password hashing",
      "PostgreSQL relational database with SQLAlchemy ORM modeling",
      "Full 18-page modern Next.js TypeScript application structure",
    ],
    architecture: {
      frontend: "Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, dynamic radar graphs",
      backend: "FastAPI REST API with asynchronous endpoints and Pydantic validation schemas",
      database: "PostgreSQL with SQLAlchemy ORM models for users, assessments, scores, and roadmaps",
      aiOrGraphics: "Google Gemini API with structured system prompts and context retention",
      security: "JWT bearer authentication, Bcrypt password hashing, and CORS protection",
    },
    highlights: [
      "Weighted Algorithm: Multi-factor scoring (40% skills, 25% interests, 15% academics, 10% prefs, 10% goals)",
      "Gemini AI Mentor: Real-time contextual chat that personalizes advice based on assessment results",
      "Enterprise Full-Stack Architecture: 18 pages with Next.js, FastAPI, PostgreSQL, and SQLAlchemy",
    ],
    githubUrl: "https://github.com/Heet6162",
    liveUrl: "#",
    featured: true,
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "getting-started-with-ai",
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "September 2026",
    credentialId: "32125508-5679-4233-9619-fa32f4b8ce05",
    verificationUrl: "https://www.credly.com/badges/32125508-5679-4233-9619-fa32f4b8ce05",
    category: "AI & LLMs",
    skills: ["AI Fundamentals", "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
    summary:
      "Comprehensive certification from IBM SkillsBuild validating foundational AI literacy, neural network architectures, predictive modeling, machine learning pipelines, and computer vision systems.",
    image: "/Certification/Getting Started with Artificial Intelligence.png",
  },
  {
    id: "chatgpt-for-coders",
    title: "ChatGPT for Coders",
    issuer: "Simplilearn SkillUp",
    date: "August 2025",
    credentialId: "844454",
    category: "AI & LLMs",
    skills: ["Prompt Engineering", "Code Generation", "Debugging with AI", "Software Productivity"],
    summary:
      "Mastered developer prompt engineering techniques, AI-assisted debugging, automated documentation generation, and accelerating modern software development cycles.",
    image: "/Certification/chat_gpt for coders.png",
  },
  {
    id: "claude-code-in-action",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2025",
    credentialId: "fmwetpakvbfh",
    verificationUrl: "https://verify.skilljar.com/c/fmwetpakvbfh",
    category: "AI & LLMs",
    skills: ["Anthropic Claude", "Agentic Workflows", "API Integration", "Context Management"],
    summary:
      "Comprehensive training on leveraging Anthropic's Claude models for code synthesis, complex reasoning tasks, tool-use agentic architectures, and conversational AI interfaces.",
    image: "/Certification/claude code for action.png",
  },
  {
    id: "yuva-ai-for-all",
    title: "YUVA AI For All",
    issuer: "TCS iON × IndiaAI",
    date: "April 2026",
    category: "AI & LLMs",
    skills: ["AI Fundamentals", "Machine Learning Concepts", "Ethical AI", "National AI Frameworks"],
    summary:
      "National AI literacy and foundational competence program conducted by TCS iON in partnership with the Government of India's IndiaAI initiative.",
    image: "/Certification/yuva ai for all.png",
  },
  {
    id: "ai-impact-summit",
    title: "AI Impact Summit Pre-Summit",
    issuer: "HCL GUVI × IndiaAI",
    date: "December 2025",
    credentialId: "1866Lq77sT58g9W6R1",
    category: "AI & LLMs",
    skills: ["Generative AI Trends", "Cloud AI Architecture", "Industry AI Applications"],
    summary:
      "Hands-on workshop exploring industrial AI deployment patterns, real-world case studies, and scalable AI application design.",
    image: "/Certification/AI Impact Summit Pre-Summit.png",
  },
];
