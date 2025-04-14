
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Thvab has completely transformed how we manage our tailoring business. The customer management system alone has saved us hours of work every week.",
    author: "Ahmed Al-Harbi",
    position: "Owner, Premium Thobes",
    company: "Riyadh"
  },
  {
    quote: "The WhatsApp integration is brilliant. Our customers love getting updates about their orders directly to their phones, and it's reduced our customer service calls by 40%.",
    author: "Mohammed Al-Qahtani",
    position: "Manager, Royal Tailors",
    company: "Jeddah"
  },
  {
    quote: "As someone who manages multiple tailoring shops, Thvab's analytics features give me insights I never had before. I can now make data-driven decisions that improve our bottom line.",
    author: "Khalid Al-Otaibi",
    position: "Business Owner, Elite Thobe Collection",
    company: "Dammam"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by our clients</h2>
          <p className="text-lg text-slate-600">
            Hear from tailoring business owners who have transformed their operations with Thvab.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200"
          >
            <div className="mb-6 flex justify-center">
              <Quote className="w-16 h-16 text-brand-200" />
            </div>
            <blockquote className="text-xl md:text-2xl text-center font-medium text-slate-700 mb-10">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
              <p className="text-slate-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
