
import React from 'react';
import { motion } from 'framer-motion';
import { COMBOS } from '../constants';
import { Sparkles, ArrowRight } from 'lucide-react';

const Combos: React.FC = () => {
  return (
    <section id="combos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4"
            >
              <Sparkles size={18} /> Limited Time Offers
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900"
            >
              Save Big with Our <span className="text-orange-500">Popular Combos</span>
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="text-green-600 font-bold flex items-center gap-2 group"
          >
            View all deals <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMBOS.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="relative p-8 rounded-[2rem] bg-gradient-to-b from-gray-50 to-white border border-gray-100 group transition-all duration-300"
            >
              <div className="absolute top-6 right-6">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {combo.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{combo.name}</h3>
              <p className="text-gray-500 mb-8 h-12 leading-relaxed">{combo.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-3xl font-extrabold text-gray-900">{combo.price}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 transition-colors"
                >
                  Buy Now
                </motion.button>
              </div>

              {/* Decorative line */}
              <div className="mt-8 h-1 w-0 group-hover:w-full bg-green-500 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;
