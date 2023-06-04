const {

    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"


const flowEppFallas = addKeyword(['2']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / EPP /👉 *Fallas comunes* \n ',
    '🔧 CODIGOS MAS COMUNES *POR GOLPE EN UEPP2 MIST * (Pág 346) 👇🏼 \n ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ?e=GQekGU \n',

    '🔧 ATM  MV prisma no toma carga, no entra en linea (MODULO EPP) 👇🏼 \n ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/EQV2RhsUYMlIl3PdbOsUqp4BTb1B3pMKdQJ6aWtfG4Is7w?e=olu4Of  \n',

    '🔧 Error: *Reset removal switches" en status list (MODULO EPP) 👇🏼\n ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/EeZczn6adk9FvgLsSU7VJt4BFXpAGxH3h_eUNioalopqkQ?e=6jdQfA  \n',


    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])

const flowEppPartes = addKeyword(['1']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / EPP /👉 *PARTES* \n ',

    '📌 TODOS LOS MODELOS DE EPP EN *MIST*  (pág. 16) 👇🏼\n',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ \n',




    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])



var flowEpp = addKeyword(['8', '0']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *EPP Encrypting Pin Pad*',

    '*1* - Partes ',
    '*2* - Fallas comunes',
    '',

    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowEppPartes, flowEppFallas])


var epp = {
    flowEpp,

}
module.exports = epp;