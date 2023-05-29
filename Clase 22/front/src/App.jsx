import ProductList from "./ProductList"
import 'minireset.css'
import './App.css'
/**
 * PascalCase - Componentes - Clases
 * camelCase - Variables (mutables o inmutables), funciones
 * snake_case - Variables, funciones
 * kebab-case - clases en css
 */



export function App(){

    return (
    <div>
        <h1>Lista de Productos</h1>
        <p>Nuestros mejores a al alcance de un click</p>
        <ProductList />
    </div>)
}

export default App