import React, { useState, useEffect } from 'react';
import { Plus, Package, Edit, Trash2, Search } from 'lucide-react';

export default function Inventory() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // In a real app, you would fetch from: /api/products (filtered by backend for vendors)
  const isAdmin = user?.role === 'admin';

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase">
            {isAdmin ? 'Global Inventory' : 'My Store Inventory'}
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            {isAdmin ? 'Manage all marketplace listings' : 'Add and edit your products'}
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-yellow-500 text-slate-900 px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95"
        >
          <Plus size={20} /> ADD PRODUCT
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 text-gray-400 mb-2">
            <Package size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Total Items</span>
          </div>
          <p className="text-2xl font-black text-slate-900">24</p>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Product</th>
              <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Category</th>
              <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Price</th>
              <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Status</th>
              <th className="p-4 text-[10px] font-bold uppercase text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                  <span className="font-bold text-sm text-slate-700">Sample Product</span>
                </div>
              </td>
              <td className="p-4 text-sm font-medium text-gray-600">Electronics</td>
              <td className="p-4 text-sm font-black text-slate-900">ETB 450</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">ACTIVE</span>
              </td>
              <td className="p-4 text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2 hover:bg-yellow-50 text-yellow-600 rounded-lg transition-colors"><Edit size={16}/></button>
                  <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"><Trash2 size={16}/></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}