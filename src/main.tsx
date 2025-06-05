import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Ingredients from './module/costosys/layouts/Ingredients.tsx'

import Recetas from './module/costosys/layouts/Recetas.tsx'
import SubRecetas from './module/costosys/layouts/SubRecetas.tsx'
import Start from './module/costosys/layouts/start.tsx'
import Categorias from './module/costosys/layouts/Categorias.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

        <Routes>
          {/* Definiendo las rutas para que sea en una sola sigle page */}
            <Route path='/ingredients' element={<Ingredients/>}/>
            <Route path='/subRecetas' element={<SubRecetas/>}/>
            <Route path='/recetas' element={<Recetas/>}/>
            <Route  path='/categorias' element={<Categorias/>}/>
            {/* Ruta predeterminada */}
            <Route path='/' element={<Start/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
