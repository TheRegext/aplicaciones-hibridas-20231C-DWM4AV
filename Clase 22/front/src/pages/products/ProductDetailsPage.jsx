
import { useEffect, useState } from 'react'
import * as productService from '../../services/products.service'
import {useParams} from 'react-router-dom'

function ProductDetailsPage(){
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()

    useEffect(()=>{
        productService.getById(idProduct)
        .then(data =>{
            if(data){
                setProduct(data)
            }
        })

    },[idProduct])
    
    return (
        <div>
            <h1>{product?.name}</h1>
            <p>Precio: ${product?.price}</p>
            <p>{product?.description}</p>
            
        </div>
    )
}

export default ProductDetailsPage