import Chat from '../models/Chat.js'
import Product from '../models/Product.js'

const persistence = 'mongo'

export default class Factory {
	static async getPersistence() {
		const persistencies = {
			mongo: {
				products: new (await import('./mongo.dao.js')).default(Product),
				chats: new (await import('./mongo.dao.js')).default(Chat)
			}
		}

		return persistencies[persistence]
	}
}
