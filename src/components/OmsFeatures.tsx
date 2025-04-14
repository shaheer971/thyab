
import { motion } from 'framer-motion';
import { 
  Clock, ChartBar, MessageSquare, 
  Users, PenTool, LineChart 
} from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-brand-600" />,
    title: 'Real-Time Updates',
    description: 'Get instant updates on order status, production progress, and delivery timelines.'
  },
  {
    icon: <ChartBar className="w-8 h-8 text-brand-600" />,
    title: 'Order History Dashboard',
    description: 'Access complete order history with detailed information at your fingertips.'
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-brand-600" />,
    title: 'Customer Feedback',
    description: 'Collect and manage customer feedback to improve your services.'
  },
  {
    icon: <Users className="w-8 h-8 text-brand-600" />,
    title: 'Team Management',
    description: 'Assign tasks, track progress, and manage your tailoring team efficiently.'
  },
  {
    icon: <PenTool className="w-8 h-8 text-brand-600" />,
    title: 'Design Templates',
    description: 'Store and reuse design templates for faster order processing.'
  },
  {
    icon: <LineChart className="w-8 h-8 text-brand-600" />,
    title: 'Sales and Performance',
    description: 'Track sales metrics and performance indicators to optimize your business.'
  }
];

const OmsFeatures = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">More than just an OMS</h2>
          <p className="text-lg text-slate-600">
            Thvab offers a complete suite of tools designed specifically for thobe tailoring businesses, going beyond basic order management.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-4 p-3 bg-brand-50 rounded-lg inline-flex">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmsFeatures;
