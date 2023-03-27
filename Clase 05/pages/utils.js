function generatePage(title, contnet) {

    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<title>' + title + '</title></head><body>'

    html += '<h1>Mi espectacular pagina web</h1>'

    html += contnet;

    html += '</body></html>'

    return html;
}

function function2() {
    console.log("Function 2")
}

/*
module.exports = {
    generatePage
}
*/

export {
    generatePage,
    function2
}

/*
export default {
    generatePage,
    function2
}
*/