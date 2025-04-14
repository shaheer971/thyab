
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="hero-wave-pattern" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Manage your Thobe Tailoring Business with <span className="gradient-text">Thvab</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Streamline your operations, manage customers, and grow your thobe tailoring business with our all-in-one management solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 font-medium text-base">
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg" className="font-medium text-base group">
                <span>Book a Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl p-4">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-100 to-brand-50 transform rotate-2"></div>
              <img 
                src="/lovable-uploads/ea5d915b-b7de-4f36-8570-93e54188d466.png" 
                alt="Thvab Dashboard" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Trusted by 500+</p>
                    <p className="text-xs text-slate-500">tailoring businesses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
