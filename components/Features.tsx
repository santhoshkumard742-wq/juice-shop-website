
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Why Choose <span className="text-green-600">Fresh Drop?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                We believe that healthy living should be effortless and delicious. Our process is designed to preserve every vitamin and mineral.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-lg shadow-green-100 border border-green-50">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" 
                alt="Fresh fruits and vegetables" 
                className="rounded-[3rem] shadow-2xl"
              />
              {/* Floating Stat */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100"
              >
                <p className="text-3xl font-extrabold text-orange-500">20k+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Happy Clients</p>
              </motion.div>
            </motion.div>
            
            {/* Background pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-green-500/5 -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
