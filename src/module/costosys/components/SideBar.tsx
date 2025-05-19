import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
function SideBar(){
      const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="py-3 fixed top-0 left-0 right-0 shadow-md" style={{backgroundColor:"#1C2937"}}>
            {/* Boton de menu lateral  */}
            <div className="flex">
                <button className='ml-4 ' onClick={()=>{setIsOpen(!isOpen)}} >
                   <AlignJustify size={34} style={{backgroundColor:"#1C2937"}} className='text-white'  />
                </button>
            </div>
            {isOpen && (
                <>
                    <div className='bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm' onClick={()=>{setIsOpen(false)}}></div>
                        <div className=" min-h-screen w-80 fixed top-0 left-0" style={{backgroundColor:"#2B445E"}}>
                            <div className='pt-4'>
                                {/* boton de cerrar */}
                                <div className='flex items-center py-5 hover:opacity-80 transition-colors'style={{backgroundColor:"#1C2937"}} onClick={()=>{setIsOpen(false)}}>
                                    <button className='ml-4' onClick={()=>{setIsOpen(!isOpen)}}>
                                        <X size={50} style={{color:"white"}} /> 
                                    </button>
                                    <h2 className="ml-4 text-white text-xl text-center" >Apartados</h2>
                                </div>
                                
                                {/* <div className='text-center text-white  text-xl hover:bg-blue-400 cursor-pointer py-3 mb-2'>wdwd</div> */}
                                <div>
                                    <nav className=' flex-col gap-4'>
                                    <a href="#" className="block text-xl mt-1 mb-1  py-5 rounded text-white text-center hover:opacity-80 transition-colors" style={{backgroundColor:"#1C2937"}}>Ingrediente</a>
                                    <a href="#" className="block py-5 rounded text-xl mt-1 mb-1  text-white text-center hover:opacity-80 transition-colors" style={{backgroundColor:"#1C2937"}}>SubRecetas</a>
                                    <a href="#" className="block py-5 rounded text-xl mt-1 mb-1 text-white text-center  hover:opacity-80 transition-colors" style={{backgroundColor:"#1C2937"}}>Recetas</a>
                                </nav>
                                </div>
                            </div>
                        </div>
                </>
            )}
            
        </div>
        

    )
}
export default SideBar