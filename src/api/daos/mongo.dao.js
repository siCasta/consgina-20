export default class ProductsDAO {
	constructor(model) {
		this.model = model
	}

	async getAll() {
		const products = await this.model.find()

		return products
	}

	async getById(id) {
		const product = await this.model.findById(id)

		return product
	}

	async create(values) {
		const product = await this.model.create(values)

		return product
	}

	async getByIdAndUpdate(id, values) {
		const product = this.model.findByIdAndUpdate(id, values)

		return product
	}

	async deleteById(id) {
		await this.model.findByIdAndDelete(id)
	}
}
