import Factory from '../daos/Factory.js'

export default class ChatService {
	constructor() {
		this.dao
		this.init()
	}

	async init() {
		const { chats } = await Factory.getPersistence()

		this.dao = chats
	}

	async getChats() {
		const chats = await this.dao.getAll()

		return chats
	}

	async getChat(id) {
		const chat = await this.dao.getById(id)

		return chat
	}

	async createChat(values) {
		const chat = await this.dao.create(values)

		return chat
	}

	async updateChat(id, values) {
		const chat = await this.dao.getByIdAndUpdate(id, values)

		return chat
	}

	async deleteChat(id) {
		await this.dao.deleteById(id)
	}
}
