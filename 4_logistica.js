const {
    addKeyword
} = require('@bot-whatsapp/bot')

const trigger = "menu"


const flow4logisticaOp1 = addKeyword(['1']).addAnswer([
    'Estás en 👉 👉 ',


    '',
    '*' + trigger + '* para volver al menu principal',

])
const flow4logistica = addKeyword(['4', 'logistica']).addAnswer(
    [
        'Estás en 👉 Logística',
        '*v* - *volver*\n',
        '*1* - ~Ver partes que están en estado "in transit"~',
        '*2* - ~Devolver partes~',
        '*3* - ~Reportar problema a logística~',
        '*4* - ~Ver partes que tengo a cargo~',
        '*5* - ~Ver partes asignadas como ppk~',


        '',
        '*' + trigger + '* para volver al menu principal',
    ],{capture:true},async(ctx, {gotoFlow}) => {       
        if (ctx.body == "v" || ctx.body == "V" ){
            await gotoFlow(require('./app'))
        }
    },
    [flow4logisticaOp1]
)

var logistica = {
    flow4logistica,

}
module.exports = logistica;