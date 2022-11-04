const request = require("supertest")
const app = require("./index")
const database = require("./database/database.local")

describe("conjunto de testes", () => {
	// beforeAll((done) => {

	// })

	// afterAll((done) => {
	// 	done()
	// })
	it("Testando listar usuarios", async () => {
		const esperando = "geekxxx"

		const rep = await request(app).get("/getInfo")

		expect(rep.body.user).toBe(esperando)
	})
	it("Testando salvar dados", async () => {
		const databaseSpy = jest.spyOn(database, "gravarDados")
		databaseSpy.mockReturnValue(true)

		const esperando = "Ok - Created"

		const rep = await request(app)
			.post("/clientes/salvar")
			.send({ codigo: 5, nome: "tim", endereco: "lageado" })

		expect(rep.text).toBe(esperando)
		expect(rep.status).toBe(201)
	})
	it("Testando listar usuarios", async () => {
		const databaseSpy = jest.spyOn(database, "buscaTodosDados")

		databaseSpy.mockReturnValue(true)

		const rep = await request(app).get("/clientes/listar")

		expect(rep.status).toBe(200)
	})
	it("Testando listar usuarios", async () => {
		const databaseSpy = jest.spyOn(database, "buscaTodosDados")

		databaseSpy.mockReturnValue(true)

		const rep = await request(app).get("/clientes/listar/666")

		expect(rep.status).toBe(200)
	})
})
