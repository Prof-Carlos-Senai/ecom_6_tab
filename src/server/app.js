const express = require('express')
const cors = require('cors')

const app = express()

// ------------------ Middlewares globais ------------------
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// ------------------ Rotas ------------------
const usuarioRoutes = require('../routes/usuario.routes')

app.use('/usuario', usuarioRoutes)


app.get('/', (req, res) => {
    res.status(200).json({message: 'API funcionando!'})
})

module.exports = app
