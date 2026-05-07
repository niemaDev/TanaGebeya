import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function MainLayout() {
  return (
    <div className="font-sans text-slate-900 bg-[#f8f9fa] selection:bg-yellow-100 selection:text-yellow-900">
      {/* Top Banner (Optional for alerts) */}
      <div className="bg-[#34495e] text-white text-[11px] py-2 text-center uppercase font-bold tracking-widest">
        Free Delivery for orders above 5000 BR in Bahir Dar!
      </div>

      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
      
      {/* Quick Info Bar seen in Screenshot 494 */}
      <div className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="flex items-center gap-4">
              <div className="text-yellow-500 font-black text-2xl">24/7</div>
              <div className="text-[11px] uppercase font-bold text-gray-500">Online Support</div>
           </div>
           <div className="flex items-center gap-4">
              <div className="text-yellow-500 font-black text-2xl">100%</div>
              <div className="text-[11px] uppercase font-bold text-gray-500">Secure Payment</div>
           </div>
           {/* Add more as per Screenshot 494 */}
        </div>
      </div>
    </div>
  );
}