
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
      titles: ["Software Engineer", "Full Stack Engineer", "Cloud Engineer", "AI Engineer"],
      tagline: "Software Development | AI Integration  | Cloud",
      location: "Canada",
      email: "dawarwaqar71@gmail.com",
      phone: "587-969-9120",
      photo: "/images/dp.jpg",
      resumeUrl: "/resume.pdf",
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
        position: "Full Stack Python Intern (Co-Op)",
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
        position: "Lead Software Engineer (Independent Contractor)",
        duration: "Jan 2023 – Jan 2024",
        location: "Remote",
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
        duration: "Jan 2024 – Apr 2025",
        location: "Canada",
        gpa: "3.9/4.0",
        courses: ["Networking & Data Security", "Natural Language Processing", "Systems Programming", "Distributed Systems", "Applied AI", "Algorithms", "Databases"]
      },
      {
        degree: "BS Computer Science",
        school: "LUMS",
        url: "https://lums.edu.pk/",
        logo: "/images/lums_logo.png",
        duration: "Aug 2018 – Jun 2022",
        location: "Pakistan"
      }
    ],
    projects: [
      {
        name: "EveryBodyEats",
        tech: ["TypeScript", "Python", "Django", "PostgreSQL", "React", "AWS"],
        year: "2025",
        description: "Built a web platform connecting restaurants and NGOs to redistribute surplus food—implementing role-based access, Redis-backed real-time listings, and AWS SNS powered notifications to reduce waste and combat hunger.",
        repoUrl: "https://github.com/DawarWaqar/everybody-eats-backend"
      },
      {
        name: "Distributed File System",
        tech: ["C", "Linux", "Sockets"],
        year: "2024",
        description: "Created a distributed file system using 3 servers, enabling seamless file management with client-server communication only across a specialized server.",
        repoUrl: "https://github.com/DawarWaqar/distributed-file-system"
      },
     
      {
        name: "Predictive Credit-Scoring Engine",
        tech: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn", "Pandas"],
        year: "2024",
        description: "Built a Machine Learning pipeline that, after thorough Exploratory Data Analysis and feature engineering (imputation, categorical encoding, normalization), delivers high-accuracy predictions of borrower creditworthiness to streamline loan-approval decisions.",
        repoUrl: "https://github.com/DawarWaqar/Customer-Creditworthness-Prediction"
      },
      {
        name: "Real Estate Marketplace",
        tech: ["Java", "TypeScript", "Spring Boot", "React"],
        year: "2024",
        description: "Built a tool that scrapes and aggregates property listings from multiple sites, applies user preferences, and displays personalized recommendations.",
        repoUrl: "https://github.com/DawarWaqar"
      },
      {
        name: "Distributed Fault-Tolerant Key-Value Storage Service",
        tech: ["Go", "Raft"],
        year: "2024",
        description: "Developed a distributed key–value store using the Raft consensus algorithm—synchronizing Goroutines, implementing RPC-based operations, orchestrating leader elections, replicating logs, and ensuring system fault tolerance.",
        repoUrl: "https://github.com/DawarWaqar"
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
  