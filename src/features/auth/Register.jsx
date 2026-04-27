import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h2>
      <p className="text-gray-500 text-center mb-8">Login to manage your orders</p>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition" placeholder="nimet@example.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
          <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition" placeholder="••••••••" />
        </div>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl shadow-md transition transform active:scale-95">
          Sign In
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account? <Link to="/register" className="text-blue-600 font-bold hover:underline">Register here</Link>
      </p>
    </div>
  );
}