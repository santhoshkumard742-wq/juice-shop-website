
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Truck, Clock, ShieldCheck } from 'lucide-react';

const OrderSection: React.FC = () => {
  const whatsappUrl = "https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20order%20some%20fresh%20juice.";

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-orange-500 rounded-[3rem] p-8 md:p-16 text-white relative flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl shadow-orange-200">
          {/* Decorative shapes */}
          <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-orange-400/50 rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-orange-600/30 rounded-full"></div>

          <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
              Ready to feel <br />the energy?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-md mx-auto lg:mx-0">
              Order now and get fresh, cold-pressed juice delivered to your doorstep in 30 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-orange-700/20"
              >
                <MessageCircle size={24} /> Order via WhatsApp
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-8 py-4 text-white font-bold"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                +1 (234) 567-890
              </motion.a>
            </div>
          </div>

          <div className="lg:w-1/2 relative z-10 grid grid-cols-2 gap-6 w-full max-w-md">
            {[
              { icon: <Truck />, text: 'Free Delivery', sub: 'Orders over $25' },
              { icon: <Clock />, text: '30 Min Delivery', sub: 'City center zone' },
              { icon: <ShieldCheck />, text: 'Safe Packing', sub: 'UV Sterilized' },
              { icon: <Clock />, text: 'Open Daily', sub: '8:00 AM - 9:00 PM' }
            ].map((item, i) => (
              <div key={i} className="bg-orange-600/40 backdrop-blur-md p-6 rounded-3xl border border-orange-400/30">
                <div className="mb-4 text-orange-100">{item.icon}</div>
                <h4 className="font-bold text-lg mb-1">{item.text}</h4>
                <p className="text-orange-200 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
