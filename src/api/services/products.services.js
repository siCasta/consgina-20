import Factory from '../daos/Factory.js'

export default class ProductService {
	constructor() {
		this.dao
		this.init()
	}

	async init() {
		const { products } = await Factory.getPersistence()

		this.dao = products
	}

	async getProducts() {
		const products = await this.dao.getAll()

		return products
	}

	async getProduct(id) {
		const product = await this.dao.getById(id)

		return product
	}

	async createProduct(values) {
		const product = await this.dao.create(values)

		return product
	}

	async updateProduct(id, values) {
		const product = await this.dao.getByIdAndUpdate(id, values)

		return product
	}

	async deleteProduct(id) {
		await this.dao.deleteById(id)
	}
}
