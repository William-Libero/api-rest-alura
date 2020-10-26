const conexao = require('../infra/conexao')
const moment = require('moment')

class Atendimento{
    adiciona(atendimento){
        const sql = "INSERT INTO atendimentos SET ?"

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(atendimento)
            }
        });
    }

    lista(res){
        const sql = "SELECT * FROM atendimentos"

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = "UPDATE atendimentos SET ? WHERE id = ?"

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(...valores, id)
            }
        })
    }

    deleta(id, res){
        const sql = "DELETE FROM atendimentos WHERE id = ?"

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Atendimento;