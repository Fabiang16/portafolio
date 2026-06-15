import Image from 'next/image';
import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Home | Fabian Godoy',
  description: 'Portfolio of Fabian Godoy, Software Engineering student and Full-Stack Developer.',
};

// --- Components for Experience and Skills cards ---

function WorkItem({ logoSrc, company, title, date }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-brand-dark/5 ring-1 ring-brand-card border border-brand-card/50 bg-brand-dark overflow-hidden">
        {/* Using Next.js Image component to load the original icons */}
        <Image 
          src={logoSrc} 
          alt={`${company} logo`} 
          fill
          className="object-contain p-2" 
        />
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

function SkillItem({ name, iconSrc, progress }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative flex h-8 w-8 flex-none items-center justify-center overflow-hidden">
        {/* Using Next.js Image component to load the original icons */}
        <Image 
          src={iconSrc} 
          alt={`${name} icon`} 
          fill
          className="object-contain" 
        />
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
              logoSrc="/ensigngo.png" 
              company="EnsignGo" 
              title="Project Lead & Dev" 
              date="2025 - Present" 
            />
            <WorkItem 
              logoSrc="/wrike.png" 
              company="Wrike Integration" 
              title="Workflow Automation" 
              date="2026" 
            />
            <WorkItem 
              logoSrc="/figma.png" 
              company="Figma UI/UX" 
              title="Design Systems" 
              date="2026" 
            />
            <WorkItem 
              logoSrc="/byupathway.png" 
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
              iconSrc="/java.png" 
            />
            <SkillItem 
              name="Python" 
              progress={75}
              iconSrc="/python.png" 
            />
            <SkillItem 
              name="React & Next.js" 
              progress={90}
              iconSrc="/react.png" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}