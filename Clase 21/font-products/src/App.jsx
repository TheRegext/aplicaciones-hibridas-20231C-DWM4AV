import ProductListItem from "./ProductListItem"
import 'minireset.css'
import './App.css'
/**
 * PascalCase - Componentes - Clases
 * camelCase - Variables (mutables o inmutables), funciones
 * snake_case - Variables, funciones
 * kebab-case - clases en css
 */

const PRODUCTOS = [{"id":1,"name":"Café Expreso","price":200,"description":"Esquisito café expreso, fuerte y con buen cuerpo."},{"id":2,"name":"Café con Leche","price":250,"description":"Café con una deliciosa leche cremosa, perfecto para empezar el día."},{"id":3,"name":"Café Americano","price":180,"description":"Café suave pero con cuerpo, ideal para tomar a cualquier hora del día."}]

export function App(){

    return (
    <div>
        <h1>Lista de Productos</h1>
        <p>Nuestros mejores a al alcance de un click</p>
        <ul>
            {PRODUCTOS.map(product => <ProductListItem key={product.id} product={product} />)}
        </ul>
    </div>)
}

export default App