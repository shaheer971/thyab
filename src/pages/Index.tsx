
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

const Index = () => {
  useEffect(() => {
    // Add a class to the body for any global styles we want to apply
    document.body.classList.add('thvab-app');
    document.title = "Thvab - Manage your Thobe Tailoring Business";
    
    return () => {
      document.body.classList.remove('thvab-app');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
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
