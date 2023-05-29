import PropTypes from 'prop-types'
import './ProductListItem.css'

function ProductListItem({product}){

    return <li className="product-list-item">
            <img className='product-image' src={`https://picsum.photos/200/300?random=${product._id}`} />
            <div className='product-details'>
                <h3 className='product-name'>{product.name} <span className="product-code">Codigo: {product._id}</span></h3>
                <span className='product-price'>Precio: ${product.price}</span>
                <div className='product-actions'>
                    <a href='#' className='product-view'>Ver producto</a>
                </div>
            </div>
        </li>
}

ProductListItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductListItem