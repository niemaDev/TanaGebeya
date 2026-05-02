import { useState, useRef, useEffect } from 'react';
import { 
  Truck, ShieldCheck, Zap, CreditCard, Flame, 
  ChevronRight, ChevronLeft, Star, ShoppingCart, Heart, List, ArrowRight
} from 'lucide-react';
import CategorySidebar from '../features/catalog/CategorySidebar';

export default function Home() {
  const [products] = useState([
    { id: 1, name: "G-Tab 10000mAh Power Bank Fast Charge", price: 3999, oldPrice: 4500, category: "Power Bank", image: "/powerbank.jpg" },
    { id: 2, name: "HainoTeko SQ-15 Smartwatch Series", price: 6500, category: "Smartwatches", image: "/smart-watch.jpg" },
    { id: 3, name: "4K WiFi Sports Waterproof Camera", price: 11000, category: "Cameras", image: "/camera.jpg" },
    { id: 4, name: "Bitvae Toothbrush Sterilizer & Holder", price: 4500, category: "Health", image: "/toothbrush.jpg" },
    { id: 5, name: "Premium Toilet Storage Rack", price: 2200, category: "Home", image: "/tisue-table.jpg" },
    { id: 6, name: "Wireless Bluetooth Speaker Bass", price: 3500, category: "Audio", image: "/bluetooth-speaker.jpg" },
    { id: 7, name: "Smart LED Desk Lamp", price: 2100, category: "Office", image: "/lamp.jpg" },
    { id: 8, name: "Ergonomic Office Chair", price: 18500, category: "Furniture", image: "/desk-revelted.jpg" },
  ]);

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      if (maxScrollLeft <= 0) return;

      const percentage = scrollLeft / maxScrollLeft;
      const index = Math.round(percentage * (products.length - 1));
      
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const target = (index / (products.length - 1)) * maxScrollLeft;

      scrollRef.current.scrollTo({
        left: target,
        behavior: 'smooth'
      });
    }
  };

  const scrollSide = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen font-sans text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 py-6">
        
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
  {/* Sidebar - Remains on the left */}
  <aside className="hidden lg:block lg:w-1/4 bg-white border border-gray-200">
    <CategorySidebar />
  </aside>

  {/* Main Content Area - Stacks rows vertically */}
  <div className="flex-grow flex flex-col gap-4">
    
    {/* ROW 1: Three Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 border border-gray-200 relative h-[260px] overflow-hidden group">
        <div className="relative z-10">
          <div className="flex gap-0.5 mb-2">
            {[1, 2, 3].map(i => <Star key={i} size={14} className="fill-orange-500 text-orange-500" />)}
          </div>
          <h2 className="text-xl font-black uppercase leading-tight">CATCH THE <br /> BEST DEALS</h2>
          <button className="flex items-center gap-2 mt-4 text-xs font-bold uppercase hover:text-yellow-600 transition-colors">
            Shop now <ChevronRight size={16} className="bg-yellow-400 rounded-full p-0.5 text-slate-900" />
          </button>
        </div>
        <img src="/limited-offer.jpg" alt="banner" className="absolute right-2 bottom-4 w-36 group-hover:scale-110 transition-transform" />
      </div>

      <div className="bg-white p-6 border border-gray-200 relative h-[260px] overflow-hidden group">
        <h3 className="text-lg font-bold uppercase leading-tight">HOME <br /> APPLIANCES</h3>
        <button className="flex items-center gap-2 mt-4 text-xs font-bold uppercase hover:text-yellow-600">
          Shop now <ChevronRight size={16} className="bg-yellow-400 rounded-full p-0.5 text-slate-900" />
        </button>
        <img src="/gadgets.jpg" alt="appliances" className="absolute right-2 bottom-4 h-26 w-55 group-hover:scale-110 transition-transform" />
      </div>

      <div className="bg-white p-6 border border-gray-200 relative h-[260px] overflow-hidden group">
        <h3 className="text-lg font-bold uppercase leading-tight">BEST <br /> GADGETS</h3>
        <button className="flex items-center gap-2 mt-4 text-xs font-bold uppercase hover:text-yellow-600">
          Shop now <ChevronRight size={16} className="bg-yellow-400 rounded-full p-0.5 text-slate-900" />
        </button>
        <img src="/apple-collection.jpg" alt="gadgets" className="absolute right-2 bottom-4 h-26 w-55 group-hover:scale-110 transition-transform" />
      </div>
    </div>

    {/* ROW 2: Three Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 border border-gray-200 relative h-[260px] overflow-hidden group">
         {/* ... Card Content ... */}
         <h2 className="text-xl font-black uppercase leading-tight">NEW <br /> ARRIVALS</h2>
         <button className="flex items-center gap-2 mt-4 text-xs font-bold uppercase hover:text-yellow-600 transition-colors">
            Shop now <ChevronRight size={16} className="bg-yellow-400 rounded-full p-0.5 text-slate-900" />
          </button>
         <img src="/limited-offer.jpg" alt="banner" className="absolute right-2 bottom-4 w-36 group-hover:scale-110 transition-transform" />
      </div>

      <div className="bg-white p-6 border border-gray-200 relative h-[260px] overflow-hidden group">
         {/* ... Card Content ... */}
         <h3 className="text-lg font-bold uppercase leading-tight">OFFICE <br /> SOLUTIONS</h3>
         <button className="flex items-center gap-2 mt-4 text-xs font-bold uppercase hover:text-yellow-600">
          Shop now <ChevronRight size={16} className="bg-yellow-400 rounded-full p-0.5 text-slate-900" />
        </button>
         <img src="/gadgets.jpg" alt="appliances" className="absolute right-2 bottom-4 h-26 w-55 group-hover:scale-110 transition-transform" />
      </div>

      <div className="bg-white p-6 border border-gray-200 relative h-[260px] overflow-hidden group">
         {/* ... Card Content ... */}
         <h3 className="text-lg font-bold uppercase leading-tight">SMART <br /> WATCHES</h3>
         <button className="flex items-center gap-2 mt-4 text-xs font-bold uppercase hover:text-yellow-600">
          Shop now <ChevronRight size={16} className="bg-yellow-400 rounded-full p-0.5 text-slate-900" />
        </button>
         <img src="/apple-collection.jpg" alt="gadgets" className="absolute right-2 bottom-4 h-26 w-55 group-hover:scale-110 transition-transform" />
      </div>
    </div>

  </div>
