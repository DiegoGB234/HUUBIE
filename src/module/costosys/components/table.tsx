import type { ReactNode } from "react"
// para que pueda aceptar tipos de datos como string,int y float
interface  TableRow {
  [key: string]: string | number;
}
interface InheritedTableProps {
  // obteniendo el contenido de las clases hijos
  children: ReactNode;
  // obteniedo los paremetros que va tener la tablla ya sea ingredientes o en otra cosa 
  tableProperties: {[key:string]: string}
  //obtenido el contenido o el valor 
  tableContent:TableRow[]
}

function InheritedTable({children,tableProperties,tableContent}:InheritedTableProps){
    // obtenemos los elementos de la tabla que sera los th que vamos a usar par el tb
      const contentTi = Object.keys(tableProperties);
    return(
        <>      
            {/* Apartados de los botones que son de una classe hijo*/}
            <main className=" p-2">
                {children}
            </main>
            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full table-auto text-sm text-center text-gray-300 bg-[#1E2738]">
                    <thead className="bg-[#2B3A4F] text-xs uppercase tracking-wider text-gray-400">
                    <tr>
                        {contentTi.map((i)=>(
                          <th className="px-4 py-3" key={i}>{tableProperties[i]}</th>
                         ))}
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2B3A4F]">
                         {/* desglozando los datos del arrglo */}
                         {/* "k" es para el contenido de los diccionarios */}
                         {/* "j" es para el recorrido de los diccionarios" */}
                         {/* "h" es el iterador de los titulos de la tabla que se encuentra en th*/}
                         {tableContent.map((k,j)=>(
                            <tr className="hover:bg-[#273044]" key={j}>
                              {contentTi.map((h)=>(
                                <td className="px-4 py-3">{k[h]}</td>
                              ))}
                            </tr>
                         ))} 
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default  InheritedTable