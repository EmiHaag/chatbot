const {
    createBot,
    createProvider,
    createFlow,
    addKeyword
} = require('@bot-whatsapp/bot')
//set this keyword to trigger first bot menu.
var triggerKeys = ["hola", "help", "ayuda"]
var triggerKeysSinSaludo = ["menu"]


const {
    flow1Financial
} = require('./financial')

const {
    flow3Administrativo
} = require('./2_administrativo')
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
        '👉 *2* Administrativo (ES mobility, códigos reporte, etc.)',
/*         '👉 *3* ~Logística (Partes, envios, diferencias, ppk, intransit, etc..)~',
        '👉 *4* ~Otros: Reinstalar pc/movil, renovar llave usb, etc..~', */
    ]
}

const menuPrincipalSinSaludo = addKeyword(triggerKeysSinSaludo).addAnswer(
        menuPrincipal(), {
            delay: 1000
        },
        null,
        [flow1Financial, flow3Administrativo, flow4logistica, flow5otros]
    )

/* FLOW PRINCIPAL */
const flowPrincipal = addKeyword(triggerKeys)
    .addAnswer('🙌 CE BOT NCR ATLEOS (Beta)\n  Hola bienvenido al *Chatbot* de ayuda al *CE*', {
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
        [flow1Financial,  flow3Administrativo, flow4logistica, flow5otros]
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

module.exports = menuPrincipalSinSaludo;


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

sitio putty: 'website'
http://164.152.193.73:4003/

//Traer updates desde github
 git pull origin

ERRROR JSON APARECE CUANDO HAY DEPENDENCIAS QUE DEPENDEN UNAS DE OTRAS Y NO SE CARGAN SIMULTANEAMENTE
EJ FLOW A DEPENDE DE B Y VICEVERSA


*/