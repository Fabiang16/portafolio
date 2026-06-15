import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About | Fabian Godoy',
  description: 'Learn more about my background, journey, and technical skills.',
};

// Reusable component for social links
function SocialLink({ icon, href, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center gap-4 text-sm font-medium text-brand-muted transition hover:text-brand-primary"
    >
      <span className="h-6 w-6 flex-none fill-brand-muted transition group-hover:fill-brand-primary">
        {icon}
      </span>
      {children}
    </a>
  );
}

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
      
      {/* Right Column: Image and Social Links */}
      <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 flex flex-col gap-10">
        
        {/* Image Container */}
        <div className="aspect-[4/5] w-full bg-brand-card rounded-3xl border border-brand-card/50 flex items-center justify-center overflow-hidden shadow-sm relative">
          <Image 
            src="/Picture.jpg" 
            alt="Fabian Godoy" 
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 32rem, 20rem"
          />
        </div>

        {/* Social Links Container */}
        <div className="flex flex-col gap-6 pl-2">
          
          {/* X (Twitter) Link */}
          <SocialLink href="https://x.com/your-username" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" /></svg>
          }>
            Follow me on X
          </SocialLink>

          {/* Instagram Link */}
          <SocialLink href="https://instagram.com/your-username" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
          }>
            Follow me on Instagram
          </SocialLink>
          
          {/* GitHub Link */}
          <SocialLink href="https://github.com/your-username" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.5C9.3375 21.5875 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5 18.8625C6.725 19.4625 6.1375 17.525 6.1375 17.525C5.6875 16.375 5.0375 16.075 5.0375 16.075C4.1375 15.4625 5.1 15.475 5.1 15.475C6.1 15.55 6.6125 16.5 6.6125 16.5C7.4875 18.0125 8.9 17.575 9.4625 17.3125C9.55 16.675 9.8125 16.25 10.1 16.0125C7.8875 15.7625 5.5625 14.9 5.5625 11.075C5.5625 9.9875 5.95 9.1 6.5875 8.3875C6.4875 8.1375 6.15 7.125 6.6875 5.7625C6.6875 5.7625 7.525 5.5 9.5 6.825C10.3 6.6 11.15 6.5 12 6.5C12.85 6.5 13.7 6.6 14.5 6.825C16.475 5.5 17.3125 5.7625 17.3125 5.7625C17.85 7.125 17.5125 8.1375 17.4125 8.3875C18.05 9.1 18.4375 9.9875 18.4375 11.075C18.4375 14.9125 16.1 15.7625 13.875 16.0125C14.2375 16.325 14.5625 16.9375 14.5625 17.8875C14.5625 19.25 14.55 20.35 14.55 20.6875C14.55 20.95 14.7375 21.275 15.25 21.1875C19.225 19.825 22 16.0625 22 11.6625C22 6.1375 17.525 2 12 2Z" /></svg>
          }>
            Follow me on GitHub
          </SocialLink>
          
          {/* LinkedIn Link */}
          <SocialLink href="https://linkedin.com/in/your-username" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.9897 3C20.5404 3 20.9897 3.44924 20.9897 4V20C20.9897 20.5508 20.5404 21 19.9897 21H3.98975C3.43899 21 2.98975 20.5508 2.98975 20V4C2.98975 3.44924 3.43899 3 3.98975 3H19.9897ZM8.23975 8.49902C8.23975 9.32745 7.56817 9.99902 6.73975 9.99902C5.91132 9.99902 5.23975 9.32745 5.23975 8.49902C5.23975 7.6706 5.91132 6.99902 6.73975 6.99902C7.56817 6.99902 8.23975 7.6706 8.23975 8.49902ZM18.7397 18.999V13.6212C18.7397 11.2384 17.1897 10.199 15.3897 10.199C14.0097 10.199 13.3897 10.979 13.0397 11.539V10.439H10.7397C10.7797 11.139 10.7397 18.999 10.7397 18.999H13.0397V14.2185C13.0397 13.9685 13.0597 13.7185 13.1397 13.5385C13.3597 13.0385 13.8297 12.5185 14.5997 12.5185C15.6297 12.5185 16.0397 13.3085 16.0397 14.4685V18.999H18.7397ZM7.88975 18.999V10.439H5.58975V18.999H7.88975Z" /></svg>
          }>
            Follow me on LinkedIn
          </SocialLink>

          {/* Divider */}
          <div className="border-t border-brand-card/50 my-2 w-full"></div>

          {/* Email Link */}
          <SocialLink href="mailto:fabian16.godoy@gmail.com" icon={
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM20.25 6.75V17.25H3.75V6.75H20.25ZM18.5982 7.72851L12 12.2359L5.40182 7.72851L4.54297 8.9859L12 14.0776L19.457 8.9859L18.5982 7.72851Z" /></svg>
          }>
            fabian16.godoy@gmail.com
          </SocialLink>
        </div>
      </div>

      {/* Left Column: Main Text */}
      <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-10">
        
        {/* Main Title and Intro */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
            About Me
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed">
            I’m a Software Engineering student with experience in project management, workflow automation, and dashboard creation. I enjoy building clean, user‑focused solutions and collaborating with teams to bring clarity and structure to technical projects.
          </p>
        </div>
        
        {/* Content Sections */}
        <div className="flex flex-col gap-8 text-base text-brand-muted leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-brand-text">
              My Journey
            </h2>
            <p>
              Having lived in Chile, Uruguay, Canada, and now the Salt Lake City metropolitan area, I’ve learned to adapt quickly to new environments and collaborate with diverse teams. At Ensign College, I’m pursuing a Bachelor of Science in Software Engineering and have taken courses in Python, Java, HTML, and UX/UI design. This combination of coursework and hands‑on experience has helped me expand my technical skills and strengthen my problem‑solving abilities.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-brand-text">
              What I Enjoy Building
            </h2>
            <p>
              I love creating clean, functional systems—whether that’s a dashboard, a design system in Figma, or a React component. I focus on clarity, accessibility, and ensuring that every feature solves a real problem and improves the user experience.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-brand-text">
              Beyond Tech
            </h2>
            <p>
              Outside of academia and software development, I enjoy assembling computers, performing hardware maintenance, working on automotive projects, and learning more about artificial intelligence. I like working on projects that require precision, structure, and attention to detail.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
}