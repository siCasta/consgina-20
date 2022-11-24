export default class ProductDTO {
	constructor(chat) {
		this.author = {
			id: chat.author.id,
			fullName: `${chat.author.name} ${chat.author.surname}`,
			age: chat.author.age,
			alias: chat.author.alias,
			avatar: chat.author.avatar
		}
		this.message = chat.message
		this.dateInfo = {
			createdAt: chat.createdAt,
			updatedAt: chat.updatedAt
		}
	}
}
