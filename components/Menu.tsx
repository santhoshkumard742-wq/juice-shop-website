
import React from 'react';
import { motion } from 'framer-motion';
import { JUICE_MENU } from '../constants';
import { Plus, Check } from 'lucide-react';

const Menu: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    hover: { 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hover: { 
      rotate: 90, 
      scale: 1.15,
      transition: { type: 'spring', stiffness: 300, damping: 15 }
    }
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
          >
            Explore Our <span className="text-green-600">Fresh Menu</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Hand-picked fruits, pressed to perfection. Each bottle is packed with essential nutrients to keep you glowing all day long.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {JUICE_MENU.map((juice) => (
            <motion.div 
              key={juice.id}
              variants={item}
              whileHover="hover"
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={juice.image} 
                  alt={juice.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${juice.color} border shadow-sm`}>
                    Best Seller
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{juice.name}</h3>
                    <p className="text-green-600 font-bold text-lg mt-1">{juice.price}</p>
                  </div>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    variants={iconVariants}
                    className="bg-gray-900 text-white p-3 rounded-2xl hover:bg-green-600 transition-colors"
                  >
                    <Plus size={20} />
                  </motion.button>
                </div>

                <div className="space-y-2">
                  {juice.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center">
                        <Check size={10} className="text-green-500" />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
