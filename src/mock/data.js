import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Johnathan Tang', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Johnathan Tang',
  subtitle: 'Welcome to my website!',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello! My name is Johnathan and I\'m a computer engineering graduate from the University of California, Irvine. I have 4 years of experience\
  in the Information Technology industry, primarily in a Desktop Support Analyst role.',
  paragraphTwo: 'I also completed 2 internship programs with Arup as a Digital Technology intern. As an intern, I was involved\
  with the Long Island Railroad Expansion project as it pertains to finding sustainable, digital solutions. Our intern team\
   collaborated with our business advisors to propose a public-private partnership between the MTA and the private sector. I also \
   coordinated with the software engineer team to design, develop, and test back-end data for a digital dashboard.',
  paragraphThree: 'In addition to my professional experience, I have a solid foundation for programming and full-stack development as I have \
  completed projects in Python, C, C++, Java, Javascript, and SQL.',
  resume:'/Resume.pdf', // if no resume, the button will not show up
};


// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rorrim.jpg',
    title: 'RORRIM: Health-Centric Smart Mirror',
    subtitle: '2021 Dean\'s Choice Award',
    info: 'For our senior design project, our team designed, developed, and constructed a health-centric smart mirror that incorporates smart devices and machine learning \
    to promote a healthy lifestyle.',
    info2: 'My responsibility included backend data management, migration, and synchronization using Fitbit API and Python.',
    url: 'https://escholarship.org/uc/item/7ps471h7',
    repo: 'https://github.com/JohnathanTang/RORRIM-Health-Centric-Smart-Mirror', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'irrigation.jpg',
    title: 'Atmosphere Monitoring System',
    info: 'This project includes a Raspberry Pi based IoT device that aims to mimic a weather monitoring system. This included the use of a DHT-11 sensor \
    to check local temperature and humidity once per minute for 24 hours. The data used in this system will decide how much water is necessary to irrigate \
    and toggle a virtual sprinkler system.',
    info2: 'The system will simulate irrigation once per hour and turn back off after the amount of time needed to deliver the necessary amount of water.',
    url: '/113_Project_Report.pdf',
    repo: 'https://github.com/JohnathanTang/EECS113-Processor-Hardware-Software-Interfaces/tree/main/113_FinalProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chess.jpg',
    title: 'ZotChess',
    info: '',
    info2: '',
    url: '/chess.pdf',
    repo: 'https://github.com/JohnathanTang/EECS-22-22L-Software-Engineering-in-C/tree/main/ZotChess', // if no repo, the button will not show up
  }, 
];

// CONTACT DATA
export const contactData = {
  cta: 'johnathantang1996@gmail.com',
  btn: 'Email',
  email: 'johnathantang1996@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/johnathanntang',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/j.tvng/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/johnathan-tang-452241173/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JohnathanTang',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
