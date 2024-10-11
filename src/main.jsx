import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { router } from './router/Router.jsx';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </HelmetProvider>
  </StrictMode>,
)
