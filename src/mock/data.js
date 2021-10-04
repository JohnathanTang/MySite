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
    info: 'For our senior design project, our team designed, developed, and constructed a health-centric smart mirror that incorporates smart devices and machine learning \
    to promote a healthy lifestyle.',
    info2: 'My responsibility included backend data management, migration, and synchronization using Fitbit API and Python.',
    url: 'https://escholarship.org/uc/item/7ps471h7',
    repo: 'https://github.com/JohnathanTang/RORRIM-Health-Centric-Smart-Mirror', // if no repo, the button will not show up
  },
/*   {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
