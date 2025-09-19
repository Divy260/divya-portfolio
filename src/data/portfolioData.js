import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Mail, Code, Database, BrainCircuit, Wrench, GraduationCap, School, BriefcaseBusiness } from 'lucide-react';
 
export const portfolioData = {
  name: "Divya Matavalam",
  // IMPORTANT: Place your resume file in the /public folder of your project
  resumePdf: "/DM_BusinessDataEngineer.pdf",
 
  contact: {
    email: "matavalam.divya2023@gmail.com",
    phone: "+13143350600", // For WhatsApp link
    linkedin: "https://www.linkedin.com/in/divya260/",
    github: "https://github.com/Divy260",
  },
 
  navLinks: [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ],
 
  hero: {
    title: "Divya Matavalam",
    subtitle: "Data Scientist | Data Engineer | Data Analyst",
    highlights: ["MS in Computer Science Graduate", "2+ Years of Experience", "Skilled in Python, SQL & Big Data"],
  },
 
  about: {
    introduction: [
        "I am a Master of Science in Computer Science graduate with two years of professional experience in data engineering and mainframe technologies. My background at Infosys involved developing and maintaining large-scale banking systems, where I honed my skills in batch processing, ETL optimization, and production support.",
        "My expertise lies in Python, SQL, and big data technologies like Apache Spark and Hadoop, along with cloud platforms like AWS. I have a proven ability to build scalable data pipelines, transform complex datasets into actionable insights, and develop predictive models to solve real-world problems.",
        "I am passionate about leveraging data to drive impactful decisions and am actively seeking a full-time position in Data Science or Data Engineering where I can contribute my analytical and technical skills.",
        "As a former Project Lead and coordinator for student organizations, I have strong leadership and collaborative abilities, with experience managing teams and driving projects to successful completion."
    ],
 
    education: [
      { year: "2023-2025", degree: "MS, Computer Science", institute: "University of North Texas", grade: "3.6/4.0 GPA", IconComponent: GraduationCap },
      { year: "2015-2019", degree: "B.Tech, Electrical & Electronics Engineering", institute: "Jawaharlal Nehru Technological University Ananthapur", grade: "8.45/10.0 CGPA", IconComponent: GraduationCap },
      { year: "2013-2015", degree: "Class XII (BIEAP)", institute: "Sri Chaitanya Junior College", grade: "92.4", IconComponent: School },
      { year: "2012-2013", degree: "Class X (BSEAP)", institute: "Government High School", grade: "9.0/10.0 GPA", IconComponent: School },
    ] 
    ,
    skills: [
      { category: "Programming", items: ["Python", "SQL", "COBOL", "Java", "Shell", "JavaScript"], IconComponent: Code },
      { category: "ML & Big Data", items: ["Apache Spark", "Hadoop", "Scikit-learn", "PyTorch", "TensorFlow", "AWS (EMR, S3, Glue)"], IconComponent: BrainCircuit },
      { category: "Databases", items: ["Oracle SQL", "MySQL", "MongoDB", "PostgreSQL", "DB2", "VSAM"], IconComponent: Database },
      { category: "Tools & Visualization", items: ["Power BI", "Tableau", "Git/GitHub", "JIRA", "Jenkins", "Airflow"], IconComponent: Wrench },
      { category: "Mainframe", items: ["JCL", "REXX", "TSO/ISPF", "Endevor", "CA7"], IconComponent: BriefcaseBusiness },
    ],
  },
 
  experience: [
    {
      title: 'Data Analyst Intern (Project Lead)',
      company: 'Excelerate',
      duration: 'Jun 2023 - Jul 2023',
      description: [
        'Led a 10-member team, defining analysis frameworks and visualization best practices for organizational datasets.',
        'Developed and automated data analysis pipelines using Python, improving pipeline performance by 25% and data consistency by 30%.',
        'Built and delivered performance dashboards with AI-driven insights using Power BI and Tableau for stakeholders.',
        'Implemented Git-based workflows to manage collaborative data science projects and improve team efficiency.'
      ],
    },
    {
      title: 'Systems Engineer',
      company: 'Infosys',
      duration: 'Jan 2021 - Aug 2023',
      description: [
        'Contributed to the TSB Bank project by developing and maintaining retail banking applications on IBM z/OS.',
        'Processed and validated large-scale financial datasets using Oracle SQL and mainframe batch processing, ensuring 99.9% job reliability.',
        'Diagnosed and resolved production and UAT batch abends, reducing issue resolution time by 20%.',
        'Optimized ETL jobs and stored procedures, which improved reporting and data processing efficiency by 15%.',
        'Created SOPs, KEDBs, and checklists for abend handling to streamline operations and knowledge transfer.'
      ],
    },
  ],
 
  projects: [
    {
      title: 'Distributed Flight Delay Analysis',
      description: 'Processed 700K+ American Airlines flight records using PySpark on Hadoop clusters to identify delay patterns. Built interactive dashboards using Power BI and D3.js to visualize trends.',
      techStack: ['PySpark', 'Hadoop', 'Hive', 'Power BI', 'D3.js', 'DAX'],
      link: 'https://github.com/Divy260' 
    },
    {
      title: 'Predictive Modeling for Personalized Library Services',
      description: 'Implemented a scalable ML pipeline on Spark (PySpark) to predict user-book interactions, achieving 82% model accuracy. Deployed on AWS EMR for parallelized model training.',
      techStack: ['PySpark', 'AWS EMR', 'Scikit-learn', 'Machine Learning'],
      link: 'https://github.com/Divy260'
    },
    {
      title: 'Real-Time Messaging Platform',
      description: 'Designed a full-stack messaging application with a normalized NoSQL schema in MongoDB. Engineered backend APIs in Node.js/Express.js to manage data integrity and role-based access.',
      techStack: ['MongoDB', 'Node.js', 'Express.js', 'NoSQL', 'API Design'],
      link: 'https://github.com/Divy260' 
    },
    {
      title: 'Batch Job Simulation with JCL and COBOL',
      description: 'Simulated a mainframe batch job environment on a local emulator. Wrote COBOL programs to transform data and implemented multi-step job flows with dependency logic and error handling.',
      techStack: ['COBOL', 'JCL', 'Mainframe', 'VS Code'],
      link: 'https://github.com/Divy260'
    },
  ],
 
  achievements: {
    scholastic: [
      'Certification: IBM Data Engineering',
      'Certification: Microsoft Power BI Data Analyst',
      'Certification: Advanced MySQL Topics',
      'Certification: Python for Data Science & AI',
      'Ranked in the top 10% during intensive training at Infosys.',
    ],
    managerial: [
      'Project Lead for a 10-member team during the Data Analyst Internship at Excelerate.',
      'Coordinator for the Bhakti Yoga Club at UNT, increasing participation by 50% in one semester.',
      'Organized weekly events for 30+ students, fostering community engagement and wellness.',
    ],
    other: [
      'Improved data processing efficiency by 15-25% through pipeline and ETL optimizations.',
      'Reduced data inconsistencies by 30% by developing automated cleaning scripts.',
      'Decreased issue resolution time by 20% in a production support environment.',
    ],
  },
 
  contactButtons: [
    { href: `https://www.linkedin.com/in/divya260/`, IconComponent: FaLinkedin, label: "LinkedIn", color: "text-teal-400", hover: "hover:bg-teal-700" },
    { href: `mailto:matavalam.divya2023@gmail.com`, IconComponent: Mail, label: "Email Me", color: "text-purple-400", hover: "hover:bg-purple-700" },
    { href: `https://wa.me/13143350600`, IconComponent: FaWhatsapp, label: "WhatsApp", color: "text-green-400", hover: "hover:bg-green-700" },
    { href: `https://github.com/Divy260`, IconComponent: FaGithub, label: "GitHub", color: "text-white", hover: "hover:bg-gray-700" },
  ]
};