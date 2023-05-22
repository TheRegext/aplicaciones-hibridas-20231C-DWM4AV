import React from 'react'
import ReactDOM from 'react-dom/client'


// JSX
ReactDOM.createRoot(document.getElementById('root'))

.render(
  <React.StrictMode>
    <div>
      <h1>Esto es el titulo de la pagina</h1>
      <p>Esto es el parrafo de la pagina</p>
      <ul>
        <li>Esto es el primer elemento de la lista</li>
        <li>Esto es el segundo elemento de la lista</li>
      </ul>
    </div>
  </React.StrictMode>,
)
