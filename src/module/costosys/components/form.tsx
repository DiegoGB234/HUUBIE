import { X } from 'lucide-react';
import type React from 'react';

interface props{
    isOpen : boolean
    // para retornar el valor useState
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    // obteniendo los atributos del diccionario
    formProperties: {[key:string]: string}
    title : String
}
function FormEre({isOpen,setIsOpen,formProperties, title}:props){
    const event = () => {
            setIsOpen(!isOpen);
        };
    const contenForm = Object.keys(formProperties)
    return(
        <>
            {/* formulario */}
            <div className="fixed m-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-120 min-h-150" style={{ backgroundColor: "#29354A" }}>
                <button className='relative top-5 left-100 active:opacity-80 transition-opacity duration-200 bg-gray-600' onClick={event}>
                    <X size={50} style={{ color: "white" }} />
                </button>

                <form id="formulario" className="flex flex-col p-5 gap-4">
                    <legend className="font-bold text-white p-2">{title}</legend>
                    <hr className='text-white' />
                    <br />

                    {/* contenedor de las columnas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* recorrido de los parametros para agregar en cada vista */}
                        {contenForm.map((i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <label htmlFor={i} className='text-white'>{formProperties[i]}:</label>
                                <input
                                    type="text"
                                    placeholder={formProperties[i]}
                                    id={i}
                                    className='p-2 bg-[#2B3A4F] border-2 border-[#3A415D] rounded text-sm text-white writing-vertical-rl'
                                />
                            </div>
                        ))}
                    </div>
                    {/* Botón de Enviar */}
                    <input
                        type="submit"
                        value="Guardar"
                        className="hover:bg-cyan-600 text-sm uppercase p-2 font-black text-white cursor-pointer"
                        style={{ backgroundColor: "#1474F4" }}
                    />
                </form>
             </div>
        </>
    )


}
function guardar(){

    
}
export default FormEre