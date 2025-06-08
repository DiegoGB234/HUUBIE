import { X } from 'lucide-react';
import type React from 'react';

interface props{
    isOpen : boolean
    // para retornar el valor useState
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    formProperties: {[key:string]: string}
}
function FormEre({isOpen,setIsOpen,formProperties}:props){
      const event = () => {
            setIsOpen(!isOpen);
        };
    return(
        <div className="fixed m-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-120 min-h-screen" style={{backgroundColor:"#29354A"}}>
            <button className='relative top-5 left-100 active:opacity-80 transition-opacity duration-200 bg-gray-600' onClick={event} >
                <X size={50} style={{color:"white"}} /> 
            </button>
            <form id="formulario" className= "flex  flex-col p-5 gap-0" >
                <legend className="font-bold text-white p-2">Agregar Ingrediente</legend>
                <hr className='text-white' />
                <br />

                <label htmlFor="" className='text-white'>Nombre:</label>
                {/* nombre */}
                <input
                    type="text"
                    placeholder="Nombre"
                    id="nombre"
                    className="p-2 bg-[#2B3A4F] border-2 border-[#3A415D]  rounded text-sm text-white writing-vertical-rl "
                />
                <br />
                <label htmlFor="" className='text-white'>Unidad:</label>
                {/* unidad */}
                <input
                    type="text"
                    placeholder="Unidad"
                    id="unidad"
                    className="p-2 bg-[#2B3A4F] border-2 border-[#3A415D]  rounded text-sm text-white writing-vertical-rl"
                />
                    <br />

                <label htmlFor="" className='text-white'>Provedor:</label>
                {/* provedor */}
                <input
                    type="text"
                    placeholder="Provedor"
                    id="provedor"
                    className="p-2 bg-[#2B3A4F] border-2 border-[#3A415D]  rounded text-sm text-white writing-vertical-rl"
                />
                <br />
                <label htmlFor="" className='text-white'>Contenido neto:</label>
                {/* Conteniod Neto */}
                <input
                    type="text"
                    placeholder="Contenido neto"
                    id="contendidoNeto"
                    className="p-2 bg-[#2B3A4F] border-2 border-[#3A415D]  rounded text-sm text-white writing-vertical-rl"
                />
                    <br />

                <label htmlFor="" className='text-white'>Precio:</label>
                {/* Precio */}
                <input
                    type="text"
                    placeholder="Precio"
                    id="precio"
                    className="p-2 bg-[#2B3A4F] border-2 border-[#3A415D]  rounded text-sm text-white writing-vertical-rl"
                />
                <br />
                <label htmlFor="" className='text-white'>Precio por unidad:</label>
                {/* Precio por unidad */}
                <input
                    type="text"
                    placeholder="Unidad"
                    id="precioPorUnidad"
                    className="p-2 bg-[#2B3A4F] border-2 border-[#3A415D]  rounded text-sm text-white writing-vertical-rl"
                />
                <br />
                {/* Bono */}
                <input
                    type="submit"
                    value="Guardar"
                    className=" hover:bg-cyan-600 text-sm uppercase p-2 font-black text-white cursor-pointer" style={{backgroundColor:"#1474F4"}}
                />
        </form>
        </div>

    )


}
function guardar(){

    
}
export default FormEre