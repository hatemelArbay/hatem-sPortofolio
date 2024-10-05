import {
  frontend,
  backend,
  ux,
  javascript,
  html,
  css,
  reactjs,
  express,
  tailwind,
  nodejs,
  mongodb,
  sql,
  java,
  python,
  cpp,
  flutter,
  dotnet,
  php,
  selinum,
  
sobhySaied,
arabytour,
oneHealth,
BurgularSystem,
beqala,
elGounaLuxury,


  coverhunt,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: frontend,
  },
  {
    title: 'Full Stack ',
    icon: backend,
  },
  {
    title: 'Application Developer',
    icon: ux,
  },

];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
    {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Express JS',
    icon: express,
  },

  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Mongo DB',
    icon: mongodb,
  },
  {
    name: 'sql',
    icon: sql,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'cpp',
    icon: cpp,
  },
  {
    name: 'flutter',
    icon: flutter,
  },
  {
    name: 'dotnet',
    icon: dotnet,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'selimun',
    icon: selinum,
  },

];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'microsystems',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'JUL 2024 - OCT 2024',
  },
  {
    title: 'Full-stack (Freelance)',
    company_name: 'ElGonaLuxuryRentals',
    icon: kelhel,
    iconBg: '#333333',
    date: 'AUG 2024 - Oct 2024',
  },
  {
    title: 'Front-End (Freelance)',
    company_name: 'Sobhy Saied',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2023 - Oct 2023',
  },
  {
    title: 'Full-stack (Freelance)',
    company_name: 'Araby Tour',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2024 - Mar 2024',
  },

  {
    title: 'Full-Stack (Intern)',
    company_name: 'OGtech',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jul 2023 - AUG 2023',
  },
  
];

const projects = [
  {
    id: 'project-6',
    name: 'GonaLuxury',
    description:
      'I developed the El Gouna Luxury Real Estate website using the MERN stack (MongoDB, Express, React, Node.js). The platform enables users to book appointments for renting or purchasing properties in El Gouna and includes an admin dashboard for efficient management.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: elGounaLuxury,
    repo: 'https://github.com/hatemelArbay/ElgonaLuxaryFullStack/tree/main',
    demo: 'https://luxuryelgounarealestate.com/',
  },
  {
    id: 'project-1',
    name: 'Sobhy Saied',
    description: 'I developed a dynamic and user-friendly website for Sobhy Said Company, highlighting their extensive range of products and services. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: sobhySaied,
    repo: 'https://github.com/hatemelArbay/sobhySaidFinalVersion',
    demo: 'https://hatemelarbay.github.io/sobhySaidFinalVersion/',
  },
  {
    id: 'project-2',
    name: 'Araby Tour',
    description:
      'I designed and developed the Araby Tour website for the Araby Tour Company, providing an engaging and seamless experience for travelers. The site features detailed tour packages, stunning destination galleries, and easy booking options.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: arabytour,
    repo: 'https://github.com/hatemelArbay/arabytour',
    demo: 'https://hatemelarbay.github.io/arabytour/',
  },
  {
    id: 'project-3',
    name: 'One Health',
    description: 'The Clinic Management System is a comprehensive web application designed to streamline clinic operations and enhance patient experience. It provides essential functionalities for both patients and doctors, integrating various technologies to improve efficiency and security.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: oneHealth,
    repo: 'https://github.com/hatemelArbay/OneHealth/tree/master',
    demo: 'https://vimeo.com/960485383?share=copy',
  },
  {
    id: 'project-4',
    name: 'Burgular system',
    description: `This Java-based burglar alarm system employs multi-threading to continuously monitor for intrusions and power state issues. It alerts the police if an intruder is detected and automatically calls a technician for any power problems, ensuring both security and operational reliability.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: BurgularSystem,
    repo: 'https://github.com/hatemelArbay/burgularAlarmSystem/tree/main',
    demo: 'https://vimeo.com/960578881?share=copy',
  },
  {
    id: 'project-5',
    name: 'The Beqala',
    description:
      'The Beqala is an e-commerce website designed for a supermarket, developed using PHP. It allows users to browse products, add items to their cart, and complete purchases online.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: beqala,
    repo: 'https://github.com/hatemelArbay/theBeqala',
    demo: 'https://vimeo.com/961284411?share=copy',
  },
  
  



  

  
  
];
const projects2=[

  {
    id: 'project-6',
    name: 'The Beqala',
    description:
      'The Beqala is an e-commerce website designed for a supermarket, developed using PHP. It allows users to browse products, add items to their cart, and complete purchases online.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: beqala,
    repo: 'https://github.com/hatemelArbay/theBeqala',
    demo: 'https://vimeo.com/961284411?share=copy',
  },
];

export { services, technologies, experiences, projects,projects2 };