</div>
          
       
          
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 bg-white border border-gray-200 mb-8 divide-x divide-gray-100">
          {[
            { icon: <Truck />, title: "Delivery 200BR", sub: "IN BAHIR DAR" },
            { icon: <ShieldCheck />, title: "99% Positive", sub: "FEEDBACKS" },
            { icon: <Zap />, title: "24/7", sub: "SERVICE" },
            { icon: <CreditCard />, title: "Payment", sub: "OPTIONS" },
            { icon: <Flame />, title: "Best", sub: "PRICE" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 justify-center">
              <div className="text-yellow-400">{item.icon}</div>
              <div className="leading-tight">
                <p className="text-xs font-bold">{item.title}</p>
                <p className="text-[10px] text-gray-400 font-bold">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 mb-10">
          <div className="flex items-center justify-between border-b border-gray-100 p-4 bg-gray-50/50">
            <h3 className="font-bold text-lg text-slate-700 uppercase flex items-center gap-2">
              <List size={20} className="text-yellow-500" /> Consumer Electronics
            </h3>
            <div className="hidden md:flex gap-6 text-[10px] font-black text-gray-400 uppercase">
              <button className="hover:text-yellow-600">Smartwatches</button>
              <button className="hover:text-yellow-600">Power Banks</button>
              <button className="hover:text-yellow-600">Audio</button>
              <button className="text-yellow-600 flex items-center gap-1">View All <ArrowRight size={12}/></button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/5 border-r border-gray-100 p-5">
              <ul className="space-y-4">
                {['Mobiles', 'Laptops', 'Accessories', 'Headphones', 'Cameras', 'Tablets'].map((cat) => (
                  <li key={cat} className="flex items-center justify-between text-xs font-bold text-gray-500 hover:text-yellow-600 cursor-pointer group transition-colors">
                    {cat} <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-grow grid grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className="p-4 border-r border-b border-gray-100 hover:shadow-2xl hover:z-20 transition-all group relative bg-white">
                  <div className="relative mb-4">
                    <img src={product.image} alt={product.name} className="w-full aspect-square object-contain" />
                    <div className="absolute top-0 right-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                      <button className="bg-white p-2 rounded shadow hover:bg-yellow-400 transition-colors"><Heart size={14}/></button>
                      <button className="bg-white p-2 rounded shadow hover:bg-yellow-400 transition-colors"><ShoppingCart size={14}/></button>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-400 uppercase font-black mb-1">{product.category}</p>
                  <h4 className="text-[11px] font-bold text-blue-700 hover:underline line-clamp-2 h-8 leading-tight mb-3">{product.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-800">Br{product.price.toLocaleString()}.00</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  BEST COLLECTIONS */}
        <div className="bg-white border border-gray-200">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-700 uppercase tracking-tight">TanaGebeya Best Collections</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => scrollSide('left')}
                className="p-1 border border-gray-200 rounded hover:bg-yellow-400 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => scrollSide('right')}
                className="p-1 border border-gray-200 rounded hover:bg-yellow-400 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth p-4 gap-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((p) => (
              <div key={p.id} className="min-w-[45%] md:min-w-[16%] text-center group cursor-pointer snap-start">
                <div className="bg-[#f9f9f9] border border-transparent group-hover:border-yellow-400 rounded-sm p-4 mb-3 transition-all relative overflow-hidden">
                  <img src={p.image} alt="collect" className="w-full aspect-square object-contain group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-[11px] font-bold text-slate-700 line-clamp-2 h-8 px-1">{p.name}</p>
                <p className="text-sm font-black text-yellow-600 mt-2">Br {p.price.toLocaleString()}</p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 py-6">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx 
                    ? "w-8 h-2 bg-yellow-400 shadow-sm" 
                    : "w-2 h-2 bg-gray-200 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}