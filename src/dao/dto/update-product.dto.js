export class UpdateProductDTO {
  constructor({ title, description, price, stock }) {
    if (title !== undefined) this.title = title;
    if (description !== undefined) this.description = description;
    if (price !== undefined) this.price = price;
    if (stock !== undefined) this.stock = stock;
  }
}
