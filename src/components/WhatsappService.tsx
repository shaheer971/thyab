
import { motion } from 'framer-motion';
import { Check, MessageCircle, Bell, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    title: 'Order Confirmation',
    description: 'Send automated order confirmations with details and expected delivery dates.',
    color: 'bg-green-600'
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: 'Status Updates',
    description: 'Keep customers informed with real-time updates about their order status.',
    color: 'bg-blue-600'
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: 'Delivery Reminders',
    description: 'Send pickup notifications and reminders when orders are ready.',
    color: 'bg-purple-600'
  }
];

const WhatsappService = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
              
              <div className="grid grid-cols-1 gap-6 relative">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 hover:-translate-y-1 duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${service.color} shadow-lg`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 bg-white border border-green-200 rounded-2xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full"></div>
                <h4 className="text-lg font-bold text-slate-900 mb-4">What our clients say</h4>
                <p className="text-slate-600 italic mb-4">
                  "The WhatsApp integration alone has cut down our customer service calls by 40%. Our customers love getting updates directly to their phones."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden mr-3">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Mohammed Al-Qahtani</p>
                    <p className="text-slate-500 text-xs">Royal Tailors, Jeddah</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30" aria-hidden="true"></div>
              
              <div className="p-1 bg-green-50 inline-flex rounded-full text-green-700 text-sm font-medium px-4 py-1 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 self-center"></span>
                WhatsApp Business API Integration
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Engage Customers Through WhatsApp Business
              </h2>
              
              <p className="text-lg text-slate-600 mb-8">
                Connect with your customers on their favorite platform. Our WhatsApp integration keeps your customers informed with timely updates and reminders directly through WhatsApp.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Automated messaging workflows',
                  'Custom message templates',
                  'Bulk messaging capabilities',
                  'Two-way conversation support',
                  'Order status notifications',
                  'Appointment reminders'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-1 bg-green-100 rounded-full">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button className="bg-green-600 hover:bg-green-700 text-white group">
                <span>Learn more about WhatsApp integration</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="mt-12 bg-gradient-to-br from-green-50 to-slate-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-slate-800">Customer satisfaction after implementing WhatsApp</p>
                  <p className="text-2xl font-bold text-green-600">↑43%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappService;
