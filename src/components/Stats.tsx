
import { motion } from 'framer-motion';
import { ChartBarSquare, Users, ShoppingBag, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Active Users',
    value: '2,700+',
    description: 'tailoring businesses',
    icon: <Users className="h-6 w-6 text-brand-600" />,
    color: 'bg-rose-50'
  },
  {
    name: 'Orders Processed',
    value: '1.2M+',
    description: 'yearly transactions',
    icon: <ShoppingBag className="h-6 w-6 text-indigo-600" />,
    color: 'bg-indigo-50'
  },
  {
    name: 'Revenue Tracked',
    value: '$120M+',
    description: 'managed annually',
    icon: <ChartBarSquare className="h-6 w-6 text-emerald-600" />,
    color: 'bg-emerald-50'
  },
  {
    name: 'Growth Rate',
    value: '38%',
    description: 'year over year',
    icon: <TrendingUp className="h-6 w-6 text-amber-600" />,
    color: 'bg-amber-50'
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Tailoring Businesses Worldwide</h2>
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`p-3 rounded-xl ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-base font-medium text-slate-800 mb-1">{stat.name}</div>
              <div className="text-sm text-slate-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
