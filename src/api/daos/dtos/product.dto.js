export default class ProductDTO {
	constructor(product) {
		this.id = product._id
		this.title = product.title
		this.price = product.price
		this.thumbnail = product.thumbnail
		this.dateInfo = {
			createdAt: product.createdAt,
			updatedAt: product.updatedAt
		}
	}
}
