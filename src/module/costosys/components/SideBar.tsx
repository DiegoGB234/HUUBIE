import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlignJustify, X, ChevronRight } from 'lucide-react';
import iconoIngrediente from '../../../assets/iconoIngredie.png'
import iconoSubrec from '../../../assets/iconoSubRecet.png'
import iconoRec from '../../../assets/iconoRecet.png'
import iconoEmpre from '../../../assets/iconoEmpr.png'
import iconoCategorias from '../../../assets/IconoCategorias.png'

import type { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

function SideBar({ children }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { to: "/ingredients", icon: iconoIngrediente, label: "Ingredientes", id: "ingredients" },
    { to: "/subRecetas", icon: iconoSubrec, label: "SubRecetas", id: "subrecetas" },
    { to: "/recetas", icon: iconoRec, label: "Recetas", id: "recetas" },
    { to: "/categorias", icon: iconoCategorias, label: "Categorías", id: "categorias" }
  ];

  return (
    <div className="fixed right-0 left-0 min-h-screen" style={{ backgroundColor: "#111827" }}>
      {/* Header/Navbar */}
      <div 
        className="flex gap-3 py-4 w-full items-center px-6 shadow-lg border-b border-gray-700/50 backdrop-blur-sm"
        style={{ backgroundColor: "#1E2837" }}
      >
        <button 
          className="group relative p-2 rounded-lg transition-all duration-300 hover:bg-gray-700/30 active:scale-95" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <AlignJustify 
            size={24} 
            className="text-white transition-transform duration-300 group-hover:rotate-180"
          />
          <div className="absolute inset-0 rounded-lg bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </button>
        
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              className="w-10 h-8 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110" 
              src={iconoEmpre} 
              alt="Logo" 
            />
            <div className="absolute inset-0 rounded-lg bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-white font-bold text-xl tracking-wide bg-gradient-to-r from-white to-blue-200 bg-clip-text">
            HUUBIE
          </span>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-20 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 min-h-screen w-72 z-30 shadow-2xl
          transform transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}
        style={{
          backgroundColor: "#111827",
          borderRight: "1px solid #374151",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
        }}
      >
        {/* Sidebar Header */}
        <div 
          className="flex items-center justify-between py-6 px-6 border-b border-gray-700/50"
          style={{ backgroundColor: "#1C2937" }}
        >
          <h2 className="text-white font-bold text-xl bg-gradient-to-r from-white to-blue-200 bg-clip-text">
            Menú Principal
          </h2>
          <button
            className="group p-2 rounded-lg transition-all duration-300 hover:bg-red-500/20 active:scale-90"
            onClick={() => setIsOpen(false)}
          >
            <X 
              size={24} 
              className="text-white transition-all duration-300 group-hover:text-red-400 group-hover:rotate-90" 
            />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-2 mt-6 px-4">
          {menuItems.map((item, index) => (
            <Link
              key={item.id}
              to={item.to}
              className={`group relative flex items-center gap-4 py-4 px-4 rounded-xl text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-blue-500/10 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 ${
                isOpen ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Icon Container */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-blue-500/20 group-hover:scale-110">
                  <img 
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                    src={item.icon} 
                    alt={item.label} 
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-blue-500/20 scale-0 group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Text */}
              <span className="font-medium text-lg transition-all duration-300 group-hover:text-blue-200">
                {item.label}
              </span>

              {/* Arrow indicator */}
              <ChevronRight 
                size={20} 
                className={`ml-auto transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  hoveredItem === item.id ? 'translate-x-1' : ''
                }`}
              />

              {/* Hover background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-blue-500/0 group-hover:from-blue-600/10 group-hover:to-blue-500/5 transition-all duration-300"></div>
              
              {/* Border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
            </Link>
          ))}
        </nav>

        {/* Decorative bottom element */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="mt-4 text-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative left-0 top-16 right-0 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}

export default SideBar;