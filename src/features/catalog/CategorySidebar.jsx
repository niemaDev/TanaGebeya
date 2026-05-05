import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

const categories = [
  { name: 'Bed and Bath', sub: ['Bed Sheets', 'Pillows', 'Towels', 'Bath Mats'] },
  { name: 'Beverage', sub: ['Tea', 'Coffee', 'Soft Drinks', 'Juice', 'Water'] },
  { name: 'Electronics and Home Appliance', sub: ['Kitchen Appliances', 'TVs', 'Audio Systems'] },
  { name: 'Food', sub: ['Canned Goods', 'Snacks', 'Pasta & Grains', 'Spices'] },
  { name: 'Furniture', sub: ['Chairs', 'Tables', 'Storage'] },
  { name: 'Home Care', sub: ['Detergents', 'Cleaning Tools'] },
  { name: 'Personal Care', sub: ['Skincare', 'Haircare', 'Oral Care'] },
  { name: 'Stationary', sub: ['Notebooks', 'Pens', 'Office Supplies'] },
];

// Destructure activeCategory and setActiveCategory from props
export default function CategorySidebar({ activeCategory, setActiveCategory }) {
  const [hoveredCat, setHoveredCat] = useState(null);

  return (
    <div className="w-full bg-white border border-gray-100 rounded-b-lg shadow-sm relative">
      {/* All Products Header - Resets filter to 'All' */}
      <div 
        onClick={() => setActiveCategory('All')}
        className="bg-[#d48806] text-white p-4 font-black uppercase text-sm flex items-center gap-3 cursor-pointer hover:bg-[#b87605] transition-colors"
      >
        <span className="grid grid-cols-2 gap-0.5 w-4">
          <span className="w-1.5 h-1.5 bg-white"></span>
          <span className="w-1.5 h-1.5 bg-white"></span>
          <span className="w-1.5 h-1.5 bg-white"></span>
          <span className="w-1.5 h-1.5 bg-white"></span>
        </span>
        All Products
      </div>
      
      <ul className="py-2">
        {categories.map((cat) => (
          <li 
            key={cat.name}
            onMouseEnter={() => setHoveredCat(cat)}
            onMouseLeave={() => setHoveredCat(null)}
            // Clicking the main category filter
            onClick={() => setActiveCategory(cat.name)}
            className={`group px-4 py-3 flex items-center justify-between cursor-pointer transition-colors border-b border-gray-50 last:border-0
              ${activeCategory === cat.name ? 'bg-yellow-50' : 'hover:bg-gray-50'}
            `}
          >
            <div className="flex items-center gap-3">
              {/* Dynamic Icon Color based on Active State */}
              <div className={`w-6 h-6 rounded transition-colors 
                ${activeCategory === cat.name ? 'bg-yellow-400' : 'bg-gray-100 group-hover:bg-yellow-100'}`}
              ></div>
              <span className={`text-[13px] font-medium transition-colors 
                ${activeCategory === cat.name ? 'text-yellow-700' : 'text-gray-700'}`}
              >
                {cat.name}
              </span>
            </div>
            <ChevronRight 
              size={14} 
              className={activeCategory === cat.name ? 'text-yellow-600' : 'text-gray-300 group-hover:text-yellow-600'} 
            />

            {/* Flyout Submenu */}
            {hoveredCat?.name === cat.name && (
              <div className="absolute left-full top-0 w-64 bg-white shadow-2xl border border-gray-100 z-[100] min-h-full p-6 animate-in fade-in slide-in-from-left-2 duration-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-black text-[#d48806] uppercase text-[10px] tracking-widest">{cat.name}</h3>
                  <X size={14} className="text-gray-300 hover:text-red-500 cursor-pointer" />
                </div>
                <ul className="space-y-4">
                  {cat.sub.map(item => (
                    <li 
                      key={item} 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents the parent category click from firing
                        setActiveCategory(item); // Updates the filter to specific sub-category
                      }}
                      className={`text-[13px] transition-all cursor-pointer hover:text-yellow-600 hover:translate-x-1
                        ${activeCategory === item ? 'text-yellow-600 font-bold italic' : 'text-gray-600'}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}