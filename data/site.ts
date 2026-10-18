export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  detail: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  location?: string;
  image: string;
  additionalImages?: string[];
  summary?: string;
  showOnHome?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Equipment", href: "/equipment" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: ServiceItem[] = [
  {
    id: "commercial-av",
    title: "Commercial AV Installation",
    description: "Integrated sound, video, and system design for live venues and commercial spaces.",
    detail: "From concept through commissioning, DNA delivers polished systems that perform under pressure.",
  },
  {
    id: "lighting",
    title: "Venue & Stage Lighting",
    description: "Programming, installs, and control systems for experiential events and performance spaces.",
    detail: "We shape atmosphere with lighting systems that feel cinematic, technical, and reliable.",
  },
  {
    id: "sound-tuning",
    title: "Speaker Repair & Tuning",
    description: "Service, calibration, and technical support for high-performance audio systems.",
    detail: "Precision tuning and equipment care keep systems sounding consistent and event-ready.",
  },
  {
    id: "security",
    title: "Security & Network Integration",
    description: "Commercial security, camera, access control, and network infrastructure installations.",
    detail: "We blend operational security with clean, scalable system architecture.",
  },
  {
    id: "pos",
    title: "POS Systems",
    description: "Point-of-sale systems integrated with venue audio, video, and network infrastructure.",
    detail: "Reliable POS technology designed to support smooth day-to-day operations.",
  },
  {
    id: "turnkey-systems",
    title: "Turnkey Systems",
    description: "Complete audio, video, lighting, security, POS, and networking systems delivered as one coordinated solution.",
    detail: "From system planning through installation and commissioning, DNA coordinates the full project.",
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: "Venue Installation",
    category: "Sound + installation",
    image: "/images/portfolio/8138.JPG",
    additionalImages: ["/images/portfolio/8141.JPG"],
    showOnHome: true,
  },
  {
    title: "Champion",
    category: "Live event environment",
    location: "Colorado",
    image: "/images/portfolio/20190318_180008.jpg",
    summary: "A layered production environment built with dramatic lighting, scenic structure, and immersive atmosphere.",
  },
  {
    title: "The System",
    category: "Sound + installation",
    location: "Regional venue",
    image: "/images/portfolio/20220320_203147.jpg",
    summary: "A high-impact install focused on audio tuning, staging, and a premium guest experience.",
  },
  {
    title: "Show Production",
    category: "Concert / stage design",
    location: "Live production",
    image: "/images/portfolio/IMG_20210829_205950649_HDR.jpg",
    summary: "An editorial stage environment with texture, lighting, and technical control designed for atmosphere.",
  },
  {
    title: "Venue Build",
    category: "Lighting + scenic system",
    location: "Production install",
    image: "/images/portfolio/IMG_20210930_191650943.jpg",
    summary: "Spatial design, lighting treatment, and placement that brought the environment into focus.",
  },
];

export const processSteps = [
  "Assess the space and venue requirements",
  "Design the system and technical approach",
  "Supply equipment and installation support",
  "Tune, configure, and commission the final build",
];
