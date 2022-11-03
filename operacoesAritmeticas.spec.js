const operacoesAritmeticas = require("./operacoesAritmeticas")

describe("Conjunto de testes app", () => {
	it("deve realizar divisão", async () => {
		const resultado = operacoesAritmeticas.dividir(10, 2)
		expect(resultado).toBe(5)
	})

	it("deve realizar soma", async () => {
		const resultado = operacoesAritmeticas.somar(10, 2)
		expect(resultado).toBe(12)
	})

	it("deve realizar subtração", async () => {
		const resultado = operacoesAritmeticas.subtrair(10, 2)
		expect(resultado).toBe(8)
	})

	it("deve realizar multiplicação", async () => {
		const resultado = operacoesAritmeticas.multiplicar(10, 2)
		expect(resultado).toBe(20)
	})
})
