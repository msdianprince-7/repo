// Static portfolio data - Update this file to change your portfolio content

export const profileData = {
  id: 1,
  name: "Priyansh Nandwana",
  title: "Software Engineer",
  bio: "Backend engineer specializing in Java, Spring Boot, AWS cloud infrastructure, and microservices architecture. Experienced in building scalable systems processing 10,000+ transactions daily with 99.9% uptime. Strong background in distributed systems, database optimization, and LLM integration.",
  avatarUrl: null,
  githubUrl: "https://github.com/msdianprince-7",
  linkedinUrl: "https://www.linkedin.com/in/priyansh-nandwana/",
  email: "nandwana.priyansh103@gmail.com"
};

export const experiencesData = [
  {
    id: 1,
    company: "AGSuite Technologies",
    role: "Software Engineer",
    duration: "Jan 2025 – Present",
    description: "• Architected AWS middleware integrating NetSuite with Zoho Books, processing 10,000+ PDFs daily using EC2 Auto Scaling, SQS, Lambda, S3, and RDS PostgreSQL, achieving 99.9% uptime and 75% faster processing.\n• Deployed infrastructure with CloudFormation and CloudWatch monitoring, implementing S3 lifecycle policies reducing storage costs by 60% while maintaining audit compliance.\n• Implemented Application Load Balancer and Lambda event processing for zero-downtime deployments.",
    order: 1
  },
  {
    id: 2,
    company: "AGSuite Technologies",
    role: "Associate Software Engineer",
    duration: "Oct 2024 – Jan 2025",
    description: "• Integrated Large Language Model capabilities using OpenAI API with prompt engineering and response streaming to automate document analysis and data extraction for 1,000+ financial records daily, reducing manual data entry by 70%.\n• Built LLM middleware service with Node.js and Express.js implementing rate limiting, error handling, and retry logic for robust API integration.\n• Developed RESTful API endpoints using RESTlet and Suitelet scripts in NetSuite to process LLM responses and integrate with backend workflows.\n• Implemented token optimization strategies and response caching mechanisms, reducing API costs by 40% while maintaining processing accuracy.",
    order: 2
  }
];

export const projectsData = [
  {
    id: 1,
    title: "IPO Analyzer - Real-Time IPO Platform",
    description: "• Built a multi-source scraping pipeline with Puppeteer + Cheerio aggregating IPO data from 10+ sources, enabling parallel scraping and achieving 60% faster data refresh with 95% accuracy.\n• Developed a financial scoring engine analyzing 15+ metrics (P/E, ROE, D/E, CAGR) and integrated multi-provider AI analysis (OpenAI/Gemini) with 99.2% uptime and <3s response time.\n• Built real-time frontend with React + Drizzle ORM over PostgreSQL processing 50-100 IPOs/day with <2s API latency.",
    techStack: ["TypeScript", "Node.js", "Puppeteer", "PostgreSQL", "React"],
    link: null,
    githubLink: "https://github.com/msdianprince-7",
    imageUrl: null,
    order: 1
  },
  {
    id: 2,
    title: "LSM Database Engine - Storage Internals",
    description: "• Built a full LSM Tree storage engine with MemTable (Skip List), multi-level SSTables, Bloom filters, and Write-Ahead Log, achieving 42,000 writes/sec, P99 <2.3ms, and 97.2% test coverage.\n• Optimized read path with Bloom filters (92% hit rate) and Protocol Buffers achieving 47% compression and 5× encoding speed over JSON.\n• Designed background size-tiered compaction reducing read amplification by 50% and achieving 2.14× write amplification.",
    techStack: ["TypeScript", "Node.js", "ProtoBuf"],
    link: null,
    githubLink: "https://github.com/msdianprince-7",
    imageUrl: null,
    order: 2
  },
  {
    id: 3,
    title: "TaskMaster - Distributed Task Orchestration",
    description: "• Architected a 3-service distributed scheduler using gRPC inter-service communication, enabling horizontal scaling to 50 workers and achieving 25 tasks/sec throughput with <10ms dispatch latency.\n• Implemented round-robin load balancing and heartbeat-based fault tolerance with PostgreSQL SKIP LOCKED for contention-free polling, ensuring 100% task completion during worker failures.\n• Built a real-time monitoring dashboard with React + Server-Sent Events delivering task lifecycle updates in <1s.",
    techStack: ["Node.js", "gRPC", "PostgreSQL", "React"],
    link: null,
    githubLink: "https://github.com/msdianprince-7",
    imageUrl: null,
    order: 3
  }
];

