export const portfolioData = {
  personal: {
    name: "Manoj M",
    monogram: "MM",
    role: "Senior Frontend Engineer & UI Architect",
    experienceYears: "4.9+",
    status: "Available Immediately (Immediate Joiner)",
    location: "Bangalore, India",
    timeZone: "Asia/Kolkata",
    email: "Manojshimoga38@gmail.com",
    phone: "+91 97407 70284",
    github: "https://github.com/manoj633",
    linkedin: "https://www.linkedin.com/in/manoj-m-shimoga",
    summary:
      "Frontend Engineer with 4.9+ years of production experience building high-performance, resilient web platforms with React, Angular, TypeScript, and modern state architectures. Proven track record delivering AI-powered RAG pipelines, migrating complex enterprise portals with zero defects, and engineering end-to-end full-stack applications.",
    tagline:
      "I architect high-performance digital products, creative interfaces, and intelligent AI workflows with agency-grade craft.",
  },

  metrics: [
    {
      value: "4.9+",
      label: "Years in Production",
      detail: "Building scalable web apps & design systems",
    },
    {
      value: "26%",
      label: "Incident Reduction",
      detail: "Faulty equipment reduction for British Telecom",
    },
    {
      value: "20%",
      label: "Performance Speedup",
      detail: "Through code-splitting, memoization & TDD",
    },
    {
      value: "0",
      label: "Production Defects",
      detail: "3 consecutive quarters (TCS Best Team Award)",
    },
  ],

  projects: [
    {
      id: "stride",
      number: "01",
      title: "STRIDE",
      subtitle: "Full-Stack Productivity & Goal Intelligence Platform",
      category: "Full-Stack Product",
      type: "Solo Engineering",
      featured: true,
      demoUrl: "https://stride-qd71.onrender.com/",
      githubUrl: "https://github.com/manoj633/stride",
      technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT & 2FA TOTP", "node-cron", "Brevo", "GitHub Actions"],
      summary:
        "Solo-engineered full-stack productivity ecosystem featuring hierarchical goal/task tracking, Pomodoro focus timers, calendar views, TOTP two-factor authentication, and automated email progress reports via scheduled cron jobs.",
      highlights: [
        "Architected modular React frontend with interactive Pomodoro timer, calendar view, goal templates, and tag management.",
        "Implemented security suite: JWT protected sessions, email password recovery, TOTP 2FA, rate limiting, and centralized error handlers.",
        "Engineered background cron jobs for automated daily goal reminders and weekly digest reports via Brevo.",
        "Configured automated GitHub Actions CI pipeline for robust continuous delivery on Render.",
      ],
      color: "from-sky-500/20 to-blue-600/10",
      accent: "#38bdf8",
    },
    {
      id: "protorev3d",
      number: "02",
      title: "ProtoRev3D",
      subtitle: "Mechanical Engineering & Rapid Prototyping Platform",
      category: "Client & Business Platform",
      type: "Freelance Lead",
      featured: true,
      demoUrl: "https://protorev3d.com/",
      githubUrl: "https://github.com/manoj633",
      technologies: ["React", "Vite", "TypeScript", "Responsive CSS", "SEO Architecture", "Web Performance"],
      summary:
        "Designed and engineered an ultra-fast commercial web platform for an engineering firm specializing in CAD modeling, 3D printing, and rapid prototyping, driving organic leads and client trust.",
      highlights: [
        "Collaborated directly with client leadership to translate CAD service lines into intuitive, high-converting digital customer journeys.",
        "Built component-based TypeScript architecture with optimized asset delivery and high Lighthouse scores.",
        "Streamlined technical quote requests and lead capture pipelines for industrial prototyping.",
      ],
      color: "from-indigo-500/20 to-purple-600/10",
      accent: "#818cf8",
    },
    {
      id: "wlms-rag",
      number: "03",
      title: "WLMS AI & Architecture",
      subtitle: "Enterprise RAG AI Engine & React Migration (TCS)",
      category: "Enterprise & AI",
      type: "Senior Software Engineer",
      featured: true,
      demoUrl: "https://github.com/manoj633",
      githubUrl: "https://github.com/manoj633",
      technologies: ["React", "TypeScript", "OpenAI Embeddings", "Pinecone Vector DB", "RAG Pipeline", "Angular 8 Migration", "Jest", "SonarQube"],
      summary:
        "Spearheaded the integration of a RAG pipeline utilizing OpenAI embeddings and Pinecone vector search to automate complex XML workflow configurations, while leading core portal migrations from Angular 8 to React.",
      highlights: [
        "Architected ORWP frontend and RAG vector search to retrieve similar historical cases, reducing manual XML configuration effort significantly.",
        "Led frontend migration of core modules (Price Fault Visualizer & Self-Care Portal) from Angular 8 to modern React.",
        "Boosted runtime responsiveness by ~20% through memoization, lazy loading, debouncing, and render optimizations.",
        "Enforced TDD with Jest and SonarQube quality gates, reducing code review iterations by 25%.",
      ],
      color: "from-emerald-500/20 to-teal-600/10",
      accent: "#34d399",
    },
    {
      id: "british-telecom",
      number: "04",
      title: "British Telecom Portals",
      subtitle: "Order Management & PCI-DSS Payment Workflows (TCS)",
      category: "Enterprise Portals",
      type: "Frontend Developer",
      featured: true,
      demoUrl: "https://github.com/manoj633",
      githubUrl: "https://github.com/manoj633",
      technologies: ["React", "Angular 12", "TypeScript", "PCI-DSS Security", "REST APIs", "Micro-frontends"],
      summary:
        "Engineered customer and agent-facing telecom portals for order tracking, appointment scheduling, and secure payment processing under strict PCI-DSS compliance.",
      highlights: [
        "Built equipment management portal that reduced faulty device returns by 26% and boosted turnaround by 37%.",
        "Developed home-move appointment scheduling tool, lifting successful appointment bookings by 25%.",
        "Engineered secure payment workflows meeting PCI-DSS standards for sensitive transaction data.",
        "Recognized with TCS On-The-Spot Awards for three consecutive quarters for defect-free execution.",
      ],
      color: "from-amber-500/20 to-orange-600/10",
      accent: "#fbbf24",
    },
  ],

  skillCategories: [
    {
      category: "Frontend Core",
      description: "Building resilient, reactive, and accessible component architectures.",
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "Angular 8/12", "HTML5 & CSS3", "SASS / SCSS", "Responsive Design", "Component Design Systems"],
    },
    {
      category: "AI & Vector Search",
      description: "Bridging large language models and vector databases into real-world UI workflows.",
      skills: ["OpenAI Embeddings", "Pinecone Vector DB", "RAG Pipelines", "Semantic Search", "LLM Integration", "Workflow Automation"],
    },
    {
      category: "State & Architecture",
      description: "Managing predictable global state and data flow across complex applications.",
      skills: ["Redux & Redux Thunk", "Context API", "NgRx", "Modular UI Architecture", "Clean Code Principles", "Separation of Concerns"],
    },
    {
      category: "Backend & Full-Stack",
      description: "Designing RESTful contracts, background workers, and persistent stores.",
      skills: ["Node.js", "Express.js", "MongoDB / Mongoose", "RESTful APIs", "JWT Auth & TOTP 2FA", "node-cron Scheduling", "Brevo / Email APIs"],
    },
    {
      category: "Performance & Testing",
      description: "Delivering sub-second interactions and high software confidence.",
      skills: ["Code Splitting", "Lazy Loading", "Memoization", "Debouncing & Throttling", "Jest Unit Testing", "TDD Practices", "SonarQube Analysis"],
    },
    {
      category: "Tooling & DevOps",
      description: "Modern development workflows, versioning, and continuous delivery.",
      skills: ["Git & GitHub Actions", "Vite", "Webpack", "JIRA & Agile Scrum", "Jenkins CI", "Postman", "Render / Cloud Hosting"],
    },
  ],

  experience: [
    {
      role: "Senior Software Engineer — WLMS",
      company: "Tata Consultancy Services",
      location: "Bangalore, India",
      period: "Dec 2022 — Present",
      type: "Full-time",
      keyPoints: [
        "Architected React frontend for ORWP and built RAG pipeline using OpenAI embeddings and Pinecone vector search to automate XML workflow generation.",
        "Led migration of core WLMS modules (Price Fault Visualizer and Self-Care Portal) from Angular 8 to React.",
        "Engineered shared UI component libraries, cutting duplicate code and accelerating multi-portal feature rollouts.",
        "Achieved ~20% faster user interaction speed through memoization, lazy loading, debouncing, and render profiling.",
        "Mentored peers, conducted code reviews, and championed TDD using Jest and SonarQube, cutting review iterations by 25%.",
      ],
    },
    {
      role: "Frontend Developer — British Telecom",
      company: "Tata Consultancy Services",
      location: "Bangalore, India",
      period: "Oct 2021 — Dec 2022",
      type: "Full-time",
      keyPoints: [
        "Engineered agent and customer-facing portals using React, Angular 12, TypeScript, and modern CSS for order management and scheduling.",
        "Built secure payment transaction UI complying with strict PCI-DSS standards for sensitive cardholder data.",
        "Spearheaded equipment replacement portal: dropped faulty equipment incidents by 26% and improved turnaround by 37%.",
        "Developed home-move scheduling tool, boosting appointment completion rate by 25%.",
        "Awarded TCS On-The-Spot awards for three consecutive quarters for defect-free delivery.",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru National College of Engineering (JNNCE)",
    period: "2017 — 2021",
    highlights: "Strong foundation in computing systems, algorithmic problem solving, and digital electronics.",
  },

  awards: [
    {
      title: "Best Team Award",
      organization: "Tata Consultancy Services",
      description: "Awarded for delivering mission-critical applications well ahead of schedule with zero production defects across 3 consecutive quarters.",
    },
    {
      title: "TCS On-the-Spot Award (3x)",
      organization: "Tata Consultancy Services",
      description: "Recognized for proactive technical contributions, high code quality, and defect-free delivery across 3 consecutive quarters.",
    },
  ],
};
