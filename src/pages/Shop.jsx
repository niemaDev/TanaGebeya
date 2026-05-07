import React, { useState, useEffect } from 'react';
import CategorySidebar from '../features/catalog/CategorySidebar';
import ProductCard from '../features/catalog/ProductCard';
import { ChevronRight, LayoutGrid, List } from 'lucide-react';
// import { allProducts } from '../data/products'; // Use this for now

export default function Shop() {
  const [products, setProducts] = useState([]); // Start with empty array
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // PROFESSIONAL SIMULATION:
    // This is where you would normally do: axios.get('/api/products')
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Simulating a database delay
        setTimeout(() => {
          // Replace this with your actual data import or API call
          // setProducts(allProducts); 
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const displayedProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory || p.subCategory === activeCategory);

  if (loading) return <div className="flex justify-center py-20 font-bold text-yellow-600 animate-pulse">Loading TanaGebeya Products...</div>;

    return (

    <div className="bg-[#fdfdfd] min-h-screen">

      <div className="max-w-[1400px] mx-auto px-4 py-6">

        {/* Breadcrumbs */}

        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-medium">

          <span>Home</span> <ChevronRight size={12} /> <span className="text-slate-900">Shop</span>

        </nav>



        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}

          <aside className="w-full lg:w-72 flex-shrink-0">

            <CategorySidebar

              activeCategory={activeCategory}

              setActiveCategory={setActiveCategory}

            />

          </aside>



          {/* Main Area */}

          <main className="flex-1">

            <header className="mb-8">

              <p className="italic text-sm text-gray-600 mb-6 font-medium leading-relaxed">

                Shop online for the latest Electronics, accessories, computer, clothes and many more online with TanaGebeya in Bahir Dar.

              </p>



              {/* Fixed: Corrected div nesting and layout */}

              <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f9f9f9] p-4 rounded-lg border border-gray-100 gap-4">

                <div className="flex items-center gap-4">

                  <div className="flex gap-2 border-r border-gray-200 pr-4">

                    <button className="p-2 bg-slate-800 text-white rounded"><LayoutGrid size={18} /></button>

                    <button className="p-2 text-gray-400"><List size={18} /></button>

                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-slate-800">{activeCategory}</h2>

                    <p className="text-[11px] text-gray-500 font-semibold uppercase">Showing {displayedProducts.length} results</p>

                  </div>

                </div>



                <div className="flex items-center gap-4 text-xs font-bold text-gray-500">

                  <select className="bg-white border border-gray-200 rounded px-3 py-2 outline-none cursor-pointer">

                    <option>Default sorting</option>

                    <option>Price: Low to High</option>

                    <option>Price: High to Low</option>

                  </select>

                </div>

              </div>

            </header>



            {/* Grid */}

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

              {displayedProducts.map(product => (

                <ProductCard key={product.id} product={product} />

              ))}

            </div>



            {displayedProducts.length === 0 && (

              <div className="text-center py-20 text-gray-400 font-medium">

                No products found in this category.

              </div>

            )}

          </main>

        </div>

      </div>

    </div>

  );

}