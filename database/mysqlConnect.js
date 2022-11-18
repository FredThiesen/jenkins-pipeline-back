//conect to mysql database
var mysql = require("mysql")

var connection = mysql.createConnection({
	host: "193.123.114.150",
	user: "ricardo",
	password: "123456",
	database: "tarefa",
	port: 3306,
	multipleStatements: true,
	dateStrings: true,
	timezone: "utc",
})

connection.connect(function (err) {
	if (err) {
		console.log("Error connecting to Db")
		console.log(err)
		return
	}
	console.log("Connection established")
})

module.exports = connection
