import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#0c0c0e] border-b border-white/5 py-2.5">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          Dev.Eduu
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 font-medium tracking-wide">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
            <a href="https://github.com/EduGomes19" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/edugomes19/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0c0c0e] shadow-xl border-b border-white/5 flex flex-col items-center py-6 space-y-4 font-medium tracking-wide">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-blue-400 w-full text-center py-2 transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-white/10 w-1/2 justify-center">
            <a href="https://github.com/EduGomes19" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
