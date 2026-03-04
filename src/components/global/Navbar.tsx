"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Docs", href: "/docs" },
    { id: 3, name: "About", href: "/about" },
    { id: 4, name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <div
        className={`w-full max-w-7xl flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-2xl border border-white/10
          ${scrolled ? "bg-black/40 backdrop-blur-xl shadow-2xl" : "bg-white/5 backdrop-blur-md"}`}
      >
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/images/logo.png"
              alt="Pharon-UI Logo"
              width={180}
              height={180}
              className="object-contain"
            />
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-gray-400 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a
              href="/get-started"
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl shadow-black/20"
            >
              Get Started
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-x-4 top-24 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 transition-all duration-500 md:hidden
          ${isOpen ? "opacity-100 translate-y-8 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </li>
          ))}
          <li className="mt-4 pt-4 border-t border-white/5">
            <a
              href="/get-started"
              className="w-full flex justify-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
