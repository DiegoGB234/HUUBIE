import { useState } from 'react';
import SideBar from '../components/SideBar';
import { Pencil, Trash2, Plus, Check } from 'lucide-react';

function Categorias() {
  const [categorias, setCategorias] = useState<string[]>([]);
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);
  const [categoriaEditada, setCategoriaEditada] = useState('');

  const handleAdd = () => {
    if (nuevaCategoria.trim()) {
      setCategorias([...categorias, nuevaCategoria.trim()]);
      setNuevaCategoria('');
    }
  };

  const handleDelete = (index: number) => {
    setCategorias(categorias.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditandoIndex(index);
    setCategoriaEditada(categorias[index]);
  };

  const handleSaveEdit = () => {
    if (editandoIndex !== null && categoriaEditada.trim()) {
      const actualizadas = [...categorias];
      actualizadas[editandoIndex] = categoriaEditada.trim();
      setCategorias(actualizadas);
      setEditandoIndex(null);
      setCategoriaEditada('');
    }
  };

  return (
    <SideBar>
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 animate-slideInLeft">📂 Categorías</h1>

        {/* Input + botón añadir */}
        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            value={nuevaCategoria}
            onChange={(e) => setNuevaCategoria(e.target.value)}
            placeholder="Escribe una nueva categoría..."
            className="p-3 rounded-lg bg-gray-800 text-white w-full outline-none border border-gray-700 focus:border-blue-500 transition"
          />
          <button
            onClick={handleAdd}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white flex items-center gap-1 transition active:scale-95"
          >
            <Plus size={18} />
            Añadir
          </button>
        </div>

        {/* Lista de categorías */}
        <div className="h-[500px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
          {categorias.length === 0 ? (
            <p className="text-gray-400 text-center">Aún no hay categorías agregadas.</p>
          ) : (
            categorias.map((cat, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-900 px-5 py-4 rounded-xl shadow-md hover:shadow-blue-600/20 transition-all border border-gray-700 animate-slideInLeft"
              >
                {/* Nombre o campo editable */}
                {editandoIndex === index ? (
                  <input
                    value={categoriaEditada}
                    onChange={(e) => setCategoriaEditada(e.target.value)}
                    className="bg-gray-800 p-2 rounded-md text-white border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500 w-full mr-4"
                  />
                ) : (
                  <span className="text-lg text-white font-medium">{cat}</span>
                )}

                {/* Botones */}
                <div className="flex gap-2 ml-4">
                  {editandoIndex === index ? (
                    <button
                      onClick={handleSaveEdit}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition active:scale-95"
                      title="Guardar"
                    >
                      <Check size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(index)}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition active:scale-95"
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(index)}
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition active:scale-95"
                    title="Eliminar"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </SideBar>
  );
}

export default Categorias;
