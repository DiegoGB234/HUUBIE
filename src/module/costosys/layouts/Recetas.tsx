import SideBar from "../components/SideBar"
import FormEre from "../components/form";
import InheritedTable from "../components/table";
import { useState } from "react";
// icono
import { Search } from 'lucide-react';
import icononoPdf from '../../../assets/iconoPdf.png'
 function Recetas(){
    const [isOpen, setIsOpen] = useState(false);
     const title='Agregar Receta'
    // los valores que va tener en la tabla  de  recetas pero tambien en el form
      const valuesTable = {
        recipe:'Receta',
        classification:'Clasificacion',
        total:'Total',
        performance:'Rendimiento',
        cost:'Costo',
        salePreci:' Precio de venta',
        mc:'MC'
    }
    // contenido de  Recetas
    const contenTable =[
        {   
            recipe:'Empanadas',
            classification:'Nose',
            total:231.12,
            performance:'medio',
            cost:45.34,
            salePreci:90,
            mc:'Nose que es MC'
        },
         {   
            recipe:'Caldo',
            classification:'Nose',
            total:432,
            performance:'-----',
            cost:211,
            salePreci:90,
            mc:'--'
        },
    ]   

    return (
        <>
            <SideBar>
                <InheritedTable tableContent={contenTable} tableProperties={valuesTable}>
                    <div className="flex flex-col col-auto gap-4">
                        <label className="text-white text-lg px-2" >
                        Buscar Receta
                        </label>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <input
                                    id="subtecetas"
                                    type="text"
                                    className="bg-white rounded pl-10 pr-3 py-2 w-full"
                                    placeholder="Escribe aquí..."
                                />
                                <Search
                                    size={20}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                                />
                            </div>

                            {/* Este boton solo habre una ventana */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className=" text-white px-4 py-2 rounded active:opacity-80 transition-opacity duration-200"
                                style={{ backgroundColor: '#2563EB' }}
                            >
                                Agregar Receta
                            </button>

                            <select  className="px-4 py-2 w-50 h-10 active:opacity-80 transition-opacity duration-200 rounded bg-[#2563EB] text-white text-sm" >
                                <option value="" disabled selected > Seleciona Categoria</option>
                                <option value="opcion1">Opción 1</option>
                                <option value="opcion2" >Opción 2</option> 
                                <option value="opcion3">Opción 3</option>
                                <option value="opcion4">Opción 4</option>
                                
                            </select>
                            <button
                                className=" text-white px-4 py-2 rounded active:opacity-80 transition-opacity duration-200"
                                style={{ backgroundColor: '#2563EB' }}
                            >
                                Estructurar Folios
                            </button>
                            <button className="bg-gray-600 rounded active:opacity-80 transition-opacity duration-200">
                                <img src={icononoPdf} className="w-12 h-12" />
                            </button>
                            
                            </div>
                    </div>
                    
                    {isOpen && <FormEre isOpen={isOpen} setIsOpen={setIsOpen} formProperties={valuesTable} title={title} /> }
                    
            </InheritedTable>
          </SideBar>
        </>
    )
}
export default Recetas