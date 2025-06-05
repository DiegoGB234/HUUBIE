import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
import {Link} from 'react-router-dom';

// llamando los iconos de la menu lateral
import iconoIngrediente from '../../../assets/iconoIngredie.png'
import iconoSubrec from '../../../assets/iconoSubRecet.png'
import iconoRec from '../../../assets/iconoRecet.png'
// llamando el icono de la empresa 
import iconoEmpre from '../../../assets/iconoEmpr.png'

import type { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}


function SideBar({children}:SideBarProps){
      const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" fixed right-0 left-0 min-h-screen  " style={{backgroundColor:"#111827"}}>
            {/* Boton de menu lateral  */}
            <div className="flex gap-5 py-3 w-full items-center" style={{backgroundColor:"#1E2837 "}}>
                <button className='ml-4 ' onClick={()=>{setIsOpen(!isOpen)}} >
                   <AlignJustify size={34} style={{backgroundColor:"#1C2937"}} className='text-white active:opacity-80'  />
                </button>
                <img className='w-12 h-10 active:opacity-80' src={iconoEmpre} alt="" />
            </div>
            {/* Contenido de menu */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-gray-600/50 z-10" onClick={()=>{setIsOpen(false)}}
                    ></div>
                        <div className=" fixed top-0 left-0  min-h-screen size-70 z-40" style={{backgroundColor:"#111827"}} >
                           
                                {/* boton de cerrar */}
                                <div className=' flex  items-center py-4 hover:opacity-80 transition-colors'style={{backgroundColor:"#1C2937"}} onClick={()=>{setIsOpen(false)}}>
                                    <button className='ml-4'>
                                        <X size={50} style={{color:"white"}} /> 
                                    </button>
                                    <h2 className="ml-4 text-white c text-xl text-center" >Apartados</h2>
                                </div>
                                
                                <nav className='flex-col gap-4 '>
                                    <Link to="/ingredients" className="flex items-center gap-5 py-2 rounded text-xl mt-1 mb-1 text-white text-center hover:opacity-80 transition-color" style={{backgroundColor:"#1C2937"}}>
                                        <img className='w-20 h-20' src={iconoIngrediente} alt="Cargando" />
                                        <span>Ingredientes</span>
                                    </Link>
                                    <Link to="subRecetas" className="flex items-center gap-5 py-2 rounded text-xl mt-1 mb-1 text-white text-center hover:opacity-80 transition-colors" style={{backgroundColor:"#1C2937"}}>
                                        <img className='w-20 h-20' src={iconoSubrec} alt="Cargando..." />
                                        <span>SubRecetas</span>
                                    </Link>
                                    <Link to="recetas" className="flex items-center gap-5 py-2 rounded text-xl mt-1 mb-1 text-white text-center hover:opacity-80 transition-colors" style={{backgroundColor:"#1C2937"}}>
                                        <img className='w-20 h-20' src={iconoRec} alt="Cargando..." />
                                        <span>Recetas</span>
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