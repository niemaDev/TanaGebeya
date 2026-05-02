import { useState } from 'react';
import { LayoutGrid, ChevronRight, X } from 'lucide-react';

const categories = [
  { 
    id: 1, 
    name: 'Bed and Bath', 
    image: 'https://via.placeholder.com/24',
    subCategories: ['Bed Sheets', 'Pillows', 'Towels', 'Bath Mats']
  },
  { 
    id: 2, 
    name: 'Beverage', 
    image: 'https://via.placeholder.com/24',
    subCategories: ['Tea', 'Coffee', 'Soft Drinks', 'Juice', 'Water']
  },
  { 
    id: 3, 
    name: 'Electronics and Home Appliance', 
    image: 'https://via.placeholder.com/24',
    subCategories: ['Kitchen Appliances', 'TVs', 'Audio Systems', 'Vacuum Cleaners']
  },
  { 
    id: 4, 
    name: 'Food', 
    image: 'https://via.placeholder.com/24',
    subCategories: ['Canned Goods', 'Snacks', 'Pasta & Grains', 'Spices']
  },
  { id: 5, name: 'Furniture', image: 'https://via.placeholder.com/24', subCategories: ['Chairs', 'Tables', 'Storage'] },
  { id: 6, name: 'Home Care', image: 'https://via.placeholder.com/24', subCategories: ['Detergents', 'Cleaning Tools'] },
  { id: 7, name: 'Personal Care', image: 'https://via.placeholder.com/24', subCategories: ['Skincare', 'Haircare', 'Oral Care'] },
  { id: 8, name: 'Stationary', image: 'https://via.placeholder.com/24', subCategories: ['Notebooks', 'Pens', 'Office Supplies'] },
];

export default function CategorySidebar() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (cat) => {
    // If clicking the same category, close it; otherwise open the new one
    setActiveCategory(activeCategory?.id === cat.id ? null : cat);
  };

  return (
    <div className="relative bg-white shadow-sm border border-gray-100 h-full min-h-[450px]">
      {/* Header Section - Dark Yellow / Slate Theme */}
      <div className="p-4 flex items-center space-x-3 border-b bg-yellow-600 text-white">
        <LayoutGrid size={20} />
        <span className="font-bold text-sm tracking-tight uppercase">All Products</span>
      </div>

      <nav className="divide-y divide-gray-50 relative">
        {categories.map((cat) => (
          <div key={cat.id} className="relative">
            <button
              onClick={() => handleCategoryClick(cat)}
              className={`w-full text-left px-4 py-3.5 flex items-center justify-between transition-all group ${
                activeCategory?.id === cat.id ? 'bg-yellow-50 text-yellow-700' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className={`w-6 h-6 object-contain transition-all ${
                    activeCategory?.id === cat.id ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                  }`} 
                />
                <span className="text-[13px] font-semibold text-gray-700 group-hover:text-yellow-700 transition-colors">
                  {cat.name}
                </span>
              </div>
              <ChevronRight 
                size={14} 
                className={`transition-all ${
                  activeCategory?.id === cat.id 
                    ? 'text-yellow-600 rotate-180' 
                    : 'text-gray-300 group-hover:text-yellow-600 group-hover:translate-x-1'
                }`} 
              />
            </button>

            {/* --- MEGA MENU PANEL --- */}
            {/* This displays when a category is clicked, similar to Screenshot (488).jpg */}
            {activeCategory?.id === cat.id && (
              <div className="absolute top-0 left-full w-64 bg-white border border-gray-100 shadow-xl z-50 min-h-full animate-in slide-in-from-left-2 duration-200">
                <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50">
                  <span className="font-bold text-xs uppercase text-yellow-700">{activeCategory.name}</span>
                  <button onClick={() => setActiveCategory(null)}>
                    <X size={14} className="text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <ul className="py-2">
                  {activeCategory.subCategories.map((sub, index) => (
                    <li 
                      key={index}
                      className="px-6 py-2.5 text-[13px] text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 cursor-pointer transition-colors border-b border-transparent"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
      
      {/* Overlay to close when clicking outside on mobile/narrower views */}
      {activeCategory && (
        <div 
          className="fixed inset-0 z-40 bg-transparent" 
          onClick={() => setActiveCategory(null)}
        />
      )}
    </div>
  );
}