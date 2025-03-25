import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaShoppingCart, FaShieldAlt, FaServer, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,property,giz,
         florax, kings,blog1,blog2,blog3} from "./assets";
import { BiSupport } from "react-icons/bi";

        

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"IT Procurement & Sales",
    icon:<FaShoppingCart/>,
    description:` Get the latest computers, hardware, and accessories from trusted brands. We supply high-quality computers, laptops, and IT accessories from trusted global brands. From office setups to large-scale hardware supplies, we handle it all at competitive prices.
`,
  },
  {
    name:"Security & Cloud Services",
    icon:<FaShieldAlt/>,
    description:`Secure your data and operations with reliable cloud storage, automated backups, and enterprise-level security solutions. Access your business anywhere, anytime with confidence.

    `,
  },
  {
    name:"Technical Support",
    icon:<BiSupport/>,
    description:` Get fast, expert help when you need it. Our technical team is available to resolve hardware, software, and network issues, minimizing downtime for your business.`,
  },
  {
    name:"Infrastructure Management",
    icon:<FaServer/>,
    description:`We manage and optimize your IT infrastructure — servers, networks, and systems — so your business operates at peak performance, with reduced risks and costs.`,
  },
  {
    name:"Software & Web Solutions",
    icon:<FaLaptopCode/>,
    description:`Need a custom website, e-commerce platform, or business application? We develop tailored software and web solutions that elevate your brand and operations.`,
  },
  {
    name:"Training & Consultation",
    icon:<FaChalkboardTeacher/>,
    description:`We believe in empowering businesses and individuals with knowledge. Our IT training and consultations help your team stay current, skilled, and confident in technology use.`,
  },
]

export const teams = [
  {
    name:"Michael Nwachukwu",
    title:"IT Consultant",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"https://www.facebook.com/nwachukwu.michael.5076/"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"https://www.linkedin.com/in/michael-nwachukwu/"},
    ]
  },
  {
    name:"Christianah Omotayo",
    title:"Customer Relationship & Project Manager",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"https://www.facebook.com/omotayo.christy.9"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"https://www.linkedin.com/in/christianah-omotayo/"},
    ]
  },
  {
    name:"Daniel Ojiabor",
    title:"Finance & Human Relations",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"https://web.facebook.com/profile.php?id=100003891504471&sk=photos"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"Linkedin.com"},
    ]
  },
  {
    name:"Emmanuel Anya",
    title:"Technical Engineer",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"https://web.facebook.com/engranyaemmanuel.chukwuma"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"Linkedin.com"},
    ]
  },
]

export const projects = [
  {
    title:"Real Estate Web Application",
    image:property,
    description: `In partnership with Harmonics Technology, we developed the Property Mataaz real estate web application — a modern platform built to streamline property listings, intelligent search, and seamless management for buyers, sellers, and agents. The platform is fast, secure, and intuitive, positioning Property Mataaz as a trusted player in the digital real estate space.`,
    link: "https://www.propertymataaz.com/"
  },
  {
    title:"IT Procurement Services",
    image:giz,
    description: `At Zyon Technology Ventures, we are proud to support GIZ with the procurement of premium-quality IT products tailored for efficiency and excellence. We supply top-tier projectors, high-performance printers, essential accessories, and industry-leading software — all carefully sourced to meet the demands of dynamic, forward-thinking organizations.`,
    link: "https://www.giz.de/en/worldwide/1902.html"
  },
  {
    title:"Technical Support Services",
    image:florax,
    description: `Florax Pharmacy and Stores, Lekki Lagos, trusts us for prompt and reliable technical support — ensuring their systems, networks, and devices run smoothly for seamless daily operations.`,
    link: "https://www.instagram.com/floraxpharmacy/?hl=en"
  },
  {
    title:"ICT Training",
    image:kings,
    description: `We provide ICT training and consultation to Royal Kings School, equipping students and staff with essential digital skills and practical knowledge for today’s technology-driven world.`,
    link: "https://merc.royalkingsschools.com/"
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Mr. Stanley Samuel',
    review: ` Zyon Technology Ventures has made IT procurement remarkably easy for us at GIZ. Their commitment to quality, timely delivery, and customer satisfaction sets them apart.`,
    position: "Finance Officer, GIZ, Lagos"
  },
  {
    image:profile3,
    name:'Pharm. Chinonso',
    review: ` The technical support services from Zyon Technology Ventures keep our systems running without interruption. Their responsiveness and professionalism are exactly what every business needs.`,
    position: "Pharmacist, Florax Pharmacy."
  },
  {
    image:profile4,
    name:'Mr. Damilola Alabi',
    review: ` Zyon Technology Ventures impressed us with their ability to transform ideas into reliable digital solutions. Their creativity, speed, and precision are truly world-class.`,
    position: "Director, Fusion 87 Studio."
  },
  {
    image:profile5,
    name:'Mr. John Njezi',
    review: ` I highly recommend Zyon Technology Ventures. Their attention to detail, reliability, and consistent delivery make them a trusted technology partner.`,
    position: "Software Engineer, BlueChips Integrated Solutions."
  }

];


export const blogs = [
  {
      title:"How Technology Can Boost Your Business Efficiency",
      image:blog1,
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      link:"https://www.entrepreneur.com/",
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"Essential Tech Tools Every Growing Business Should Have",
      image:blog2,
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      link: "https://www.microsoft.com/en-us/microsoft-365/blog/",
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"How to Secure Your Business Data in the Cloud",
      image:blog3,
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      link: "https://www.csoonline.com/cloud-security/",
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value:"ztechventures@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+234 702 543 3248, 0818 868 0159",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value: `24, Otigba Street, Computer Village, Ikeja, Lagos.`,
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


