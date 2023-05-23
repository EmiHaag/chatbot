const {
    createBot,
    createProvider,
    createFlow,
    addKeyword
} = require('@bot-whatsapp/bot')
//set this keyword to trigger first bot menu.
var triggerKeys = ["hola", "menu"]


const {
    flow1Financial
} = require('./1_financial')
const {
    flow2Retail
} = require('./2_retail')
const {
    flow3Administrativo
} = require('./3_administrativo')
const {
    flow4logistica
} = require('./4_logistica')
const {
    flow5otros
} = require('./5_otros')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')








/* FLOW PRINCIPAL */
const flowPrincipal = addKeyword(triggerKeys)
    .addAnswer('🙌 Hola bienvenido al *Chatbot* de ayuda al CE', {
        delay: 1000
    })
    .addAnswer('..para ayudarte necesito saber que estás buscando ?', {
        delay: 500
    })
    .addAnswer(
        [
            'Tipea alguna de las siguientes opciones',
            '',
            '👉 *1* Financial(bancos)',
            '👉 *2* Retail(ej Carrefour, McDonalds.. etc)',
            '👉 *3* Administrativo(es, codigos, como reporto llamadas, expensas, etc.)',
            '👉 *4* Logistica (Partes, envios, diferencias, ppk, intransit, etc..)',
            '👉 *5* Otros: Reinstalar pc/movil, renovar llave usb, etc..',
        ], {
            delay: 1000
        },
        null,
        [flow1Financial, flow2Retail, flow3Administrativo, flow4logistica, flow5otros]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb({
        port: 4003
    })
}

main()
/* MANTIENE PROCESO activo al cerrar VM */
/*  pm2 start app.js --name=bot1 */