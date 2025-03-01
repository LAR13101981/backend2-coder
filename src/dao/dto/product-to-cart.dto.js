export default class ProductToCartDTO {
  constructor(product) {
    this.productId = product.id;
    this.quantity = product.cantidad;
  }
}
