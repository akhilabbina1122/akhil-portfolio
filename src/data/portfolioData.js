import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Terminal, Cpu, Globe } from 'lucide-react';

export const portfolioData = {
  personalInfo: {
    name: "Abbina Bala Akhileswar",
    shortName: "AB Akhileswar",
    role: "Aspiring Software Engineer",
    tagline: "C & Java Developer · Cloud & Web Enthusiast",
    email: "2100031427cseh@gmail.com",
    location: "Vijayawada, Andhra Pradesh, India",
    linkedin: "https://www.linkedin.com/in/akhil-abbina-b36582242", // Placeholder, user can update
    github: "https://github.com/", // Placeholnpmder
    objective: "Highly motivated and academically accomplished Computer Science Engineering student seeking opportunities to collaborate with expert teams. I enjoy applying strong analytical and problem-solving skills to build impactful, real-world software solutions, and I am eager to learn and grow in dynamic environments.",
    aboutNarrative: "I'm Abbina Bala Akhileswar, a B.Tech Computer Science Engineering student at KL University with an ongoing CGPA of 9.07. I thrive on solving complex problems, extracting insights from data, and building scalable, user-focused solutions. I enjoy collaborating with teams, learning new technologies, and contributing ideas that drive real impact. I am particularly interested in cloud-based systems, web applications, data analytics, and modern software engineering practices, valuing clean code, reliability, and maintainable architecture."
  },
  navLinks: [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" }
  ],
  skills: [
    {
      category: "Programming",
      items: [
        { name: "C", level: "Proficient" },
        { name: "Java", level: "Proficient" },
        { name: "SQL", level: "Intermediate" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "ReactJS", level: "Intermediate" },
        { name: "HTML", level: "Proficient" },
        { name: "CSS", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" }
       
        
      ]
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS Cloud", level: "Certified Practitioner Level" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Power BI", level: "Intermediate" },
        { name: "MS Office", level: "Proficient" },
        { name: "VS Code", level: "Proficient" },
        { name: "Eclipse", level: "Proficient" },
        { name: "Excel", level: "Proficient" }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "Data Analyst Intern (Virtual)",
      company: "AWS Virtual Internship (AICTE)",
      duration: "Dec 2022 – Feb 2023",
      description: "Worked as a Data Analyst in an AWS virtual internship under AICTE, leveraging analytical skills to extract insights from complex datasets in a cloud-based environment. Used AWS services and data tools to support informed decision-making and explore innovation in data-driven solutions.",
      type: "real"
    },
    {
      id: 2,
      role: "Software Engineer / Intern",
      company: "Future Opportunity",
      duration: "Coming Soon",
      description: "Placeholder for upcoming industry experience. This will be updated with role, responsibilities, and key contributions once an opportunity is secured.",
      type: "placeholder"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Online Voting System (AWS-based)",
      description: "Designed and implemented a secure and scalable online voting system using AWS cloud services, focusing on accessibility, reliability, and security.",
      details: [
        "Employed multiple AWS services (compute, storage, networking) for efficient voting processes.",
        "Optimized the experience for end users to enable seamless, smooth voting interactions."
      ],
      tech: ["AWS Cloud", "Web Application", "Scalability", "Security"],
      type: "real"
    },
    {
      id: 2,
      title: "Astro Prediction Website",
      description: "Developed an astrology prediction website using JavaScript, CSS, and HTML, emphasizing intuitive user interface design and dynamic interactions.",
      details: [  
        "Leveraged JavaScript to implement dynamic, client-side logic and interactions.",
        "Focused on user experience, accessibility, and clean visual presentation.",
        
      ],
      tech: ["HTML", "CSS", "JavaScript", "Frontend"],
      type: "real"
    },
    {
      id: 3,
      title: "Placeholder Project",
      description: "This card will be updated with a future project involving web development, cloud, or data analytics.",
      details: [],
      tech: ["Coming Soon"],
      type: "placeholder"
    }
  ],
  certifications: [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      description: "Demonstrates foundational knowledge of AWS cloud concepts, services, architecture, and basic deployment models."
    },
    {
      id: 2,
      name: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      description: "Validated skills in real-world Java development and enterprise application development."
    },
    {
      id: 3,
      name: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud",
      description: "Google Cloud Certified Associate Cloud Engineer with practical experience deploying and managing workloads on GCP. Skilled in provisioning resources, configuring networks, and ensuring secure, scalable cloud operations."
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science Engineering",
      institution: "KL University",
      duration: "Expected 2025",
      detail: "Ongoing CGPA: 9.07",
      description: "Pursuing B.Tech CSE with a strong focus on software development, data structures, algorithms, and cloud computing."
    },
    {
      id: 2,
      degree: "Intermediate (MPC)",
      institution: "Sasi Junior College",
      duration: "2019 – 2021",
      detail: "Pass Percentage: 97%"
    },
    {
      id: 3,
      degree: "SSC",
      institution: "Montessori EM School",
      duration: "2018 – 2019",
      detail: "CGPA: 9.5"
    }
  ],
  highlights: [
    "Consistently strong academic performance across SSC, Intermediate, and B.Tech.",
    "Actively exploring cloud technologies, data analytics, and modern web development.",
    "Disciplined learning and commitment to professional growth."
  ]
};
