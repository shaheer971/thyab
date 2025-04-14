
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Home", href: "#" },
    { title: "Features", href: "#features" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold text-thobe-primary">Thvab</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.title}>
                  <a 
                    href={item.href} 
                    className="text-slate-600 hover:text-brand-600 font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="bg-brand-600 hover:bg-brand-700">
              Get Started
            </Button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <a 
                      href={item.href} 
                      className="block py-2 text-slate-700 hover:text-brand-600 font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button className="w-full bg-brand-600 hover:bg-brand-700">
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
