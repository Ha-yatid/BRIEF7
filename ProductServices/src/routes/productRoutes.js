const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} = require('../controllers/productController');

const router = express.Router();

router.route('/products')
  .get(getProducts)
  .post(createProduct);

router.route('/products/:id')
  .get(getProductById)
  .put(updateProduct);

module.exports = router;
