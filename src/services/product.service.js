import ProductDTO from '../dao/dto/create-product.dto.js';
import { productRepo } from '../repositories/index.js';

export const createNewProduct = async (product) => {
  try {
    if (!product) throw new Error('No cargo un producto para su alta');
    const newProduct = new ProductDTO(product);

    await productRepo.createNewProduct(newProduct);

    return newProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async () => {
  return await productRepo.getAllProducts();
};

export const getProductById = async (product) => {
  return await productRepo.getProductById(product);
};

export const updateProduct = async (id, product) => {
  try {
    return await productRepo.updateProduct(id, product, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (product) => {
  try {
    return await productRepo.deleteProductById(product);
  } catch (error) {
    throw new Error(error.message);
  }
};
