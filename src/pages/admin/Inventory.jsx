export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Inventory</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
          + Add New Product
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-700">Product Name</th>
              <th className="px-6 py-4 font-bold text-gray-700">Category</th>
              <th className="px-6 py-4 font-bold text-gray-700">Price</th>
              <th className="px-6 py-4 font-bold text-gray-700">Stock</th>
              <th className="px-6 py-4 font-bold text-gray-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium">Smartwatch SQ-15</td>
              <td className="px-6 py-4 text-gray-500">Gadgets</td>
              <td className="px-6 py-4 font-bold">Br 6,500</td>
              <td className="px-6 py-4">24</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}