import SideBar from "../components/SideBar.tsx"
import FormEre from "../components/form.tsx";
import InheritedTable from "../components/table.tsx"

import { useState } from "react";
// icono
import { Search } from 'lucide-react';
function Ingredientes(){
    const [isOpen, setIsOpen] = useState(false);
    // titulos de la tabla de la tabla de ingredientes
    // Los titulos los dejaremos como
    const valuesTable = {
        name:'nombre',
        unit:'unidad',
        brand:'marca',
        netContent:'Contenido neto',
        price:'Precio',
        unitPrice:'Precio Unitario',
        description:'Descripcion'
    }
    // contenido de los ingredientes
    
    const contenTable =[
        {   
            name:'Manzana',
            unit:'nose',
            brand:'El amigo',
            netContent:'12',
            price:'1231',
            unitPrice:'2',
            description:'Es una mazanana que es una fruta'
        },
         {   
            name:'Pera',
            unit:'nose',
            brand:'El ruso',
            netContent:32,
            price:12.1,
            unitPrice:12.21,
            description:'Es una pera, que es una fruta'
        },
    ]   
    return (
      
        <SideBar>
            {/* Reviendo los valores que pide la funcion de table de components */}
           <InheritedTable tableProperties={valuesTable} tableContent={contenTable} >
            <div className="flex flex-col col-auto gap-2">
                <label className="text-white px-2" htmlFor="buscar-ingredientes">
                Buscar ingredientes
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


export default Ingredientes 