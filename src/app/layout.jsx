import { Inter, Fira_Code } from 'next/font/google';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle'; // Import the new toggle component
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: "Fabian's Portfolio | Software Engineer",
  description: 'Professional portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    // Suppress hydration warning is needed here because the theme script modifies classes on the html tag
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-brand-dark text-brand-text font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-brand-primary selection:text-brand-dark transition-colors duration-300">
        
        {/* Navigation Bar */}
        <header className="border-b border-brand-card/60 backdrop-blur-md sticky top-0 z-50 bg-brand-dark/80">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            
            <Link href="/" className="font-mono font-bold text-lg tracking-tight hover:text-brand-primary transition-colors">
              Fabian Godoy
            </Link>
            
            <div className="flex items-center gap-6">
              <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-brand-muted">
                <Link href="/about" className="hover:text-brand-text transition-colors">About</Link>
                <Link href="/projects" className="hover:text-brand-text transition-colors">Projects</Link>
                <Link href="/uses" className="hover:text-brand-text transition-colors">Uses</Link>
              </nav>

              {/* Mobile Navigation Menu Placeholder & Theme Toggle */}
              <div className="flex items-center gap-4 border-l border-brand-card/50 pl-4 sm:border-none sm:pl-0">
                <ThemeToggle />
              </div>
            </div>

          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-12 flex-grow w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-brand-card/60 py-8 text-xs text-brand-muted font-mono">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} — Built with Next.js</p>
            <div className="flex gap-4">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
