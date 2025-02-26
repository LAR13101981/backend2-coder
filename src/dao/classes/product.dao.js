import productModel from '../models/product.model.js';

export default class ProductDAO {
  constructor() {}
  get = async () => {
    return await productModel.find();
  };

  getProduct = async (product) => {
    return await productModel.findById(product);
  };

  createProduct = async (product) => {
    return await productModel.create(product);
  };

  updateProduct = async (id, product) => {
    return await productModel.findByIdAndUpdate(id, product);
  };

  deleteProduct = async (product) => {
    return await productModel.findByIdAndDelete(product);
  };
}
