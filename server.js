const http = require('http')

const server = http.createServer((req, res) => {

    const resposta = []
    resposta['/'] = '<h1> Bem Vindo! </h1>' //Página principal
    resposta['/contato'] = '<h1> Pagina de Contato </h1>' //Página de contato
    resposta['erroURL'] = '<h1> URL incorreta. Verifique. <h1>' //Página de URL incorreta

    console.log(resposta[req.url])

    res.end(resposta[req.url] || resposta['erroURL']) //
})

server.listen(3001, 'localhost', () => {
    console.log('Server em: http://localhost:3001') //Imprime no terminal as mensagens dentro de aspas simples
    console.log('Para desligar server: CTRL + C')
})


