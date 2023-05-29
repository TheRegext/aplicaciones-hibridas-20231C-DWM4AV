import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error404 from './pages/Error404'
import ProductListPage from './pages/products/ProductListPage'
import ProductDetailsPage from './pages/products/ProductDetailsPage'
import {
  createBrowserRouter, // crea el contexto de la ruta
  RouterProvider
} from 'react-router-dom'

// preparamos el router
const router = createBrowserRouter([
  {
    path: '/', // la url de la pagina
    element: <App />, // pagina
    errorElement: <Error404 />,
    children: [
      {
        path: 'products',
        element: <ProductListPage />
      },
      {
        path: 'products/:idProduct',
        element: <ProductDetailsPage />
      }
    ]
  },
  
  
])

// JSX
ReactDOM.createRoot(document.getElementById('root'))

.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
