import SideBar from "../components/SideBar.tsx";
import { useState } from "react";
import { PlusCircle, Edit, Trash2, Search } from "lucide-react";

const initialCategorias = [
  "BIZCOCHOS",
  "BOCADILLOS",
  "CAFE",
  "DESECHABLES",
  "FRANCES",
  "PASTELERIA",
  "REFRESCOS",
  "TORTILLAS"
];

function Categorias() {
  const [categorias, setCategorias] = useState(initialCategorias);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const handleAgregar = () => {
    if (input.trim() && !categorias.includes(input.trim().toUpperCase())) {
      setCategorias([...categorias, input.trim().toUpperCase()]);
      setInput("");
    }
  };

  const handleModificar = () => {
    if (
      editIndex !== null &&
      input.trim() &&
      !categorias.includes(input.trim().toUpperCase())
    ) {
      const nuevas = [...categorias];
      nuevas[editIndex] = input.trim().toUpperCase();
      setCategorias(nuevas);
      setEditIndex(null);
      setInput("");
    }
  };

  const handleEliminar = () => {
    if (editIndex !== null) {
      setCategorias(categorias.filter((_, idx) => idx !== editIndex));
      setEditIndex(null);
      setInput("");
    }
  };

  const handleSelect = (idx: number) => {
    setEditIndex(idx);
    setInput(categorias[idx]);
  };

  const filteredCategorias = categorias.filter(cat =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SideBar>
      <div className="p-4 md:p-8 rounded-lg shadow-lg w-full max-w-full md:max-w-2xl mx-auto mt-4 md:mt-10" style={{backgroundColor:"#1C2937"}}>
        <h2 className="text-2xl font-bold mb-4 text-white text-center md:text-left">Ingresa la nueva categoría</h2>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-white px-2" htmlFor="buscar-categorias">
            Buscar categorías
          </label>
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="relative flex-1">
              <input
                id="buscar-categorias"
                type="text"
                className="bg-white rounded pl-10 pr-3 py-2 w-full"
                placeholder="Escribe aquí..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-6">
          <input
            className="w-full md:w-auto flex-1 p-2 rounded text-lg"
            style={{backgroundColor:"#111827", color:"white", border:"1px solid #374151"}}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Nueva categoría"
          />
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 rounded text-white font-semibold w-full sm:w-auto"
              style={{backgroundColor:"#2563EB"}}
              onClick={handleAgregar}
              disabled={editIndex !== null}
            >
              <PlusCircle /> Agregar
            </button>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 rounded text-white font-semibold w-full sm:w-auto"
              style={{backgroundColor:"#2563EB"}}
              onClick={handleModificar}
              disabled={editIndex === null}
            >
              <Edit /> Modificar
            </button>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 rounded text-white font-semibold w-full sm:w-auto"
              style={{backgroundColor:"#2563EB"}}
              onClick={handleEliminar}
              disabled={editIndex === null}
            >
              <Trash2 /> Eliminar
            </button>
          </div>
        </div>
        <div className="bg-[#111827] rounded p-2 md:p-4 overflow-x-auto">
          <div className="flex flex-col sm:flex-row justify-between mb-2 gap-2">
            <span className="text-white font-semibold">Clasificación</span>
            <span className="text-gray-300">No. Categorías: {filteredCategorias.length}</span>
          </div>
          {/* Scroll vertical para la lista de categorías */}
          <div className="max-h-64 overflow-y-auto">
            <ul className="divide-y divide-gray-700">
              {filteredCategorias.map((cat, idx) => (
                <li
                  key={cat}
                  className={`py-2 px-2 cursor-pointer rounded ${editIndex !== null && categorias[editIndex] === cat ? "bg-[#374151] text-green-400" : "text-white"} hover:bg-[#374151]`}
                  onClick={() => handleSelect(categorias.indexOf(cat))}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SideBar>
  );
}

export default Categorias;