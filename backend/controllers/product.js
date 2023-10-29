import Product from '../models/product.js';


const { getProducts, getProductById, updateProduct, deleteProduct } = Product;

const productController = {
    allProducts: (req, res) => {
        const products = getProducts();
        res.status(200).json(products);
    },

    productById: (req, res) => {
        const { id } = req.params;
        const productExist = getProductById(id);
        productExist
            ? res.status(200).json(productExist)
            : res
                .status(404)
                .json({ message: `Product doesn't exist with ${id}` });
    },

    postProduct: (req, res) => {
        const { name, category, description, price, img } = req.body;

        if (!name || !category || !description || !price || !img) {
            res.status(404).json({ message: `Please fill all fields...` });
        } else {
            const newProduct = new Product(
                name,
                category,
                description,
                price,
                img
            );
            newProduct.postProduct();
            res.status(200).json({ message: `Product with ${name} successfully added...` });
        }
    },

    update: (req, res) => {
        const { id } = req.params;
        const { name, category, description, price, img } = req.body;

        if (!name || !category || !description || !price || !img) {
            res.status(404).json({ message: `Please fill All fields... ` });
        } else {
            updateProduct(id, {
                name,
                category,
                description,
                price,
                img
            })
            res.status(200).json({ message: `Product updated successfully...` })
        }
    },

    deleteProduct: (req, res) => {
        const { id } = req.params;
        deleteProduct(id)
        res.status(200).json({ message: `Product deleted...` })
    }
};

export default productController;