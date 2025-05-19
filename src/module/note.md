import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Sidebar() {
const [isOpen, setIsOpen] = useState(false);

return (
<div className="flex">
{/_ Botón hamburguesa (solo visible en móviles) _/}
<button
onClick={() => setIsOpen(!isOpen)}
className=" p-4 z-50 absolute" >
{isOpen ? <X size={24} /> : <Menu size={24} />}
</button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 space-y-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:block
      `}>
        <h2 className="text-2xl font-bold">Mi Menú</h2>
        <nav className="space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Ingrediente</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">SubRecetas</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Recetas</a>

        </nav>
      </div>

      {/* Fondo oscuro al abrir el menú en móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 "
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>

);
}
