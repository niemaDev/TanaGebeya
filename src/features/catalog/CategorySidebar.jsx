import { useState } from 'react';

const categories = [
  { id: 1, name: 'Consumer Electronics', icon: '📱' },
  { id: 2, name: 'Health & Beauty', icon: '💄' },
  { id: 3, name: 'Home & Office', icon: '🏠' },
  { id: 4, name: 'Fashion', icon: '👕' },
  { id: 5, name: 'Computing', icon: '💻' },
  { id: 6, name: 'Stationery', icon: '📚' },
  { id: 7, name: 'Sports & Outdoors', icon: '⚽' },
  { id: 8, name: 'Bicycles & Three', icon: '🚲' },
];

export default function CategorySidebar() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-yellow-400 p-4 flex items-center space-x-2">
        <span className="font-bold text-gray-900">DEPARTMENTS</span>
      </div>
      <nav className="py-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="w-full text-left px-5 py-3 flex items-center justify-between hover:bg-gray-50 hover:text-blue-600 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{cat.icon}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                {cat.name}
              </span>
            </div>
            <span className="text-gray-300 group-hover:text-blue-400 text-xs">▶</span>
          </button>
        ))}
      </nav>
    </div>
  );
}