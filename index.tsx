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
  Cpu,
  Target,
  Zap,
  Sparkles,
  TrendingUp,
  History,
  User,
  Shield,
  Lightbulb,
  MousePointer2,
  Layers,
  Flag,
  Rocket,
  PenTool,
  Box,
  Monitor,
  Star,
  MapPin,
  ArrowUp
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
  isFeatured?: boolean;
  content: React.ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Portfolio",
    isFeatured: true,
    image: "https://i.postimg.cc/HkvwhhV6/M003T1516-B-Macbook-Mockup-09sep25.webp",
    description: "Designing & Building a Product-Focused Developer Portfolio.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    content: (
      <div className="space-y-12 text-secondary animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="rounded-2xl overflow-hidden border border-border shadow-xl relative group">
            <img src="https://api.pikwy.com/web/6953c17e8c188c47ec55c19b.jpg" className="w-full h-auto object-cover" alt="Portfolio Inside View" />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Target className="w-4 h-4" /> Case Study
                </div>
                <h3 className="text-3xl font-bold text-foreground">Designing a Product-Focused Developer Portfolio</h3>
                <p className="text-lg leading-relaxed">
                    This portfolio is a self-initiated project designed to present my work as a full-stack developer with a strong design and marketing mindset. 
                    Instead of acting as a static resume, the portfolio was treated as a <strong>product</strong> — with positioning, hierarchy, and conversion as core goals.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                    <a href="https://github.com/rettogotbugs/Portfolio-Website" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-lg bg-foreground text-background font-bold hover:bg-foreground/80 transition-colors shadow-lg">
                        <Github className="w-5 h-5 mr-2" /> View Source Code
                    </a>
                </div>
            </div>
            <div className="bg-accent/30 p-6 rounded-2xl border border-border space-y-4">
                <div className="text-sm font-bold text-foreground flex items-center gap-2"><User className="w-4 h-4 text-primary"/> MY ROLE</div>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3"><Palette className="w-4 h-4 text-secondary" /> UI/UX Design</li>
                    <li className="flex items-center gap-3"><Code2 className="w-4 h-4 text-secondary" /> Frontend Development</li>
                    <li className="flex items-center gap-3"><PenTool className="w-4 h-4 text-secondary" /> Copywriting & Positioning</li>
                    <li className="flex items-center gap-3"><MousePointer2 className="w-4 h-4 text-secondary" /> Interaction Design</li>
                </ul>
            </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-6 p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider text-xs">
                    <X className="w-4 h-4" /> The Problem
                </div>
                <p className="font-medium text-foreground">Most developer portfolios fail because:</p>
                <ul className="space-y-2">
                    <li className="flex gap-3 text-sm"><span className="text-red-500">•</span> Messaging is vague or generic</li>
                    <li className="flex gap-3 text-sm"><span className="text-red-500">•</span> Skills are listed without context</li>
                    <li className="flex gap-3 text-sm"><span className="text-red-500">•</span> Visitors don’t know what action to take</li>
                </ul>
                <p className="text-sm italic opacity-80 mt-4">"What does this person actually do, and why should I contact them?"</p>
             </div>

             <div className="space-y-6 p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-xs">
                    <CheckCircle className="w-4 h-4" /> The Goals
                </div>
                <ul className="space-y-3">
                    <li className="flex gap-3 text-sm items-start"><Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Communicate value clearly within the first screen</li>
                    <li className="flex gap-3 text-sm items-start"><Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Balance design, development, and marketing</li>
                    <li className="flex gap-3 text-sm items-start"><Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Feel modern, confident, and intentional</li>
                    <li className="flex gap-3 text-sm items-start"><Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Scale easily with case studies and projects</li>
                </ul>
             </div>
        </section>

        <section className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Sparkles className="w-4 h-4" /> Design Decisions
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    { title: "Strong Hierarchy", desc: "Hero answers 'who/what/why' instantly." },
                    { title: "Dark Theme", desc: "Premium feel that highlights content." },
                    { title: "Minimal Nav", desc: "Reduced cognitive load for visitors." }
                ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-accent/20 border border-border hover:bg-accent/40 transition-colors">
                        <div className="font-bold text-foreground mb-2">{item.title}</div>
                        <p className="text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="space-y-6">
             <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Layers className="w-4 h-4" /> Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Git & GitHub"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-accent border border-border text-xs font-medium text-foreground">
                        {tech}
                    </span>
                ))}
            </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="font-bold text-foreground flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500"/> Challenges & Solutions</div>
                <div className="space-y-4">
                     <div className="p-4 rounded-lg bg-accent/20 border border-border">
                        <div className="text-xs font-bold text-secondary uppercase mb-1">Challenge</div>
                        <div className="font-medium text-foreground mb-2">Avoiding buzzwords</div>
                        <div className="text-xs font-bold text-primary uppercase mb-1">Solution</div>
                        <div className="text-sm">Outcome-driven copy (“clear, usable, built for growth”)</div>
                     </div>
                     <div className="p-4 rounded-lg bg-accent/20 border border-border">
                        <div className="text-xs font-bold text-secondary uppercase mb-1">Challenge</div>
                        <div className="font-medium text-foreground mb-2">Showing personality professionally</div>
                        <div className="text-xs font-bold text-primary uppercase mb-1">Solution</div>
                        <div className="text-sm">Friendly visuals with disciplined layout & typography</div>
                     </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="font-bold text-foreground flex items-center gap-2"><Lightbulb className="w-4 h-4 text-yellow-500"/> Learnings</div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 h-full flex flex-col justify-center">
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm font-medium"><span className="text-primary">01.</span> Positioning matters more than visuals</li>
                        <li className="flex gap-3 text-sm font-medium"><span className="text-primary">02.</span> Portfolios are marketing tools</li>
                        <li className="flex gap-3 text-sm font-medium"><span className="text-primary">03.</span> Less content, better structure</li>
                    </ul>
                </div>
            </div>
        </section>
      </div>
    )
  },
  {
    id: 2,
    title: "FocusForge",
    category: "Fullstack Web App",
    image: "https://i.postimg.cc/W3ybR00g/7-Macbook-Pro-16-inch-Mockup.webp",
    description: "A Full-Stack Productivity & Habit Dashboard.",
    tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
    content: (
        <div className="space-y-12 text-secondary animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white p-4 shadow-lg shrink-0 flex items-center justify-center border border-border/50">
                <img src="https://i.postimg.cc/MpRnw3G9/Chat-GPT-Image-Dec-30-2025-02-17-08-PM.png" className="w-full h-full object-contain" alt="FocusForge Logo" />
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">FocusForge</h3>
                <p className="text-lg md:text-xl font-medium text-primary mt-2">Master Your Habits, Forge Your Future.</p>
                <div className="flex gap-2 justify-center md:justify-start mt-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">Web App</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold border border-purple-500/20">Productivity</span>
                </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-accent/10">
              <img src="https://i.postimg.cc/Tw3FVSLV/pawelzmarlak-2025-12-30T08-41-24-414Z.png" className="w-full h-auto object-cover" alt="FocusForge Dashboard" />
          </div>
  
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Target className="w-4 h-4" /> Overview
                </div>
                <p className="text-lg leading-relaxed">
                    FocusForge is a self-initiated full-stack web application that helps users manage tasks, track habits, and visualize progress over time.
                    The project focuses on <strong>clarity, performance, and scalability</strong>.
                </p>
                <div className="space-y-4 pt-4">
                    <h4 className="font-bold text-foreground">Problem</h4>
                    <p className="text-sm">Most productivity tools are either too complex and overwhelming, or too minimal to be useful long-term. Users struggle with maintaining consistency and understanding progress.</p>
                </div>
            </div>
            <div className="bg-accent/30 p-6 rounded-2xl border border-border">
                <div className="text-sm font-bold text-foreground mb-4">MY ROLE</div>
                <div className="space-y-2">
                    {["Product Design", "Frontend & Backend Dev", "Database Schema", "Dashboard UX"].map(role => (
                        <div key={role} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {role}
                        </div>
                    ))}
                </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Layers className="w-4 h-4" /> Key Features
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { title: "Task Engine", icon: <CheckCircle className="w-5 h-5" />, desc: "Daily task management & sessions" },
                    { title: "Habit Streaks", icon: <Zap className="w-5 h-5" />, desc: "Visual streak tracking system" },
                    { title: "Analytics", icon: <TrendingUp className="w-5 h-5" />, desc: "Weekly & monthly progress charts" },
                    { title: "Dark Mode", icon: <Moon className="w-5 h-5" />, desc: "Optimized for night-time usage" },
                    { title: "Auth", icon: <Shield className="w-5 h-5" />, desc: "Secure user sessions" }
                ].map((feat, i) => (
                    <div key={i} className="p-5 rounded-xl bg-accent/20 border border-border flex flex-col gap-3">
                        <div className="text-primary">{feat.icon}</div>
                        <div>
                            <div className="font-bold text-foreground">{feat.title}</div>
                            <div className="text-xs text-secondary mt-1">{feat.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Code2 className="w-4 h-4" /> Tech Stack & Architecture
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <h4 className="text-sm font-bold text-foreground">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Fastify", "Prisma", "PostgreSQL", "Chart.js"].map(t => (
                            <span key={t} className="px-2 py-1 bg-accent rounded border border-border text-xs font-mono">{t}</span>
                        ))}
                    </div>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-sm font-bold text-foreground">Decisions</h4>
                    <ul className="space-y-2 text-sm">
                        <li>• RESTful API structure</li>
                        <li>• Normalized habit & task schemas</li>
                        <li>• Server-side validation using Zod</li>
                    </ul>
                 </div>
            </div>
          </section>

          <section className="p-6 rounded-2xl bg-accent/30 border border-border">
             <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs mb-4">
                <Lightbulb className="w-4 h-4" /> Outcome & Learnings
            </div>
            <p className="mb-4">FocusForge demonstrates full-stack architecture thinking, data visualization skills, and dashboard UX design tailored for real-world scalability.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-border/50">
                <div className="text-sm"><strong>UX Clarity:</strong> Critical for dashboards</div>
                <div className="text-sm"><strong>Backend:</strong> Decisions affect frontend simplicity</div>
                <div className="text-sm"><strong>Simplicity:</strong> Fewer features = better usability</div>
            </div>
          </section>
        </div>
      )
  },
  {
    id: 3,
    title: "Pulse",
    category: "Mobile App",
    image: "https://i.postimg.cc/VLXSQH5Q/Chat-GPT-Image-Dec-30-2025-02-19-55-PM.png",
    description: "A Mobile Habit & Mood Tracking App.",
    tags: ["React Native", "TypeScript", "Expo"],
    content: (
        <div className="space-y-12 text-secondary animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                 <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
                <h3 className="text-4xl font-extrabold text-foreground">Pulse</h3>
                <p className="text-xl text-secondary mt-2">Habit & Mood Tracking Reimagined.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl max-w-lg mx-auto bg-black">
              <img src="https://i.postimg.cc/WbyZTJw4/Chat-GPT-Image-Dec-29-2025-05-14-51-PM.png" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" alt="Pulse App Preview" />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Target className="w-4 h-4" /> The Concept
                </div>
                <p className="leading-relaxed">
                    Pulse is a mobile app focused on helping users build habits while tracking emotional patterns. 
                    The project emphasizes <strong>emotional design, daily engagement, and simplicity</strong>.
                </p>
                <div className="space-y-2">
                    <h4 className="font-bold text-foreground text-sm">Goals</h4>
                    <ul className="space-y-1 text-sm">
                        <li>• Make habit tracking feel lightweight</li>
                        <li>• Use emotion as feedback, not pressure</li>
                        <li>• Reduce daily friction to near zero</li>
                    </ul>
                </div>
            </div>
            <div className="space-y-6">
                 <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Smartphone className="w-4 h-4" /> Core Features
                </div>
                <div className="grid grid-cols-1 gap-3">
                    {[
                        "Onboarding flow", "Daily habit checklist", "Emoji-based mood tracking", "Streak visualization", "Dark/Light themes"
                    ].map((f, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 border border-border">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
          </section>

          <section className="space-y-6">
             <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Palette className="w-4 h-4" /> Design & Tech
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 border border-pink-500/10">
                    <h4 className="font-bold text-foreground mb-3">Design Decisions</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-pink-500 shrink-0"/> Soft gradients for calm tone</li>
                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-pink-500 shrink-0"/> Large touch targets</li>
                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-pink-500 shrink-0"/> Minimal text, more visuals</li>
                    </ul>
                </div>
                <div className="p-5 rounded-xl bg-accent/20 border border-border">
                     <h4 className="font-bold text-foreground mb-3">Tech Stack</h4>
                     <div className="flex flex-wrap gap-2">
                        {["React Native", "TypeScript", "Expo", "Context API", "AsyncStorage"].map(t => (
                            <span key={t} className="px-2 py-1 bg-background rounded border border-border text-xs">{t}</span>
                        ))}
                     </div>
                </div>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-6 p-6 bg-accent/20 rounded-xl border border-border items-center">
             <div className="shrink-0 p-4 bg-primary/10 rounded-full text-primary">
                <Smartphone className="w-6 h-6" />
             </div>
             <div>
                <h4 className="font-bold text-foreground mb-1">Outcome</h4>
                <p className="text-sm text-secondary">Pulse highlights mobile UX understanding, emotional product design, and cross-platform development skills.</p>
             </div>
          </section>
        </div>
      )
  },
    {
    id: 4,
    title: "Launchpad",
    category: "Marketing Landing Page",
    image: "https://i.postimg.cc/Y9yrYQ9v/Chat-GPT-Image-Dec-30-2025-02-18-15-PM.png",
    description: "A Conversion-Focused Marketing Landing Page.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    content: (
        <div className="space-y-12 text-secondary animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img src="https://i.postimg.cc/3rnJH5FR/pawelzmarlak-2025-12-30T08-38-43-706Z.png" className="w-full h-auto object-cover" alt="Launchpad Preview" />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Rocket className="w-4 h-4" /> Marketing Engine
                </div>
                <h3 className="text-3xl font-bold text-foreground">Built to Convert.</h3>
                <p className="text-lg leading-relaxed">
                    Launchpad is a concept landing page designed to convert early users for an AI-powered resume & portfolio feedback tool. 
                    This project focuses on <strong>marketing psychology and conversion flow</strong> rather than raw feature lists.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                     <div className="p-4 rounded-lg bg-accent/30 border border-border">
                        <div className="font-bold text-foreground text-sm mb-1">Single Goal</div>
                        <div className="text-xs">Guide users to "Join Waitlist"</div>
                     </div>
                     <div className="p-4 rounded-lg bg-accent/30 border border-border">
                        <div className="font-bold text-foreground text-sm mb-1">Psychology</div>
                        <div className="text-xs">Trust signals & Problem/Solution</div>
                     </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-primary/10 to-transparent p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                    <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div>
                    <div className="font-bold text-foreground">Launchpad</div>
                    <div className="text-xs uppercase tracking-widest text-primary font-bold mt-1">Marketing</div>
                </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Zap className="w-4 h-4" /> Page Structure & Flow
            </div>
            <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-2">
                {["Hero Value Prop", "Problem Narrative", "Solution", "Social Proof", "FAQ", "CTA"].map((step, idx) => (
                    <div key={idx} className="min-w-[140px] flex-1 p-4 rounded-xl bg-accent/30 border border-border flex flex-col gap-2 relative group hover:border-primary/50 transition-colors">
                        <span className="absolute top-2 right-2 text-[10px] font-bold text-secondary opacity-50">0{idx + 1}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                        <span className="font-bold text-foreground text-sm">{step}</span>
                    </div>
                ))}
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
                 <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <PenTool className="w-4 h-4" /> Marketing Decisions
                </div>
                <ul className="space-y-3">
                    <li className="flex gap-3 text-sm p-3 rounded-lg bg-accent/20"><Check className="w-4 h-4 text-green-500 shrink-0"/> CTA repeated at strategic scroll points</li>
                    <li className="flex gap-3 text-sm p-3 rounded-lg bg-accent/20"><Check className="w-4 h-4 text-green-500 shrink-0"/> Outcome-focused copy</li>
                    <li className="flex gap-3 text-sm p-3 rounded-lg bg-accent/20"><Check className="w-4 h-4 text-green-500 shrink-0"/> Friendly illustrations to reduce intimidation</li>
                    <li className="flex gap-3 text-sm p-3 rounded-lg bg-accent/20"><Check className="w-4 h-4 text-green-500 shrink-0"/> Clear “early access” framing</li>
                </ul>
             </div>
             <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Code2 className="w-4 h-4" /> Tech & Learnings
                </div>
                <div className="p-5 rounded-xl border border-border space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {["Next.js", "React", "Tailwind CSS", "TypeScript"].map(t => (
                            <span key={t} className="text-xs px-2 py-1 bg-accent rounded border border-border">{t}</span>
                        ))}
                    </div>
                    <div className="border-t border-border pt-4">
                        <p className="text-sm italic">"Copy drives design. Clear positioning beats visual noise. Marketing is UX."</p>
                    </div>
                </div>
             </div>
          </section>
        </div>
      )
  },
  {
    id: 5,
    title: "Aravalli Atlas",
    category: "Awareness Campaign",
    image: "https://i.postimg.cc/1zvs1DpZ/Chat-GPT-Image-Dec-30-2025-02-19-08-PM.png",
    description: "An Educational Data-Driven Web Platform.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    content: (
        <div className="space-y-12 text-secondary animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img src="https://i.postimg.cc/xd1V5qBJ/pawelzmarlak-2025-12-30T08-42-50-347Z.png" className="w-full h-auto object-cover" alt="Aravalli Atlas View" />
          </div>

          <section className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Globe className="w-4 h-4" /> Global Importance
            </div>
            <h3 className="text-3xl font-bold text-foreground">Educating Through Data.</h3>
            <p className="text-lg leading-relaxed">
                Aravalli Atlas is an informational platform presenting environmental data in a neutral, educational format. 
                It avoids emotional manipulation, focusing instead on <strong>information clarity and visual storytelling</strong>.
            </p>
            <div className="flex gap-4 pt-2">
                <div className="px-4 py-2 rounded-lg bg-green-500/10 text-green-600 font-bold text-xs border border-green-500/20">Environmental Data</div>
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs border border-blue-500/20">Education</div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-6">
                 <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Layout className="w-4 h-4" /> Key Sections
                </div>
                <div className="grid grid-cols-1 gap-3">
                    {[
                        { label: "Geographic overview", icon: <Globe className="w-4 h-4" /> },
                        { label: "Ecological importance", icon: <Shield className="w-4 h-4" /> },
                        { label: "Threat analysis", icon: <X className="w-4 h-4" /> },
                        { label: "Data & statistics", icon: <Database className="w-4 h-4" /> }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 border border-border">
                            <div className="text-primary">{item.icon}</div>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
             </div>
             <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <Palette className="w-4 h-4" /> Design Decisions
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-500/10 to-transparent border border-stone-500/20">
                     <ul className="space-y-3">
                        <li className="flex gap-3 text-sm"><div className="w-2 h-2 rounded-full bg-stone-500 mt-1.5"/> Earth-tone palette</li>
                        <li className="flex gap-3 text-sm"><div className="w-2 h-2 rounded-full bg-stone-500 mt-1.5"/> Neutral language</li>
                        <li className="flex gap-3 text-sm"><div className="w-2 h-2 rounded-full bg-stone-500 mt-1.5"/> Visual storytelling over text</li>
                        <li className="flex gap-3 text-sm"><div className="w-2 h-2 rounded-full bg-stone-500 mt-1.5"/> Card-based layout for scannability</li>
                     </ul>
                </div>
             </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <div>
                    <div className="font-bold text-foreground mb-1">Tech Stack</div>
                    <div className="text-sm text-secondary">React, Tailwind CSS, Chart.js, Map-based tools</div>
                 </div>
                 <div className="md:text-right">
                    <div className="font-bold text-foreground mb-1">Key Learning</div>
                    <div className="text-sm text-secondary italic">"Tone affects credibility. Data must be readable to be impactful."</div>
                 </div>
             </div>
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((scrollY / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary to-pink-500 z-[60]" style={{ width: `${scrollProgress}%` }} />
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] rounded-full bg-background/70 backdrop-blur-xl border border-white/10 shadow-xl px-6 py-2.5 max-w-[520px] w-[calc(100%-2rem)] transition-colors duration-300">
        <div className="w-full flex justify-between items-center">
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
          <nav className="hidden md:flex gap-8 relative items-center">
            <button 
              onClick={() => setView('home')}
              className={`text-sm font-medium transition-colors hover:text-foreground relative ${activeView === 'home' ? 'text-foreground' : 'text-secondary'}`}
            >
              Home
              {activeView === 'home' && <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />}
            </button>
            <button 
              onClick={() => setView('projects')}
              className={`text-sm font-medium transition-colors hover:text-foreground relative ${activeView === 'projects' ? 'text-foreground' : 'text-secondary'}`}
            >
              Projects
              {activeView === 'projects' && <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />}
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:itzanshu15@gmail.com'}
              className="text-sm font-medium text-secondary transition-colors hover:text-foreground"
            >
              Contact
            </button>
          </nav>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full bg-accent/50 hover:bg-accent hover:text-foreground h-8 w-8 text-secondary transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button 
              className="md:hidden inline-flex items-center justify-center rounded-full bg-accent/50 hover:bg-accent hover:text-foreground h-8 w-8 text-secondary transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="h-4 w-4"/> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>
      
      {isMobileOpen && (
        <div className="md:hidden fixed top-[72px] left-4 right-4 z-[100] bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl animate-fade-in shadow-2xl p-4">
          <div className="flex flex-col space-y-4 text-center">
            <button onClick={() => { setView('home'); setIsMobileOpen(false); }} className={`font-medium ${activeView === 'home' ? 'text-primary' : 'text-secondary'}`}>Home</button>
            <button onClick={() => { setView('projects'); setIsMobileOpen(false); }} className={`font-medium ${activeView === 'projects' ? 'text-primary' : 'text-secondary'}`}>Projects</button>
            <button onClick={() => { window.location.href='mailto:itzanshu15@gmail.com'; setIsMobileOpen(false); }} className="font-medium text-secondary hover:text-primary">Contact</button>
          </div>
        </div>
      )}
    </>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let rafId: number;
    const onMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
        }
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none z-[9999] hidden md:block"
      style={{ willChange: "transform" }}
    />
  );
};

const Hero = ({ setView }: { setView: (v: string) => void }) => {
  const words = ["Full-Stack Developer", "UI/UX Designer", "Product Builder", "Problem Solver"];
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);
  const [isIdeHovered, setIsIdeHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord(prev => (prev + 1) % words.length);
        setFade(true);
      }, 400); 
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative overflow-hidden transition-colors duration-300 pt-[140px] sm:pt-[160px]">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(128,128,128,0.06) 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="flex flex-col justify-center items-center p-6 min-h-[calc(100vh-120px)] mx-auto relative z-10">
        <div className="w-full max-w-7xl px-4 sm:px-8 md:px-16 xl:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10 pb-24 relative">
          
          {/* Floating Badges */}
          <div className="hidden lg:flex absolute top-[60%] left-0 bg-accent/40 backdrop-blur-md rounded-full px-5 py-2 text-xs font-bold border border-border/50 animate-[float_4s_ease-in-out_infinite] shadow-xl items-center gap-2 z-0">
            <Star className="w-3 h-3 text-yellow-500 fill-current" /> 45+ Projects
          </div>
          <div className="hidden lg:flex absolute top-[35%] right-[5%] bg-accent/40 backdrop-blur-md rounded-full px-5 py-2 text-xs font-bold border border-border/50 animate-[float_5s_ease-in-out_infinite] shadow-xl items-center gap-2 z-0" style={{ animationDelay: '1s' }}>
            <Zap className="w-3 h-3 text-primary" /> Available Now
          </div>
          <div className="hidden lg:flex absolute top-[75%] right-[10%] bg-accent/40 backdrop-blur-md rounded-full px-5 py-2 text-xs font-bold border border-border/50 animate-[float_6s_ease-in-out_infinite] shadow-xl items-center gap-2 z-0" style={{ animationDelay: '2s' }}>
            <MapPin className="w-3 h-3 text-green-500" /> Based in India
          </div>
          
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            <div className="relative mb-8 w-full sm:w-auto">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 pointer-events-none"></div>
              <div className="relative flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-start w-full sm:w-auto gap-4 sm:gap-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-background shadow-[0_0_0_4px_rgba(139,92,246,0.3)] relative shrink-0 bg-gradient-gray z-10 transition-transform duration-500 hover:scale-105 animate-float">
                    <img 
                        src="https://i.postimg.cc/ncz7LHTL/Picsart-25-12-28-09-53-36-443.webp" 
                        alt="Anshunav Avatar" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-border flex items-center gap-3 shadow-lg mt-2 sm:mt-0 self-center sm:self-end sm:mb-4">
                  <span className="relative flex w-3 h-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-bold text-foreground tracking-wide">Available for work</span>
                </div>
              </div>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6">
              <span className="block text-foreground/60 mb-2">Hey, I'm</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text block pb-2">Anshunav</span>
              <span className={`block text-foreground transition-opacity duration-400 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>{words[currentWord]}</span>
            </h1>

            <div className="max-w-[500px] mb-10">
              <p className="text-lg md:text-xl text-secondary leading-relaxed font-medium">
                A full-stack developer with a strong design and marketing mindset.
                I build digital products that are clear, usable, and built for growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setView('projects')}
                className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-background shadow-xl w-full sm:w-auto hover:scale-105 transition-transform"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_50%,#ec4899_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-8 py-2 text-base font-bold text-foreground backdrop-blur-3xl transition-colors hover:bg-background/80">
                   View Projects <ArrowRight className="ml-2 h-5 w-5 hover:translate-x-1 transition-transform" /> 
                </span>
              </button>

              <a 
                href="mailto:itzanshu15@gmail.com"
                className="group relative inline-flex items-center justify-center rounded-full text-base font-bold border border-border bg-transparent hover:text-foreground text-secondary h-14 px-8 shadow-xl transition-all overflow-hidden w-full sm:w-auto hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                    Contact Me
                </span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end perspective relative w-full mt-12 lg:mt-0">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-[80px] opacity-20 pointer-events-none"></div>
             
             {/* Fake IDE Window */}
             <div 
                className="w-full max-w-[500px] bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 group relative"
                onMouseEnter={() => setIsIdeHovered(true)}
                onMouseLeave={() => setIsIdeHovered(false)}
                style={{ 
                  transform: isIdeHovered ? 'perspective(1200px) rotateY(0deg) rotateX(0deg)' : 'perspective(1200px) rotateY(-6deg) rotateX(3deg)', 
                  transition: 'transform 0.7s ease-out' 
                }}
             >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                   </div>
                   <div className="ml-4 text-xs font-mono text-zinc-500">developer.ts</div>
                </div>
                <div className="p-6 font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto text-zinc-300">
                    <div><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> <span className="text-pink-500">=</span> {'{'}</div>
                    <div className="pl-6"><span className="text-zinc-500">name:</span> <span className="text-green-400">'Anshunav Bora'</span>,</div>
                    <div className="pl-6"><span className="text-zinc-500">role:</span> <span className="text-green-400">'Full-Stack Engineer'</span>,</div>
                    <div className="pl-6"><span className="text-zinc-500">passion:</span> <span className="text-green-400">'Building scalable products'</span>,</div>
                    <div className="pl-6"><span className="text-zinc-500">focus:</span> ['<span className="text-orange-300">UI/UX</span>', '<span className="text-orange-300">Next.js</span>', '<span className="text-orange-300">Performance</span>'],</div>
                    <div className="pl-6 pt-2"><span className="text-blue-400">createExperience</span>() {'{'}</div>
                    <div className="pl-12"><span className="text-pink-500">return</span> <span className="text-zinc-500">this</span>.design + <span className="text-zinc-500">this</span>.code;</div>
                    <div className="pl-6">{'}'}</div>
                    <div>{'}'};</div>
                    <div className="pt-4"><span className="text-blue-400">developer</span>.<span className="text-purple-400">createExperience</span>();</div>
                    <div className="mt-4 flex items-center">
                        <span className="animate-pulse w-2 h-5 bg-pink-500 inline-block"></span>
                    </div>
                </div>
             </div>
          </div>
          
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-border/50 bg-background/80 backdrop-blur-md py-4 pointer-events-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="animate-marquee flex gap-8 text-sm font-mono font-bold text-foreground/80 uppercase tracking-widest min-w-max">
            {Array(4).fill("Next.js ★ React ★ TypeScript ★ Node.js ★ Tailwind CSS ★ PostgreSQL ★ Figma ★ Prisma ★ Docker ★ ").join("")}
          </div>
        </div>
      </div>
    </main>
  );
};

const AboutSection = () => {
  const [ref, visible] = useScrollReveal();
  return (
    <section className="px-4 sm:px-8 md:px-16 xl:px-52 pt-20 pb-8 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={ref}
          className={`text-2xl font-bold mb-8 text-foreground items-center flex gap-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          About Me <Sparkles className="w-5 h-5 text-primary" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Bio Card - Row 1, Col 1-2 */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-accent/20 p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-center relative overflow-hidden group" style={{ borderLeft: '4px solid rgba(139,92,246,0.6)' }}>
            <div className="absolute top-[-0.15em] right-0 text-[10rem] font-black opacity-5 pointer-events-none select-none text-foreground group-hover:scale-105 transition-transform duration-700 ease-out leading-none">
              AB
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground relative z-10">Who I am</h3>
            <p className="text-secondary text-base sm:text-lg leading-relaxed relative z-10">
              I'm a full-stack developer from India 🇮🇳, obsessed with building products that are both beautiful and functional. I bridge the gap between design and engineering, ensuring every pixel looks right and every interaction feels crisp.
            </p>
          </div>
          
          {/* GitHub Card - Row 1, Col 3 */}
          <div className="rounded-2xl border border-border bg-accent/20 dark:bg-[#0d1117] p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center text-center group block w-full relative overflow-hidden">
            <a href="https://github.com/rettogotbugs" target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col items-center justify-center relative z-10">
              <div className="flex items-center gap-2 mb-3">
                 <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                 <h3 className="font-bold text-foreground">@rettogotbugs</h3>
              </div>
              <p className="text-xs text-secondary mb-4">Follow my open source work</p>
              
              {/* Mock GitHub Contribution Grid */}
              <div className="grid grid-cols-6 gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                {Array.from({length: 18}).map((_, i) => {
                  const isGreen = Math.random() > 0.4;
                  return (
                    <div 
                       key={i} 
                       className={`w-3 h-3 rounded-[2px] transition-colors duration-500 delay-${i * 50} ${isGreen ? 'bg-green-500/80' : 'bg-border/50'}`}
                    />
                  );
                })}
              </div>
            </a>
          </div>

          {/* Stack Highlights Card - Row 2, Col 1 */}
          <div className="rounded-2xl border border-border bg-accent/20 p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
            <h3 className="text-sm font-semibold mb-4 text-secondary uppercase tracking-wider">Stack Highlights</h3>
            <div className="flex flex-wrap gap-2 text-sm font-medium text-foreground mt-auto">
               {["React", "TypeScript", "Next.js", "Node.js", "Tailwind"].map(t => (
                 <span key={t} className="px-3 py-1 bg-background border border-border rounded-lg shadow-sm hover:border-primary/40 transition-colors">{t}</span>
               ))}
            </div>
          </div>

          {/* Fun Fact Card - Row 2, Col 2 */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-orange-500/10 to-pink-500/10 p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-pink-500/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
                <span className="text-3xl mb-3 block">🎨</span>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  I've been designing digital experiences and exploring color theory since I was 15.
                </p>
            </div>
          </div>

          {/* Currently Learning Card - Row 2, Col 3 */}
          <div className="rounded-2xl border border-border p-6 shadow-sm overflow-hidden relative group/learn hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-pink-500/10 opacity-50"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
               <h3 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wider">Currently Learning</h3>
               <p className="text-base font-bold text-foreground flex flex-col gap-1 mt-auto">
                 Advanced Systems Design & WebGL 
                 <Globe className="w-5 h-5 text-primary group-hover/learn:rotate-180 transition-transform duration-700 mt-2" />
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ setView }: { setView: (v: string) => void }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const cardStyles = [
    "border-t-4 border-t-purple-500",
    "border-t-4 border-t-blue-500 bg-gradient-to-b from-blue-500/5 to-transparent shadow-xl md:scale-[1.02] md:-translate-y-2",
    "border-t-4 border-t-pink-500"
  ];

  return (
    <section className="relative flex flex-col px-4 sm:px-8 md:px-16 xl:px-52 bg-background pt-12 pb-24 transition-colors duration-300 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-10 text-[150px] font-black opacity-[0.06] select-none pointer-events-none text-foreground leading-none z-0">
        01
      </div>
      
      <div className="relative z-10 mb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">01 — What I Do</div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">Building Digital Experiences</h1>
        <p className="text-secondary text-lg max-w-2xl leading-relaxed">
          I specialize in creating stunning user interfaces and developing high-quality applications that stand out in the modern web.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 pt-4 items-stretch">
        {[
          {
            icon: <Layout className="w-8 h-8" />,
            title: "What I can do",
            desc: "I can help develop solutions that will help you grow your business:",
            items: ["UI/UX Design", "Fullstack Web Development", "Mobile App Development", "Shopify & WordPress Development", "Database Design", "API Integration"]
          },
          {
            icon: <Code2 className="w-8 h-8" />,
            title: "Tools & Tech Stack",
            desc: "I use the latest tools and technologies to build functional and scalable products:",
            groups: [
              { category: "Frontend", icon: <Globe className="w-4 h-4" />, tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"] },
              { category: "Backend", icon: <Server className="w-4 h-4" />, tools: ["Node.js", "Fastify", "PostgreSQL", "Prisma ORM", "Redis"] },
              { category: "DevOps & Tools", icon: <Cpu className="w-4 h-4" />, tools: ["Vercel", "Docker", "Git & GitHub", "Zod"] },
              { category: "Design", icon: <Palette className="w-4 h-4" />, tools: ["Figma", "Framer", "Photoshop"] }
            ]
          },
          {
            icon: <Palette className="w-8 h-8" />,
            title: "UI/UX Design",
            desc: "I focus on creating interfaces that feel natural, purposeful, and effortless to use.",
            quote: `"Design isn’t just how it looks — it’s how it works."`,
            items: ["User-first design decisions", "Clean, minimal & modern aesthetics", "Responsive across all devices", "Design systems & scalable components", "Wireframes → Prototypes → Final UI"]
          }
        ].map((card, index) => (
          <div 
            key={index} 
            className={`flex flex-col border border-border rounded-2xl p-6 sm:p-8 bg-accent/10 backdrop-blur-lg hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group opacity-0 ${cardStyles[index]}`}
            style={{
              animation: isInView ? `fadeUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s forwards` : 'none'
            }}
          >
            <div className="flex pb-6 items-center gap-4">
              <div className="text-primary bg-primary/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-primary/20 shadow-inner">
                 {card.icon}
               </div>
              <h2 className="text-2xl font-bold text-foreground">{card.title}</h2>
            </div>
            {card.quote && (
              <div className="relative mb-6 group/quote">
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg opacity-20 blur transition duration-500 group-hover/quote:opacity-40"></div>
                 <div className="relative p-5 bg-background rounded-lg border border-border">
                    <Quote className="w-5 h-5 text-primary/60 mb-2" />
                    <p className="text-base italic font-medium text-foreground leading-relaxed">{card.quote}</p>
                 </div>
              </div>
            )}
            <p className="text-secondary pb-6 text-sm leading-relaxed">{card.desc}</p>
            
            {card.items && (
              <ul className="space-y-3 mt-4 text-foreground/80">
                {card.items.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-secondary text-sm group/item">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="group-hover/item:text-foreground transition-colors duration-300 leading-tight">{item}</span>
                   </li>
                ))}
              </ul>
            )}
            
            {card.groups && (
              <div className="space-y-5 mt-auto">
                 {card.groups.map((group, idx) => (
                    <div key={idx}>
                       <h3 className="text-xs font-bold text-foreground mb-2 flex items-center gap-2 uppercase tracking-wide">
                          <div className="text-primary">{group.icon}</div>
                          {group.category}
                       </h3>
                       <div className="flex flex-wrap gap-2">
                          {group.tools.map((tool, tIdx) => (
                             <span key={tIdx} className="px-2.5 py-1 text-xs rounded border border-border bg-background text-secondary hover:border-primary/50 hover:text-primary transition-all duration-300">{tool}</span>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

const AnimatedCounter = ({ end, suffix = "", startAnimation }: { end: number, suffix?: string, startAnimation: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    
    let startTime: number;
    let animationFrame: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, startAnimation]);

  return <>{count}{suffix}</>;
};

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    { label: "Years Experience", value: 3, suffix: "+", icon: <Clock className="w-8 h-8" />, color: "text-orange-500", glow: "from-orange-500/20" },
    { label: "Projects Completed", value: 45, suffix: "+", icon: <Briefcase className="w-8 h-8" />, color: "text-blue-500", glow: "from-blue-500/20" },
    { label: "Happy Clients", value: 98, suffix: "%", icon: <CheckCircle className="w-8 h-8" />, color: "text-green-500", glow: "from-green-500/20" },
    { label: "Cups of Coffee", value: 500, suffix: "+", icon: <Coffee className="w-8 h-8" />, color: "text-purple-500", glow: "from-purple-500/20" },
  ];

  return (
    <section className="relative px-4 sm:px-8 md:px-16 xl:px-52 py-16 md:py-24 bg-background transition-colors duration-300 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, #8b5cf640, transparent)' }}></div>
      <div className="absolute top-0 right-4 sm:right-10 text-[80px] sm:text-[120px] lg:text-[150px] font-black opacity-[0.06] select-none pointer-events-none text-foreground leading-none z-0">
        02
      </div>
      <div className="relative z-10 text-xs uppercase tracking-[0.3em] text-primary font-bold mb-8">02 — By the numbers</div>
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 group space-y-4 hover:scale-105 transition-transform duration-300">
            <div className={`relative p-4 rounded-2xl bg-accent/30 border border-border group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.glow} to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500`}></div>
              <div className="relative z-10">{stat.icon}</div>
            </div>
            <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.glow} blur-2xl opacity-40 rounded-full transition-opacity duration-500`}></div>
                <h3 className="relative z-10 text-4xl md:text-6xl font-black gradient-text tabular-nums tracking-tighter drop-shadow-sm flex items-center">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} startAnimation={isInView} />
                </h3>
            </div>
            <p className="text-sm md:text-base font-bold text-secondary uppercase tracking-wide text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "itzanshu15@gmail.com";
  const [ref, visible] = useScrollReveal();
  
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative px-4 sm:px-8 md:px-16 xl:px-52 bg-background py-32 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 right-4 sm:right-10 text-[80px] sm:text-[120px] lg:text-[150px] font-black opacity-[0.06] select-none pointer-events-none text-foreground leading-none z-0">
        04
      </div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <div 
        ref={ref}
        className={`relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-2">04 — Get In Touch</div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-tight relative">
          Let's build something <br className="hidden sm:block" />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mt-2 pb-1" style={{ display: 'inline-block', position: 'relative' }}>
            amazing
            <div className="absolute bottom-0 left-0 w-full h-[4px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </span> together.
        </h1>
        
        <p className="text-lg md:text-2xl text-secondary max-w-3xl mt-6 font-medium">Whether you have a project in mind, need a consultation, or just want to chat—I'm always open to discussing new ideas.</p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 w-full justify-center">
            <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <button 
                  onClick={handleCopy} 
                  className={`relative flex items-center justify-between gap-4 px-6 sm:px-8 py-5 bg-background rounded-xl border border-border leading-none transition-all duration-300 active:scale-95 w-full sm:w-auto sm:min-w-[320px] ${copied ? 'border-green-500/50 bg-green-500/5' : ''}`}
                >
                    <span className="flex items-center gap-3 text-lg font-bold text-foreground truncate">
                      <Mail className={`w-6 h-6 shrink-0 transition-colors ${copied ? 'text-green-500' : 'text-primary'}`} />
                      <span className="truncate">{email}</span>
                    </span>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 shrink-0 transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-accent text-secondary group-hover:text-foreground'}`}>
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? "COPIED!" : "COPY"}
                    </span>
                </button>
            </div>
            <a href={`mailto:${email}`} className="px-10 py-5 rounded-xl bg-foreground text-background font-black text-lg hover:bg-foreground/90 hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto text-center border overflow-hidden relative group">
              <span className="relative z-10">Send Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
        </div>
        
        <div className="flex items-center gap-10 mt-20 pt-16 border-t border-border/50 w-full justify-center">
            <a href="https://x.com/AnshunavBora" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-secondary hover:text-foreground transition-all duration-300 group hover:-translate-y-2 active:scale-95">
              <div className="p-4 rounded-xl bg-accent/50 group-hover:bg-primary/20 transition-colors shadow-sm"><Twitter className="w-7 h-7" /></div>
              <span className="text-sm font-bold tracking-wide uppercase">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/anshunavbora" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-secondary hover:text-foreground transition-all duration-300 group hover:-translate-y-2 active:scale-95">
              <div className="p-4 rounded-xl bg-accent/50 group-hover:bg-primary/20 transition-colors shadow-sm"><Linkedin className="w-7 h-7" /></div>
              <span className="text-sm font-bold tracking-wide uppercase">LinkedIn</span>
            </a>
            <a href="https://github.com/rettogotbugs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-secondary hover:text-foreground transition-all duration-300 group hover:-translate-y-2 active:scale-95">
              <div className="p-4 rounded-xl bg-accent/50 group-hover:bg-primary/20 transition-colors shadow-sm"><Github className="w-7 h-7" /></div>
              <span className="text-sm font-bold tracking-wide uppercase">GitHub</span>
            </a>
            <a href="https://dribbble.com/itzAnshu15" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-secondary hover:text-foreground transition-all duration-300 group hover:-translate-y-2 active:scale-95">
              <div className="p-4 rounded-xl bg-accent/50 group-hover:bg-primary/20 transition-colors shadow-sm"><Dribbble className="w-7 h-7" /></div>
              <span className="text-sm font-bold tracking-wide uppercase">Dribbble</span>
            </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background transition-colors duration-300 relative overflow-hidden flex flex-col">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[70px] sm:text-[110px] md:text-[160px] font-black text-foreground/5 whitespace-nowrap flex items-center justify-center tracking-tighter">
          ANSHUNAV
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 xl:px-52 pt-8 pb-8 relative z-10 backdrop-blur-sm bg-background/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-black text-foreground mb-2 mt-1">Anshunav Bora</h2>
              <div className="flex items-center gap-2 text-secondary font-medium"><span className="text-xl">🇮🇳</span><p>Based In India</p></div>
            </div>
            <p className="text-secondary font-medium max-w-sm md:text-right">Designed with intention.<br/>Built with React & Tailwind CSS.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
            <p className="text-sm font-bold text-secondary tracking-wide uppercase">© {new Date().getFullYear()} Anshunav. All rights reserved.</p>
            <div className="flex items-center gap-6 text-secondary">
                <a href="https://github.com/rettogotbugs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all"><Github className="w-5 h-5"/></a>
                <a href="https://dribbble.com/itzAnshu15" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all"><Dribbble className="w-5 h-5"/></a>
                <a href="https://www.linkedin.com/in/anshunavbora" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all"><Linkedin className="w-5 h-5"/></a>
                <a href="https://x.com/AnshunavBora" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all"><Twitter className="w-5 h-5"/></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

const ProjectCard: React.FC<{ project: Project, onClick: () => void, className?: string }> = ({ project, onClick, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} 
      className={`group bg-accent/20 rounded-2xl overflow-hidden border border-border hover:border-primary/60 transition-all duration-300 ease-out cursor-pointer relative shadow-sm hover:shadow-lg hover:shadow-primary/10 ${project.isFeatured && className.includes('md:grid') ? 'min-h-[360px]' : ''} ${className}`}
      style={{ transition: 'box-shadow 0.3s ease-out, border 0.3s ease-out' }}
    >
      {project.isFeatured && (
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> FEATURED
          </div>
      )}
      <div className={`${project.isFeatured && className.includes('md:grid') ? 'h-72 md:h-full md:min-h-[360px]' : 'h-56'} overflow-hidden relative`}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center pb-8">
            <div className="flex flex-col items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-black text-lg">Open Case Study</span>
                <span className="text-white/80 text-lg">→</span>
            </div>
        </div>
      </div>
      <div className={`p-6 sm:p-8 flex flex-col justify-center ${project.isFeatured && className.includes('md:grid') ? '' : ''}`}>
        <div className="flex justify-between items-start mb-3">
          <h3 className={`${project.isFeatured && className.includes('md:grid') ? 'text-2xl sm:text-3xl' : 'text-xl'} font-bold text-foreground group-hover:text-primary transition-colors duration-300`}>{project.title}</h3>
          <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wider font-bold whitespace-nowrap ml-4">{project.category}</span>
        </div>
        <p className={`text-secondary text-sm ${project.isFeatured && className.includes('md:grid') ? 'sm:text-base mb-6' : 'mb-5 line-clamp-2'} leading-relaxed`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-[11px] font-medium text-secondary bg-background border border-border px-2.5 py-1 rounded-md">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailsModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
    useEffect(() => { 
        document.body.style.overflow = 'hidden'; 
        return () => { document.body.style.overflow = 'unset'; } 
    }, []);

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
            <div className="relative bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-border flex flex-col">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/60 backdrop-blur-md transition-colors z-20 shadow-lg border border-white/10"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="h-64 sm:h-[400px] w-full relative shrink-0">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                     <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6">
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono font-bold mb-4 inline-block border border-primary/20 backdrop-blur-sm tracking-wider uppercase">
                            {project.category}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight drop-shadow-md">{project.title}</h2>
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
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Portfolio', 'Fullstack Web App', 'Mobile App', 'Marketing Landing Page', 'Awareness Campaign'];

    const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

    return (
        <div className="relative py-24 px-4 sm:px-8 md:px-16 xl:px-52 min-h-[calc(100vh-100px)] animate-fade-in bg-background transition-colors duration-300 overflow-hidden">
             <div className="absolute top-0 right-10 text-[150px] font-black opacity-[0.06] select-none pointer-events-none text-foreground leading-none z-0">
               03
             </div>
             <div className="relative z-10 mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">03 — Selected Work</div>
                <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4 tracking-tight">Featured Projects</h1>
                <p className="text-secondary text-lg max-w-2xl">A curated selection of my recent design and development work. Click on any project to read the detailed case study.</p>
             </div>
             
             <div className="relative z-10 flex flex-wrap gap-2 mb-8">
               {categories.map(cat => (
                 <button 
                   key={cat} 
                   onClick={() => setFilter(cat)} 
                   className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-accent/30 text-secondary hover:text-foreground border border-transparent hover:border-border'}`}
                 >
                   {cat.replace('Marketing Landing Page', 'Landing Page').replace('Awareness Campaign', 'Campaign')}
                 </button>
               ))}
             </div>

             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((p, index) => (
                    <ProjectCard 
                      key={p.id} 
                      project={p} 
                      onClick={() => setSelectedProject(p)}
                      className={index === 0 && filter === 'All' ? "md:col-span-2 lg:col-span-3 md:grid md:grid-cols-2" : ""}
                    />
                ))}
             </div>

             {selectedProject && (
                 <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
             )}
        </div>
    );
};

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 hover:bg-primary/40 flex items-center justify-center text-primary shadow-lg transition-all hover:scale-110 active:scale-95 animate-fade-in"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
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
      <CustomCursor />
      <BackToTop />
      <Navbar 
        activeView={activeView} 
        setView={setActiveView} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      {activeView === 'home' ? (
        <>
            <Hero setView={setActiveView} />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <AboutSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <ServicesSection setView={setActiveView} />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <StatsSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
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