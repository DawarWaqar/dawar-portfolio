
import {
  Code2,
  Cloud,
  Server,
  Monitor,
  Database,
  Brain,
  Laptop,
  Plane,
  Crown,
  Coffee
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Dawar Waqar",
    titles: ["Software Engineer", "Full Stack Engineer", "AI Engineer"],
    tagline: "Software Development | Cloud | AI",
    location: "Canada",
    email: "dawarwaqar71@gmail.com",
    phone: "587-969-9120",
    photo: "/images/dp.jpg",
    linkedin: "https://www.linkedin.com/in/dawar-waqar/",
    github: "https://github.com/DawarWaqar",
    medium: "https://medium.com/@dawarwaqar71",
    stats: {
      experience: "2+ Years of Experience",
      projects: "30+ Projects"
    }
  },
  experience: [
    {
      company: "Tecsys Inc.",
      url: "https://www.tecsys.com/",
      logo: "/images/tecsys_logo.png",
      position: "Full Stack Developer Intern (Co-op)",
      team: "AI & Innovation Team",
      duration: "Jan 2025 – Apr 2025",
      location: "Montreal, CA",
    },
    {
      company: "Pakistan State Oil",
      company2: "Market Page",
      company2Description: "(Early-Stage Fintech Startup)",
      url: "https://psopk.com/",
      logo: "/images/pso_logo.png",
      position: "Lead Software Engineer",
      duration: "Jan 2023 – Jan 2024",
      location: "Lahore, PK & Amsterdam, NL (Remote)",
    },
    {
      company: "Cowlar Design Studio (Y Combinator W17)",
      url: "https://cowlardesignstudio.com/",
      logo: "/images/cowlar_logo.jpeg",
      position: "Full Stack Developer",
      team: "Factory Automation Team",
      duration: "Jun 2022 – Dec 2022",
      location: "Islamabad, PK",
    },
    {
      company: "LUMS",
      url: "https://lums.edu.pk/",
      logo: "/images/lums_logo.png",
      position: "Full-time Teaching Assistant",
      team: "Advanced Programming Course",
      duration: "Jan 2022 - Jun 2022",
      location: "Lahore, PK",
    },
    {
      company: "OSA Studio",
      url: "https://www.linkedin.com/company/osa-studio/",
      logo: "/images/osa_logo.jpeg",
      position: "JavaScript Developer Intern",
      duration: "Jul 2021 – Aug 2021",
      location: "Lahore, PK (Remote)",
    }
  ],
  skills: {
    languages: {
      icon: Code2,
      items: ["Python", "JavaScript", "TypeScript", "Java", "Go", "Bash", "C/C++", "SQL", "Groovy"]
    },
    cloudDevOps: {
      icon: Cloud,
      items: ["Docker", "Kubernetes", "Terraform", "Amazon Web Services (AWS)", "GitLab CI", "Jenkins", "Linux"]
    },
    backend: {
      icon: Server,
      items: ["Django", "Flask", "NodeJS", "ExpressJS", "Spring Boot", "Jest"]
    },
    frontend: {
      icon: Monitor,
      items: ["React/NextJS", "VueJS", "Streamlit", "HTML/CSS"]
    },
    databases: {
      icon: Database,
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"]
    },
    aiMl: {
      icon: Brain,
      items: ["Scikit-learn", "LangChain", "NLP", "RAG", "Anylogic"]
    }
  },
  education: [
    {
      degree: "Master of Applied Computing",
      school: "University of Windsor",
      url: "https://www.uwindsor.ca/",
      logo: "/images/uwindsor_logo.jpg",
      duration: "2024 – 2025",
      location: "Canada",
      gpa: "3.9/4.0",
      courses: ["Networking & Data Security", "Natural Language Processing", "Systems Programming", "Distributed Systems", "Applied AI", "Algorithms", "Databases"]
    },
    {
      degree: "BS Computer Science",
      school: "LUMS",
      url: "https://lums.edu.pk/",
      logo: "/images/lums_logo.png",
      duration: "2018 – 2022",
      location: "Pakistan"
    }
  ],
  projects: [
    {
      name: "Smart Multi Cloud Tag using AI",
      tech: ["Python", "OpenAI", "Gemini", "Anthropic", "Azure", "GCP", "AWS", "PyPI"],
      description: "Built an open-source Python package enabling automatic multi-cloud file tagging at scale using LLMs, eradicating the need for manual tagging, saving hours of work. Delivered an end-to-end solution that seamlessly reads content, predicts tags, and applies them, enabling one-command automation across cloud storage providers (Azure Blob, AWS S3, Google Cloud Storage).",
      repoUrl: "https://github.com/DawarWaqar/smart_cloud_tag"
    },
    {
      name: "Distributed File System",
      tech: ["C", "Linux", "Sockets"],
      description: "Created a distributed file system using 3 servers, enabling seamless file management with client-server communication only across a specialized server.",
      repoUrl: "https://github.com/DawarWaqar/distributed-file-system"
    },
    {
      name: "Predictive Credit-Scoring Engine",
      tech: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn", "Pandas"],
      description: "Built a Machine Learning pipeline that, after thorough Exploratory Data Analysis and feature engineering (imputation, categorical encoding, normalization), delivers high-accuracy predictions of borrower creditworthiness to streamline loan-approval decisions.",
      repoUrl: "https://github.com/DawarWaqar/Customer-Creditworthness-Prediction"
    },
    {
      name: "Advancing News Summarization",
      tech: ["NLP", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
      description: "Developed a novel ROUGE-L weighted voting approach, ensembling multiple base text-summarization algorithms to create higher-quality news summaries, achieving a 20% improvement in the top ROUGE score.",
      repoUrl: "https://github.com/DawarWaqar/evaluation-ensemble-text-summarization"
    },
    {
      name: "Automated Backup Bash Script",
      tech: ["Bash"],
      description: "Automated the process of backing up files by writing a Bash script that runs continuously in the background, performing full, incremental, and differential backups at regular intervals, ensuring 99.9% data availability.",
      repoUrl: "https://github.com/DawarWaqar/BackUpBashScript"
    },
    {
      name: "Real Estate Marketplace",
      tech: ["Java", "TypeScript", "Spring Boot", "React"],
      description: "Built a tool that scrapes and aggregates property listings from multiple sites, applies user preferences, and displays personalized recommendations.",
      repoUrl: "https://github.com/DawarWaqar"
    },
    {
      name: "Surplus Food Rescue Platform",
      tech: ["TypeScript", "Python", "Django", "PostgreSQL", "React", "AWS"],
      description: "Built a web platform connecting restaurants and NGOs to redistribute surplus food—implementing role-based access, Redis-backed real-time listings, and AWS SNS powered notifications to reduce waste and combat hunger.",
      repoUrl: "https://github.com/DawarWaqar/everybody-eats-backend"
    },
    {
      name: "Ludo Board Game",
      tech: ["JavaScript", "WebSocket", "CSS"],
      description: "A popular and funfilled multiplayer board game from the Indian subcontinent.",
      repoUrl: "https://github.com/DawarWaqar/Ludo"
    }
  ],
  certificates: [
    { name: "Hackathon Winner (Royal Canadian Navy)", url: "https://www.uwindsor.ca/dailynews/2024-12-03/hackathon-win-grants-students-permission-board-navy-ship" },
    { name: "Industry Project Competition Winner (University of Windsor)", url: "https://drive.google.com/file/d/1T1HSjpw_Jrgg_9v9Rt2i8VJxb24dWJ20/view" },
    { name: "DevOps Beginners to Advanced with Projects (Udemy)", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e816c54c-aa61-4d19-9ac8-45a5ebd1fe38.pdf" },
    { name: "Learning Hadoop (LinkedIn Learning)", url: "https://www.linkedin.com/learning/certificates/b6a8a8427fff224aaa7cd59e98a84652b5b2a8eb9d7e1204a52bc04cabbdcefb" },
    { name: "Selenium Essential Training (LinkedIn Learning)", url: "https://www.linkedin.com/learning/certificates/70756f854bef807a938e7ca5a5c530f231d14b07eb4722e6828574897a9ddf06" },
    { name: "Hands-On Natural Language Processing (LinkedIn Learning)", url: "https://www.linkedin.com/learning/certificates/943b91dce6893f33ff2be76629248f2803c37e8eaba164ec4233f9489f3bae0a?u=56973065" },
    { name: "Agile Testing (LinkedIn Learning)", url: "https://www.linkedin.com/learning/certificates/eeda7502b10efaa412bd86c99aeeb0df7f085e669c8822b14a62d8219d29e76a" }
  ],
  interests: [
    { name: "LeetCode", icon: Laptop },
    { name: "Travelling", icon: Plane },
    { name: "Chess", icon: Crown },
    { name: "Coffee", icon: Coffee }
  ]
};
