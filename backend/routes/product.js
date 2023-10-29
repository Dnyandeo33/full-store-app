import express from 'express';
import productController from '../controllers/product.js';
const { allProducts, productById, postProduct, update, deleteProduct } = productController;


const router = express.Router();

router.get('/', allProducts);
router.get('/:id', productById);
router.post('/', postProduct);
router.put('/:id', update);
router.delete('/:id', deleteProduct);

export default router;