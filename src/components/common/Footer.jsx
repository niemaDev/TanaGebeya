import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    
        <div className="space-y-6">
          <h2 className="text-2xl font-black tracking-tighter">TANA<span className="text-yellow-500">GEBEYA</span></h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The most reliable online shopping management system in Ethiopia. Digitalizing your shopping experience with efficiency and security.
          </p>
          <div className="flex space-x-4">
            <span className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition cursor-pointer">f</span>
            <span className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition cursor-pointer">t</span>
            <span className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition cursor-pointer">i</span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Customer Care</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="hover:text-yellow-400 transition cursor-pointer">Help Center</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Track Your Order</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Shipping Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Top Categories</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="hover:text-yellow-400 transition cursor-pointer">Electronics</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Home & Office</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Fashion & Apparel</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Health & Beauty</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">System Admin</h4>
          <p className="text-slate-400 text-sm mb-4 italic">Internal portal for authorized staff only.</p>
          
        </div>
      </div>

      <div className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 SMS TANA-GEBEYA. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}