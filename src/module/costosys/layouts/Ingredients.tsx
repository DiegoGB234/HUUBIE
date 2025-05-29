import SideBar from "../components/SideBar.tsx"
import { Search } from 'lucide-react';
function Ingredientes(){
    return (
    <div className="min-h-screen" style={{backgroundColor:"#1F2E3F"}}>
         <SideBar/>
        <div className="flex-2">
            <div className="relative left-0 top-10 right-0 ">
                <div className=" p-2 ">
                    <label className="text-white px-2" htmlFor="">Buscar ingredientes</label>
                    <div className="flex gap-4">
                        <input className="bg-white  rounded" type="text" />
                        <Search size={32}  className='text-white'/>
                        <button className="text-white p-2 rounded" style={{backgroundColor:"#1C64F1"}} onClick={()=>console.log("yeaa")}>Agregar Ingrediente</button>
                    </div>
                    
                </div>
                <table className="w-full border border-white text-white">
                    <thead id="tableIngredien">
                        <tr className="border-b border-white">
                        <th className="px-4 py-2 border border-white">Columna 1</th>
                        <th className="px-4 py-2 border border-white">Columna 2</th>
                        <th className="px-4 py-2 border border-white">Columna 3</th>
                        <th className="px-4 py-2 border border-white">Columna 4</th>
                        <th className="px-4 py-2 border border-white">Columna 5</th>
                        <th className="px-4 py-2 border border-white">Columna 6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(8)].map((_, i) => (
                        <tr
                            key={i}
                            style={{
                            backgroundColor: i % 2 === 0 ? '#1C2937' : '#1F2E3F',
                            }}
                            className="border border-white"
                        >
                            <td className="px-4 py-2 border border-white">Fila {i + 1} - Col 1</td>
                            <td className="px-4 py-2 border border-white">Fila {i + 1} - Col 2</td>
                            <td className="px-4 py-2 border border-white">Fila {i + 1} - Col 3</td>
                            <td className="px-4 py-2 border border-white">Fila {i + 1} - Col 4</td>
                            <td className="px-4 py-2 border border-white">Fila {i + 1} - Col 5</td>
                            <td className="px-4 py-2 border border-white">Fila {i + 1} - Col 6</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
    )
}
export default Ingredientes 