import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePowerpoint, faFilePdf, faCertificate } from "@fortawesome/free-solid-svg-icons";
import fileInternshipPonit from "../../assets/6210110739-presentation-final.pdf";
import fileInternshipPDF from "../../assets/6210110739-Second-hand-phone-price-range-estimate-system.pdf";
import fileCertInternshipPDF from "../../assets/cert-intern.pdf"

export const data = [
  {
    date: "2023-2024",
    title: "Internship at CPF IT CENTER (AXONS)",
    // link: "https://github.com/mrAmjadChel",
    materials: [
      {
        type: faFilePowerpoint,
        link: fileInternshipPonit,
      },
      {
        type: faFilePdf,
        link: fileInternshipPDF,
      },
      {
        type: faCertificate,
        link: fileCertInternshipPDF,
      }
    ],
    descriptions: [
      "Second-hand phone price estimate system is a website for admin to evaluates the price of mobile phones. It will receive mobile phone information from the main website.",
      "Project: Create a chat system that can communicate to request additional product information in real time between the main website and the admin website.",
      "Create reusable components such as modal and card for displaying mobile phone information.",
    ],
    skills: [
      ["Next.js", "Tailwind", "TypeScript"],
      ["Node.js", "SQL"],
    ],
  },
];
