import {
  typescript,
  reactjs,
  nextjs,
  tailwind,
  flutter,
  midnightlabs,
  dompixel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "ReactJS", icon: reactjs },
  { title: "NextJS", icon: nextjs },
  { title: "Typescript", icon: typescript },
  { title: "Flutter", icon: flutter },
];

export const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Dompixel",
    techs: "NextJS | Typescript | Sass | MantineUI | MaterialUI",
    icon: dompixel,
    iconBg: "#161329",
    date: "Aug 2022 - Today",
    points: [
      "I developed and maintained various high-impact web applications and landing pages, focusing on performance, responsiveness, and seamless API integrations. My work includes leading the frontend for a major giveaway platform, building sales and CRM tools for the dental sector, and contributing to an international project analyzing satellite imagery for agricultural insurance.",
      "In addition to coding, I took on technical leadership roles, mentoring developers, conducting code reviews, and shaping frontend architecture. I consistently collaborated in agile processes, ensuring quality delivery across diverse projects like recruitment platforms, academic systems, and e-commerce apps, always prioritizing usability, scalability, and robust integrations.",
    ],
  },
  {
    title: "Jr. Front-End Developer",
    company_name: "Midnight Labs",
    techs: "ReactJS | Typescript | Vite | Sass | TailwindCSS | Plasmo",
    icon: midnightlabs,
    iconBg: "#161329",
    date: "Apr 2020 - Aug 2022",
    points: [
      "Contributed to the development of landing pages and internal web applications at Midnight Labs, with a focus on performance, responsiveness, and SEO best practices. Participated in agile ceremonies and applied front-end principles like componentization and clean code to ensure maintainability.",
      "Supported the creation of a web-based raffle platform, handling UI architecture and API integrations to meet custom business rules and support high-traffic scenarios. Additionally, maintained and evolved a browser extension integrated with CRM and ERP systems, optimizing sales processes through DOM manipulation.",
    ],
  },
];

export const projects = [
  {
    name: "Natal Solidário",
    description:
      "I led the frontend development of a complete web app for the Natal Solidário project — a giveaway platform with customized rules, complex integrations with external APIs, and high traffic on the day of the event. I contributed from interface architecture to backend integration.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "Sass", color: "pink-text-gradient" },
      { name: "MantineUI", color: "yellow-text-gradient" },
      { name: "ApexCharts", color: "yellow-text-gradient" },
    ],
  },
  {
    name: "Pipe4erp",
    description:
      "A browser extension integrated with PiperunCRM and ERP systems, targeted at the dental sector. The project involved sales process automation and data collection directly via the DOM, ensuring a smooth and productive user experience.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "Sass", color: "pink-text-gradient" },
      { name: "Plasmo", color: "yellow-text-gradient" },
    ],
  },
  {
    name: "Mobydick CRM",
    description:
      "I contributed to the development of a custom CRM web application, designed to streamline and optimize internal customer relationship management processes. The system was built from the ground up to meet the specific needs of the client, offering features such as advanced customer segmentation, activity tracking, and automated follow-ups.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "Sass", color: "pink-text-gradient" },
      { name: "MantineUI", color: "yellow-text-gradient" },
    ],
  },
  {
    name: "Sistema Schuster",
    description:
      "A web app for external sales and trade shows for a major client in the dental industry, ensuring offline operation, responsiveness, and performance across a range of devices.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "Sass", color: "pink-text-gradient" },
      { name: "MantineUI", color: "yellow-text-gradient" },
    ],
  },
  {
    name: "AgromAI",
    description:
      "I worked alongside an international team on the Agromai project, focused on analyzing satellite imagery for agricultural insurance. I collaborated directly with developers from another country to deliver a robust technical solution for the agribusiness sector.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "Sass", color: "pink-text-gradient" },
      { name: "MaterialUI", color: "yellow-text-gradient" },
    ],
  },
  {
    name: "RH Alvo",
    description:
      "A recruitment platform with job dashboards, workflows, and candidate management, as well as a talent referral system and an e-commerce web app with a full purchase flow.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
  },
];
