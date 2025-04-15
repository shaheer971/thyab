
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhatsappService from '@/components/WhatsappService';
import OmsFeatures from '@/components/OmsFeatures';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Dashboard from '@/components/Dashboard';
import Stats from '@/components/Stats';

const Index = () => {
  useEffect(() => {
    // Add a class to the body for any global styles we want to apply
    document.body.classList.add('thyab-app');
    document.title = "Thyab - Modern Thobe Tailoring Management";
    
    return () => {
      document.body.classList.remove('thyab-app');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-slate-50"
    >
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Hero />
        <Stats />
        <Features />
        <Dashboard />
        <WhatsappService />
        <OmsFeatures />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
