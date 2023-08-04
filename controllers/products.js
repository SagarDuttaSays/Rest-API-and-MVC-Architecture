const fs = require('fs');
const products = JSON.parse(fs.readFileSync('././public/users.json'))

exports.createProduct = (req, res) =>{   
    products.products.push(req.body)
    res.status(201).json(req.body)
}

exports.getProducts = (req, res) => {
    res.status(201).json(products)
}

exports.getProduct = (req, res) => {
    const id = +req.params.id;
    const product = products.products.find(p=>p.id===id)
    res.status(201).json(product)
}

exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.products.findIndex(p=>p.id===id);
    const product = products.products[productIndex];
    products.products.splice(productIndex, 1, {...product, ...req.body})
    res.status(201).json()
}

exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.products.findIndex(p=>p.id===id)
    products.products.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json(products.products[productIndex])
}

exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.products.findIndex(p=>p.id===id)    
    products.products.splice(productIndex, 1)
    res.status(201).json({"deleted":"successfully"})
}