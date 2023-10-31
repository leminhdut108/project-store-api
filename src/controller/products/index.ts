import getProduct from './getProducts';
import createProduct from './createProduct';
import getProductById from './getProductById';
import deleteProduct from './deleteProduct';

const ProductController = {
    getProduct,
    getProductById,
    createProduct,
    deleteProduct
}

export default ProductController;