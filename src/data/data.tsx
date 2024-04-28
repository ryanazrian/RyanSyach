import {
  // AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  // SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Ryan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I have a strong interest in <strong className="text-stone-100"> cybersecurity, software engineering, and artificial intelligence</strong>. 
      I obtained an <strong className="text-stone-100">MSc in Cybersecurity and AI</strong> from the University of Sheffield, UK. My final dissertation was in Machine Learning, Digital Image Processing, and Computer Vision.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I have experience working as a <strong className="text-stone-100"> Mobile Software Engineer </strong> for an education-technology startup, where I focused on making the learning process more engaging.
      </p>
    </>
  ),
  actions: [
    {
      // href: '/assets/resume.pdf',
      href: 'https://drive.google.com/file/d/1C01zLRAJxKBGPnQD3sfeCp-pFiCZmA1c/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have a strong interest in cybersecurity, software engineering, and artificial intelligence. During my time in college, I developed combined AI and image processing applications. I obtained an MSc in Cybersecurity and AI from the University of Sheffield, UK. My final dissertation was in Machine Learning, Digital Image Processing, and Computer Vision. The MSc programme was fully funded by LPDP.
  In addition, I have experience working as a Mobile Application Engineer for an education-technology startup, where I focused on making the learning process more engaging. I am always eager to learn and improve my skills.`,
  aboutItems: [
    {label: 'Location', text: 'Jakarta, Indonesia', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesian', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Indonesian',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },

    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React.js',
        level: 7,
      },
      {
        name: 'Electron',
        level: 7,
      },
      {
        name: 'Laravel',
        level: 6,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Android',
        level: 8,
      },
      {
        name: 'XCode',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Swift',
        level: 5,
      },
      {
        name: 'Obj C',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2023',
    location: 'University of Sheffield',
    title: 'MSc in Cybersecurity and Artificial Intelligence',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'June 2019',
    location: 'Bogor Agricultural University',
    title: 'BSc in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2019 - June 2022',
    location: 'PT Pahami Cipta Edukasi (Pahamify) - Bogor, Indonesia',
    title: 'Mobile Software Engineer',
    content: (
      <>
      <ul>
        <li>•	Building mobile apps using React Native both for Android and IOS.</li>
        <li>•	Building desktop apps using React JS and wrapped by Electron.</li>
        <li>•	Building Skillify a professional learning platform using ReactJS.</li>

        <li>•	Using GraphQL to communicate data from the server to mobile and desktop apps.</li>
        <li>•	Implementing Redux for react state management.</li>
        <li>•	Apple Fairplay for Digital Right Management to encrypt videos.</li>
        <li>•	Implement IOS core data for downloaded video metadata management.</li>

      </ul>
      </>
      
    ),
  },
  {
    date: 'September 2018 - May 2019',
    location: 'Bogor Agricultural University - Bogor, Indonesia',
    title: 'Laboratory Teaching Assistant',
    content: (
      <>
      <ul>
        <li>•	Assisting students in laboratory sessions on Information Systems, Object Oriented System Development, Software Engineering and Digital Image Processing.</li>
        <li>•	Delivering the module materials and assisting them to do a lab exercise.</li>
      </ul>
      </>
    ),
  },
  {
    date: 'July 2018 - September 2018',
    location: 'Asosiasi Asuransi Jiwa Indonesia (AAJI) - Jakarta, Indonesia',
    title: 'Software Engineer Intern',
    content: (
      <>
      <ul>
        <li>•	Developing an inventory system for internal management.</li>
        <li>•	Developed using Visual Studio 2017.</li>
      </ul>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please reach out via the platform that you find most convenient.',
  items: [
    {
      type: ContactType.Email,
      text: 'azrian.ryan@gmail.com',
      href: 'mailto:azrian.ryan@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jakarta, Indonesia',
      href: '#',
    },
    {
      type: ContactType.Instagram,
      text: '@ryanazrian',
      href: 'https://www.instagram.com/ryanazrian/',
    },
    {
      type: ContactType.Github,
      text: 'ryanazrian',
      href: 'https://github.com/ryanazrian',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ryanazrian'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ryanazrian/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ryanazrian'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Ryan_azrian'},
];
