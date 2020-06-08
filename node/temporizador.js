const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 0 * * 4', function(){
    console.log('Executando tarefa1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelado..')
    
}, 20000)

// Set imediate, utilizando js
//set interval, utilizando js

const regra = new schedule.RecurrenceRule()// Regra de recorrencia
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 0
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2..', new Date().getSeconds())
})