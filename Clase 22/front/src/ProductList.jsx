import ProductListItem from "./ProductListItem"
import * as productService from "./services/products.service"
import './ProductList.css'
import { useEffect, useState } from "react"

function ProductList(){
    const [products, setProducts] = useState([])
    const [productsAll, setProductsAll] = useState([])

    const onChangeFilter = (event) => {
        setProducts(productsAll.filter((e)=> e.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    // ejercutar la funcion cuando se monta el componente
    useEffect(()=>{
        productService.getAll()
        .then(data =>{
            setProductsAll(data)
            setProducts(data)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [])

    // ejecuta la funciona cada vez que cambia el estado de products
    useEffect(()=>{

    }, [products])

    return (
        <div className='product-list'>
            <form className='product-list__form'>
                Filtro: <input id="filtro" className='product-list__filter' type='text' onChange={onChangeFilter} />
            </form>
            <ul className='product-list__list'>
                {products.map(product => <ProductListItem key={product._id} product={product}  />)}
            </ul>
        </div>
    )
}


export default ProductList