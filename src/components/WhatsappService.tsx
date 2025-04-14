
import { motion } from 'framer-motion';
import { Check, MessageCircle, Bell, Calendar } from 'lucide-react';

const services = [
  {
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    title: 'Order Confirmation',
    description: 'Send automated order confirmations with details and expected delivery dates.',
    color: 'bg-green-50 border-green-200'
  },
  {
    icon: <Bell className="w-6 h-6 text-blue-500" />,
    title: 'Status Updates',
    description: 'Keep customers informed with real-time updates about their order status.',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: <Calendar className="w-6 h-6 text-purple-500" />,
    title: 'Delivery Reminders',
    description: 'Send pickup notifications and reminders when orders are ready.',
    color: 'bg-purple-50 border-purple-200'
  }
];

const WhatsappService = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl p-6 border ${service.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-slate-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="max-w-xl mx-auto lg:ml-auto">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 bg-green-100 rounded">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600">Whatsapp Business API Integration</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Excel with our Whatsapp Service
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Keep your customers informed with timely updates, order reminders, and important notifications directly through WhatsApp.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-brand-100 rounded-full">
                      <Check className="h-4 w-4 text-brand-600" />
                    </div>
                    <span className="text-slate-700">Automated messaging workflows</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-brand-100 rounded-full">
                      <Check className="h-4 w-4 text-brand-600" />
                    </div>
                    <span className="text-slate-700">Custom message templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-brand-100 rounded-full">
                      <Check className="h-4 w-4 text-brand-600" />
                    </div>
                    <span className="text-slate-700">Bulk messaging capabilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-brand-100 rounded-full">
                      <Check className="h-4 w-4 text-brand-600" />
                    </div>
                    <span className="text-slate-700">Two-way conversation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappService;
