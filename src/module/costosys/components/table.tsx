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
        </>
    )
}

export default  InheritedTable