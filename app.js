const {
    createBot,
    createProvider,
    createFlow,
    addKeyword
} = require('@bot-whatsapp/bot')
//set this keyword to trigger first bot menu.
var triggerKeys = ["hola", "help", "ayuda"]
var triggerKeysSinSaludo = ["menu"]

/* const fs = require("fs");
dataJS = [];
fs.readFile("./test.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    dataJS = jsonString;
    console.log(dataJS)
}); */

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



const menuPrincipal = () => {
    return [
        'Tipea alguna de las siguientes opciones',
        '',
        '👉 *1* Financial (bancos)  ',
        '👉 *2* Retail (ej Carrefour)',
        '👉 *3* Administrativo (ES mobility, códigos reporte, etc.)',
        '👉 *4* ~Logística (Partes, envios, diferencias, ppk, intransit, etc..)~',
        '👉 *5* ~Otros: Reinstalar pc/movil, renovar llave usb, etc..~',
    ]
}

const menuPrincipalSinSaludo = addKeyword(triggerKeysSinSaludo)

    .addAnswer(
        menuPrincipal(), {
            delay: 1000
        },
        null,
        [flow1Financial, flow2Retail, flow3Administrativo, flow4logistica, flow5otros]
    )

/* FLOW PRINCIPAL */
const flowPrincipal = addKeyword(triggerKeys)
    .addAnswer('🙌BOT Local para pruebas - Hola bienvenido al *Chatbot* de ayuda al CE', {
        delay: 1000
    })
    .addAnswer('..para ayudarte necesito saber que área estás consultando ?', {
        delay: 500
    })
    .addAnswer(
        menuPrincipal(), {
            delay: 1000
        },
        null,
        [flow1Financial, flow2Retail, flow3Administrativo, flow4logistica, flow5otros]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, menuPrincipalSinSaludo])
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
/*  pm2 start app.js --name=bot1 

pm2 list
pm2 stop mi-api

Use the rm -r command to remove non-empty directories
 rm -rf ./bot

ver procesos
ps -aux
kill pid

nodemon app.js   para aplicar cambios al guardar archivo
*/