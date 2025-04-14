
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

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
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-center pointer-events-none">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-7xl rounded-full backdrop-blur-md pointer-events-auto ${
          scrolled 
            ? 'bg-white/90 shadow-lg border border-slate-200/70' 
            : 'bg-white/50 border border-white/20'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.a 
                href="#" 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white font-bold text-xl shadow-md">T</div>
                <span className="text-2xl font-bold text-slate-900">Thvab</span>
              </motion.a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        href={item.href}
                        className="px-4 py-2 text-slate-700 hover:text-brand-600 transition-colors text-sm font-medium"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              
              <div className="pl-2 flex space-x-3">
                <Button variant="outline" className="border-slate-200 shadow-sm">
                  Sign In
                </Button>
                <Button className="bg-brand-600 hover:bg-brand-700 text-white group shadow-md">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full bg-white/90 shadow-sm text-slate-700 hover:bg-slate-100 focus:outline-none"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md rounded-b-3xl shadow-xl overflow-hidden"
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
                        className="block py-2 px-4 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-brand-600 font-medium transition-colors duration-200"
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
      </motion.header>
    </div>
  );
};

export default Navbar;
