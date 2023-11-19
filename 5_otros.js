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
        '*v* - *volver*\n',
        '*1* - Reinstalar pc/celular corporativo',
        '*2* - Renovar llave usb',


        '',
        '*' + getKey1 + '* para volver al menu principal',
    ],{capture:true},async(ctx, {gotoFlow}) => {       
        if (ctx.body == "v"){
            await gotoFlow(require('./app'))
        }
    },
    [flow5otrosOp1]
)

var otros = {
    flow5otros,

}
module.exports = otros;