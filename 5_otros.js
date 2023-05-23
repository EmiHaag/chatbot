const {
    addKeyword
} = require('@bot-whatsapp/bot')
const {
    getKey1
} = require('./app')

const flow5otrosOp1 = addKeyword(['1']).addAnswer([
    'Estás en 👉 👉 ',


    '',
    '*' + "triggerKey" + '* para volver al menu principal',

])
const flow5otros = addKeyword(['5', 'otros']).addAnswer(
    [
        'Estás en 👉 Otros',
        '*1* - Reinstalar pc/celular corporativo',
        '*2* - Renovar llave usb',


        '',
        '*' + getKey1 + '* para volver al menu principal',
    ],
    null,
    null,
    [flow5otrosOp1]
)

var otros = {
    flow5otros,

}
module.exports = otros;