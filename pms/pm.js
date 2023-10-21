const {
    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"



const flowPm = addKeyword(['7', 'PowerApps']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *PowerApps links* (Atleos)',

    '*Observación* : Si ya migraste a ncr atleos, recordá abrir powerapps -> icono perfil -> cerrar sesion (ncr)-> iniciar sesión con ncr atleos\n',

    '*link* ->  *PM (ATLEOS)* - Mantenimientos preventivos ',
    'https://apps.powerapps.com/play/e/default-6539da08-b835-422b-bc32-76ca20bec464/a/8224ee1e-516e-41fc-87fe-f950d5f855a7?tenantId=6539da08-b835-422b-bc32-76ca20bec464&hint=f21bbbcb-588e-4c6f-93ec-ad2c1186244c&sourcetime=1697926258747&source=portal',
    '',
    '*link* ->  *GTS HUB (ATLEOS)* - En este link vas a tener acceso a todas las powerapps de GTS (ATLEOS) como GBRU, BNA3, BRM, SCPM, S2, SPS, SRU, DIEBOLD SUPPORT ',
    'https://apps.powerapps.com/play/e/default-6539da08-b835-422b-bc32-76ca20bec464/a/c8e8a643-ee57-4dbc-8832-a7844a344acf?tenantId=6539da08-b835-422b-bc32-76ca20bec464&hint=1bc80933-e210-4125-825b-5e10bfa789f9&sourcetime=1697929436502&source=portal',
    '',
    '*link* ->  *THE ABC OF TOOLS (ATLEOS)* ',
    'https://apps.powerapps.com/play/e/default-6539da08-b835-422b-bc32-76ca20bec464/a/e45d1b56-8682-4e28-8689-68e08f7db541?tenantId=6539da08-b835-422b-bc32-76ca20bec464&hint=991718c9-6ece-4991-aa84-88fdd7a8b198&sourcetime=1697929436504&source=portal',
    '',
    '*link* ->  *THE ABC OF BNA3 (ATLEOS)* ',
    'https://apps.powerapps.com/play/e/default-6539da08-b835-422b-bc32-76ca20bec464/a/144d8c7d-1612-4565-aaf7-09294d76c800?tenantId=6539da08-b835-422b-bc32-76ca20bec464&hint=873d8c67-37a4-47e0-a260-75962ba16c0c&sourcetime=1697929436497&source=portal',
    '',
    '*link* ->  *THE ABC OF BRM (ATLEOS)* ',
    'https://apps.powerapps.com/play/e/default-6539da08-b835-422b-bc32-76ca20bec464/a/5448f028-ca0a-458e-8483-6ff681b169a2?tenantId=6539da08-b835-422b-bc32-76ca20bec464&hint=d4ad7b78-6e76-451a-ae00-6a50cf036ca9&sourcetime=1697929436499&source=portal',
    '',
    '*link* ->  *THE ABC OF GBRU (ATLEOS)* ',
    'https://apps.powerapps.com/play/e/default-6539da08-b835-422b-bc32-76ca20bec464/a/e35a113c-c08c-4922-a540-b2e1e7e83d30?tenantId=6539da08-b835-422b-bc32-76ca20bec464&hint=2ffacfdc-fb91-4003-8883-9beff905e938&sourcetime=1697929436504&source=portal',
    '',


    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])


var pm = {
    flowPm,

}
module.exports = pm;