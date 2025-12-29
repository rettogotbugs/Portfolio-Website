import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Code2, 
  Smartphone, 
  Layout, 
  LayoutDashboard, 
  ArrowRight, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Menu,
  Moon,
  Sun,
  AtSign,
  Palette,
  Terminal,
  Dribbble,
  GalleryHorizontalEnd,
  Coffee,
  CheckCircle,
  Clock,
  Briefcase,
  Copy,
  Check,
  Quote,
  Database,
  Globe,
  Server,
  Cpu
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  content: React.ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Fullstack & Design",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    description: "Designing & Building a Product-Focused Developer Portfolio.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    content: (
      <div className="space-y-8 text-secondary">
        <section>
          <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
          <p>This portfolio is a self-initiated project designed to present my skills as a full-stack developer with a strong design and marketing mindset.</p>
          <p className="mt-2">Rather than acting as a simple resume website, the goal was to create a clear, conversion-focused digital product that communicates value within seconds while remaining technically solid and visually polished.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground mb-3">Problem</h3>
          <p className="mb-2">Many developer portfolios struggle with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Generic copy and unclear positioning</li>
            <li>Overcrowded layouts</li>
            <li>Poor hierarchy and weak CTAs</li>
            <li>Lack of real project context</li>
          </ul>
          <p className="mt-4">As a visitor, it’s often unclear: <em>What does this person actually do, and why should I contact them?</em></p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground mb-3">Goal</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Clearly communicates who I am and what I do</li>
            <li>Balances design, development, and marketing</li>
            <li>Feels modern, focused, and intentional</li>
            <li>Scales easily as more projects are added</li>
          </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-foreground mb-3">My Role</h3>
            <div className="flex flex-wrap gap-2">
                {['UI/UX design', 'Frontend development', 'Content & positioning', 'Interaction & motion design'].map(role => (
                    <span key={role} className="px-2 py-1 bg-accent rounded text-sm font-medium">{role}</span>
                ))}
            </div>
            <p className="mt-2 text-sm italic">This project was fully designed and built by me from scratch.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground mb-3">Design Approach</h3>
          <div className="space-y-4">
            <div>
                <h4 className="font-semibold text-foreground">1. Clear Positioning First</h4>
                <p>The hero section is designed to answer three questions immediately: Who am I? What do I do? What makes me different?</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground">2. Visual Hierarchy & Focus</h4>
                <p>Large headline for instant clarity. Supporting copy framed in a bordered container. Primary CTA emphasized.</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground">3. Dark UI with Subtle Accents</h4>
                <p>Dark theme for a modern, premium feel with gradient accents used sparingly.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground mb-3">Tech Stack</h3>
          <ul className="list-disc pl-5 space-y-1">
             <li><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
             <li><strong>UI & Motion:</strong> CSS animations, Responsive layout</li>
             <li><strong>Tooling:</strong> Git & GitHub, Vercel</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-foreground mb-3">Key Learnings</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Clear positioning is more important than visual effects</li>
            <li>Good portfolios sell thinking, not just skills</li>
            <li>Marketing principles apply strongly to personal websites</li>
            <li>Small design decisions compound into perceived quality</li>
          </ul>
        </section>
      </div>
    )
  },
  {
    id: 2,
    title: "FocusForge",
    category: "Fullstack Product",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    description: "A Full-Stack Productivity & Habit Dashboard.",
    tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
    content: (
        <div className="space-y-8 text-secondary">
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
            <p>FocusForge is a self-initiated full-stack web application designed to help users manage daily tasks, build habits, and track long-term consistency through visual insights.</p>
            <p className="mt-2">The goal was to design a clean, distraction-free dashboard while implementing a scalable backend architecture suitable for real-world usage.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Problem</h3>
            <p className="mb-2">Most productivity tools feel either too complex and overwhelming, or too minimal to provide meaningful insights. Users struggle to maintain habit consistency and understand progress over time.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Solution</h3>
            <p>FocusForge combines task management, habit tracking, and analytics into a single dashboard with a strong emphasis on clarity and usability.</p>
            <p className="mt-2 font-medium text-foreground">Key design principles:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Minimal UI with clear hierarchy</li>
                <li>Visual progress indicators</li>
                <li>Fast interactions and low cognitive load</li>
            </ul>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h4 className="font-semibold text-foreground mb-1">Frontend</h4>
                    <ul className="list-disc pl-5 text-sm">
                        <li>Next.js (App Router)</li>
                        <li>React & TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Chart.js</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-1">Backend & DevOps</h4>
                    <ul className="list-disc pl-5 text-sm">
                        <li>Node.js & Fastify</li>
                        <li>Prisma ORM & PostgreSQL</li>
                        <li>Zod (Validation)</li>
                        <li>Vercel Deployment</li>
                    </ul>
                </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Challenges & Solutions</h3>
            <div className="space-y-3">
                <div className="bg-accent/30 p-4 rounded-lg">
                    <span className="font-bold text-primary block mb-1">Challenge: Managing real-time habit streaks</span>
                    <p className="text-sm">Solution: Normalized database schema with daily completion entries.</p>
                </div>
                <div className="bg-accent/30 p-4 rounded-lg">
                    <span className="font-bold text-primary block mb-1">Challenge: Keeping dashboards readable with lots of data</span>
                    <p className="text-sm">Solution: Progressive disclosure — showing summaries first, details later.</p>
                </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Outcome</h3>
            <p>FocusForge demonstrates full-stack architecture thinking, data visualization skills, and clean dashboard UI design.</p>
          </section>
        </div>
      )
  },
  {
    id: 3,
    title: "Pulse",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "A Mobile Habit & Mood Tracking App.",
    tags: ["React Native", "TypeScript", "Expo"],
    content: (
        <div className="space-y-8 text-secondary">
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
            <p>Pulse is a mobile app designed to help users build better habits while tracking their emotional state over time. The project focuses on emotional design, simplicity, and daily engagement rather than feature overload.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Problem</h3>
            <p>Many habit apps fail because they demand too much input, interfaces feel robotic, and users lose motivation quickly.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Solution</h3>
            <p>Pulse introduces one-tap habit completion, simple mood logging using emojis, and gentle visual feedback instead of pressure-based metrics.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Core Features</h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Onboarding flow</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Daily habit checklist</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Mood tracking (emoji-based)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Streak visualization</li>
             </ul>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Tech Stack</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Mobile:</strong> React Native, TypeScript, Expo</li>
                <li><strong>State & Storage:</strong> Context API, AsyncStorage</li>
                <li><strong>Design:</strong> Figma (UI & flows)</li>
            </ul>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Design Decisions</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>Used soft gradients to create a calm emotional tone</li>
                <li>Large touch targets for one-handed usage</li>
                <li>Bottom navigation for fast access</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Learnings</h3>
            <p>Mobile UX requires fewer choices, not more. Emotional feedback increases retention, and small animations significantly improve perceived quality.</p>
          </section>
        </div>
      )
  },
    {
    id: 4,
    title: "Launchpad",
    category: "Marketing & Frontend",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "A Conversion-Focused Marketing Landing Page.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    content: (
        <div className="space-y-8 text-secondary">
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
            <p>Launchpad is a concept landing page designed to convert early users for an AI-powered resume and portfolio feedback tool. This project emphasizes marketing psychology, copywriting, and conversion flow.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Problem</h3>
            <p>Many early-stage products fail because value propositions are unclear, pages lack trust signals, and CTAs are poorly placed.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Solution</h3>
            <p>Launchpad was designed as a single-purpose page: <strong>Convert visitors into waitlist signups.</strong></p>
            <p className="mt-2 text-sm">Page Structure: Hero Value Prop → Problem/Solution Storytelling → Feature Highlights → Social Proof → FAQ → CTA.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind CSS", "TypeScript"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-accent border border-border rounded-full text-xs">{tag}</span>
                ))}
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Marketing Decisions</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>CTA repeated at multiple scroll points</li>
                <li>Copy focuses on outcomes, not features</li>
                <li>Friendly illustrations to reduce intimidation</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Challenges & Solutions</h3>
            <div className="space-y-3">
                 <div>
                    <span className="font-semibold text-foreground">Challenge: Avoiding content overload</span>
                    <p className="text-sm">Solution: Clear visual sections with breathing space.</p>
                 </div>
                 <div>
                    <span className="font-semibold text-foreground">Challenge: Building trust without real users</span>
                    <p className="text-sm">Solution: Transparent “early access” framing.</p>
                 </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Learnings</h3>
            <p>Good copy reduces design complexity. Clear positioning matters more than animations. Marketing is as much UX as visuals.</p>
          </section>
        </div>
      )
  },
  {
    id: 5,
    title: "Aravalli Atlas",
    category: "Educational Platform",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    description: "An Educational Data-Driven Web Platform.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    content: (
        <div className="space-y-8 text-secondary">
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
            <p>Aravalli Atlas is an informational platform designed to present environmental data in a neutral, educational format. The focus was on information clarity, visual storytelling, and ethical UX design.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Problem</h3>
            <p>Environmental topics often suffer from information overload, emotional manipulation, and poor data presentation.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Solution</h3>
            <p>Aravalli Atlas presents structured educational sections, data-backed insights, and clear navigation for exploration.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Key Sections</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>Geography overview</li>
                <li>Environmental importance</li>
                <li>Threats and challenges</li>
                <li>Data & statistics</li>
                <li>Resources and references</li>
            </ul>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Tech Stack</h3>
            <p>React, Tailwind CSS, Chart.js, Map-based visualization tools.</p>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Design Decisions</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>Earth-tone color palette</li>
                <li>Neutral language</li>
                <li>Map-based storytelling</li>
            </ul>
          </section>
  
          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">Learnings</h3>
            <p>Ethics matter in UX. Visual data improves understanding. Tone affects credibility.</p>
          </section>
        </div>
      )
  }
];

