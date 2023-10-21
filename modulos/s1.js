const {

    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"


const flowS1Manual = addKeyword(['2']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / S1 /👉 *Guías de servicio técnico* \n',

    ' *MIST* Siempre podés consultar MIST (pág. 81 - Calibración pick aria) ',
    ' https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ \n',

    ' *Manual* de servicio / Alineación y funcionamiento del pick module. INFOPROD ',
    ' https://m.ncratleos.com/infoprod/hardware/chapters/6714/Body/6714/Aria%20Pick%20Module.htm?tocpath=Aria%20Pick%20Module%7C_____0 \n',

    ' *Troubleshooting* Acá encontrarás una tabla de *ERRORES | MSTATUS | CAUSAS | RESOLUCIÓN *',
    'Consulta M_status /Posibles causas y resoluciones de acuerdo al m status',
    ' https://m.ncratleos.com/infoprod/hardware/chapters/6712/Body/6712/Standard/Troubleshooting.htm?tocpath=S1%20Bill%20Alignment%20Dispenser%7C_____2 \n',

    'Posición normal para *SWITCHES* de la pcb para 1 o 2 dispensadores (Strapping - Infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6712/Body/6712/Standard/Strapping.htm?tocpath=S1%20Bill%20Alignment%20Dispenser%7C_____4 \n',

    '*Ajustes*',
    'Acá vas a encontrar información sobre cómo realizar ajustes de:',
    ' - Ajustes de correas de motor principal',
    ' - Calibración y testeo de LVDT - Learn parameters',
    ' - Seteo de Singularidades',
    ' - Autenticación',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6712/Body/6712/Standard/Adjustment.htm?tocpath=S1%20Bill%20Alignment%20Dispenser%7C_____5 \n',


    ' *Video Cómo chequear vacío* ',
    ' https://ncratleos-my.sharepoint.com/:v:/p/eh185079/EUK5On34datNgBriwLKSCV0BOzXbuY0x5NMYWtdABq4AdQ?e=721jO1 \n',

    ' *Reemplazo de partes FRU* ',
    ' https://m.ncratleos.com/infoprod/hardware/chapters/6713/Body/6713/Standard/Removal%20and%20Replacement.htm?tocpath=S1%20Currency%20Dispenser%20Removal%20and%20Replacement%7C_____1 \n',

    ' *Clear NVRAM*  (infocenter)',
    ' https://m.ncratleos.com/infocenter/index?page=content&id=PR2311&viewlocale=en_US#clear%20NVRam%20NID2 \n',


    ' *Fallas en Clamp M-Status 12*  Resolución (infoprod) ',
    '⚠️ http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2012%20-%20Presenter%20Jammed.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____3 \n',
    ' OBS:(También podés consultar *MIST* pág. 84 ) \n https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',

    ' *Fallas de pick M-Status 3*  Resolución (infoprod)',
    '⚠️ http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2003%20-%20Pick%20Failure.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____1 \n',
    ' OBS:(También podés consultar *MIST* pág. 84 ) \n https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',

    ' *Atascos de billetes M-Status 5*  Resolución (infoprod) ',
    '⚠️ http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2005%20-%20Currency%20Jam.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____2 \n',
    ' OBS:(También podés consultar *MIST* pág. 87 ) \n https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',

    ' *Atascos de billetes en presentador M-Status 18*  Resolución (infoprod)',
    ' http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2018%20-%20Currency%20Jam.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____7 ',
    ' OBS:(También podés consultar *MIST* pág. 88 ) \n https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',

    ' *Casetera* Pusher no hace suficiente fuerza sobre los billetes.   (infocenter)\n 445-0765893  Spring – Pusher (2 requeridos por casetera) \n',
    'M-Status 3 - Reemplazo de resortes (springs) ver el siguiente boletín:',
    ' https://m.ncratleos.com/infocenter/index?page=content&id=BUL2364&viewlocale=en_US&actp=LIST \n',


    ' *Cableado*   (infoprod)',
    ' https://m.ncratleos.com/infoprod/hardware/chapters/6712/Body/6712/Standard/Cabling.htm?tocpath=S1%20Bill%20Alignment%20Dispenser%7C_____8 \n',


    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])

const flowS1Partes = addKeyword(['1']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / S1 /👉 *Partes* ',
    '',
    '',
    ' *MIST* Siempre podés consultar partes en MIST (pág. 66) ',
    ' https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ',
    '',
    ' *OKM Página principal de partes* (OKM Oracle Knowledge Management)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR5811&viewlocale=en_US',
    '',
    ' *Todas las partes con fotos* (OKM Oracle Knowledge Management)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR21878#',
    '',
    ' *Caseteras* (Consultar con AS cuando corresponde reposición) (OKM Oracle Knowledge Management)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR21878#PNCASS',
    '',
    ' *PCB* (printed circuit board / Plaquetas) (OKM Oracle Knowledge Management)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR21878#PNPCB',
    '',
    ' *Kits* de reemplazo de partes (OKM Oracle Knowledge Management)',
    ' https://m.ncratleos.com/infocenter/index?page=content&id=PR21878#PNKITS',
    '',
    ' *Herramientas* necesarias (OKM Oracle Knowledge Management)',
    ' https://m.ncratleos.com/infocenter/index?page=content&id=PR21878#PNTOOLS',
    '',


    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])



const flowS1 = addKeyword(['1', 's1']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *S1*',
    '*1* - Partes ',
    '*2* - Guías de servicio técnico para S1',
    '',

    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowS1Partes, flowS1Manual])


var s1 = {
    flowS1,

}
module.exports = s1;