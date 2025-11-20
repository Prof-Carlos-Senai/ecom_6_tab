const Produto = require('../models/Produto')

async function criarProduto(dados) {

    const { nome, descricao, modelo, preco, imagem_url, ativo } = dados

    // Validações simples antes de salvar
    if (!nome || !modelo || !preco) {
        throw new Error('Nome, modelo e preço são obrigatórios')
    }

    const novoProduto = await Produto.create({
        nome,
        descricao,
        modelo,
        preco,
        imagem_url,
        ativo
    })

    return novoProduto
}

module.exports = { criarProduto }
