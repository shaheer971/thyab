
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { title: "Home", href: "#" },
    { title: "Features", href: "#features" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8`}>
      <div className={`rounded-2xl mx-auto transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md border border-slate-200/70' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/20'
      }`}>
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="text-2xl font-bold text-slate-900">Thyab</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.title}>
                  <a 
                    href={item.href} 
                    className="px-4 py-2 rounded-md text-slate-600 hover:text-brand-600 hover:bg-slate-50 font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pl-2 flex space-x-3">
              <Button variant="outline" className="border-slate-200">
                Sign In
              </Button>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white group">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border border-slate-200 mt-2 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6">
              <ul className="space-y-1 pt-2 pb-4">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <a 
                      href={item.href} 
                      className="block py-2 px-4 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-600 font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button variant="outline" className="w-full border-slate-200">
                  Sign In
                </Button>
                <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
