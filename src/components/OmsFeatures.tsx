
import { motion } from 'framer-motion';
import { 
  Clock, BarChart, MessageCircle, 
  Users, Pen, LineChart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: 'Real-Time Updates',
    description: 'Get instant updates on order status, production progress, and delivery timelines.',
    delay: 0
  },
  {
    icon: <BarChart className="w-6 h-6 text-indigo-600" />,
    title: 'Order History Dashboard',
    description: 'Access complete order history with detailed information at your fingertips.',
    delay: 0.1
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-indigo-600" />,
    title: 'Customer Feedback',
    description: 'Collect and manage customer feedback to improve your services.',
    delay: 0.2
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: 'Team Management',
    description: 'Assign tasks, track progress, and manage your tailoring team efficiently.',
    delay: 0.3
  },
  {
    icon: <Pen className="w-6 h-6 text-indigo-600" />,
    title: 'Design Templates',
    description: 'Store and reuse design templates for faster order processing.',
    delay: 0.4
  },
  {
    icon: <LineChart className="w-6 h-6 text-indigo-600" />,
    title: 'Sales and Performance',
    description: 'Track sales metrics and performance indicators to optimize your business.',
    delay: 0.5
  }
];

const OmsFeatures = () => {
  return (
    <section className="py-24 bg-indigo-50 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
            Order Management System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">More than just an OMS</h2>
          <p className="text-lg text-slate-600">
            Thvab offers a complete suite of tools designed specifically for thobe tailoring businesses, going beyond basic order management.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full opacity-70"></div>
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-indigo-50 rounded-xl inline-flex">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
            Explore All OMS Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OmsFeatures;
