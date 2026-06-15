import { Inter, Fira_Code } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

// Main font for body text
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Monospace font for technical elements, code, or the logo
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata = {
  title: "Fabian's Portfolio | Software Engineer",
  description: 'Professional portfolio built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`}>
      <body className="bg-brand-dark text-brand-text font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-brand-primary selection:text-brand-dark">
        
        {/* Header / Minimalist Navigation Bar */}
        <header className="border-b border-brand-card/40 backdrop-blur-md sticky top-0 z-50 bg-brand-dark/80">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo in Mono font */}
            <Link href="/" className="font-mono font-bold text-lg tracking-tight hover:text-brand-primary transition-colors">
              Fabian Godoy
            </Link>
            
            {/* Navigation Links */}
            <nav className="flex items-center gap-6 text-sm font-medium text-brand-muted">
              <Link href="/about" className="hover:text-brand-text transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-brand-text transition-colors">
                Projects
              </Link>
              <Link href="/uses" className="hover:text-brand-text transition-colors">
                Uses
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="max-w-5xl mx-auto px-6 py-12 flex-grow w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-brand-card/40 py-8 text-xs text-brand-muted font-mono">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} — Built with Next.js</p>
            <div className="flex gap-4">
              <a href="https://github.com/Fabiang16" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/fabian-godoy-morales-a9b6ba2a0" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
