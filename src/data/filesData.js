import { portfolioConfig } from '../config/portfolio';

export const portfolioFiles = [
  {
    id: "about.js",
    name: "about.js",
    path: "src/about.js",
    language: "javascript",
    icon: "js",
    folder: "src",
    previewType: "about",
    description: "Developer profile and introduction",
    code: `const developer = {
  name: "${portfolioConfig.developer.name}",
  role: "${portfolioConfig.developer.role}",
  company: "${portfolioConfig.developer.company}",
  experience: "${portfolioConfig.developer.experience}",
  education: "${portfolioConfig.developer.education}",
  location: "${portfolioConfig.developer.location}",
  focus: [
    "Creative UI Development",
    "Responsive Websites",
    "Interactive Web Experiences"
  ]
};

export default developer;
`
  },
  {
    id: "skills.js",
    name: "skills.js",
    path: "src/skills.js",
    language: "javascript",
    icon: "js",
    folder: "src",
    previewType: "skills",
    description: "Technical stack and libraries",
    code: `export const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "React Router",
    "Bootstrap 5",
    "Responsive Web Design"
  ],
  animationAndUI: [
    "GSAP",
    "ScrollTrigger",
    "Framer Motion",
    "Swiper",
    "Lenis smooth scrolling",
    "Parallax animations",
    "LightGallery"
  ],
  toolsAndIntegrations: [
    "Vite",
    "Git",
    "GitHub",
    "VS Code",
    "Google Tag Manager",
    "UTM tracking and lead form integrations"
  ],
  backendExposure: [
    "PHP",
    "MySQL",
    "PHPMailer"
  ]
};

export default skills;
`
  },
  {
    id: "experience.js",
    name: "experience.js",
    path: "src/experience.js",
    language: "javascript",
    icon: "js",
    folder: "src",
    previewType: "experience",
    description: "Work history and professional roles",
    code: `export const experience = {
  company: "${portfolioConfig.experience[0].company}",
  role: "${portfolioConfig.experience[0].role}",
  experience: "${portfolioConfig.experience[0].duration}",
  education: "${portfolioConfig.experience[0].education}",
  responsibilities: [
    "Developing responsive landing pages and websites.",
    "Building React applications using Vite.",
    "Implementing GSAP animations, interactive sliders, and smooth scrolling.",
    "Integrating enquiry forms and marketing tracking.",
    "Working with APIs, PHP-based lead integrations, and Google Tag Manager.",
    "Improving mobile responsiveness, user experience, and Frontend performance.",
    "Maintaining and updating real-estate project websites."
  ]
};

export default experience;
`
  },
  {
    id: "projects.js",
    name: "projects.js",
    path: "src/projects.js",
    language: "javascript",
    icon: "js",
    folder: "src",
    previewType: "projects",
    description: "Client and development work portfolio",
    code: `/**
 * Curated development projects by Shivam Kumar.
 * Examples from development work at Webzaa & client portals.
 */
export const projects = [
  {
    name: "Delta Realty",
    category: "Real Estate Portal",
    shortDescription: "Comprehensive web presence showcasing residential and commercial properties with interactive floor plans and lead capture.",
    technologies: ["React", "Vite", "GSAP", "CSS3", "GTM"],
    featured: true
  },
  {
    name: "Rustomjee Ozone Skye",
    category: "Luxury Residential",
    shortDescription: "Premium residential showcase with immersive visual galleries, amenity tours, and high-performance mobile responsiveness.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Swiper", "GSAP"],
    featured: true
  },
  {
    name: "Rustomjee Balmoral Golf Links",
    category: "Luxury Residential",
    shortDescription: "Ultra-luxury golf estate digital presentation featuring smooth transitions, brochure download flows, and inquiry handling.",
    technologies: ["React", "CSS3", "GSAP", "Lenis", "LightGallery"],
    featured: true
  },
  {
    name: "Hiranandani Belicia",
    category: "Luxury Residential",
    shortDescription: "Signature architectural development landing page with interactive unit configurations and high-speed asset delivery.",
    technologies: ["React", "Vite", "Responsive CSS", "GSAP"],
    featured: true
  },
  {
    name: "Puravankara Multiproject",
    category: "Multi-Property Portal",
    shortDescription: "Multi-city real estate portfolio showcasing diverse property developments, filterable listings, and campaign tracking.",
    technologies: ["JavaScript", "React", "CSS Grid", "GTM Tracking"],
    featured: false
  },
  {
    name: "Karjat Futura",
    category: "Nature & Weekend Homes",
    shortDescription: "Eco-centric weekend home community web experience with scenic parallax viewports and localized lead capture.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Parallax", "PHP"],
    featured: false
  },
  {
    name: "Delta Meadows",
    category: "Residential Township",
    shortDescription: "Township portal highlighting master layouts, connectivity timelines, and integrated virtual site walk-throughs.",
    technologies: ["React", "Vite", "GSAP", "CSS3"],
    featured: false
  },
  {
    name: "Delta Vrindavan",
    category: "Residential Living",
    shortDescription: "Serene living community microsite featuring interactive amenities showcase, floor diagrams, and direct inquiry integration.",
    technologies: ["JavaScript", "CSS3", "Swiper", "Bootstrap 5"],
    featured: false
  },
  {
    name: "Delta Rio",
    category: "Riverfront Residences",
    shortDescription: "Riverfront lifestyle property landing page engineered for rapid mobile loading and intuitive appointment scheduling.",
    technologies: ["React", "Vite", "GSAP", "PHPMailer"],
    featured: false
  },
  {
    name: "Delta Orion",
    category: "Modern Commercial & Living",
    shortDescription: "Contemporary urban development landing page presenting commercial retail zones and residential tower specifications.",
    technologies: ["HTML5", "CSS3", "JavaScript", "ScrollTrigger"],
    featured: false
  },
  {
    name: "Arvind SmartSpaces",
    category: "Corporate Real Estate",
    shortDescription: "Corporate developer web property with multi-section narrative, compliance information, and interactive project locator.",
    technologies: ["React", "JavaScript", "CSS3", "GTM"],
    featured: true
  },
  {
    name: "Mountain Bliss",
    category: "Hillside Villas",
    shortDescription: "Hillside resort villa presentation with panoramic galleries, climate highlights, and private consultation request forms.",
    technologies: ["HTML5", "CSS3", "LightGallery", "GSAP"],
    featured: false
  },
  {
    name: "Vaishno Sky",
    category: "High-Rise Living",
    shortDescription: "High-rise tower landing page offering sky-deck visualization, floor plans, and rapid response form submission.",
    technologies: ["React", "Vite", "CSS Modules", "Swiper"],
    featured: false
  },
  {
    name: "Arkade Ascend",
    category: "Urban Residential",
    shortDescription: "Modern residential high-rise portal with construction progress logs, payment milestone guides, and marketing telemetry.",
    technologies: ["JavaScript", "HTML5", "CSS3", "GSAP", "GTM"],
    featured: false
  }
];

export default projects;
`
  },
  {
    id: "achievements.json",
    name: "achievements.json",
    path: "src/achievements.json",
    language: "json",
    icon: "json",
    folder: "src",
    previewType: "achievements",
    description: "Verified educational and professional milestones",
    code: `{
  "education": {
    "degree": "Bachelor of Computer Applications (BCA)",
    "year": 2024,
    "status": "Completed"
  },
  "career": {
    "role": "Frontend Developer",
    "company": "Webzaa",
    "experience": "1+ year"
  },
  "verifiedMilestones": [
    "BCA completed in 2024",
    "Frontend Developer at Webzaa",
    "Experience building multiple client websites and landing pages",
    "Experience with React and animation-driven web experiences"
  ]
}
`
  },
  {
    id: "contact.js",
    name: "contact.js",
    path: "src/contact.js",
    language: "javascript",
    icon: "js",
    folder: "src",
    previewType: "contact",
    description: "Contact channels and message handler",
    code: `import { portfolioConfig } from './config/portfolio.js';

export const contactDetails = {
  email: "${portfolioConfig.developer.email}",
  location: "${portfolioConfig.developer.location}",
  github: "${portfolioConfig.developer.github}",
  linkedin: "${portfolioConfig.developer.linkedin}",
  whatsapp: "${portfolioConfig.developer.whatsapp}",
  status: "Available for Frontend Development Opportunities"
};

/**
 * Sends enquiry from contact form.
 * Note: Requires an email service or backend API endpoint to deliver messages.
 */
export async function submitEnquiry(formData) {
  console.log("Submitting enquiry payload:", formData);
  // Backend endpoint required for email dispatch.
  return {
    status: 200,
    message: "Enquiry logged. Please reach out directly via email or LinkedIn."
  };
}

export default contactDetails;
`
  },
  {
    id: "terminal.js",
    name: "terminal.js",
    path: "src/terminal.js",
    language: "javascript",
    icon: "js",
    folder: "src",
    previewType: "terminal",
    description: "Interactive shell command registry",
    code: `/**
 * Integrated VS Code Shell Commands
 * Type commands below in the bottom terminal panel.
 */
export const terminalCommands = {
  help: "Displays all available shell commands",
  about: "Prints summary biography and opens about.js",
  skills: "Lists technical proficiencies and opens skills.js",
  experience: "Shows employment history at Webzaa and opens experience.js",
  projects: "Lists featured web projects and opens projects.js",
  contact: "Shows email, social channels, and opens contact.js",
  github: "Opens GitHub profile or displays configuration instructions",
  clear: "Clears the active terminal output screen",
  whoami: "Prints current user and system session info",
  ls: "Lists workspace directories and files",
  date: "Displays current timestamp and timezone",
  cat: "Usage: cat <filename> - Prints file contents"
};
`
  },
  {
    id: "package.json",
    name: "package.json",
    path: "package.json",
    language: "json",
    icon: "json",
    folder: "root",
    previewType: "package",
    description: "Project metadata and dependencies",
    code: `{
  "name": "shivam-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.15.0",
    "lucide-react": "^1.61.0",
    "prismjs": "^1.30.0",
    "react": "^19.3.1",
    "react-dom": "^19.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.1.2",
    "vite": "^8.3.4"
  }
}
`
  },
  {
    id: "README.md",
    name: "README.md",
    path: "README.md",
    language: "markdown",
    icon: "md",
    folder: "root",
    previewType: "readme",
    description: "Portfolio documentation and guide",
    code: `# Shivam Kumar — Frontend Developer

> Interactive Developer Portfolio crafted as an authentic Visual Studio Code workspace.

## 👨‍💻 Profile Overview
- **Name**: Shivam Kumar
- **Role**: Frontend Developer
- **Company**: Webzaa
- **Experience**: 1+ Year
- **Education**: Bachelor of Computer Applications (BCA), 2024
- **Location**: Mumbai, India

## 🛠️ Core Technology Stack
- **Languages**: HTML5, CSS3, JavaScript (ES6+), PHP
- **Frameworks & Tooling**: React, Vite, React Router, Bootstrap 5
- **Animation & Motion**: GSAP, ScrollTrigger, Framer Motion, Swiper, Lenis
- **Marketing & Tracking**: Google Tag Manager, UTM parameters, lead form integrations

## 📂 Navigation Tips
1. Use the **Explorer Sidebar** to open files in editor tabs.
2. Toggle between **Code View** and **Rendered Preview** with the top-right editor toggle.
3. Use **Ctrl+P** or **Ctrl+Shift+P** to open the Command Palette.
4. Open the bottom **Terminal** and type \`help\` for interactive commands.
`
  },
  {
    id: "favicon.svg",
    name: "favicon.svg",
    path: "public/favicon.svg",
    language: "xml",
    icon: "svg",
    folder: "public",
    previewType: "svg",
    description: "Visual Studio Code vector logo",
    code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <path d="M72.5 9.2L96 20.8V79.2L72.5 90.8L44.8 65.5L24.2 81.3L4 66.2V33.8L24.2 18.7L44.8 34.5L72.5 9.2Z" fill="none"/>
  <path d="M72.5 9.2L96 20.8V79.2L72.5 90.8L46.2 66.8L72.5 49.8V9.2Z" fill="#0066B8"/>
  <path d="M72.5 9.2L46.2 33.2L24.2 18.7L4 33.8V66.2L24.2 81.3L46.2 66.8L72.5 90.8V72.2L36.8 50L72.5 27.8V9.2Z" fill="#007ACC"/>
  <path d="M4 66.2L24.2 81.3L46.2 66.8L36.8 50L4 66.2Z" fill="#1F8AD2"/>
  <path d="M4 33.8L24.2 18.7L46.2 33.2L36.8 50L4 33.8Z" fill="#0E639C"/>
  <path d="M96 20.8L72.5 9.2V90.8L96 79.2V20.8Z" fill="#007ACC"/>
</svg>
`
  }
];
