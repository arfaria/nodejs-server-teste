// API que cuida do protocolo http, sendo armazenado na variável 'http'. 
const http = require('http')

// Cria um servidor, armazena na variável 'server'
// É passado dois parâmetros: requisição e resposta.
const server = http.createServer((req, res) => { 

    const resposta = [] // Variável 'resposta' do tipo array.
    resposta['/'] = '<h1> Bem Vindo! </h1>' // Página principal
    resposta['/contato'] = '<h1> Pagina de Contato </h1>' // Página de contato
    resposta['erroURL'] = '<h1> URL incorreta. Verifique. <h1>' // Página de URL incorreta

    console.log(resposta[req.url])

    // Finaliza a resposta.
    // Verifica se 'req.url' é '/' ou '/contato' qualquer outra coisa.
    res.end(resposta[req.url] || resposta['erroURL']) 
})

// Método que "escuta" as requisições
// Três parâmetros estão sendo usados: porta, IP e uma função.
server.listen(3001, 'localhost', () => {
    // Função que é executada assim que o servidor fica disponível.
    console.log('Server em: http://localhost:3001') //Imprime no terminal as mensagens dentro de aspas simples
    console.log('Para desligar server: CTRL + C') 
})


