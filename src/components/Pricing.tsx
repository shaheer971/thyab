
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for new and small tailoring businesses",
    features: [
      "Up to 100 orders per month",
      "Basic customer management",
      "WhatsApp notifications",
      "Order tracking",
      "Basic reports",
      "Email support"
    ],
    highlighted: false,
    cta: "Start with Starter",
    color: "bg-white",
    borderColor: "border-slate-200"
  },
  {
    name: "Pro",
    price: "49",
    description: "Everything you need to manage and grow your tailoring business",
    features: [
      "Unlimited orders",
      "Advanced customer management",
      "WhatsApp integration",
      "Inventory management",
      "Sales analytics",
      "5 team members",
      "Email & chat support",
      "Mobile app access"
    ],
    highlighted: true,
    cta: "Get Started Now",
    color: "bg-gradient-to-b from-brand-50 to-white",
    borderColor: "border-brand-200"
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For established businesses with multiple locations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Multiple locations",
      "Advanced analytics",
      "Custom reports",
      "API access",
      "24/7 premium support",
      "Dedicated account manager"
    ],
    highlighted: false,
    cta: "Contact Sales",
    color: "bg-white",
    borderColor: "border-slate-200"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Plans for Businesses of All Sizes</h2>
          <p className="text-lg text-slate-600">
            Start growing your tailoring business today with our comprehensive solution at an affordable price.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl ${plan.color} border-2 ${plan.borderColor} overflow-hidden shadow-lg hover:shadow-xl transition-all relative ${
                plan.highlighted ? 'md:-mt-8 md:mb-8' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 w-full flex justify-center">
                  <div className="relative bg-brand-600 text-white text-xs font-bold py-1.5 px-4 rounded-b-xl flex items-center mt-0">
                    <Star className="w-3.5 h-3.5 mr-1.5 fill-white" />
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? 'pt-12' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{plan.name}</h3>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-600 ml-1.5">/month</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>
                
                <div className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <div className={`p-1 rounded-full ${plan.highlighted ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-600'} mt-0.5`}>
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-6 text-base font-medium ${
                    plan.highlighted 
                      ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Need a custom plan?</h3>
              <p className="text-slate-600">Contact our sales team for custom pricing and special requirements.</p>
            </div>
            <Button variant="outline" className="md:flex-shrink-0">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
