
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const proFeatures = [
  "Unlimited orders",
  "Customer management",
  "WhatsApp integration",
  "Inventory management",
  "Sales analytics",
  "5 team members",
  "Email & chat support",
  "Mobile app access"
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unbeatable Offer</h2>
          <p className="text-lg text-slate-600">
            Start growing your tailoring business today with our comprehensive solution at an affordable price.
          </p>
        </motion.div>
        
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="price-card border-2 border-brand-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-brand-600 text-white text-xs font-bold py-1 px-4 rounded-bl-lg">
                MOST POPULAR
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-slate-600 ml-1">/month</span>
              </div>
              <p className="text-slate-600">Everything you need to manage and grow your tailoring business</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-1 bg-brand-100 rounded-full">
                    <Check className="h-4 w-4 text-brand-600" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button className="w-full bg-brand-600 hover:bg-brand-700 py-6 text-base">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
