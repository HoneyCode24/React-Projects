import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white text-gray-700 pt-16 pb-10 px-6 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">

        {/* Brand Info */}
        <div>
          <h1 className="text-2xl font-extrabold text-blue-600">GenZ Fashion</h1>
          <p className="mt-3 text-sm text-gray-500">
            Redefine your style with Gen Z inspired fashion. Premium quality,
            latest trends, delivered to your door.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-600"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Shop</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Categories</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-sm text-gray-500 mb-4">Join our community for latest drops & exclusive offers.</p>
          <form className="flex flex-col  gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:scale-105 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GenZ Fashion. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
