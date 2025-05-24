import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Ingredients from './module/costosys/Ingredients.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Ingredients/>
  </StrictMode>,
)
