
import React from 'react';
import { Leaf, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 p-2 rounded-xl">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">Fresh Drop</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We bring the farm to your glass. Our mission is to fuel your day with the purest nutrients nature can provide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">Juice Menu</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Detox Programs</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Store Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="text-green-500 shrink-0" size={20} />
                <span>123 Healthy Street, <br />Green District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-500 shrink-0" size={20} />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-green-500 shrink-0" size={20} />
                <span>hello@freshdrop.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Fresh Drop Juices. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
