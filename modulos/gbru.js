const {
    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"


const flowGbruPM = addKeyword(['1', 'PM']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / GBRU /👉 *Mantenimiento preventivo GBRU*\n',

    '*Pre-Acceptor* / Limpieza de sensores y correas',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Pre%20acceptor.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____1\n',

    '*Separador* (área de stack) / Limpieza de rodamientos - Reemplazo de consumibles',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Separator%20Stack.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____2\n',

    '*Separador* (Transporte) / Limpieza de correas',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Separator%20Transport.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____3\n',

    '*Pre-Bill-Validator* Transport / Limpieza de correas y rodamientos',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Pre%20BV%20Transport.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____4\n',

    '*Validador* / Limpieza y calibración de sensores',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Bill%20Validator.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____5\n',


    '*Post-BV transport* / Limpieza de correas ',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Post%20BV.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____6\n',


    '*Escrow* / Limpieza de correas, rodamientos y sensores',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Escrow.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____7\n',


    '*Purga removible* / Limpieza de sensores y correas ',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Removable%20Reject%20Bin.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____8\n',

    '*Transporte hacia cassettes* / Limpieza de rodamientos y correas',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Cassette%20Transport.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____9\n',

    '*Lower transport* / Limpieza de correas, sensores y rodamientos',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Lower%20Transport.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____10\n',

    '*Cassettes* / Limpieza de rodamientos ',
    'https://m.ncratleos.com/infoprod/hardware/chapters/7081/Body/7081/Standard/Cassettes.htm?tocpath=Cash%20Acceptor%20%2526%20Recycler%20Preventive%20Maintenance%7C_____11\n',
])



const flowgbru = addKeyword(['4', 'GBRU']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *GBRU*\n',

    '*1* - *PM* Mantenimiento preventivo',
    '',

    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowGbruPM])








var gbru = {
    flowgbru,

}
module.exports = gbru;