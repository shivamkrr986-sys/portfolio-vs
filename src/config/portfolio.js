/**
 * Central Portfolio Configuration for Shivam Kumar — Frontend Developer
 * 
 * Customize your personal details, links, projects, and contact info here.
 */

export const portfolioConfig = {
  developer: {
    name: "Shivam Kumar",
    role: "Frontend Developer",
    company: "Webzaa",
    experience: "1+ year",
    education: "BCA, 2024",
    location: "Mumbai, India",
    email: "shivam.dev@example.com", // Replace with your primary email
    phone: "+91 9876543210", // Replace with your phone / WhatsApp number if desired
    github: "https://github.com/", // Add your GitHub profile URL here
    linkedin: "https://linkedin.com/in/", // Add your LinkedIn profile URL here
    whatsapp: "https://wa.me/919876543210", // Add your WhatsApp link here
    bio: "I'm a Frontend developer focused on building responsive, high-quality websites and interactive digital experiences. I work with modern Frontend technologies, animation libraries, and performance-focused development to turn designs into engaging web experiences.",
    focus: [
      "Creative UI Development",
      "Responsive Websites",
      "Interactive Web Experiences"
    ],
    summaryStats: [
      { label: "Experience", value: "1+ Year" },
      { label: "Company", value: "Webzaa" },
      { label: "Education", value: "BCA (2024)" },
      { label: "Location", value: "Mumbai, IN" }
    ]
  },

  skills: {
    Frontend: [
      { name: "HTML5", level: "Semantic structure & accessibility" },
      { name: "CSS3", level: "Flexbox, CSS Grid, Custom properties" },
      { name: "JavaScript", level: "ES6+, Async, DOM manipulation" },
      { name: "React", level: "Hooks, component architecture, state management" },
      { name: "React Router", level: "Client-side routing & navigation" },
      { name: "Bootstrap 5", level: "Responsive utility-first layouts" },
      { name: "Responsive Web Design", level: "Mobile-first, cross-browser compatibility" }
    ],
    animationAndUI: [
      { name: "GSAP", level: "Timelines, tweens, performant DOM animations" },
      { name: "ScrollTrigger", level: "Scroll-bound triggers & pin effects" },
      { name: "Framer Motion", level: "Spring physics & gesture interactions" },
      { name: "Swiper", level: "Touch-friendly responsive sliders & carousels" },
      { name: "Lenis", level: "Smooth inertial scrolling experiences" },
      { name: "Parallax animations", level: "Depth illusions and micro-interactions" },
      { name: "LightGallery", level: "Interactive media galleries & lightboxes" }
    ],
    toolsAndIntegrations: [
      { name: "Vite", level: "Blazing-fast Frontend tooling & bundles" },
      { name: "Git", level: "Version control & branch workflows" },
      { name: "GitHub", level: "Remote repository collaboration & CI/CD" },
      { name: "VS Code", level: "Primary development workspace & debugging" },
      { name: "Google Tag Manager", level: "Event tagging, triggers & analytics" },
      { name: "UTM Tracking & Lead Forms", level: "Campaign tracking & lead capture integrations" }
    ],
    backendExposure: [
      { name: "PHP", level: "Server-side request handling & endpoints" },
      { name: "MySQL", level: "Relational database querying & operations" },
      { name: "PHPMailer", level: "Transactional email & enquiry notifications" }
    ]
  },

  experience: [
    {
      company: "Webzaa",
      role: "Frontend Developer",
      duration: "1+ year",
      location: "Mumbai, India",
      education: "Bachelor of Computer Applications (BCA), completed in 2024",
      overview: "Frontend Developer building responsive real-estate web applications, high-converting landing pages, interactive GSAP animations, and integrated lead generation systems.",
      responsibilities: [
        "Developing responsive landing pages and websites.",
        "Building React applications using Vite.",
        "Implementing GSAP animations, interactive sliders, and smooth scrolling.",
        "Integrating enquiry forms and marketing tracking.",
        "Working with APIs, PHP-based lead integrations, and Google Tag Manager.",
        "Improving mobile responsiveness, user experience, and Frontend performance.",
        "Maintaining and updating real-estate project websites."
      ],
      technologies: ["React", "JavaScript", "GSAP", "Vite", "CSS3", "PHP", "GTM", "Bootstrap 5"]
    }
  ],

  achievements: [
    {
      id: "bca-2024",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "University Graduate",
      year: "2024",
      description: "Successfully completed degree program in Computer Applications, focusing on computer science foundations and software development."
    },
    {
      id: "webzaa-dev",
      title: "Frontend Developer at Webzaa",
      organization: "Webzaa",
      year: "1+ Year",
      description: "Delivering production websites, animated experiences, and real-estate portals for leading developers."
    },
    {
      id: "client-portals",
      title: "Production Client Websites & Landing Pages",
      organization: "Client Work",
      year: "Ongoing",
      description: "Hands-on experience architecting and maintaining multiple responsive client web properties."
    },
    {
      id: "react-animations",
      title: "React & Animation-Driven Web Experiences",
      organization: "Specialization",
      year: "Modern Web",
      description: "Implemented high-performance GSAP timelines, smooth scroll interactions, and reactive user interfaces."
    }
  ],

  // 14 verified work examples
  projects: [
    {
      id: "delta-realty",
      name: "Delta Realty",
      category: "Real Estate Portal",
      shortDescription: "Comprehensive web presence showcasing residential and commercial properties with interactive floor plans and lead capture.",
      technologies: ["React", "Vite", "GSAP", "CSS3", "GTM"],
      featured: true,
      liveUrl: "", // Add verified URL when available
      sourceUrl: null,
      accentColor: "#38bdf8",
      stats: { responsive: "Mobile & Desktop", animations: "GSAP Tweens", tracking: "UTM & GTM" }
    },
    {
      id: "rustomjee-ozone-skye",
      name: "Rustomjee Ozone Skye",
      category: "Luxury Residential",
      shortDescription: "Premium residential showcase with immersive visual galleries, amenity tours, and high-performance mobile responsiveness.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Swiper", "GSAP"],
      featured: true,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#818cf8",
      stats: { responsive: "Mobile First", animations: "ScrollTrigger", tracking: "Lead Forms" }
    },
    {
      id: "rustomjee-balmoral-golf-links",
      name: "Rustomjee Balmoral Golf Links",
      category: "Luxury Residential",
      shortDescription: "Ultra-luxury golf estate digital presentation featuring smooth transitions, brochure download flows, and inquiry handling.",
      technologies: ["React", "CSS3", "GSAP", "Lenis", "LightGallery"],
      featured: true,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#34d399",
      stats: { responsive: "Adaptive Layout", animations: "Smooth Scroll", tracking: "Enquiry API" }
    },
    {
      id: "hiranandani-belicia",
      name: "Hiranandani Belicia",
      category: "Luxury Residential",
      shortDescription: "Signature architectural development landing page with interactive unit configurations and high-speed asset delivery.",
      technologies: ["React", "Vite", "Responsive CSS", "GSAP"],
      featured: true,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#f59e0b",
      stats: { responsive: "Cross-device", animations: "Micro-animations", tracking: "GTM Events" }
    },
    {
      id: "puravankara-multiproject",
      name: "Puravankara Multiproject",
      category: "Multi-Property Portal",
      shortDescription: "Multi-city real estate portfolio showcasing diverse property developments, filterable listings, and campaign tracking.",
      technologies: ["JavaScript", "React", "CSS Grid", "GTM Tracking"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#ec4899",
      stats: { responsive: "Full Responsive", animations: "Interactive Sliders", tracking: "UTM Integrations" }
    },
    {
      id: "karjat-futura",
      name: "Karjat Futura",
      category: "Nature & Weekend Homes",
      shortDescription: "Eco-centric weekend home community web experience with scenic parallax viewports and localized lead capture.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Parallax", "PHP"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#10b981",
      stats: { responsive: "Mobile Optimized", animations: "Parallax Scroll", tracking: "PHP Lead Hook" }
    },
    {
      id: "delta-meadows",
      name: "Delta Meadows",
      category: "Residential Township",
      shortDescription: "Township portal highlighting master layouts, connectivity timelines, and integrated virtual site walk-throughs.",
      technologies: ["React", "Vite", "GSAP", "CSS3"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#06b6d4",
      stats: { responsive: "Touch Optimized", animations: "Timeline Reveals", tracking: "UTM Tracking" }
    },
    {
      id: "delta-vrindavan",
      name: "Delta Vrindavan",
      category: "Residential Living",
      shortDescription: "Serene living community microsite featuring interactive amenities showcase, floor diagrams, and direct inquiry integration.",
      technologies: ["JavaScript", "CSS3", "Swiper", "Bootstrap 5"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#a855f7",
      stats: { responsive: "Fluid Grid", animations: "Interactive Tabs", tracking: "Enquiry Form" }
    },
    {
      id: "delta-rio",
      name: "Delta Rio",
      category: "Riverfront Residences",
      shortDescription: "Riverfront lifestyle property landing page engineered for rapid mobile loading and intuitive appointment scheduling.",
      technologies: ["React", "Vite", "GSAP", "PHPMailer"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#0ea5e9",
      stats: { responsive: "High Speed", animations: "Fade & Sliders", tracking: "Mailer API" }
    },
    {
      id: "delta-orion",
      name: "Delta Orion",
      category: "Modern Commercial & Living",
      shortDescription: "Contemporary urban development landing page presenting commercial retail zones and residential tower specifications.",
      technologies: ["HTML5", "CSS3", "JavaScript", "ScrollTrigger"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#6366f1",
      stats: { responsive: "Mobile First", animations: "Scroll Animations", tracking: "Lead Validation" }
    },
    {
      id: "arvind-smartspaces",
      name: "Arvind SmartSpaces",
      category: "Corporate Real Estate",
      shortDescription: "Corporate developer web property with multi-section narrative, compliance information, and interactive project locator.",
      technologies: ["React", "JavaScript", "CSS3", "GTM"],
      featured: true,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#14b8a6",
      stats: { responsive: "Full Responsive", animations: "Hero Sequences", tracking: "Analytics Events" }
    },
    {
      id: "mountain-bliss",
      name: "Mountain Bliss",
      category: "Hillside Villas",
      shortDescription: "Hillside resort villa presentation with panoramic galleries, climate highlights, and private consultation request forms.",
      technologies: ["HTML5", "CSS3", "LightGallery", "GSAP"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#84cc16",
      stats: { responsive: "Cross-device", animations: "Gallery Transitions", tracking: "Lead Webhook" }
    },
    {
      id: "vaishno-sky",
      name: "Vaishno Sky",
      category: "High-Rise Living",
      shortDescription: "High-rise tower landing page offering sky-deck visualization, floor plans, and rapid response form submission.",
      technologies: ["React", "Vite", "CSS Modules", "Swiper"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#f97316",
      stats: { responsive: "Touch Gestures", animations: "Carousel Sliders", tracking: "UTM Parameters" }
    },
    {
      id: "arkade-ascend",
      name: "Arkade Ascend",
      category: "Urban Residential",
      shortDescription: "Modern residential high-rise portal with construction progress logs, payment milestone guides, and marketing telemetry.",
      technologies: ["JavaScript", "HTML5", "CSS3", "GSAP", "GTM"],
      featured: false,
      liveUrl: "",
      sourceUrl: null,
      accentColor: "#d946ef",
      stats: { responsive: "Adaptive UI", animations: "Smooth Reveals", tracking: "GTM & Forms" }
    }
  ]
};
