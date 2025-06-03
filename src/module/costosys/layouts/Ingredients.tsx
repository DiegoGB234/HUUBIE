import SideBar from "../components/SideBar.tsx"
import FormEre from "../components/form.tsx";
import InheritedTable from "../components/table.tsx"

import { useState } from "react";

import { Search } from 'lucide-react';


  

function Ingredientes(){
    const [isOpen, setIsOpen] = useState(false);
    return (
      
        <SideBar>
           <InheritedTable >
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
                <button
                    onClick={() => setIsOpen(prev => !prev)}
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