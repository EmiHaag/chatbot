const {

    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"


const flowS2Manual = addKeyword(['2']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / S2 /👉 *Guías de servicio técnico S2* \n',

    '*Descripción* general del dispensador S2',
    'Acá podés encontrar y diferenciar cada módulo de manera gráfica, sensado y conexiones (OKM)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/Standard/Description.htm?tocpath=S2%20Currency%20Dispenser%7C_____1 \n',

    '*Troubleshooting* (tabla de *errores, posibles causas y soluciones* de acuerdo al *m status* - OKM)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/Standard/Troubleshooting.htm?tocpath=S2%20Currency%20Dispenser%7C_____2 \n',


    ' *MIST* Siempre podés consultar MIST (pág. 118 - Diagnósticos de dispensadores S2) ',
    ' https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ \n',

    '*Importante* Errores que "aparentan" ser de *controladora PCB* y no lo son.',
    'Este documento describe los chequeos previos que se deben llevar a cabo sobre los dispensadores S2 antes de proceder a cambiar la controladora por causa de problemas relacionados con los motores paso a paso',
    'Ver documento de GTS:',
    'https://m.ncr.com/infocenter/index?page=content&id=PR22192 \n',


    '*Eventos crónicos*  MS 81, 82, 83, 84 y 61 entre otros  (GTS OKM)',
    'La principal causa de eventos crónicos en dispensadores S2 es el transporte vertical, que incluye MS 81, 82, 83, 84 y 61 entre otros.',
    'Ver documento de GTS en OKM',
    'https://m.ncr.com/infocenter/index?page=content&id=PR21620\n',


    'Cómo reemplazar *pick lines* ?  (GTS OKM)',
    'https://m.ncr.com/infocenter/index?page=content&id=PR20390 \n',

    '*BAM* Cómo reemplazarlo ?  ',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Bill \n',

    'Cómo reemplazar *CARRIAGE* front o rear access ?  (infoprod)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Carriage2 \n',

    'Cómo reemplazar *NOSE* ?  (infoprod)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Nose \n',

    'Cómo reemplazar *SNT* ?  (infoprod)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Single \n',

    'Reemplazo de *MOTOR* y *BOMBA* de vacío (infoprod)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Main \n',

    'Reemplazo de *pick* module (infoprod)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Double \n',

    'Reemplazo de *main board* (infoprod)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Main2 \n',

    'Reemplazo de *presenter* (infoprod)',
    'https://m.ncr.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Presente2 \n',


    'Cómo alargar la vida útil de la *bomba* de *vacío* y evitar errores de la misma (GTS OKM)',
    'La principal causa de falla de la bomba de vacío S2 es la entrada de partículas finas de polvo, para reducir las fallas se ha liberado una cubierta protectora que se desliza sobre la bomba.',
    'https://m.ncr.com/infocenter/index?page=content&id=PR21065 \n',

    'Documentación completa por cada m status ',
    'Acá podés buscar el m status y su correspondiente documentación. Hay mucha data en este documento y varios m status que tienen su correspondiente boletín informativo.',
    '',
    'https://m.ncr.com/infocenter/index?page=content&id=PR2772&viewlocale=en_US \n',

    '*Procedimientos del S2 media dispenser* página principal de OKM ',
    'https://m.ncr.com/infocenter/index?page=content&id=PR18098&viewlocale=en_US \n',

    '*Autenticar* dispensador',
    'https://m.ncr.com/infocenter/index?page=content&id=PR2518&viewlocale=en_US \n',

    'Diagnosticar *Carriage* (boletín infocenter)',
    'https://m.ncr.com/infocenter/index?page=content&id=PR3614&viewlocale=en_US \n',

    'Posiciones de *flags(sensores)* del *carriage* en el presenter',
    'https://m.ncr.com/infocenter/index?page=content&id=PR18043&viewlocale=en_US \n',




    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])

const flowS2Partes = addKeyword(['1']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / S2 /👉 *Partes* \n',

    ' *MIST* Siempre podés consultar partes en MIST (pág. 91) ',
    ' https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',

    ' *OKM Página principal de partes con fotos* (OKM Oracle Knowledge Management)',
    'https://m.ncr.com/infocenter/index?page=content&id=PR22066\n',

    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])



const flowS2 = addKeyword(['2', 's2']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *S2*',
    '*1* - Partes ',
    '*2* - Guías de servicio técnico para S2',
    '',

    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowS2Partes, flowS2Manual])


var s2 = {
    flowS2,

}
module.exports = s2;