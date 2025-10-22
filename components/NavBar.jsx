"use client";
import { useEffect, useState } from "react";
import { Menu, X, Bot } from "lucide-react";
import WalletConnectButton from "./WalletConnectButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-black/80 backdrop-blur-xl border-b border-purple-500/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-linear-to-r from-purple-500 to-cyan-500 rounded-md flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              BITFUSE
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Ecosystem
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Community
            </a>
          </div>

          <div className="hidden md:block">
            <WalletConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#"
              className="block py-2 hover:text-purple-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="block py-2 hover:text-purple-400 transition-colors"
            >
              Ecosystem
            </a>
            <a
              href="#"
              className="block py-2 hover:text-purple-400 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="block py-2 hover:text-purple-400 transition-colors"
            >
              Community
            </a>
            <WalletConnectButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
