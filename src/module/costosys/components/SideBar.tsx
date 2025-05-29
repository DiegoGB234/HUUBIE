import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";

// llamando los iconos de la menu lateral
import iconoIngrediente from '../../../assets/iconoIngredie.png'
import iconoSubrec from '../../../assets/iconoSubRecet.png'
import iconoRec from '../../../assets/iconoRecet.png'
// llamando el icono de la empresa 
import iconoEmpre from '../../../assets/iconoEmpr.png'

function SideBar({children=undefined}){
      const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" relative top-0 left-0 right-0  py-3 w-full " style={{backgroundColor:"#1C2937"}}>
            {/* Boton de menu lateral  */}
            <div className="flex gap-5">
                <button className='ml-4 ' onClick={()=>{setIsOpen(!isOpen)}} >
                   <AlignJustify size={34} style={{backgroundColor:"#1C2937"}} className='text-white'  />
                </button>
                <img className='w-12 h-10' src={iconoEmpre} alt="" />
            </div>
            {/* Contenido de menu */}
            {isOpen && (
                <>
                    <div className="bg-gray-600/50 min-h-screen w-full relative top-0 left-0 right-0 backdrop-blur-sm" onClick={()=>{setIsOpen(false)}}></div>
                        <div className=" fixed min-h-screen w-80  top-0 left-0" style={{backgroundColor:"#2B445E"}} >
                           
                                {/* boton de cerrar */}
                                <div className=' flex  items-center py-4 hover:opacity-80 transition-colors'style={{backgroundColor:"#1C2937"}} onClick={()=>{setIsOpen(false)}}>
                                    <button className='ml-4'>
                                        <X size={50} style={{color:"white"}} /> 
                                    </button>
                                    <h2 className="ml-4 text-white c text-xl text-center" >Apartados</h2>
                                </div>
                                
                                {/* <div className='text-center text-white  text-xl hover:bg-blue-400 cursor-pointer py-3 mb-2'>wdwd</div> */}
                                <div>
                                    <nav className='flex-col gap-4'>
                                    <a href="#" className="flex items-center gap-5 py-2 rounded text-xl mt-1 mb-1 text-white text-center  hover:opacity-80 transition-color" style={{backgroundColor:"#1C2937"}}>
                                        <img  className='w-20 h-20' src={iconoIngrediente} alt="Cargando" />
                                        <span>Ingredientes</span>
                                        </a>
                                    <a href="#" className="flex items-center gap-5 py-2 rounded text-xl mt-1 mb-1  text-white text-center hover:opacity-80 transition-colors" style={{backgroundColor:"#1C2937"}}>
                                        <img className='w-20 h-20' src={iconoSubrec} alt="Cargando..." />
                                        <span>SubRecetas</span>
                                        </a>
                                    <a href="#" className="flex items-center gap-5 py-2 rounded text-xl mt-1 mb-1 text-white text-center  hover:opacity-80 transition-colors" style={{backgroundColor:"#1C2937"}}>
                                        <img className='w-20 h-20' src={iconoRec} alt="Cargando..." /> 
                                        <span>Recetas</span>
                                        </a>
                                </nav>
                                </div>
                            
                        </div>
                </>
            )}

            {/* Espacio para  contenido hijo */}
            
           
        </div>
        

    )
}
export default SideBar