import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Home | Fabian Godoy',
  description: 'Software Engineering student, project manager, and developer.',
};

// --- Reusable Components ---

function SocialLink({ icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group -m-1 p-1">
      <span className="h-6 w-6 fill-brand-muted transition group-hover:fill-brand-primary">
        {icon}
      </span>
    </a>
  );
}

function ProjectArticle({ date, title, description, href }) {
  return (
    <article className="flex flex-col items-start gap-2">
      <time className="text-xs text-brand-muted pl-3 border-l border-brand-card">{date}</time>
      <h2 className="text-base font-semibold tracking-tight text-brand-text">
        {title}
      </h2>
      <p className="text-sm text-brand-muted leading-relaxed">
        {description}
      </p>
      <Link href={href} className="text-sm font-medium text-brand-primary hover:text-brand-primary/80 flex items-center gap-1 mt-1">
        Read more
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </Link>
    </article>
  );
}

function WorkItem({ logo, company, title, date }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-brand-dark/5 ring-1 ring-brand-card border border-brand-card/50 bg-brand-dark">
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
    <div className="flex flex-col gap-16 pb-12 mt-4 sm:mt-8">
      
      {/* Header Section (Avatar, Title, Bio) */}
      <div className="max-w-2xl flex flex-col gap-6">
        <Image 
          src="/Picture.jpg" 
          alt="Fabian Godoy" 
          width={64} 
          height={64} 
          className="rounded-full object-cover border border-brand-card/50 h-16 w-16"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
          Software engineering student, project manager, and developer.
        </h1>
        <p className="text-base text-brand-muted leading-relaxed">
          Hi, I&apos;m Fabian Godoy. I&apos;m currently pursuing my degree in Software Engineering, bridging the gap between scalable full-stack development, user-centered design, and technical project management. I enjoy building structured systems and optimizing team workflows.
        </p>
        
        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <SocialLink href="https://linkedin.com/in/your-username" icon={
            <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M19.9897 3C20.5404 3 20.9897 3.44924 20.9897 4V20C20.9897 20.5508 20.5404 21 19.9897 21H3.98975C3.43899 21 2.98975 20.5508 2.98975 20V4C2.98975 3.44924 3.43899 3 3.98975 3H19.9897ZM8.23975 8.49902C8.23975 9.32745 7.56817 9.99902 6.73975 9.99902C5.91132 9.99902 5.23975 9.32745 5.23975 8.49902C5.23975 7.6706 5.91132 6.99902 6.73975 6.99902C7.56817 6.99902 8.23975 7.6706 8.23975 8.49902ZM18.7397 18.999V13.6212C18.7397 11.2384 17.1897 10.199 15.3897 10.199C14.0097 10.199 13.3897 10.979 13.0397 11.539V10.439H10.7397C10.7797 11.139 10.7397 18.999 10.7397 18.999H13.0397V14.2185C13.0397 13.9685 13.0597 13.7185 13.1397 13.5385C13.3597 13.0385 13.8297 12.5185 14.5997 12.5185C15.6297 12.5185 16.0397 13.3085 16.0397 14.4685V18.999H18.7397ZM7.88975 18.999V10.439H5.58975V18.999H7.88975Z" /></svg>
          }/>
          <SocialLink href="https://github.com/your-username" icon={
            <svg viewBox="0 0 24 24" className="h-6 w-6"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.5C9.3375 21.5875 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5 18.8625C6.725 19.4625 6.1375 17.525 6.1375 17.525C5.6875 16.375 5.0375 16.075 5.0375 16.075C4.1375 15.4625 5.1 15.475 5.1 15.475C6.1 15.55 6.6125 16.5 6.6125 16.5C7.4875 18.0125 8.9 17.575 9.4625 17.3125C9.55 16.675 9.8125 16.25 10.1 16.0125C7.8875 15.7625 5.5625 14.9 5.5625 11.075C5.5625 9.9875 5.95 9.1 6.5875 8.3875C6.4875 8.1375 6.15 7.125 6.6875 5.7625C6.6875 5.7625 7.525 5.5 9.5 6.825C10.3 6.6 11.15 6.5 12 6.5C12.85 6.5 13.7 6.6 14.5 6.825C16.475 5.5 17.3125 5.7625 17.3125 5.7625C17.85 7.125 17.5125 8.1375 17.4125 8.3875C18.05 9.1 18.4375 9.9875 18.4375 11.075C18.4375 14.9125 16.1 15.7625 13.875 16.0125C14.2375 16.325 14.5625 16.9375 14.5625 17.8875C14.5625 19.25 14.55 20.35 14.55 20.6875C14.55 20.95 14.7375 21.275 15.25 21.1875C19.225 19.825 22 16.0625 22 11.6625C22 6.1375 17.525 2 12 2Z" /></svg>
          }/>
        </div>
      </div>

      {/* Grid Layout (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
        
        {/* Left Column: Projects Feed */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          <ProjectArticle 
            date="Present" 
            title="EnsignGo Mobile App" 
            description="Leading the development of a student resource mobile application, defining user personas, and testing high-fidelity prototypes." 
            href="/projects" 
          />
          <ProjectArticle 
            date="June 2026" 
            title="UI Reconstruction" 
            description="Rebuilt a library application's settings interface utilizing Atomic Design principles and scalable Figma components." 
            href="/projects" 
          />
          <ProjectArticle 
            date="June 2026" 
            title="Inventory & Wrike API Integration" 
            description="Developed an integrated inventory management tool connecting a custom React frontend to a Supabase database and the Wrike API." 
            href="/projects" 
          />
        </div>

        {/* Right Column: Widgets */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          
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

    </div>
  );
}
