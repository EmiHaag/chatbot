const {
    addKeyword
} = require('@bot-whatsapp/bot')


const flow1RetailOp1 = addKeyword(['1']).addAnswer([


])
const flow2Retail = addKeyword(['2', 'retail']).addAnswer(
    [
        'Estás en 👉 Retail',
        '*1* - Remasterizar pc Carrefour',
        '*2* - Reemplazar disco dañado Carrefour',
        '*3* - Guía retail',
        '📌 *PIM* Retail ✅  ',
        '🔗 https://onlinehelp.ncr.com/eHome.htm',

        '',
        '*' + "triggerKey" + '* para volver al menu principal',
    ],
    null,
    null,
    [flow1RetailOp1]
)

var retail = {
    flow2Retail,

}
module.exports = retail;