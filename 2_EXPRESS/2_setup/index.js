const express = require('express')
const app = express()

app.get('/', (requisicao,resposta)=> {
resposta.send("este é meu back-end")
} )

app.listen(3000, () => {
    console.log("servidor mudando na porta 3000")
})