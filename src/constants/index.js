import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  sabi,
  rideapp,
  // starbucks,
  // ilml,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tokenberg,
  trollbasket,
  tictactoe,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Frontend Architect",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Sabi",
    icon: sabi,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Led the development of a responsive and user-friendly web application using modern frontend technologies such as HTML5, CSS3, and JavaScript framework, React.js.",
      "Implemented robust and scalable frontend architecture, following best practices and design patterns to ensure maintainability and extensibility of the codebase.",
      "Collaborated closely with designers, product managers, and backend engineers to translate wireframes and user stories into pixel-perfect, interactive UI components.",
      "Optimized website performance by conducting code reviews, identifying and resolving performance bottlenecks, and implementing efficient caching strategies.",
      // "Integrated RESTful APIs and GraphQL endpoints to fetch and display dynamic data, ensuring seamless communication between the frontend and backend systems"
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Sabi",
    icon: sabi,
    iconBg: "#E6DEDD",
    date: "March 2022 - Sept 2022",
    points: [
      "Developed cross-platform mobile applications using React Native framework.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented new features and functionality, ensuring compatibility across various devices and operating systems.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Sabi",
    icon: sabi,
    iconBg: "#383E56",
    date: "Jun 2021 - April 2022",
    points: [
      "Implemented a new look design for the Sabi Admin application, App wide.", 
      'Implemented App tour for the "Buy Now", "Store Features" and New "Wallet" features by designing one reusable component that allows for DRY (Do not Repeat Yourself) concept', 
      // "Participated in daily scrum meetings, sprint planning, code reviews",
      // "Conducted unit testing and debugging activities to ensure software quality and functionality.",
      "Translate designs & wireframes into high-quality code following React.js workflows", 
      "Redesigned existing modules and enabled integration and styling of third-party packages like toastify,react-modern-calendar-datepicker, etc."
    ],
  },
  {
    title: "Frontend developer Intern",
    company_name: "Rideapp",
    icon: rideapp,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - May 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Business Analyst",
  //   company_name: "INFORMATIONLIFECYCLE MANAGEMENT LIMITED",
  //   icon: ilml,
  //   iconBg: "#383E56",
  //   date: "July 2019 - Aug 2020",
  //   points: [
  //     "Analyzed client requirements and objectives and determine how software can best meet client’s requirements and objectives",
  //     "Documentation and Fit-Gap analysis", 
  //     "Participated in Implementation and deployment of Proposed Solutions for Agency Requirements in D365 and customizations",
  //     "Conduct Meetings and Participated in Performing data migration activities",
  //     "Created and maintained business, project, and technical documentation"
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Bernard is very efficient at what he does, he helped to optimize my law firm’s website and aided digital presence",
    name: "George Etokakpan",
    designation: "Estate Planning Officer",
    company: "Stanbic IBTC",
    image: "https://media.licdn.com/dms/image/C4E03AQH3Qr1Tn92bBw/profile-displayphoto-shrink_400_400/0/1600325120299?e=1691020800&v=beta&t=gY0fDdRtUDx5Nfw0rwbAZ4U2OPTSb5pfsFRib6bez8w",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bern proved me wrong.",
    name: "Asimi Olufisayo",
    designation: "Legal and Compliance Officer",
    company: "Landmark Africa",
    image: "https://media.licdn.com/dms/image/C4E03AQH92tNzDMNtzw/profile-displayphoto-shrink_400_400/0/1618590314884?e=1691020800&v=beta&t=gnHg-3sV2JH0R-DOyQRLjQCW5S25SmqN1S1Ruu0BBuc",
  },
  {
    testimonial:
      "After Bernard optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Dolapo Atere",
    designation: "Tax Consultant",
    company: "KPMG",
    image: "https://media.licdn.com/dms/image/D4E03AQHAwbNaBSyJ6w/profile-displayphoto-shrink_400_400/0/1681284550308?e=1691020800&v=beta&t=1nBITfbTS_VqMEB0iZNAH_gtOfRCGs-BvWB9Xukba9Y",
  },
  
];

const projects = [
  {
    name: "TokenBerg",
    description:
      "The platform is a web-based tool that empowers users to explore cryptocurrencies, analyze chart trends for each currency, keep track of exchanges, and stay updated on the latest crypto news trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      }
    ],
    image: tokenberg,
    source_code_link: "https://github.com/O-BERNARDOFOEGBU/TokenBerg",
  },
  {
    name: "TrollBasket",
    description:
      "A simple Progressive Web Application (PWA) that enables seamless shopping, allows users browse through product collection, effortlessly add items to their cart, and easily adjust quantities to meet their needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: trollbasket,
    source_code_link: "https://github.com/O-BERNARDOFOEGBU/TrollBasket",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A simple Web Application, that allows the user Indulge in the delightful world of tic-tac-toe on a user-friendly platform, offering the opportunity to engage in thrilling matches against a worthy opponent – yourself! ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/O-BERNARDOFOEGBU/tic-tac-toe",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
