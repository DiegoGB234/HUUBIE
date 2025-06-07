import SideBar from "../components/SideBar"
import FormEre from "../components/form";
import InheritedTable from "../components/table";
import { useState } from "react";
// icono
import { Search } from 'lucide-react';

export default function SubRecetas(){
     const [isOpen, setIsOpen] = useState(false);

    // los valores que va tener en la tabla  de sub recetas
      const valuesTable = {
        recipe:'Receta',
        classification:'Clasificacion',
        total:'Total',
        performance:'Rendimiento',
        cost:'Costo',
        salePreci:' Precio de venta',
        mc:'MC'
    }
    // contenido de  subRecetas
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
    return(
        <SideBar>
             <InheritedTable tableContent={contenTable} tableProperties={valuesTable}>
             <div className="flex flex-col col-auto gap-2">
                <label className="text-white px-2" htmlFor="buscar-ingredientes">
                Buscar Receta
                </label>

                <div className="flex items-center gap-2">
                <input
                    id="buscar-ingredientes"
                    type="text"
                    className=" bg-white rounded px-3 py-2"
                    placeholder="Escribe aquí..."
                />
                <Search size={32} className="text-white active:opacity-80 transition-opacity duration-200" />
                {/* Este boton solo habre una ventana */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-white px-4 py-2 rounded"
                    style={{ backgroundColor: '#2563EB' }}
                >
                    Agregar Ingrediente
                </button>
                </div>
            </div>
            
            {isOpen && <FormEre isOpen={isOpen} setIsOpen={setIsOpen} /> }
            
           </InheritedTable>
        </SideBar>
    )
}