import ProductDAO from '../dao/classes/product.dao.js';

export default class ProductRepository {
  constructor() {
    this.dao = new ProductDAO();
  }

  async getAllProducts() {
    const products = await this.dao.get();
    return products;
  }

  async getProductById(product) {
    return await this.dao.getProduct(product);
  }

  async deleteProductById(product) {
    return await this.dao.deleteProduct(product);
  }

  async createNewProduct(product) {
    return await this.dao.createProduct(product);
  }

  async updateProduct(id, product) {
    return await this.dao.updateProduct(id, product);
  }
}
