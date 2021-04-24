const { genpass } = require('../controllers/pass')

describe("Pruebas sobre funcion GenPass", () => {
    it("Debe genera Contraseñas diferentees", () => {
        const passp = "Hola12"
        const pass1 = genpass(passp)
        const pass2 = genpass(passp)
        expect(pass1).not.toBe(pass2)
    })
    it("La contraseña debe tener 6 Caracteres como min", () => {
        const passp = "HolaMundo"

        const pass1 = genpass(passp)
        expect(pass1).toBeUndefined()
    })
})