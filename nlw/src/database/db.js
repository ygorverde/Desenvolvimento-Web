const sqlite3 = require('sqlite3').verbose()

// Criar Objeto que irá fazer operações no banco de dados.
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar Objeto de banco para realizar operações.
// db.serialize(() => {
//     // //Com comandos Sql:

//     // //1. Criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // //2. Inserir dados na tabela.
//     // const query = `
//     // INSERT INTO places (
//     //     image,
//     //     name,
//     //     address,
//     //     address2,
//     //     state,
//     //     city,
//     //     items
//     // ) VALUES (?,?,?,?,?,?,?);   
//     // `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
        
//     // ]

//     // function afterInsertData(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log('Cadastrado com sucesso!')
//     //     // Está referenciando o erro!
//     //     console.log(this)
//     // }

//     // Passando a função como referência.
//      //db.run(query, values, afterInsertData)

//     //3. Consultar dados da tabela.
    
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Aqui os registros: ")
//         console.log(rows)
//     })

//     // //4. Deletar um dado na tabela.

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log('Registro deletado com sucesso!!')
    // })

    


// })




