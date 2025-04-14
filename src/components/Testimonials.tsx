
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Thvab has completely transformed how we manage our tailoring business. The customer management system alone has saved us hours of work every week.",
    author: "Ahmed Al-Harbi",
    position: "Owner, Premium Thobes",
    company: "Riyadh",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5
  },
  {
    quote: "The WhatsApp integration is brilliant. Our customers love getting updates about their orders directly to their phones, and it's reduced our customer service calls by 40%.",
    author: "Mohammed Al-Qahtani",
    position: "Manager, Royal Tailors",
    company: "Jeddah",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    quote: "As someone who manages multiple tailoring shops, Thvab's analytics features give me insights I never had before. I can now make data-driven decisions that improve our bottom line.",
    author: "Khalid Al-Otaibi",
    position: "Business Owner, Elite Thobe Collection",
    company: "Dammam",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 5
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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-indigo-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-amber-500 text-amber-500" />
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Loved by Tailoring Businesses</h2>
          <p className="text-lg text-slate-600">
            Hear from tailoring business owners who have transformed their operations with Thvab.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-8 border-white shadow-xl overflow-hidden">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-200 relative"
            >
              <div className="absolute -top-6 -left-6 text-amber-400">
                <Quote className="w-12 h-12 fill-amber-50" />
              </div>
              
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-slate-800 mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <p className="font-bold text-lg text-slate-900">{testimonials[currentIndex].author}</p>
                <p className="text-slate-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-amber-500 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
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
