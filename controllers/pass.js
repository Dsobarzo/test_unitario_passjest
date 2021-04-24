const bcrypt = require("bcrypt")

const genpass = (unhash_pass) => {
    /*bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return
        }
        console.log(salt)
        bcrypt.hash(unhash_pass, salt, (err, secure_pass) => {
            if (err) {
                return
            }
            console.log(secure_pass)
            return secure_pass
        })
    })*/

    if (unhash_pass.length < 6) {
        const salt = bcrypt.genSaltSync(12)
        const secure_pass = bcrypt.hashSync(unhash_pass, salt)
        return secure_pass;
    }
    return undefined;


}

//genpass("hola Mundo")
//console.log(genpass("Hola Mundo"))

module.exports = { genpass }