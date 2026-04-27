export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Total Sales</p>
          <p className="text-3xl font-black mt-2">Br 128,400</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Total Orders</p>
          <p className="text-3xl font-black mt-2">42</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-yellow-500">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Low Stock</p>
          <p className="text-3xl font-black mt-2 text-red-500">5 Items</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <h3 className="text-xl font-bold mb-4">Recent Sales Activity</h3>
        <div className="h-40 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 italic">
          Sales chart will be integrated here (FR-13)
        </div>
      </div>
    </div>
  );
}