import React from 'react';
import { ShoppingBag, Users, ShieldCheck, Truck, MapPin } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <ShieldCheck className="text-yellow-600" size={32} />,
      title: "Quality Guaranteed",
      description: "We source only the best electronics, home appliances, and accessories for our customers."
    },
    {
      icon: <Users className="text-yellow-600" size={32} />,
      title: "Customer Centric",
      description: "Your satisfaction is our priority. We are built by the community, for the community."
    },
    {
      icon: <Truck className="text-yellow-600" size={32} />,
      title: "Fast Delivery",
      description: "Specialized delivery services across Bahir Dar and surrounding regions."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
            About <span className="text-yellow-400">TanaGebeya</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed italic">
            "Your Trusted Online Marketplace in the Heart of Bahir Dar."
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-loose mb-4">
              Founded with a vision to revolutionize the shopping experience in Ethiopia, 
              <strong> TanaGebeya</strong> started as a project to bring the latest technology, 
              fashion, and home essentials directly to your doorstep.
            </p>
            <p className="text-gray-600 leading-loose">
              We understand the local market needs in <strong>Bahir Dar</strong>. Whether you are looking for 
              high-quality kitchen appliances or the latest electronic gadgets, we bridge 
              the gap between quality and convenience.
            </p>
          </div>
          <div className="bg-yellow-100 rounded-3xl p-12 flex justify-center items-center relative overflow-hidden shadow-inner">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShoppingBag size={200} />
             </div>
             <div className="z-10 text-center">
                <p className="text-6xl font-black text-slate-900 mb-2">100%</p>
                <p className="font-bold text-yellow-800 uppercase tracking-widest text-sm">Ethiopian Owned</p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                <div className="bg-yellow-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <div className="group-hover:text-slate-900 transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
             <div className="p-4 bg-red-50 rounded-full">
                <MapPin className="text-red-500" size={40} />
             </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Based in Bahir Dar</h2>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            We are proud to serve our local community from the heart of the Amhara region. 
            Visit our local hub or order online for the most reliable delivery in the region.
          </p>
          <div className="mt-10 p-8 bg-slate-900 rounded-3xl inline-block text-white">
            <p className="text-xs font-bold text-yellow-400 uppercase tracking-[0.2em] mb-2">Customer Support</p>
            <p className="text-2xl font-black">+251 97 791 9000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;