// ============================================================
// portfolioData.js
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Dharmendra Vishwakarma",
  firstName: "Dharmendra Vishwakarma",
  brandName: "Dharmendra Vishwakarma", // shown in the preloader, navbar and footer
  title: "Java Full-Stack Developer",
  location: "Ghazipur, India",
  phone: "",
  emails: {
    primary: "dharmendra07393@gmail.com",
    secondary: "",
  },
  summary: "MCA graduate building full-stack applications with Java, Spring Boot, React, and modern databases.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/dharm7393",
  linkedin: "https://www.linkedin.com/in/dharmendra65/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Dharmendra Vishwakarma",
  titleHighlight: "Java Full-Stack Developer",
  subtitle: "MCA graduate skilled in building robust full-stack applications with Java, Spring Boot, React, and MySQL.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:dharmendra07393@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Dharmendra Vishwakarma</span>, a passionate Java Full-Stack Developer based in Ghazipur, India. I specialize in building end-to-end web applications with Java, Spring Boot, React, and relational databases, sharpening my skills through the placement training program at TAP Academy. My core strength is quickly adapting to any technical environment and engineering dependable, scalable software solutions.`,
  techStack: ["Java", "Spring Boot", "React", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured engineering approach from system architecture to production deployment.",
  cards: [
    { number: "01", title: "Research", text: "Analyze requirements, study system workflows, and design clean relational database schemas." },
    { number: "02", title: "Design", text: "Architect modular RESTful API endpoints and design intuitive, responsive user interfaces." },
    { number: "03", title: "Develop", text: "Write clean backend services in Spring Boot and build dynamic, component-driven UIs in React." },
    { number: "04", title: "Deploy", text: "Test, optimize, and deploy applications to ensure reliability, security, and performance." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML5 & CSS3" }, { name: "React" }, { name: "Tailwind CSS" }, { name: "Bootstrap" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git & GitHub" }, { name: "VS Code" }, { name: "Eclipse" }, { name: "Postman" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full-Stack Developer Intern",
    duration: "6 Months",
    skills: [
      "OOPs & MVC Architecture",
      "RESTful API Development",
      "Relational Database Operations",
      "Reusable React Component Design",
      "Version Control & Collaboration",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "React.js",
      "JavaScript",
      "MySQL",
      "Git",
    ],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborate seamlessly across cross-functional teams with effective version control and Agile practices." },
  { name: "Problem Solving", icon: "🧩", desc: "Break down complex business logic into maintainable, modular, and performant code." },
  { name: "Analytical Thinking", icon: "📈", desc: "Design normalized database structures, optimize queries, and architect clean MVC layers." },
  { name: "Communication", icon: "💬", desc: "Articulate technical ideas clearly, document API endpoints, and collaborate with clarity." },
];

export const projects = [
  {
    id: "ecommerce-inventory-portal",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Full-Stack E-Commerce & Inventory Management Portal",
    description: "End-to-end web application with catalog browsing, shopping cart, order placement, and inventory tracking powered by secure Spring Boot REST APIs and React.",
    techTags: ["Java", "Spring Boot", "Hibernate", "React.js", "MySQL", "REST APIs"],
    links: { github: "https://github.com/dharm7393", demo: "" },
    isFlagship: true,
  },
  {
    id: "online-food-delivery-app",
    number: "02",
    badge: null,
    title: "Online Food Delivery App",
    description: "Full-stack food ordering platform featuring user authentication, food menu management, dynamic cart updates, and order processing.",
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    links: { github: "https://github.com/dharm7393", demo: "" },
    isFlagship: false,
  },
  {
    id: "interactive-game-tic-tac-toe",
    number: "03",
    badge: null,
    title: "Interactive Game Application (Tic-Tac-Toe)",
    description: "Browser-based two-player game featuring dynamic DOM manipulation, game state management, turn tracking, and draw-detection logic.",
    techTags: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
    links: { github: "https://github.com/dharm7393", demo: "https://dharm7393.github.io/Tic-Tac-Toe-Game/" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/dharmendra65/",
};

export const education = {
  degree: "MCA (Computer Science)",
  institution: "School of Management Sciences, Varanasi",
  cgpa: "2022 - 2025",
  graduation: "2025",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full-Stack Developer", "Java · Spring Boot · React · MySQL", "Building Scalable Web Applications"],
  credential: "MCA (Computer Science)",
  copyright: `© ${new Date().getFullYear()} Dharmendra Vishwakarma | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

