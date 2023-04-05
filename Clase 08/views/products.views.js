function generatePage(title, contnet) {

    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<title>' + title + '</title></head><body>'

    html += '<h1>Mi espectacular pagina web</h1>'

    html += contnet;

    html += '</body></html>'

    return html;
}

function generateListProducts(products) {
    let html = '<ul>';
    for (let product of products) {
        html += `<li>${product.name} <a href="/products/${product.id}">Ver</a></li>`
    }
    html += '</ul>'

    return generatePage('Lista de Productos', html)
}

function generateProductDetail(product) {
    let html = `<h1>${product.name}</h1>`
    html += `<p>${product.description}</p>`
    html += `<p>Precio: $${product.price}</p>`

    return generatePage('Detalle de Producto', html)
}

/*
module.exports = {
    generatePage
}
*/

export {
    generatePage,
    generateListProducts,
    generateProductDetail
}

/*
export default {
    generatePage,
    function2
}
*/