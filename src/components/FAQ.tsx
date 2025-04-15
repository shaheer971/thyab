
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does Thyab help my tailoring business?",
    answer: "Thyab streamlines your entire tailoring operation by providing tools for order management, customer information storage, measurements tracking, appointment scheduling, WhatsApp notifications, and detailed business analytics - all designed specifically for thobe tailoring businesses."
  },
  {
    question: "Is Thyab suitable for small tailoring shops?",
    answer: "Absolutely! Thyab is designed to scale with your business. Whether you're a small shop with a single tailor or a larger operation with multiple locations, our platform adapts to your needs and grows with you."
  },
  {
    question: "Do I need technical knowledge to use Thyab?",
    answer: "Not at all. Thyab features an intuitive interface designed for tailors, not tech experts. We offer a simple onboarding process, helpful tutorials, and responsive customer support to ensure you can start using the system immediately."
  },
  {
    question: "How does the WhatsApp integration work?",
    answer: "Thyab connects with WhatsApp Business API to send automated messages to your customers. You can notify them about order confirmations, status updates, delivery readiness, and promotional offers - all through templates you can customize to match your business style."
  },
  {
    question: "Can I track customer measurements and preferences?",
    answer: "Yes! Thyab includes a comprehensive customer profile system where you can store detailed measurements, fabric preferences, style choices, and order history. This makes repeat orders faster and ensures consistency across all customer interactions."
  },
  {
    question: "Is my business data secure with Thyab?",
    answer: "Security is our priority. Thyab uses industry-standard encryption, secure cloud storage, regular backups, and strict access controls to protect your business and customer data. We're also compliant with data protection regulations."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-lg mb-4 overflow-hidden">
      <button 
        className="flex justify-between items-center w-full text-left py-4 px-6 bg-white hover:bg-slate-50 focus:outline-none transition-colors"
        onClick={onClick}
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 pt-2 px-6 text-slate-600 border-t border-slate-100">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about Thyab and how it can help your tailoring business.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
