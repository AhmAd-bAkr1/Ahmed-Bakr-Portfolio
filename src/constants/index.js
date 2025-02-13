import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  bootstrap,
  ToDoList,
  Cart,
  CRUD,
  Quiz
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
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  }
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
    name: "Bootstrap",
    icon: bootstrap, 
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "To DO List",
    company_name: "Freelance",
    icon: ToDoList,
    iconBg: "#383E56",
    date: "Sep 25, 2022 - Oct 1, 2022",
    points: [
      "It helps to remember daily tasks and accomplish them one by one and not to miss any task.",
      "The project is that you record your daily tasks.",
      "It saves the recorded tasks in local storage and is not deleted once you exit the site.",
      "You can mark on the completed task one by one or all at once.",
      "You can delete tasks one by one or delete all at once and clean them up.",
    ],
  },
  {
    title: "Memory Game",
    company_name: "Freelance",
    icon: ToDoList,
    iconBg: "#E6DEDD",
    date: "Nov 13, 2022 - Nov 18, 2022",
    points: [
      "This game helps to strengthen memory",
      "It helps to develop a memory of places and pictures that are similar to each other.",
      "There is a number of attempts, the lower the better.",
      "It helps to increase the speed of reactions because there is a specific time if you lose the game."
    ],
  },
  {
    title: "Quiz App",
    company_name: "Freelance",
    icon: ToDoList,
    iconBg: "#383E56",
    date: "Nov 19, 2022 - Nov 24, 2022",
    points: [
      "This application is a quick exam to be an example of what I can do in the applications of questions and exams.",
      "It means that it gives you questions, and each question has only a minute to answer, and you choose the correct answer, and if you make a mistake, then at the end of the questions there is a result that gives you how many of the questions you have chosen are correct, and it gives you a word expressing your performance."
    ],
  },
  {
    title: "Ecommerce",
    company_name: "Freelance",
    icon: ToDoList,
    iconBg: "#E6DEDD",
    date: "Jul 22, 2023 - Jul 27, 2023",
    points: [
      "This is an example of a store, and in it the products can be added to the basket and removed, and the number of one product can be increased, and all products can be removed at once, and there is a total that collects the price of all products and displays them.",
    ],
  },
  {
    title: "CRUD App",
    company_name: "Freelance",
    icon: ToDoList,
    iconBg: "#E6DEDD",
    date: "Jul 28, 2023 - Aug 4, 2023",
    points: [
      "This serves as the destination of the store owner to show you the products offered to the buyer.",
      "It shows you all products or each special category alone, as you choose.",
      "You can add the products in the list of adding a new product, and the added product will be shown to you on the products page with the added title and price, and you can modify and remove them.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CRUD APP",
    description:
      `It is the store owner’s interface, in which you add, delete, and modify products, and you can enter the products display page and view them.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ], 
    image: CRUD, 
    source_code_link: "https://ccrud-app.netlify.app/",
  },
  {
    name: "Ecommerce",
    description:
      "You can add products to the cart and delete them, and when you click on the same product more than once, the number of the product increases and you can calculate all the products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "json",
        color: "text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Cart,
    source_code_link: "https://cartapps.netlify.app/",
  },
  {
    name: "Quiz App",
    description:
      "It consists of questions that are presented to you and you choose the correct answer at a specific time, and in the end it shows you your own result and a word that expresses your performance.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: Quiz,
    source_code_link: "https://ahmad-bakr1.github.io/Html-Css-Javascript-Template-One/",
  },
];

export { services, technologies, experiences, testimonials, projects };
