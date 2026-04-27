export default function ProductDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm">
      <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
        <img src="https://via.placeholder.com/400" alt="Product" className="max-w-full h-auto object-contain" />
      </div>
      <div className="flex flex-col justify-center">
        <nav className="text-sm text-gray-400 mb-4">Home / Electronics / Smartwatch</nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">HainoTeko SQ-15 Smartwatch</h1>
        <p className="text-2xl font-bold text-blue-600 mb-6">Br 6,500.00</p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          High-quality smart wearable with heart rate monitoring, fitness tracking, and a sleek design. Perfect for students and professionals.
        </p>
        <div className="flex items-center space-x-4 mb-8">
          <input type="number" defaultValue="1" min="1" className="w-20 px-3 py-2 border rounded-lg outline-none" />
          <button className="flex-grow bg-yellow-400 hover:bg-yellow-500 font-bold py-3 rounded-xl transition">
            Add to Cart
          </button>
        </div>
        <div className="border-t pt-6 text-sm text-gray-500">
          <p>Availability: <span className="text-green-600 font-bold">In Stock</span></p>
          <p>Category: Gadgets</p>
        </div>
      </div>
    </div>
  );
}