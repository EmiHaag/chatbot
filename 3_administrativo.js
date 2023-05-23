const {
    addKeyword
} = require('@bot-whatsapp/bot')


const flow3AdministrativoOp1 = addKeyword(['1']).addAnswer([
    'Estás en 👉 👉 ',


    '',
    '*' + "triggerKey" + '* para volver al menu principal',

])
const flow3Administrativo = addKeyword(['3', 'administrativo']).addAnswer(
    [
        'Estás en 👉 Administrativo',
        '*1* - Dudas con la app ES mobility',
        '*2* - Códigos globales para reportar',


        '',
        '*' + "triggerKey" + '* para volver al menu principal',
    ],
    null,
    null,
    [flow3AdministrativoOp1]
)

var administrativo = {
    flow3Administrativo,

}
module.exports = administrativo;