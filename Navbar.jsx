import React, { useState } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { Wallet, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ activeSection, setActiveSection }) => {
  const { connected, connectWallet, disconnectWallet, balance, publicKey } = useWallet();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'marketplace', label: 'Marketplace', href: '/marketplace' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'admin', label: 'Admin', href: '/admin' },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.toString().slice(0, 4)}...${address.toString().slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-800/95 backdrop-blur-xl border-b border-dark-600/20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="group">
                <h1 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  FarmMarket
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {/* Text with gradient */}
                  <span className={`relative z-10 ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
                      : 'group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent'
                  }`}>
                    {item.label}
                  </span>
                  {/* Bottom border on active */}
                  {location.pathname === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {connected ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:block text-right bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                  <div className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {formatAddress(publicKey)}
                  </div>
                  <div className="text-xs font-medium text-gray-400 flex items-center gap-1">
                    <span className="text-cyan-400">{balance.toFixed(4)}</span>
                    <span className="text-purple-400">SOL</span>
                  </div>
                </div>
                <button
                  onClick={disconnectWallet}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-[9px] sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-red-500/50 hover:scale-105"
                >
                  <Wallet size={11} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Disconnect</span>
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 hover:from-cyan-600 hover:via-purple-600 hover:to-cyan-600 text-white px-2 sm:px-6 py-1 sm:py-2 rounded-lg text-[9px] sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <Wallet size={11} className="sm:w-4 sm:h-4 relative z-10 flex-shrink-0" />
                <span className="relative z-10 whitespace-nowrap">Connect Wallet</span>
              </button>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-xl border-t border-dark-600/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`relative block w-full text-left px-4 py-3 text-base font-semibold transition-all duration-300 group ${
                  location.pathname === item.href
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {/* Text with gradient */}
                <span className={`relative z-10 ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
                    : 'group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent'
                }`}>
                  {item.label}
                </span>
                {/* Left border on active for mobile */}
                {location.pathname === item.href && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400 rounded-r-full"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 