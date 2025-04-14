
import { motion } from 'framer-motion';
import { BarChart3, Users, ShoppingBag, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Active Users',
    value: '2,700+',
    description: 'tailoring businesses',
    icon: <Users className="h-6 w-6 text-white" />,
    bgColor: 'from-violet-500 to-purple-600',
    delay: 0.1
  },
  {
    name: 'Orders Processed',
    value: '1.2M+',
    description: 'yearly transactions',
    icon: <ShoppingBag className="h-6 w-6 text-white" />,
    bgColor: 'from-blue-500 to-indigo-600',
    delay: 0.2
  },
  {
    name: 'Revenue Tracked',
    value: '$120M+',
    description: 'managed annually',
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    bgColor: 'from-emerald-500 to-teal-600',
    delay: 0.3
  },
  {
    name: 'Growth Rate',
    value: '38%',
    description: 'year over year',
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    bgColor: 'from-amber-500 to-orange-600',
    delay: 0.4
  }
];

const Stats = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
              Impressive Numbers
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Trusted by <span className="text-brand-600">Tailoring Businesses</span> Worldwide
          </h2>
          <p className="text-lg text-slate-600">
            Join thousands of thobe tailoring businesses already using Thvab to streamline their operations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative backdrop-blur-sm rounded-2xl overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.bgColor} opacity-90`}></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative p-8 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <motion.div 
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{stat.name}</h3>
                <p className="text-white/80">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
