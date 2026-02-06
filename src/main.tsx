import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDo from './components/ToDoList.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDo />
  </StrictMode>,
)
