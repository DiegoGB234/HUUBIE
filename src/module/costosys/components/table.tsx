import type { ReactNode } from "react"

interface InheritedTableProps {
  children: ReactNode;
}

function InheritedTable({children}:InheritedTableProps){
    return(
        <>
            {/* Apartados de los botones */}
         
            <main className=" p-2">
                {children}
            </main>
            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full table-auto text-sm text-left text-gray-300 bg-[#1E2738]">
                    <thead className="bg-[#2B3A4F] text-xs uppercase tracking-wider text-gray-400">
                    <tr>
                        <th className="px-4 py-3">Nombre</th>
                        <th className="px-4 py-3">Unidad</th>
                        <th className="px-4 py-3">Marca</th>
                        <th className="px-4 py-3">Contenido neto</th>
                        <th className="px-4 py-3">Precio</th>
                        <th className="px-4 py-3">Precio unitario</th>
                        <th className="px-4 py-3">Descripcion</th>
                        
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2B3A4F]">
                        <tr className="hover:bg-[#273044]">
                            <td className="px-4 py-3">Ejempplo</td>
                            <td className="px-4 py-3">Ejemplo</td>
                            {/* <td className="px-4 py-3">
                            <div>
                                <div className="text-white font-medium">Torneo de tennis</div>
                                <div className="text-gray-400 text-sm">Sergio</div>
                            </div>
                            </td> */}
                            {/*  text-gray-500 */}
                            <td className="px-4 py-3 text-center">Ejemp</td>
                            <td className="px-4 py-3 text-center ">Ejemplo</td>
                            <td className="px-4 py-3 text-center">Ejemplo</td>
                            <td className="px-4 py-3">Ejemplo</td>
                            <td className="px-4 py-3">Ejemplo</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default  InheritedTable