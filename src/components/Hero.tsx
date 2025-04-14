
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 max-w-xl lg:max-w-none"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
              Trusted by 500+ tailoring businesses
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Modernize Your <span className="text-brand-600">Thobe Tailoring</span> Business
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              All-in-one management system designed specifically for thobe tailoring businesses. Streamline operations, delight customers, and grow your profits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white font-medium text-base px-6">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-100 font-medium text-base group">
                <span>Book a Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['No credit card required', 'Cancel anytime', 'Free migration', '24/7 support'].map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="mr-2 flex-shrink-0 rounded-full p-1 bg-brand-50 text-brand-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-slate-600">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/30 to-purple-600/30 mix-blend-multiply opacity-10 rounded-2xl"></div>
              <div className="p-2 bg-slate-50 border-b border-slate-200 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-slate-500 font-medium">Thvab Dashboard</div>
              </div>
              <img 
                src="/lovable-uploads/38b91400-e1a0-4e6f-b185-77b2a4697b41.png" 
                alt="Thvab Dashboard" 
                className="w-full object-cover shadow-inner"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20 hidden md:block"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Used by 2,700+</p>
                  <p className="text-xs text-slate-500">businesses worldwide</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
