
import { motion } from 'framer-motion';
import { LineChart, BarChart, Wallet, Archive, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            <span className="mr-2">✨</span>
            Powerful Dashboard
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Make Data-Driven Decisions with Our Comprehensive Dashboard
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Monitor your tailoring business performance with real-time analytics and visualizations, all in one place.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <BarChart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Analytics</h3>
                  <p className="text-slate-600">Track revenue, orders, and customer metrics with beautiful visualizations that make understanding your business easy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-50 p-3 rounded-lg">
                  <LineChart className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Trends</h3>
                  <p className="text-slate-600">Monitor growth trends and identify patterns to optimize your operations and increase profits.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <Wallet className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Financial Insights</h3>
                  <p className="text-slate-600">Get clear visibility into your revenue streams, expenses, and profit margins with detailed financial reports.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Archive className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Order Management</h3>
                  <p className="text-slate-600">Track the status of all orders in real-time, from measurement to delivery, ensuring nothing falls through the cracks.</p>
                </div>
              </div>
              
              <Button className="group mt-4 bg-brand-600 hover:bg-brand-700 text-white">
                <span>Explore Dashboard Features</span>
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 mix-blend-multiply opacity-30"></div>
              <div className="p-2 bg-slate-800 flex items-center">
                <div className="flex space-x-1.5 ml-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto text-xs text-slate-300 font-medium">Thvab Analytics Dashboard</div>
              </div>
              <img 
                src="/lovable-uploads/38b91400-e1a0-4e6f-b185-77b2a4697b41.png" 
                alt="Thvab Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-brand-50 flex items-center justify-center">
                  <ArrowUpRight className="h-4 w-4 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">38% increase</p>
                  <p className="text-xs text-slate-500">in business efficiency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
