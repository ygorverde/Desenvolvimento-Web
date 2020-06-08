const express = require('express')
const server = express();

const db = require('./database/db.js')

// Configurar pasta pública
server.use(express.static("public"))

// habilitar o uso do req body
server.use(express.urlencoded({extended: true}))

// Utilizando Template engine!
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

/* ENCAMINHANDO ATRAVÉS DE ROTAS */
server.get("/", function (req, res) {
    // res.sendFile(__dirname + "/views/index.html")
    return res.render("index.html", { title: "v1.1" })

})
server.get("/create-point", function (req, res) {
    
    console.log(req.query)
    
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) =>{
    // req.body: Corpo do formulário
    //console.log(req.body)
    //Inserir dados no banco de dados

    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);   
    `
    const values = [
       req.body.image,
       req.body.name,
       req.body.address,
       req.body.address2,
       req.body.state,
       req.body.city,
       req.body.items
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro")
        }
        console.log('Cadastrado com sucesso!')
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }


     db.run(query, values, afterInsertData)
    
    
})


server.get("/search", function (req, res) {

    const search = req.query.search

    const searchresult = search
    if(search == ""){
        // Pesquisas vazias
        return res.render("search-results.html", {total: 0})
    }

    // Pegar os dados do banco
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Dados: " + rows)

        const total = rows.length

        //Mostrar a página html com os dados do banco
        return res.render("search-results.html", {places: rows, total: total, search: search})
    })

    
})

server.listen(3000)
