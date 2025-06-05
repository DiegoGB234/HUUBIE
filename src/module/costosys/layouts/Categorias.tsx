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
      <div className="p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10" style={{backgroundColor:"#1C2937"}}>
        <h2 className="text-2xl font-bold mb-4 text-white">Ingresa la nueva categoría</h2>
        <div className="flex flex-col col-auto gap-2 mb-4">
          <label className="text-white px-2" htmlFor="buscar-categorias">
            Buscar categorías
          </label>
          <div className="flex items-center gap-2">
            <input
              id="buscar-categorias"
              type="text"
              className="bg-white rounded px-3 py-2"
              placeholder="Escribe aquí..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Search size={32} className="text-white active:opacity-80 transition-opacity duration-200" />
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <input
            className="w-full p-2 rounded text-lg"
            style={{backgroundColor:"#111827", color:"white", border:"1px solid #374151"}}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Nueva categoría"
          />
          <button
            className="flex items-center gap-2 px-4 py-2 rounded text-white font-semibold"
            style={{backgroundColor:"#22c55e"}}
            onClick={handleAgregar}
            disabled={editIndex !== null}
          >
            <PlusCircle /> Agregar
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded text-white font-semibold"
            style={{backgroundColor:"#f59e42"}}
            onClick={handleModificar}
            disabled={editIndex === null}
          >
            <Edit /> Modificar
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded text-white font-semibold"
            style={{backgroundColor:"#ef4444"}}
            onClick={handleEliminar}
            disabled={editIndex === null}
          >
            <Trash2 /> Eliminar
          </button>
        </div>
        <div className="bg-[#111827] rounded p-4">
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold">Clasificación</span>
            <span className="text-gray-300">No. Categorías: {filteredCategorias.length}</span>
          </div>
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
    </SideBar>
  );
}

export default Categorias;