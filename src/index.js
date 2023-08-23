const { decode } = require('jsonwebtoken')

const [ _node, _src, token ] = process.argv
const { name, phone_number, email } = decode(token)

console.log(`\nNome: ${name}\nTelefone: ${phone_number}\nEmail: ${email}`)