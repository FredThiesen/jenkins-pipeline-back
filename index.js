var express = require("express")
var bodyParser = require("body-parser")
const database = require("./database/database.local")
const mysql = require("./database/mysqlConnect")
//middleware - irá fazer um parser do dados do front e formatar em req.body
var app = express()
const PORT = 3000
//define o uso do body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function (req, res) {
	res.json({ message: "Hello World" })
})

app.get("/getInfo", function (req, res) {
	res.json({ user: "geekxxx" })
})
app.post("/clientes/salvar", function (req, res) {
	// console.log(req.body)
	// database.gravarDados({
	// 	codigo: req.body.codigo,
	// 	nome: req.body.nome,
	// 	endereco: req.body.endereco,
	// })
	// res.status(201).send("Ok - Created")

	mysql.query(
		"INSERT INTO clientes (codigo, nome, endereco) VALUES (?, ?, ?)",
		[req.body.codigo, req.body.nome, req.body.endereco],
		function (error, results, fields) {
			if (error) throw error
			res.status(201).send("Ok - Criado e salvo no banco")
		}
	)
})

app.get("/clientes/listar", function (req, res) {
	// const dados = database.buscaTodosDados()
	// console.log(dados)
	// res.status(200).send(dados)

	mysql.query("SELECT * FROM clientes", function (error, results, fields) {
		if (error) throw error
		res.status(200).send(results)
	})
})

app.get("/clientes/listar/:key", function (req, res) {
	// const key = req.params.key
	// const dados = database.buscaDados(key)
	// console.log(dados)
	// res.status(200).send(dados)

	mysql.query(
		"SELECT * FROM clientes WHERE codigo = ?",
		[req.params.key],
		function (error, results, fields) {
			if (error) throw error
			res.status(200).send(results)
		}
	)
})

app.listen(PORT, function () {
	console.log("Servidor-Backend está rodando na porta: " + PORT)
	// mysql.query('')
	//criar tabela clientes com os campos codigo, nome, endereco
	// mysql.query(
	// 	"CREATE TABLE IF NOT EXISTS clientes (codigo INT, nome VARCHAR(255), endereco VARCHAR(255))"
	// )

	// mysql.query(
})

module.exports = app
