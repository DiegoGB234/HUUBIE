import SideBar from "../components/SideBar.tsx"
import FormEre from "../components/form.tsx";
import InheritedTable from "../components/table.tsx"
import { useState } from "react";
// icono
import { Search } from 'lucide-react';

function Ingredientes() {
    const [isOpen, setIsOpen] = useState(false);
    const title = 'Agregar Ingrediente'
    // titulos de la tabla de la tabla de ingredientes
    // Los titulos los dejaremos , pero tambien serviran como para metros para el form
    const valuesTable = {
        name: 'Nombre',
        unit: 'Unidad',
        brand: 'Marca',
        netContent: 'Contenido neto',
        price: 'Precio',
        unitPrice: 'Precio Unitario',
        description: 'Descripcion'
    }
    // contenido de los ingredientes
    const contenTable = [
        {
            name: 'Manzana',
            unit: 'nose',
            brand: 'El amigo',
            netContent: '12',
            price: '1231',
            unitPrice: '2',
            description: 'Es una mazanana que es una fruta'
        },
        {
            name: 'Pera',
            unit: 'nose',
            brand: 'El ruso',
            netContent: 32,
            price: 12.1,
            unitPrice: 12.21,
            description: 'Es una pera, que es una fruta'
        },
    ]

    return (
        <SideBar>
            {/* Reviendo los valores que pide la funcion de table de components */}
            <InheritedTable tableProperties={valuesTable} tableContent={contenTable} >
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:gap-4">
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <label className="text-white px-2" htmlFor="buscar-ingredientes">
                            Buscar ingredientes
                        </label>
                        <div className="relative w-full">
                            <input
                                id="buscar-ingredientes"
                                type="text"
                                className="bg-white rounded pl-10 pr-3 py-2 w-full"
                                placeholder="Escribe aquí..."
                            />
                            <Search
                                size={20}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-full md:w-auto text-white px-4 py-2 rounded active:opacity-80 transition-opacity duration-200 mt-2 md:mt-0"
                        style={{ backgroundColor: '#2563EB' }}
                    >
                        Agregar Ingrediente
                    </button>
                </div>
                {isOpen && <FormEre isOpen={isOpen} setIsOpen={setIsOpen} formProperties={valuesTable} title={title} />}
            </InheritedTable>
        </SideBar>
    )
}

export default Ingredientes