// --- Components ---

const Navbar = ({ 
  activeView, 
  setView, 
  theme, 
  toggleTheme 
}: { 
  activeView: string, 
  setView: (v: string) => void,
  theme: string,
  toggleTheme: () => void
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4 h-[80px] bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="w-full mx-auto flex justify-between items-center px-4 sm:px-20 xl:px-52">
        <div className="flex items-center gap-10">
          <a 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setView('home')}
          >
            <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-primary">
              Anshunav
            </div>
          </a>
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => setView('home')}
              className={`text-sm font-medium transition-colors hover:text-foreground ${activeView === 'home' ? 'text-foreground' : 'text-secondary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('projects')}
              className={`text-sm font-medium transition-colors hover:text-foreground ${activeView === 'projects' ? 'text-foreground' : 'text-secondary'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:itzanshu15@gmail.com'}
              className="text-sm font-medium text-secondary transition-colors hover:text-foreground"
            >
              Contact
            </button>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-md border border-input bg-accent/50 hover:bg-accent hover:text-foreground h-10 w-10 text-secondary transition-colors"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button 
            className="md:hidden inline-flex items-center justify-center rounded-md border border-input bg-accent/50 hover:bg-accent hover:text-foreground h-10 w-10 text-secondary transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-background border-b border-border animate-slide-up">
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => { setView('home'); setIsMobileOpen(false); }} className="text-left text-secondary hover:text-foreground font-medium">Home</button>
            <button onClick={() => { setView('projects'); setIsMobileOpen(false); }} className="text-left text-secondary hover:text-foreground font-medium">Projects</button>
            <button onClick={() => { window.location.href='mailto:itzanshu15@gmail.com'; setIsMobileOpen(false); }} className="text-left text-secondary hover:text-foreground font-medium">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = ({ setView }: { setView: (v: string) => void }) => {
  return (
    <main className="bg-square-pattern bg-repeat bg-50 text-start relative overflow-hidden transition-colors duration-300">
      <div className="flex justify-center items-center p-6 min-h-[calc(100vh-80px)] mx-auto mesh-gradient-center">
        <div className="grid grid-cols-1 w-full max-w-7xl px-4 sm:px-20 xl:px-40">
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 pb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-accent/30 bg-gradient-gray shadow-2xl relative shrink-0">
                <img 
                    src="https://i.postimg.cc/ncz7LHTL/Picsart-25-12-28-09-53-36-443.webp" 
                    alt="3D Avatar" 
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Hey, I'm <span className="px-1 sm:px-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white inline-block -skew-x-3 transform">Anshunav</span> <span className="inline-block animate-pulse">✨</span>
              <br />
              A <span className="px-1 sm:px-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white inline-block -skew-x-3 mt-1 md:mt-0 transform">Software Developer</span>
            </h1>
          </div>

          <div className="border-2 border-primary/60 bg-background/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg max-w-[750px] shadow-lg mb-10">
            <p className="text-base sm:text-xl text-secondary leading-relaxed">
              A <span className="font-bold text-foreground">full-stack developer</span> with a strong <span className="font-bold text-foreground">design</span> and <span className="font-bold text-foreground">marketing</span> mindset.
              <br className="hidden md:block" />
              I build digital products that are clear, usable, and built for growth.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between max-w-[600px]">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Colorful Looping Stroke Animation Button for Contact Me */}
              <a 
                href="mailto:itzanshu15@gmail.com"
                className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-xl w-full sm:w-auto"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_50%,#ec4899_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-6 py-2 text-sm font-bold text-foreground backdrop-blur-3xl transition-colors hover:bg-background/80">
                  <AtSign className="mr-2 h-5 w-5" /> Contact Me
                </span>
              </a>

              {/* Animated View Projects Button */}
              <button 
                onClick={() => setView('projects')}
                className="group relative inline-flex items-center justify-center rounded-md text-sm font-medium border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:text-foreground text-secondary dark:text-gray-200 h-12 px-6 py-2 shadow-xl transition-all overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                    <GalleryHorizontalEnd className="mr-2 h-5 w-5 group-hover:animate-bounce" /> 
                    View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
              </button>
            </div>

            <div className="hidden lg:block w-[1px] bg-black/10 dark:bg-white/20 h-8 mx-8"></div>
            
            {/* Divider for Mobile */}
            <div className="block lg:hidden w-full h-[1px] bg-black/10 dark:bg-white/10"></div>

            <div className="flex justify-center items-center gap-8 text-xl text-secondary">
                <a href="https://github.com/rettogotbugs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Github className="w-6 h-6" /></a>
                <a href="https://dribbble.com/itzAnshu15" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Dribbble className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/anshunavbora" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="https://x.com/AnshunavBora" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

const ServicesSection = ({ setView }: { setView: (v: string) => void }) => {
  const [isInView, setIsInView] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col border-t border-border px-5 sm:px-20 xl:px-52 bg-background py-20 transition-colors duration-300">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Building Digital Experiences</h1>
        <p className="text-secondary max-w-2xl">
          I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 pt-12">
        
        {/* Card 1: What I can do - REDESIGNED */}
        <div className="flex flex-col border border-border rounded-xl p-6 sm:p-8 bg-gradient-gray backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
          <div className="flex pb-4 items-center gap-4">
            <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
               <Layout className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">What I can do</h1>
          </div>
          <p className="text-secondary pb-6">
            I can help develop solutions that will help you grow your business:
          </p>
          <ul className="space-y-3">
            {[
              "UI/UX Design",
              "Fullstack Web Development",
              "Mobile App Development",
              "Shopify & WordPress Development",
              "Database Design",
              "API Integration"
            ].map((item, idx) => (
               <li key={idx} className="flex items-start gap-3 text-secondary group/item">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors duration-300">{item}</span>
               </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Tools I Use - REDESIGNED */}
        <div className="flex flex-col border border-border rounded-xl p-6 sm:p-8 bg-gradient-gray backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
          <div className="flex pb-4 items-center gap-4">
            <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
               <Code2 className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Tools & Tech Stack</h1>
          </div>
          <p className="text-secondary pb-6">
            I use the latest tools and technologies to build functional and scalable products:
          </p>
          
          <div className="space-y-6">
             {[
               { 
                 category: "Frontend", 
                 icon: <Globe className="w-4 h-4" />,
                 tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"] 
               },
               { 
                 category: "Backend", 
                 icon: <Server className="w-4 h-4" />,
                 tools: ["Node.js", "Fastify", "PostgreSQL", "Prisma ORM", "Redis"] 
               },
               { 
                 category: "DevOps & Tools", 
                 icon: <Cpu className="w-4 h-4" />,
                 tools: ["Vercel", "Docker", "Git & GitHub", "Zod"] 
               },
               {
                 category: "Design",
                 icon: <Palette className="w-4 h-4" />,
                 tools: ["Figma", "Framer", "Photoshop"]
               }
             ].map((group, idx) => (
                <div key={idx}>
                   <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="p-1 rounded bg-primary/10 text-primary">
                        {group.icon}
                      </div>
                      {group.category}
                   </h3>
                   <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool, tIdx) => (
                         <span key={tIdx} className="px-2.5 py-1 text-xs rounded-md bg-accent border border-border text-secondary hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default select-none">
                            {tool}
                         </span>
                      ))}
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Card 3: UI/UX Design - (Keep as is) */}
        <div className="flex flex-col border border-border rounded-xl p-6 sm:p-8 bg-gradient-gray backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
          <div className="flex pb-4 items-center gap-4">
            <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
               <Palette className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">UI/UX Design</h1>
          </div>
          
          {/* Animated Styled Quote */}
          <div className="relative my-6 group/quote">
             {/* Gradient Border/Glow effect */}
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg opacity-20 blur transition duration-500 group-hover/quote:opacity-50"></div>
             
             <div className="relative p-6 bg-accent/50 rounded-lg border border-primary/10 backdrop-blur-sm">
                <Quote className="w-6 h-6 text-primary/60 mb-3" />
                <p className="text-lg italic font-medium text-foreground leading-relaxed">
                   "Design isn’t just how it looks — it’s how it works."
                </p>
                <div className="mt-4 flex items-center gap-2">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                    <div className="h-1 w-2 bg-primary/30 rounded-full"></div>
                    <div className="h-1 w-2 bg-primary/30 rounded-full"></div>
                </div>
             </div>
          </div>

          <p className="text-secondary pb-6 text-sm">
             I focus on creating interfaces that feel natural, purposeful, and effortless to use.
          </p>
          
          <ul ref={listRef} className="space-y-3">
             {[
                 "User-first design decisions",
                 "Clean, minimal & modern aesthetics",
                 "Responsive across all devices",
                 "Design systems & scalable components",
                 "Wireframes → Prototypes → Final UI"
             ].map((item, idx) => (
                 <li 
                    key={idx} 
                    className="flex items-center gap-3 text-secondary p-2 rounded-lg hover:bg-primary/5 hover:text-foreground transition-all duration-300 hover:translate-x-2 cursor-default group/item"
                    style={{
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${idx * 0.1}s`
                    }}
                 >
                    <div className={`w-2 h-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all duration-500 ${isInView ? 'scale-100' : 'scale-0'}`} />
                    {item}
                 </li>
             ))}
          </ul>
        </div>

      </div>

      <button 
        onClick={() => setView('projects')}
        className="inline-flex items-center justify-center self-end mt-12 text-sm font-medium border border-input bg-accent/50 hover:bg-accent hover:text-foreground h-11 px-8 rounded-md transition-all text-secondary"
      >
        <LayoutDashboard className="mr-2 h-5 w-5" /> View My Projects
      </button>
    </section>
  );
};

// Counter Component for Animation
const AnimatedCounter = ({ value, suffix }: { value: number, suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const duration = 2000;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quart
             const ease = 1 - Math.pow(1 - progress, 4);
             
            setCount(Math.floor(ease * value));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [value]);

    return <>{count}{suffix}</>;
};

const StatsSection = () => {
  const stats = [
    { label: "Years Experience", value: 3, suffix: "+", icon: <Clock className="w-5 h-5 text-primary" /> },
    { label: "Projects Completed", value: 45, suffix: "+", icon: <Briefcase className="w-5 h-5 text-purple-500" /> },
    { label: "Happy Clients", value: 98, suffix: "%", icon: <CheckCircle className="w-5 h-5 text-pink-500" /> },
    { label: "Cups of Coffee", value: 500, suffix: "+", icon: <Coffee className="w-5 h-5 text-orange-500" /> },
  ];

  return (
    <section className="px-5 sm:px-20 xl:px-52 py-12 bg-accent/30 border-t border-border transition-colors duration-300">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center md:items-start space-y-2 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2 bg-background p-2 rounded-full shadow-sm border border-border">
              {stat.icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-sm font-medium text-secondary">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "itzanshu15@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative px-5 sm:px-20 xl:px-52 bg-background py-24 border-t border-border transition-colors duration-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-sm font-bold tracking-wider text-primary uppercase">Get In Touch</h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
          Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">amazing</span> together.
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl">
          Whether you have a project in mind, need a consultation, or just want to say hi—I'm always open to discussing new ideas.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center">
            <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <button 
                  onClick={handleCopy}
                  className="relative flex items-center justify-between gap-3 px-4 sm:px-8 py-4 bg-background rounded-lg border border-border leading-none transition-transform active:scale-95 w-full sm:w-auto sm:min-w-[300px]"
                >
                    <span className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium text-foreground truncate">
                       <Mail className="w-5 h-5 text-secondary shrink-0" />
                       <span className="truncate">{email}</span>
                    </span>
                    <span className="text-xs font-bold text-secondary bg-accent px-2 py-1 rounded flex items-center gap-1 shrink-0">
                        {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        {copied ? "COPIED" : "COPY"}
                    </span>
                </button>
            </div>
            
            <a 
                href={`mailto:${email}`}
                className="px-8 py-4 rounded-lg bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors shadow-lg w-full sm:w-auto text-center"
            >
                Send Email
            </a>
        </div>

        <div className="flex items-center gap-8 mt-12 pt-12 border-t border-border/50 w-full justify-center">
            <a href="https://x.com/AnshunavBora" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group">
                <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                    <Twitter className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/anshunavbora" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group">
                <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/rettogotbugs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group">
                <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                    <Github className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium">GitHub</span>
            </a>
            <a href="https://dribbble.com/itzAnshu15" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group">
                <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                    <Dribbble className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium">Dribbble</span>
            </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border transition-colors duration-300">
      <div className="px-5 sm:px-20 xl:px-52 pt-12 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Anshunav Bora</h2>
                <div className="flex items-center gap-2 text-secondary">
                    <span className="text-xl">🇮🇳</span>
                    <p>Based In India</p>
                </div>
            </div>
            <p className="text-secondary max-w-sm">
                Website Designed in Figma. Built with React, TypeScript and Tailwind CSS.
            </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
            <p className="text-sm text-secondary">
                © {new Date().getFullYear()} Anshunav. All rights are reserved.
            </p>
            <div className="flex items-center gap-6 text-secondary">
                <a href="https://github.com/rettogotbugs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Github className="w-5 h-5"/></a>
                <a href="https://dribbble.com/itzAnshu15" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Dribbble className="w-5 h-5"/></a>
                <a href="https://www.linkedin.com/in/anshunavbora" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin className="w-5 h-5"/></a>
                <a href="https://x.com/AnshunavBora" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Twitter className="w-5 h-5"/></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

const ProjectCard: React.FC<{ project: Project, onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
        onClick={onClick}
        className="group bg-accent/20 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="px-4 py-2 bg-white text-black rounded-full font-medium text-sm">View Details</button>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{project.category}</span>
        </div>
        <p className="text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs text-secondary bg-background border border-border px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailsModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
    useEffect(() => {
        // Prevent scrolling on the body when the modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-border flex flex-col">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="h-64 sm:h-80 w-full relative shrink-0">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                     <div className="absolute bottom-6 left-6 sm:left-10 right-6">
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono font-bold mb-3 inline-block border border-primary/20 backdrop-blur-sm">
                            {project.category}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground drop-shadow-md">{project.title}</h2>
                     </div>
                </div>
                <div className="p-6 sm:p-10 grow">
                    {project.content}
                </div>
            </div>
        </div>
    );
};

const ProjectsView = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="py-20 px-5 sm:px-20 xl:px-52 min-h-screen animate-fade-in bg-background transition-colors duration-300">
             <div className="mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
                <p className="text-secondary">Here are some of the projects I've worked on recently. Click on a card to view details.</p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map(p => (
                    <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
                ))}
             </div>

             {selectedProject && (
                 <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
             )}
        </div>
    );
};

const App = () => {
  const [activeView, setActiveView] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/30 selection:text-white transition-colors duration-300">
      <Navbar 
        activeView={activeView} 
        setView={setActiveView} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      {activeView === 'home' ? (
        <>
            <Hero setView={setActiveView} />
            <ServicesSection setView={setActiveView} />
            <StatsSection />
            <ContactSection />
        </>
      ) : (
        <ProjectsView />
      )}

      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
