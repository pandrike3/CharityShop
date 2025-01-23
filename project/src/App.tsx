import React from 'react';
import { Heart, Users, Landmark, ArrowRight, HandHeart, Globe, Timer, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
            alt="People helping hands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HandHeart className="w-8 h-8 text-white" />
              <span className="text-white text-2xl font-bold">Help Now</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="#about" className="hover:text-blue-300 transition">About</a>
              <a href="#impact" className="hover:text-blue-300 transition">Our Impact</a>
              <a href="#volunteer" className="hover:text-blue-300 transition">Volunteer</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">
                Donate Now
              </button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-32">
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-3xl">
            Immediate Relief for Those Who Need It Most
          </h1>
          <p className="text-gray-200 text-xl mt-6 max-w-2xl">
            Join us in making a difference. Every contribution helps provide food, shelter, and support to communities in crisis.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2 transition">
              Make a Donation <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition">
              Become a Volunteer
            </button>
          </div>
        </div>
      </header>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-600 mt-2">People Helped</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-600 mt-2">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">5K+</h3>
              <p className="text-gray-600 mt-2">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Current Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?auto=format&fit=crop&q=80"
                alt="Food Distribution"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Food Relief</h3>
                <p className="text-gray-600 mb-4">Providing nutritious meals to families facing food insecurity.</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
                alt="Medical Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Assistance</h3>
                <p className="text-gray-600 mb-4">Delivering essential healthcare services to underserved areas.</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"
                alt="Education Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education Support</h3>
                <p className="text-gray-600 mb-4">Empowering communities through educational programs and resources.</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Your support can help us reach more people in need. Join our mission to create positive change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition">
              Donate Now
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <HandHeart className="w-6 h-6 text-blue-400" />
                <span className="text-white text-xl font-bold">Help Now</span>
              </div>
              <p className="text-gray-400">
                Making immediate impact through compassionate action.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#programs" className="hover:text-blue-400 transition">Our Programs</a></li>
                <li><a href="#impact" className="hover:text-blue-400 transition">Our Impact</a></li>
                <li><a href="#news" className="hover:text-blue-400 transition">Latest News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li><a href="#donate" className="hover:text-blue-400 transition">Make a Donation</a></li>
                <li><a href="#volunteer" className="hover:text-blue-400 transition">Volunteer</a></li>
                <li><a href="#partner" className="hover:text-blue-400 transition">Partner With Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@helpnow.org
                </li>
                <li className="flex items-center gap-2">
                  <Landmark className="w-4 h-4" />
                  123 Hope Street, City, Country
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Help Now. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;