import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routs/Routs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
