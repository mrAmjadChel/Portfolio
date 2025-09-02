import { faGithub } from "@fortawesome/free-brands-svg-icons";
import exp2021 from "../../assets/exp2021.jpg";
import exp2022 from "../../assets/exp2022-02.jpg";
import exp2023 from "../../assets/exp2023.png";
import exp2025 from "../../assets/exp2025.png";

export const data = [
  {
    date: "2025",
    title: "AI-Powered Note-Taking App (Noto)",
    link: "https://noto-gold.vercel.app/",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/mrAmjadChel/Noto",
      },
    ],
    descriptions: [
      "This project is an AI-powered note-taking application that helps users organize and summarize notes intelligently",
      "Developed a note-taking application with Next.js, Tailwind CSS, and shadcn/ui. Implemented Supabase Auth and Postgres database (via Prisma ORM) for data management",
      "Integrated OpenAI API to generate intelligent note summaries and insights.",
      "Since using the OpenAI API comes with extra costs, I’ve disabled the AI button for now. The feature is already implemented though."
    ],
    skills: [
      ["Next.js", "Tailwind CSS", "ShadCN UI"],
      ["Supabase Database (PostgreSQL)", "Prisma ORM"],
      ["Supabase Auth"],
      ["OpenAI API"],
    ],
    picture: exp2025,
  },
  {
    date: "2023",
    title: "BlogP Project",
    link: "https://blogp-lgiv.onrender.com",
    materials: [
      {
        type: faGithub,
        link: "https://github.com/mrAmjadChel/blogp-front-rework",
      },
      {
        type: faGithub,
        link: "https://github.com/mrAmjadChel/blogp-backend-rework",
      },
    ],
    descriptions: [
      "This project is a web application for managing and reading articles. Regular users can browse and read articles, while administrators have full access to create, edit, and delete content.",
      "The application features a search bar for quickly finding articles and a sort dropdown to organize content according to user preference.",
      "Additionally, the website is fully responsive, providing an optimal experience across devices of all sizes.",
      "If you want a try to create, update, or delete an article, password is: admin123"
    ],
    skills: [
      ["React", "Bootstrap", "CSS"],
      ["Node.js", "Express", "MongoDB"],
    ],
    picture: exp2023,
  },
  {
    date: "2022",
    title: "web application (web shop)",
    link: "https://sa09data.firebaseapp.com/",
    descriptions: [
      "This project was created to practice building layouts and mastering layout techniques. It is a simple web shop interface that showcases various products.",
    ],
    skills: [["HTML", "CSS", "JavaScript"]],
    picture: exp2022,
  },
  {
    date: "2021",
    title: "Register Form",
    link: "https://login-screen-1ce86.web.app./",
    descriptions: [
      "This project is a frontend interface for a user registration system. It was built as a learning exercise to strengthen my skills in HTML, CSS, and JavaScript.",
    ],
    skills: [["HTML", "CSS", "Javascript"]],
    picture: exp2021,
  },
];
