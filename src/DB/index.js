import cors from "cors"
import express from "express"
import pkg from "pg"
const { Pool } = pkg
import dotenv from "dotenv"

const app = express()
app.use(cors())
app.use(express.json()) // Для парсинга JSON

// Подключение к PostgreSQL
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "videos",
	password: "50773548",
	port: "5432", // Обычно 5432
})

// Пример API для получения данных
app.get("/api/data", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM videos.video") // Замените на ваш запрос
		res.json({ result: result.rows })
	} catch (error) {
		console.error(error)
		res.status(500).send("Ошибка сервера")
	}
})

// Запуск сервера
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Сервер работает на http://localhost:${PORT}`)
})
