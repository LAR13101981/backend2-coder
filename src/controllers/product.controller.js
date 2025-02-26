import {
  createNewProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../services/product.service.js';

export const httpCreateNewProduct = async (req, res) => {
  try {
    const newPoduct = await createNewProduct(req.body);

    res.json({ message: 'Product created', newPoduct });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpGetAllProducts = async (req, res) => {
  try {
    const products = await getAllProducts(req.body);

    res.json({ message: 'Here are all our products', products });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpGetProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await getProductById(id);

    res.json({ message: 'Here is your selected product', products });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpUpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;

    const updatedProduct = await updateProduct(id, product);

    res
      .status(200)
      .json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpDeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProduct(id);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};
