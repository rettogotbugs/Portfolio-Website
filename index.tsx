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
  Monitor
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
              <a 
                href="mailto:itzanshu15@gmail.com"
                className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-xl w-full sm:w-auto"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_50%,#ec4899_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-6 py-2 text-sm font-bold text-foreground backdrop-blur-3xl transition-colors hover:bg-background/80">
                  <AtSign className="mr-2 h-5 w-5" /> Contact Me
                </span>
              </a>

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
               { category: "Frontend", icon: <Globe className="w-4 h-4" />, tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"] },
               { category: "Backend", icon: <Server className="w-4 h-4" />, tools: ["Node.js", "Fastify", "PostgreSQL", "Prisma ORM", "Redis"] },
               { category: "DevOps & Tools", icon: <Cpu className="w-4 h-4" />, tools: ["Vercel", "Docker", "Git & GitHub", "Zod"] },
               { category: "Design", icon: <Palette className="w-4 h-4" />, tools: ["Figma", "Framer", "Photoshop"] }
             ].map((group, idx) => (
                <div key={idx}>
                   <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="p-1 rounded bg-primary/10 text-primary">{group.icon}</div>
                      {group.category}
                   </h3>
                   <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool, tIdx) => (
                         <span key={tIdx} className="px-2.5 py-1 text-xs rounded-md bg-accent border border-border text-secondary hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default select-none">{tool}</span>
                      ))}
                   </div>
                </div>
             ))}
          </div>
        </div>

        <div className="flex flex-col border border-border rounded-xl p-6 sm:p-8 bg-gradient-gray backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
          <div className="flex pb-4 items-center gap-4">
            <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
               <Palette className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">UI/UX Design</h1>
          </div>
          <div className="relative my-6 group/quote">
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

const AnimatedCounter = ({ value, suffix }: { value: number, suffix: string }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let startTimestamp: number | null = null;
        const duration = 2000;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(ease * value));
            if (progress < 1) window.requestAnimationFrame(step);
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
            <div className="flex items-center gap-2 mb-2 bg-background p-2 rounded-full shadow-sm border border-border">{stat.icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold gradient-text tabular-nums"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></h3>
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-sm font-bold tracking-wider text-primary uppercase">Get In Touch</h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">amazing</span> together.</h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl">Whether you have a project in mind, need a consultation, or just want to say hi—I'm always open to discussing new ideas.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center">
            <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <button onClick={handleCopy} className="relative flex items-center justify-between gap-3 px-4 sm:px-8 py-4 bg-background rounded-lg border border-border leading-none transition-transform active:scale-95 w-full sm:w-auto sm:min-w-[300px]">
                    <span className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium text-foreground truncate"><Mail className="w-5 h-5 text-secondary shrink-0" /><span className="truncate">{email}</span></span>
                    <span className="text-xs font-bold text-secondary bg-accent px-2 py-1 rounded flex items-center gap-1 shrink-0">{copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}{copied ? "COPIED" : "COPY"}</span>
                </button>
            </div>
            <a href={`mailto:${email}`} className="px-8 py-4 rounded-lg bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors shadow-lg w-full sm:w-auto text-center">Send Email</a>
        </div>
        <div className="flex items-center gap-8 mt-12 pt-12 border-t border-border/50 w-full justify-center">
            <a href="https://x.com/AnshunavBora" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group"><div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors"><Twitter className="w-6 h-6" /></div><span className="text-xs font-medium">Twitter</span></a>
            <a href="https://www.linkedin.com/in/anshunavbora" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group"><div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors"><Linkedin className="w-6 h-6" /></div><span className="text-xs font-medium">LinkedIn</span></a>
            <a href="https://github.com/rettogotbugs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group"><div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors"><Github className="w-6 h-6" /></div><span className="text-xs font-medium">GitHub</span></a>
            <a href="https://dribbble.com/itzAnshu15" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors group"><div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors"><Dribbble className="w-6 h-6" /></div><span className="text-xs font-medium">Dribbble</span></a>
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
            <div><h2 className="text-xl font-bold text-foreground mb-2">Anshunav Bora</h2><div className="flex items-center gap-2 text-secondary"><span className="text-xl">🇮🇳</span><p>Based In India</p></div></div>
            <p className="text-secondary max-w-sm">Website Designed in Figma. Built with React, TypeScript and Tailwind CSS.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
            <p className="text-sm text-secondary">© {new Date().getFullYear()} Anshunav. All rights are reserved.</p>
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
    <div onClick={onClick} className="group bg-accent/20 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer relative">
      {project.isFeatured && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Featured Case Study
          </div>
      )}
      <div className="h-48 overflow-hidden relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><button className="px-4 py-2 bg-white text-black rounded-full font-medium text-sm">View Details</button></div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2"><h3 className="text-xl font-bold text-foreground">{project.title}</h3><span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{project.category}</span></div>
        <p className="text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">{project.tags.map(tag => (<span key={tag} className="text-xs text-secondary bg-background border border-border px-2 py-1 rounded">{tag}</span>))}</div>
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
                <p className="text-secondary">Here are some of the projects I've worked on recently. Click on a card to view detailed case studies.</p>
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
