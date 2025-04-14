
import { motion } from 'framer-motion';
import { 
  BarChart3, Users, MessageSquare, 
  Database, CalendarCheck, CircleDollarSign,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: 'Sales Analytics',
    description: 'Track your daily, weekly, and monthly sales with detailed analytics and visual reports.',
    color: 'bg-gradient-to-br from-purple-600 to-indigo-700'
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Customer Management',
    description: 'Store customer details, measurements, and order history in one centralized system.',
    color: 'bg-gradient-to-br from-emerald-600 to-teal-700'
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: 'WhatsApp Integration',
    description: 'Send order updates, reminders, and promotional messages directly via WhatsApp.',
    color: 'bg-gradient-to-br from-green-600 to-emerald-700'
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: 'Inventory Control',
    description: 'Manage your fabric inventory, track usage, and get low-stock alerts automatically.',
    color: 'bg-gradient-to-br from-blue-600 to-indigo-700'
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-white" />,
    title: 'Appointment Scheduling',
    description: 'Let customers book appointments online and manage your tailoring schedule efficiently.',
    color: 'bg-gradient-to-br from-amber-600 to-orange-700'
  },
  {
    icon: <CircleDollarSign className="w-6 h-6 text-white" />,
    title: 'Financial Reports',
    description: 'Generate comprehensive financial reports and gain insights into your business performance.',
    color: 'bg-gradient-to-br from-rose-600 to-pink-700'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-slate-50 to-white pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Tailored Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Powerful Tools Designed for Thobe Tailoring
          </h2>
          <p className="text-lg text-slate-600">
            Our specialized tools are built specifically for thobe tailoring businesses, helping you optimize workflow and increase profits.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200 group"
            >
              <div className={`p-6 ${feature.color} group-hover:scale-105 transition-transform duration-300`}>
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.description}</p>
                <Button variant="ghost" className="text-sm p-0 hover:bg-transparent hover:text-brand-600 group">
                  <span className="border-b border-dashed border-current pb-px">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
