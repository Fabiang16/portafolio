import Image from 'next/image';
import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Home | Fabian Godoy',
  description: 'Portfolio of Fabian Godoy, Software Engineering student and Full-Stack Developer.',
};

// --- Components for Experience and Skills cards ---

function WorkItem({ logo, company, title, date }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-brand-dark/5 ring-1 ring-brand-card border border-brand-card/50 bg-brand-dark overflow-hidden">
        {logo}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-brand-text">{company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-brand-muted">{title}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-brand-muted/80">{date}</dd>
      </dl>
    </div>
  );
}

function SkillItem({ name, icon, progress }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex h-8 w-8 flex-none items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col w-full gap-1">
        <span className="text-xs font-medium text-brand-text">{name}</span>
        <div className="h-2 w-full bg-brand-card rounded-full overflow-hidden">
          <div className="h-full bg-brand-primary rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-12 mt-4 sm:mt-8">
      
      {/* 1. MAIN HERO SECTION */}
      <div className="flex flex-col items-start justify-center gap-8 max-w-3xl">
        
        {/* Profile Picture / Avatar */}
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-brand-card/50 shadow-sm">
          <Image 
            src="/Picture.jpg" 
            alt="Fabian Godoy" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-card/50 text-brand-primary text-sm font-mono shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          Welcome to my workspace
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-brand-text leading-tight">
          Building structured solutions and <span className="text-brand-primary">seamless experiences.</span>
        </h1>

        {/* Short Bio */}
        <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl">
          Hi, I&apos;m Fabian Godoy. I&apos;m a Software Engineering student bridging the gap between scalable full-stack development, user-centered design, and technical project management.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <Button href="/projects" variant="primary">
            Explore My Projects
          </Button>
          
          <Button href="/about" variant="secondary">
            More About Me
          </Button>
        </div>
      </div>

      {/* 2. EXPERIENCE AND SKILLS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        
        {/* Work / Experience Card */}
        <div className="rounded-2xl border border-brand-card/50 p-6 flex flex-col gap-6">
          <h2 className="flex text-sm font-semibold text-brand-text items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 stroke-brand-muted"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"></path><path d="M3 9.75a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3V8.25a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1.5Z"></path><path d="M7 22.25h10"></path><path d="M12 22.25v-3"></path></svg>
            Experience
          </h2>
          <div className="flex flex-col gap-5">
            <WorkItem 
              logo={<span className="text-brand-primary font-mono text-xs font-bold">EG</span>} 
              company="EnsignGo" 
              title="Project Lead & Dev" 
              date="2025 - Present" 
            />
            <WorkItem 
              logo={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-emerald-500"><path d="M5.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-6.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>} 
              company="Wrike Integration" 
              title="Workflow Automation" 
              date="2026" 
            />
            <WorkItem 
              logo={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#F24E1E]"><path d="M8 12a4 4 0 1 0 0-8h4v8H8z"/><path fill="#A259FF" d="M8 12a4 4 0 1 0 0 8h4v-8H8z"/><path fill="#1ABCFE" d="M12 16a4 4 0 1 0 0-8h4v8h-4z"/><path fill="#0ACF83" d="M16 16a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"/><path fill="#FF7262" d="M12 4a4 4 0 1 0 0 8h4V4h-4z"/></svg>} 
              company="Figma UI/UX" 
              title="Design Systems" 
              date="2026" 
            />
            <WorkItem 
              logo={<span className="text-blue-500 font-mono text-xs font-bold">BYU</span>} 
              company="BYU-Pathway / Ensign" 
              title="Software Engineering" 
              date="2024 - Present" 
            />
          </div>
        </div>

        {/* Skills Card */}
        <div className="rounded-2xl border border-brand-card/50 p-6 flex flex-col gap-6">
          <h2 className="flex text-sm font-semibold text-brand-text items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 stroke-brand-muted"><path d="M13 2.05v3m0 13.9v3M5.05 5.05l2.12 2.12m9.66 9.66 2.12 2.12M2.05 13h3m13.9 0h3M5.05 20.95l2.12-2.12m9.66-9.66 2.12-2.12M13 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path></svg>
            Skills
          </h2>
          <div className="flex flex-col gap-4">
            <SkillItem 
              name="Java" 
              progress={80}
              icon={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#5382a1]"><path d="M14.36 10.3c.09-.54-.53-.78-.53-.78s-.68-.26-1.5-.17c-2.47.28-4.5.37-4.5.37l-.27 2.15s2.2-.09 4.3-.33c.8-.09 2.4-.66 2.5-1.24m-1.74 2.87c-1.3.26-3.13.38-3.13.38l-.27 1.84s1.7-.09 3.03-.28c1.37-.2 2.53-.87 2.53-1.42 0-.6-.94-.8-2.16-.52m-3.4 3.7c1.4-.23 2.14-.54 2.14-.85 0-.25-.43-.45-1.12-.58l-.25 1.77c-.1.01-.4.04-.77.06zM15.4 6.72c.63-.5.48-1.42.48-1.42s-.14-.72-1.35-.9c0 0-1.24-.18-1.5.38 0 0-.26.54.54 1.08.8.54 1.2 1.36 1.2 1.36s.48.96-.34 1.34c0 0-1.1.48-1.8.18 0 0-.46-.22-.38-.72 0 0 .1-.56 1.05-.66l.33-1.32c-1.63.24-2.14 1.44-2.14 1.44s-.6 1.44.75 2.22c0 0 1.36.78 1.63 1.8 0 0 .26 1.02-.9 1.62-.06.03-.13.06-.2.09l.34 2c2.05-.72 2.1-2.22 2.1-2.22s.18-1.62-1.15-2.28c0 0-1.34-.66-.8-1.56 0 0 .34-.6 1.15-.42zM1.98 17.52c0 .66.85 1.2 1.9 1.2h.5l.38-2.76h-.88c-1.05 0-1.9.54-1.9 1.2M23.1 11.58c0 0-.3-4.85-6.52-5.46v15.6c0 0 6.64-.18 6.64-5.28m-2.22-.06c0 1.8-2.22 1.86-2.22 1.86v-6.3c0 0 2.22-.24 2.22 2.04M16.44 23.4l-.24-1.68h-5.22l-.24 1.68h5.7zM9.5 20.46l.24-1.68H4.6l-.24 1.68h5.14z"/></svg>} 
            />
            <SkillItem 
              name="Python" 
              progress={75}
              icon={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#3776AB]"><path d="M12.01 2.04c-2.43 0-4.57.06-6.19.2-2.1.2-2.92.93-3.23 2.11-.34 1.3-.34 4.07-.34 4.07h6.41v.86H2.65S2 11.23 2 13.92c0 2.68.65 4.62 2.14 5.39 1.32.68 3.55.8 5.86.8h2.01c2.43 0 4.58-.06 6.19-.2 2.1-.2 2.92-.93 3.23-2.1.34-1.3.34-4.08.34-4.08h-6.41v-.85h6.01s.65-1.95.65-4.64c0-2.69-.65-4.62-2.14-5.39-1.32-.68-3.55-.8-5.86-.8h-2.02zm-3.6 2.06a1.05 1.05 0 0 1 1.05 1.05 1.05 1.05 0 0 1-1.05 1.05 1.05 1.05 0 0 1-1.05-1.05 1.05 1.05 0 0 1 1.05-1.05zm7.2 13.68a1.05 1.05 0 0 1-1.05 1.05 1.05 1.05 0 0 1-1.05-1.05 1.05 1.05 0 0 1 1.05-1.05 1.05 1.05 0 0 1 1.05 1.05z"/></svg>} 
            />
            <SkillItem 
              name="React & Next.js" 
              progress={90}
              icon={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#61DAFB]"><path d="M12 21.6A9.6 9.6 0 1 1 12 2.4a9.6 9.6 0 0 1 0 19.2zm0-1.6a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-1.6a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8zm0-1.6a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6z"/></svg>} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}