export const skillsData = [
  {
    id: 1,
    category: "Languages",
    items: ["Java (Core Java 8+)", "JavaScript", "TypeScript", "Python", "C++"],
    order: 1
  },
  {
    id: 2,
    category: "Backend Technologies",
    items: ["Spring Boot", "Spring MVC", "Data JPA (Hibernate)", "Node.js", "Express.js", "NestJS", "REST APIs", "Microservices"],
    order: 2
  },
  {
    id: 3,
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
    order: 3
  },
  {
    id: 4,
    category: "Cloud & Infrastructure",
    items: ["AWS (EC2, Lambda, S3, SQS, RDS, CloudWatch, Autoscaling)"],
    order: 4
  },
  {
    id: 5,
    category: "Build & DevOps",
    items: ["Maven", "Git", "GitHub Actions", "Docker", "CI/CD"],
    order: 5
  },
  {
    id: 6,
    category: "Testing & Others",
    items: ["JUnit", "Mockito", "Jest", "Postman"],
    order: 6
  }
];

export const educationData = [
  {
    id: 1,
    institution: "Bangalore Institute of Technology",
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    year: "2024",
    order: 1
  }
];

export const musicRecsData = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
    note: "A masterpiece of musical storytelling",
    order: 1
  },
  {
    id: 2,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    note: "Timeless guitar work",
    order: 2
  },
  {
    id: 3,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Synth-pop",
    note: "Perfect coding soundtrack",
    order: 3
  }
];

export const bookRecsData = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    note: "Essential reading for every developer",
    imageUrl: null,
    order: 1
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    genre: "Programming",
    note: "Career-changing perspectives on software craft",
    imageUrl: null,
    order: 2
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-improvement",
    note: "Small changes, remarkable results",
    imageUrl: null,
    order: 3
  }
];

export const movieRecsData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: "1994",
    genre: "Drama",
    note: "",
    imageUrl: null,
    order: 1
  },
  {
    id: 2,
    title: "Inception",
    director: "Christopher Nolan",
    year: "2010",
    genre: "Sci-Fi",
    note: "",
    imageUrl: null,
    order: 2
  },
  {
    id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    genre: "Crime",
    note: "",
    imageUrl: null,
    order: 3
  }
];

export const writingsData = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js",
    description: "A comprehensive guide to designing and implementing RESTful APIs that can handle millions of requests.",
    link: null,
    publishedAt: "2024",
    order: 1
  },
  {
    id: 2,
    title: "My Journey into Backend Development",
    description: "Reflections on transitioning from electronics engineering to software development.",
    link: null,
    publishedAt: "2024",
    order: 2
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "LeetCode Top 10%",
    issuer: "LeetCode",
    date: "2024",
    description: "Earned a LeetCode rating of 1905 by solving over 500 complex algorithmic challenges; positioned in the top 10%.",
    credentialUrl: null,
    type: "achievement",
    order: 1
  }
];

export const blogPostsData = [
  {
    id: 1,
    title: "Getting Started with Node.js in 2024",
    slug: "getting-started-with-nodejs-2024",
    content: "Node.js continues to be one of the most popular runtime environments for building server-side applications. In this post, I'll share my experience and tips for getting started.\n\nFirst, make sure you have the latest LTS version installed. Then, familiarize yourself with npm and the vast ecosystem of packages available.\n\nKey concepts to master:\n- Asynchronous programming with Promises and async/await\n- Event-driven architecture\n- Building RESTful APIs with Express.js\n- Database integration with MongoDB or PostgreSQL\n\nThe Node.js community is incredibly active and supportive. Don't hesitate to ask questions and share your projects!",
    excerpt: "A comprehensive guide for developers looking to start their Node.js journey in 2024.",
    publishedAt: "January 2024",
    tags: ["Node.js", "JavaScript", "Backend"],
    order: 1
  },
  {
    id: 2,
    title: "Why TypeScript Changed My Development Workflow",
    slug: "why-typescript-changed-my-workflow",
    content: "As a JavaScript developer, I was initially skeptical about TypeScript. Why add complexity when JavaScript works just fine?\n\nBut after using TypeScript for six months, I can confidently say it has transformed how I write code.\n\nBenefits I've experienced:\n- Catch bugs at compile time, not runtime\n- Better IDE support with autocomplete and refactoring\n- Self-documenting code through type annotations\n- Easier collaboration with team members\n\nIf you're on the fence about TypeScript, I encourage you to give it a try on your next project. The learning curve is worth it!",
    excerpt: "My journey from JavaScript to TypeScript and why I'm never going back.",
    publishedAt: "December 2023",
    tags: ["TypeScript", "JavaScript", "Development"],
    order: 2
  }
];