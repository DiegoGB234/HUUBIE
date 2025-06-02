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
                
                <label className="text-white px-2" htmlFor="">Buscar ingredientes</label>
                <div className="flex gap-4">
                    <input className="bg-white  rounded" type="text" />
                    <Search size={32}  className='text-white'/>
                    <button className="text-white p-2 rounded" style={{backgroundColor:"#1C64F1"}} onClick={()=>{}}>Agregar Ingrediente</button>
                </div>
            
           </InheritedTable>
        </SideBar>
    )
}
export default Ingredientes 