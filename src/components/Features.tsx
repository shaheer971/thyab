
import { motion } from 'framer-motion';
import { 
  BarChart3, Users, MessageSquare, 
  ShoppingBag, CalendarCheck, PieChart
} from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-12 h-12 text-brand-600" />,
    title: 'Sales Analytics',
    description: 'Track your daily, weekly, and monthly sales with detailed analytics and visual reports.'
  },
  {
    icon: <Users className="w-12 h-12 text-brand-600" />,
    title: 'Customer Management',
    description: 'Store customer details, measurements, and order history in one centralized system.'
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-brand-600" />,
    title: 'WhatsApp Integration',
    description: 'Send order updates, reminders, and promotional messages directly via WhatsApp.'
  },
  {
    icon: <ShoppingBag className="w-12 h-12 text-brand-600" />,
    title: 'Inventory Control',
    description: 'Manage your fabric inventory, track usage, and get low-stock alerts automatically.'
  },
  {
    icon: <CalendarCheck className="w-12 h-12 text-brand-600" />,
    title: 'Appointment Scheduling',
    description: 'Let customers book appointments online and manage your tailoring schedule efficiently.'
  },
  {
    icon: <PieChart className="w-12 h-12 text-brand-600" />,
    title: 'Financial Reports',
    description: 'Generate comprehensive financial reports and gain insights into your business performance.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tools that are made for you</h2>
            <p className="text-lg text-slate-600">
              We've developed a set of specialized tools specifically for thobe tailoring businesses, helping you optimize your workflow and increase your profits.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <div className="p-4 bg-slate-50 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6">
              <img 
                src="/lovable-uploads/ea5d915b-b7de-4f36-8570-93e54188d466.png" 
                alt="Thvab Dashboard Analytics" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
