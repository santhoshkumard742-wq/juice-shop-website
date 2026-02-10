
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Decorative Circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between z-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              100% Organic & Cold Pressed
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gray-900 leading-tight mb-6">
              Fresh Juice.<br />
              <span className="text-green-600">Real Fruits.</span><br />
              Pure Energy.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Fuel your body with nature's finest. Our juices are cold-pressed daily with zero added sugars, preservatives, or artificial junk. Just pure wellness in every drop.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl shadow-green-200"
              >
                Order Now <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-gray-100 hover:border-orange-500 hover:text-orange-500 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all"
              >
                View Menu
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop" 
              alt="Fresh Orange Juice"
              className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl border-[12px] border-white"
            />
            
            {/* Floating UI element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Play className="text-yellow-600 fill-yellow-600" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900">How it's made</p>
                <p className="text-xs text-gray-500">Watch our process</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/5 rounded-full -z-10 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
