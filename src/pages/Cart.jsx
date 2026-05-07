export default function Cart() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart (2 items)</h1>
      <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-6">
        {/* Cart Item Placeholder */}
        <div className="flex items-center justify-between border-b pb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg" />
            <div>
              <h3 className="font-bold">Mini Humidifier</h3>
              <p className="text-sm text-gray-500">Br 2,999</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-2 py-1 bg-gray-100 rounded">-</button>
            <span>1</span>
            <button className="px-2 py-1 bg-gray-100 rounded">+</button>
            <button className="text-red-500 ml-4 font-medium text-sm">Remove</button>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <span className="text-xl font-bold text-gray-600">Total:</span>
          <span className="text-3xl font-black text-gray-900">Br 2,999.00</span>
        </div>
        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}