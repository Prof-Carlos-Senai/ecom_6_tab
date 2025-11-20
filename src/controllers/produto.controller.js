const { criarProduto } = require('../services/produto.service')

async function criar(req, res) {

    try {

        const produto = await criarProduto(req.body)

        return res.status(201).json({
            mensagem: 'Produto criado com sucesso',
            produto
        })

    } catch (err) {
        return res.status(500).json({ erro: err.message })
    }
}

module.exports = { criar }
