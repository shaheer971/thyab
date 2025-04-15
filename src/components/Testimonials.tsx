
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Thyab has completely transformed how we manage our tailoring business. The customer management system alone has saved us hours of work every week.",
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
    quote: "As someone who manages multiple tailoring shops, Thyab's analytics features give me insights I never had before. I can now make data-driven decisions that improve our bottom line.",
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
    <section className="py-24 bg-white relative overflow-hidden">
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
            Hear from tailoring business owners who have transformed their operations with Thyab.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl bg-white p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 relative ${
                  index === currentIndex ? 'md:scale-105 md:shadow-xl' : ''
                }`}
              >
                <div className="absolute -top-6 -left-6 text-amber-400">
                  <Quote className="w-12 h-12 fill-amber-50" />
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-slate-800 mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center mt-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-slate-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <Button 
              onClick={prevTestimonial} 
              variant="outline"
              className="p-3 rounded-full"
              size="icon"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </Button>
            
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
            
            <Button 
              onClick={nextTestimonial} 
              variant="outline"
              className="p-3 rounded-full"
              size="icon"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
