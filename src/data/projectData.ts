export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
  modelPosition: [number, number, number];
  modelRotation: [number, number, number];
  modelScale: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LinkedIn Post Generator",
    description: "A web app to generate and schedule posts for LinkedIn.",
    technologies: ["Python", "Streamlit", "AI-Api"],
    link: "https://linkedinpost-generator-by-rushigurav.onrender.com/",
    github: "https://github.com/rushi-gurav/LinkedInPost_Generator",
    image: "https://mention.com/wp-content/uploads/2023/05/linkedin-post-generator.jpg",
    modelPosition: [0, 0, 0],
    modelRotation: [0, 0, 0],
    modelScale: 1,
  },
  {
    id: 2,
    title: "Weather App",
    description: "A real-time weather forecasting app displaying current weather conditions based on user location.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    link: "https://img.freepik.com/premium-vector/weather-climate-vocabulary-with-cute-cartoon-characters-kids_535862-1422.jpg",
    github: "https://github.com/your-repo/weather-app",
    image: "src/Images/WeatheApp.jpg",
    modelPosition: [1, 0, -2],
    modelRotation: [0, Math.PI / 6, 0],
    modelScale: 1.2
  },
  {
    id: 3,
    title: "Network Intrushion Detection System",
    description: "The UNSW-NB15 dataset is widely used for building Network Intrusion Detection Systems (NIDS). It contains normal traffic and 10 different attack types.",
    technologies: ["Python", "ML", "streamlit"],
    link: "https://nids-multiclass.streamlit.app/",
    github: "https://github.com/rushi-gurav/ML_ONGC_NIDS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1e0EKk02Podj6qNR1h9i0qdgSB-m6pX-yA&s",
    modelPosition: [0, 0, 0],
    modelRotation: [0, 0, 0],
    modelScale: 1,
  },
  {
    id: 4,
    title: "PathShala AI",
    description: "Pathshala AI Bot helps students ask questions, generate important questions, extract key topics, and analyze past papers. For professors, it manages attendance, answers student queries, generates question banks, and sends class timetable reminders—making academic tasks faster and smarter for all.",
    technologies: ["Nodejs", "Expressjs", "javascript"],
    link: "https://t.me/StudentProfessorBot",
    github: "https://github.com/rushi-gurav/PathshalaAI",
    image: "https://i.pinimg.com/736x/9d/b0/97/9db09703b127300c5b7e5e1f61d2e840.jpg",
    modelPosition: [0, 0, 0],
    modelRotation: [0, 0, 0],
    modelScale: 1,
  },
  {
    id: 5,
    title: "Backend Coder",
    description: "Backend Developer telegram bot with simple steps",
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    link: "https://t.me/RbackendCoderbot",
    github: "https://github.com/rushi-gurav/Backend_coder",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYbuwaV1DTujrsFp4X6QtpVugUhQLWAkvIQ&s",
    modelPosition: [0, 0, 0],
    modelRotation: [0, 0, 0],
    modelScale: 1,
  },
  {
    id: 6,
    title: "QuickHire",
description: "Built a full-stack web app with React.js, Node.js, Express.js, and MongoDB, featuring user authentication, profile management, and a searchable service directory",
    technologies: ["React", "Nodejs", "Expressjs", "Mongodb"],
    link: "#",
    github: "https://github.com/rushi-gurav/QuickHire",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYbuwaV1DTujrsFp4X6QtpVugUhQLWAkvIQ&s",
    modelPosition: [0, 0, 0],
    modelRotation: [0, 0, 0],
    modelScale: 1,
  },
  
];

export default projects;
