import Image from "next/image";
import { Github, Globe, Linkedin, Heart } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#05070a] border-t border-white/5 py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Pharaon UI Logo"
                  width={200}
                  height={200}
                  className="object-contain inverted-logo"
                />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Built for developers who demand speed, type-safety, and visual
              excellence. The ultimate copy-and-paste library for modern React
              apps.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mahmoudfathydev-hub"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://mahmoudfathy.vercel.app/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoudfathy-frontend"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                Resources
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/components"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            © 2026 Pharaon UI. Crafted with precision for the modern web.
          </p>
          <p className="text-gray-500 text-sm font-medium flex items-center gap-1.5">
            Built with{" "}
            <Heart
              size={14}
              className="text-rose-500 fill-rose-500 animate-pulse"
            />{" "}
            by
            <a
              href="https://mahmoudfathy.vercel.app/"
              target="_blank"
              className="text-white hover:text-blue-400 underline decoration-white/10 underline-offset-4 transition-colors"
            >
              Eng. Mahmoud Fathy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;