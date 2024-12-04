import FlappyBird from "./FlappyBird.webp";
import WanderLust from "./Wanderlust.png";
import WeatherApplication from "./WeatherApplication.png";
import Portfolio from "./Portfolio.png";

export const HERO_CONTENT = `Hi there! I'm Manish, an MCA student and passionate developer. I love creating innovative solutions and bringing visions to life. Let's build something amazing together!`;

export const ABOUT_TEXT = `As a Master's in Computer Applications (MCA) student, I thrive on transforming ideas into cutting-edge technological solutions. Specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), I excel in creating sleek and responsive user interfaces using Tailwind CSS and Bootstrap. My expertise extends to Java, Python, MySQL, and Data Structures and Algorithms (DSA), ensuring efficient and optimized code. I also leverage Redux for effective state management in React applications. Whether it's web development, backend systems, or database management, I'm ready to collaborate and bring your vision to life. When I'm not coding, I enjoy a good cup of tea.`;


export const PROJECTS = [
  {
    image: WanderLust,
    title: "Wanderlust",
    description:
      "Developed a full-stack web application named Wanderlust, a replica of Airbnb, Implemented user authentication and authorization features for secure access to the platform. Utilized MongoDB for database management, including data storage, retrieval, and manipulation. Integrated Cloudinary for efficient storage and management of property photos, ensuring seamless user experience.Utilized Express.js to create RESTful APIs for handling CRUD operations and managing HTTP requests",
    technologies: ["JavaScript","EJS templating", "Bootstrap", "MongoDB", "Express", "Node.js"],
  },
  {
    image: WeatherApplication,
    title: "Weather Application",
    description:
      "This is a weather application built using React with Vite, Material-UI, and vanilla CSS. It fetches weather data from the OpenWeatherMap API and displays it in a card component. It also includes a feature to handle cases where the searched location is not found.",
    technologies: ["React","Vite","Material-UI","Vanilla CSS","OpenWeatherMap API"],
  },
  {
    image: FlappyBird,
    title: "Flappy Bird",
    description:
      "In this game, the main objective of the player is to gain the maximum points by defending",
    technologies: ["Python","Pygame"],
  },
  {
    image: Portfolio,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Ward 7, Kaladhungi, Nainital, Uttarakhand, 263140 ",
  phoneNo: "+91-7037810154 ",
  email: "manishrwat15@gmail.com",
};
