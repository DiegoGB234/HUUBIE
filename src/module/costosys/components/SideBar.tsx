import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
import { Link } from 'react-router-dom';

// llamando los iconos de la menu lateral
import iconoIngrediente from '../../../assets/iconoIngredie.png'
import iconoSubrec from '../../../assets/iconoSubRecet.png'
import iconoRec from '../../../assets/iconoRecet.png'
// llamando el icono de la empresa 
import iconoEmpre from '../../../assets/iconoEmpr.png'
// llamando el icono de categorias
import iconoCategorias from '../../../assets/IconoCategorias.png'

import type { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

function SideBar({children}:SideBarProps){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed right-0 left-0 min-h-screen" style={{backgroundColor:"#111827"}}>
      {/* Botón de menú lateral */}
      <div className="flex gap-3 py-3 w-full items-center px-4" style={{backgroundColor:"#1E2837"}}>
        <button className='mr-2' onClick={()=>{setIsOpen(!isOpen)}} >
          <AlignJustify size={28} style={{backgroundColor:"#1C2937"}} className='text-white active:opacity-80'  />
        </button>
        <img className='w-10 h-8 active:opacity-80 rounded-md shadow' src={iconoEmpre} alt="" />
        <span className="ml-2 text-white font-bold text-lg tracking-wide">HUUBIE</span>
      </div>
      {/* Contenido de menú */}
      {isOpen && (
        <>
          {/* Fondo trasparente */}
          <div className="fixed inset-0 bg-gray-600/50 z-10" onClick={()=>{setIsOpen(false)}}></div>
          <div className="fixed top-0 left-0 min-h-screen w-64 z-40 shadow-lg" style={{backgroundColor:"#111827", borderRight: "1px solid #222"}}>
            {/* Botón de cerrar */}
            <div className='flex items-center py-4 px-4 hover:opacity-80 transition-colors' style={{backgroundColor:"#1C2937"}} onClick={()=>{setIsOpen(false)}}>
              <button>
                <X size={32} style={{color:"white"}} /> 
              </button>
              <h2 className="ml-4 text-white font-semibold text-xl text-center">Apartados</h2>
            </div>
            <nav className='flex flex-col gap-2 mt-4 px-2'>
              <Link to="/ingredients" className="flex items-center gap-3 py-2 rounded-lg text-base text-white hover:bg-[#2563EB] transition-colors px-3">
                <img className='w-8 h-8' src={iconoIngrediente} alt="Ingredientes" />
                <span>Ingredientes</span>
              </Link>
              <Link to="/subRecetas" className="flex items-center gap-3 py-2 rounded-lg text-base text-white hover:bg-[#2563EB] transition-colors px-3">
                <img className='w-8 h-8' src={iconoSubrec} alt="SubRecetas" />
                <span>SubRecetas</span>
              </Link>
              <Link to="/recetas" className="flex items-center gap-3 py-2 rounded-lg text-base text-white hover:bg-[#2563EB] transition-colors px-3">
                <img className='w-8 h-8' src={iconoRec} alt="Recetas" />
                <span>Recetas</span>
              </Link>
              <Link to="/categorias" className="flex items-center gap-3 py-2 rounded-lg text-base text-white hover:bg-[#2563EB] transition-colors px-3">
                <img className='w-8 h-8' src={iconoCategorias} alt="Categorías" />
                <span>Categorías</span>
              </Link>
            </nav>
          </div>
        </>
      )}
      {/* Espacio para  contenido hijo */}
      <main className="relative left-0 top-10 right-0">
        {children}
      </main>
    </div>
  )
}
export default SideBar