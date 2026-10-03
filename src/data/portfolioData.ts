import { PortfolioData } from '../types/portfolio';

// Project mockup images
import projectGradeEvaluator from '../assets/images/project_python_evaluator_1791001490307.jpg';
import projectDeveloperWorkspace from '../assets/images/project_cs_portfolio_1791001502102.jpg';

export const initialPortfolioData: PortfolioData = {
  name: "Sravya",
  title: "Computer Science Engineering Student",
  shortBio: "Computer Science Engineering student with a strong foundation in Python programming, software development, and problem solving. Dedicated to writing clean, maintainable code and building effective software solutions.",
  aboutMe: "I am a Computer Science Engineering student with technical foundations in Python, data processing, algorithms, and web technologies. I enjoy solving computational problems, validating inputs, and engineering structured, reliable software.",
  email: "sravya200555@gmail.com",
  github: "https://github.com/sravya2005",
  linkedin: "https://linkedin.com/in/sravya-cs",
  location: "India",
  careerFocus: "Software Engineering, Python Development, and Web Technologies",
  
  education: [
    {
      id: "btech-cse",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "College of Engineering & Technology",
      location: "Undergraduate Program",
      startYear: "2022",
      endYear: "2026",
      status: "Pursuing Degree",
      gradeOrGpa: "First Class with Distinction",
      coursework: [
        "Data Structures & Algorithms",
        "Python Programming & Application Development",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Web Technologies & Frameworks",
        "Operating Systems & Computer Networks"
      ]
    },
    {
      id: "senior-secondary",
      degree: "Intermediate / Higher Secondary (10+2)",
      field: "Mathematics, Physics, Chemistry (MPC)",
      institution: "State Board of Intermediate Education",
      location: "Higher Secondary",
      startYear: "2020",
      endYear: "2022",
      status: "Completed",
      gradeOrGpa: "Top Percentile",
      coursework: [
        "Higher Mathematics & Calculus",
        "Physics & Logical Reasoning",
        "Chemistry & Analytical Foundations"
      ]
    }
  ],

  skillCategories: [
    {
      id: "programming",
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Core Strength", highlight: "Data types, dynamic inspection, control flow, functions" },
        { name: "JavaScript", level: "Proficient", highlight: "Modern ES6+, DOM manipulation, asynchronous logic" },
        { name: "TypeScript", level: "Familiar", highlight: "Static typing, interfaces, type safety" },
        { name: "C / C++", level: "Academic", highlight: "Memory management, data structures fundamentals" }
      ]
    },
    {
      id: "web-tech",
      title: "Web Technologies",
      skills: [
        { name: "HTML5 & Semantic Markup", level: "Proficient", highlight: "Accessible tree structure, SEO metadata" },
        { name: "CSS3 & Tailwind CSS", level: "Proficient", highlight: "Responsive grids, flexbox, clean design tokens" },
        { name: "React", level: "Proficient", highlight: "State hooks, props, component lifecycle, modular design" },
        { name: "RESTful Principles", level: "Familiar", highlight: "Client-server interaction, JSON payloads" }
      ]
    },
    {
      id: "testing-validation",
      title: "Testing, Inspection & Validation",
      skills: [
        { name: "Dynamic Type Introspection", level: "Core Strength", highlight: "type() analysis, runtime casting, input validation" },
        { name: "Edge Case Handling", level: "Proficient", highlight: "Boundary testing, sanitized user input streams" },
        { name: "Code Debugging & Profiling", level: "Proficient", highlight: "Stack trace examination, systematic logic tracing" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Environments",
      skills: [
        { name: "Git & GitHub", level: "Proficient", highlight: "Version control, branching, repository management" },
        { name: "Visual Studio Code", level: "Proficient", highlight: "Extensions, integrated terminal, debugging workflows" },
        { name: "Python IDLE & Virtualenv", level: "Proficient", highlight: "Interactive interpreter, scripting environment" },
        { name: "Linux / Unix Shell", level: "Familiar", highlight: "Basic shell navigation, file system operations" }
      ]
    },
    {
      id: "core-cs",
      title: "Core Computer Science",
      skills: [
        { name: "Data Structures", level: "Core Strength", highlight: "Arrays, lists, dictionaries, stacks, queues" },
        { name: "Algorithms & Complexity", level: "Proficient", highlight: "Sorting, searching, Big-O time and space analysis" },
        { name: "Object-Oriented Programming", level: "Proficient", highlight: "Encapsulation, inheritance, modular abstraction" }
      ]
    }
  ],

  projects: [
    {
      id: "student-grade-type-evaluator",
      title: "Student Grade & Type Evaluator",
      shortDescription: "Academic data processing tool featuring user input validation, runtime data type introspection, and grade computation logic.",
      fullDescription: "Built with foundational Python engineering principles, this application collects student data (name, age, and academic grades), performs runtime type introspection, validates input boundaries, and computes academic performance classification tiers.",
      category: "Python",
      technologies: ["Python", "Type Inspection", "Input Sanitization", "Data Validation"],
      keyFeatures: [
        "Runtime Type Inspection using type verification for strings, integers, and floating-point marks",
        "Defensive input validation safeguarding against empty strings, invalid values, and out-of-range marks",
        "Grade calculation engine computing weighted performance standing and academic classifications",
        "Structured report generation showing variable values, student summaries, and validated data types"
      ],
      image: projectGradeEvaluator,
      githubUrl: "https://github.com/sravya2005/student-grade-evaluator"
    },
    {
      id: "academic-records-manager",
      title: "Student Academic Records & GPA System",
      shortDescription: "Console-driven data management system in Python implementing structured student models and semester grade computations.",
      fullDescription: "A modular Python project that organizes student cohorts, courses, and semester marks using Python data structures (lists, dictionaries, and classes). Supports calculating SGPA/CGPA, generating transcript summaries, and sorting top-performing students.",
      category: "Python",
      technologies: ["Python", "Object-Oriented Programming", "Data Structures", "File I/O"],
      keyFeatures: [
        "Student record encapsulation using Python object-oriented classes and data attributes",
        "Automatic SGPA and CGPA computation with credit weighting across multiple semesters",
        "Exportable summary text files containing student grade breakdowns and class rankings",
        "Robust error handling preventing invalid course credit entries"
      ],
      image: projectDeveloperWorkspace,
      githubUrl: "https://github.com/sravya2005/academic-records-manager"
    },
    {
      id: "personal-portfolio-engineering",
      title: "Recruiter-Ready Developer Portfolio",
      shortDescription: "Ultra-responsive personal portfolio with WCAG AA compliance, printable resume generator, and zero-pill typographic discipline.",
      fullDescription: "Engineered from scratch using React, TypeScript, and modern CSS architecture to showcase academic milestones, technical projects, and verified credentials to technical recruiters.",
      category: "Web",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Print CSS"],
      keyFeatures: [
        "100% responsive layout matching the Universal Frontend Design Constitution (1440px desktop baseline)",
        "Integrated Resume Generator with instant Print to PDF layout and text copy",
        "Semantic component architecture with fast client-side performance and accessible contrasts",
        "Dark mode palette with accessible 60-30-10 contrast distribution"
      ],
      image: projectGradeEvaluator,
      githubUrl: "https://github.com/sravya2005/personal-portfolio"
    }
  ],

  certifications: [
    {
      id: "cert-python-foundations",
      name: "Python Programming & Core Data Structures",
      issuer: "National / University Academic Certification",
      issueDate: "2024",
      credentialId: "PYTH-CS-2024-8841",
      skillsCovered: ["Python Syntax", "Variables & Types", "Control Structures", "Functional Programming"]
    },
    {
      id: "cert-web-dev",
      name: "Web Development & Frontend Architecture",
      issuer: "Technical Training Academy",
      issueDate: "2024",
      credentialId: "WEB-ENG-2024-3190",
      skillsCovered: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"]
    }
  ],

  achievements: [
    {
      id: "achieve-academic",
      title: "Consistent Academic Standing in B.Tech Computer Science",
      organization: "College Department of Computer Science",
      date: "2022 - Present",
      description: "Maintained distinction standing across coursework in Data Structures, Python Programming, and Database Systems.",
      category: "Academics"
    },
    {
      id: "achieve-hackathon",
      title: "Department Coding Challenge Finalist",
      organization: "Annual CS Technical Fest",
      date: "2024",
      description: "Developed an algorithmic data validation script solving complex parsing and type introspection problems within strict time limits.",
      category: "Competition"
    },
    {
      id: "achieve-peer-mentor",
      title: "Peer Problem Solving & Code Review Contributor",
      organization: "Student Developer Guild",
      date: "2023 - Present",
      description: "Helped junior computer science students master Python input/output handling, syntax basics, and debugging techniques.",
      category: "Leadership"
    }
  ]
};

export { projectGradeEvaluator, projectDeveloperWorkspace };
