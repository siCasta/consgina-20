import { normalize, schema, denormalize } from 'normalizr'
import ChatService from '../services/chats.services.js'

const chatService = new ChatService()

export async function getMessages(req, res, next) {
	try {
		const messagesDB = await chatService.getChats()

		const author = new schema.Entity('authors')
		const chat = new schema.Entity(
			'messages',
			{
				author
			},
			{ idAttribute: '_id' }
		)

		const normalizeData = normalize(
			JSON.parse(JSON.stringify(messagesDB)),
			[chat]
		)

		const per =
			(JSON.stringify(normalizeData).length /
				JSON.stringify(messagesDB).length) *
			100

		return res.status(200).json({
			message: 'Mensajes obtenidos correctamente',
			data: normalizeData.entities,
			percentage: per,
			status: 'success'
		})
	} catch (err) {
		next(err)
	}
}

export async function createMessage(req, res, next) {
	try {
		const { message, author } = req.body

		const messageDB = await chatService.createChat({
			author,
			message
		})

		return res.status(200).json({
			message: 'Mensaje creado correctamente',
			data: messageDB,
			status: 'success'
		})
	} catch (err) {
		console.log(err)
		next(err)
	}
}
