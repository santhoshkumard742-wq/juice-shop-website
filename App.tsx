
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Features from './components/Features';
import Combos from './components/Combos';
import Testimonials from './components/Testimonials';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Features />
        <Combos />
        <Testimonials />
        <OrderSection />
        
        {/* Placeholder for Map Section */}
        <section className="h-[400px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-2 border border-gray-100">
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               </div>
               <p className="font-bold text-gray-900">Find Us in New York</p>
               <p className="text-sm text-gray-500">123 Healthy Street, Green District</p>
               <button className="mt-2 text-green-600 font-bold text-sm underline">Open in Google Maps</button>
             </div>
          </div>
          {/* Simulated Map Background */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
