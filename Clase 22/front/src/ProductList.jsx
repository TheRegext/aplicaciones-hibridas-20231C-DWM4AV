import ProductListItem from "./ProductListItem"
import * as productService from "./services/products.service"
import './ProductList.css'
import { useCallback, useEffect, useState } from "react"

function ProductList(){
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('')

    const productsFilter = products.filter((e)=> e.name.toLowerCase().includes(filter))

    const onChangeFilter = useCallback((event) => {
        setFilter(event.target.value.toLowerCase())
    }, [setFilter])

    // ejercutar la funcion cuando se monta el componente
    useEffect(()=>{
        productService.getAll()
        .then(data =>{
            setProducts(data)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [])


    return (
        <div className='product-list'>
            <form className='product-list__form'>
                Filtro: <input id="filtro" className='product-list__filter' type='text' onChange={onChangeFilter} value={filter} />
            </form>
            <ul className='product-list__list'>
                {productsFilter.map(product => <ProductListItem key={product._id} product={product}  />)}
            </ul>
        </div>
    )
}


export default ProductList