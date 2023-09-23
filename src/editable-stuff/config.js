// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Varun",
  middleName: "",
  lastName: "Shah",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/varunshah8797",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/varunshah09/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/varunshah.png"),
  imageSize: 375,
  message:
    " I'm a passionate software engineer with a Master of Science in Computer Science from California State University, Long Beach. My journey in the tech world began with an internship in January 2020, which quickly transitioned into a full-time Software Development Engineer role by May of the same year. My expertise spans across a variety of languages like Python, Java, and JavaScript, to name a few. I'm adept with frameworks such as Node.js, React.js, and Spring Boot. On the technology front, I've hands-on experience with Docker, Kubernetes, AWS, and more. Database management? You bet! I've worked with MySQL, PostgreSQL, and even NoSQL databases. Whether it's developing a robust backend system or crafting a responsive frontend, I bring my A-game to the table. Let's code the future together! ",
  resume: "../editable-stuff/resume.pdf",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "varunshah8797", 
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "varunshah2401@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Graduate Research Assistant',// Here Add Company Name
      company: 'California State University, Long Beach',
      companylogo: require('../assets/img/csulb.png'),
      date: ' Oct 2021 – May 2023',
      description: [
        {line: "Developed a multi-genre article classification model accessible via a RESTful API using python with AWS S3 as the data management service for 1000+ articles, achieving 90% accuracy."},
        {line: "Identified and engineered high-impact features from raw article data, boosting model performance by 15%."},
        {line: "Improved efficiency of pipeline deployments utilizing dynamic multi-processing, leading to a 30% reduction in process time."},
      ]
    },
    {
      role: 'Software Engineer',// Here Add Company Name
      company: 'Cloudoffis',
      companylogo: require('../assets/img/cloudoffis.jpg'),
      date: 'May 2020 – May 2021',
      description: [
        {line: "Improved efficiency of pipeline deployments utilizing dynamic multi-processing, leading to a 30% reduction in process time."},
        {line: "Constructed and managed scalable java back-end services, integrating robust SOA and REST APIs, enhancing system reliability."},
        {line: "Re-engineered a MySQL database for robust testing and real-time error tracking, significantly reducing redundancy and increasing data pipeline efficiency by 25%."},
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'Knowarth',
      companylogo: require('../assets/img/knowarth.png'),
      date: 'Jan 2020 – May 2020',
      description: [
        {line: "Developed a React web application leveraging advanced JavaScript and HTML to enhance user interactions."},
        {line: "Utilized AWS services such as EC2, S3, and DyanamoDB to build a scalable and robust infrastructure."},
        {line: "Administered HTTP web protocol using JavaScript in a cross functional approach, enhancing the stability and responsiveness of web applications."},
        {line: "Implemented Jenkins for continuous integration and continuous delivery (CI/CD), improving code quality by 40% and increasing deployment frequency by 27%."}
      ]
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
