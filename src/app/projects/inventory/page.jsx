import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Master Inventory Management | Fabian Godoy',
  description: 'Project details for the Master Inventory Management tool.',
};

export default function InventoryProject() {
  return (
    <article className="flex flex-col gap-10 pb-12 mt-4 sm:mt-8 max-w-3xl mx-auto w-full">
      
      {/* Back Navigation */}
      <Link href="/projects" className="text-sm font-medium text-brand-primary hover:opacity-80 flex items-center gap-2 transition-opacity w-fit">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
        Back to Projects
      </Link>

      {/* Project Header */}
      <header className="flex flex-col gap-4 border-b border-brand-card/50 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-text">
          Master Inventory Management
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-brand-muted">
          <span className="px-3 py-1 rounded-full bg-brand-card border border-brand-card/50">Full-Stack Developer</span>
          <span>React & Vite</span>
          <span>Supabase</span>
          <span>Wrike API</span>
        </div>
      </header>

      {/* Project Description */}
      <section className="flex flex-col gap-6 text-brand-muted leading-relaxed text-lg">
        <p>
          This project involved leading the technical transition of a master inventory system from a manual recording and photographing process into a streamlined, automated digital workflow. Working alongside my teammates Garrett, Dave, and Heidi, we established a robust workspace governance model.
        </p>
        <p>
          I configured a modern frontend environment using Vite and React to build a custom web-based request form. This form handled complex custom field mapping and branching logic, seamlessly sending formatted data directly into our Supabase database tables for persistent storage.
        </p>
        <div className="p-6 mt-2 bg-brand-card/30 border border-brand-card/50 rounded-xl">
          <h3 className="text-brand-text font-semibold mb-2">Engineering Challenge: Workflow Automation</h3>
          <p className="text-base">
            A critical component was automating task creation via the Wrike API. During integration, we encountered persistent 400 Bad Request errors when connecting the custom app to specific Wrike folders. Through rigorous API troubleshooting, I identified that Wrike Folder IDs require an exact &quot;IE&quot; prefix to be correctly recognized by the system endpoint. Implementing this fix restored the automated pipeline and significantly improved team efficiency.
          </p>
        </div>
      </section>

    </article>
  );
}