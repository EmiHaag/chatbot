const {
    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"



const flowS2Descripciones = addKeyword(['1']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / S2 / Guías de servicio técnico S2 / 👉 Descripción del módulo S2 \n',

    '*Descripción* general del dispensador S2',
    'Acá podés encontrar y diferenciar cada módulo de manera gráfica, sensado y conexiones (OKM)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/Standard/Description.htm?tocpath=S2%20Currency%20Dispenser%7C_____1 \n',

    '*Sensores* ver diagrama:',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR2539&viewlocale=en_US#sensor \n',

    'Posiciones de *flags(sensores)* del *carriage* en el presenter',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR18043&viewlocale=en_US \n',

    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])


const flowS2Diagnostico = addKeyword(['2']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / S2 / Guías de servicio técnico S2 / 👉 Diagnóstico del módulo S2 \n',

    '*Troubleshooting* (tabla de *errores, posibles causas y soluciones* de acuerdo al *m status* - OKM)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/Standard/Troubleshooting.htm?tocpath=S2%20Currency%20Dispenser%7C_____2 \n',


    '*MIST* Siempre podés consultar MIST (pág. 118 - Diagnósticos de dispensadores S2) ',
    'https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ \n',

    '*Importante* Errores que "aparentan" ser de *controladora PCB* y no lo son.',
    'Este documento describe los chequeos previos que se deben llevar a cabo sobre los dispensadores S2 antes de proceder a cambiar la controladora por causa de problemas relacionados con los motores paso a paso',
    'Ver documento de GTS:',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR22192 \n',


    '*Eventos crónicos*  MS 81, 82, 83, 84 y 61 entre otros  (GTS OKM)',
    'La principal causa de eventos crónicos en dispensadores S2 es el transporte vertical, que incluye MS 81, 82, 83, 84 y 61 entre otros.',
    'Ver documento de GTS en OKM',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR21620\n',

    '*VIDEO* Resumen de *diagnósticos* del dispensador de medios S2 y resolución de problemas mediante diagnósticos: ',
    'https://m.ncratleos.com/resources/sites/OKM/content/live/PROCEDURE/10000/PR10114/en_US/urn_kid_ncr_moid_46d43c8b-97ee-4e59-a1ed-e9ae05fab7c9.mp4 \n',

    'Cómo alargar la vida útil de la *bomba* de *vacío* y evitar errores de la misma (GTS OKM)',
    'La principal causa de falla de la bomba de vacío S2 es la entrada de partículas finas de polvo, para reducir las fallas se ha liberado una cubierta protectora que se desliza sobre la bomba.',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR21065 \n',

    '*Documentación* completa por cada *m status* ',
    'Acá podés buscar el m status y su correspondiente documentación. Hay mucha data en este documento y varios m status que tienen su correspondiente boletín informativo.',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR2772&viewlocale=en_US \n',

    '*Procedimientos del S2 media dispenser* página principal de OKM ',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR18098&viewlocale=en_US \n',

    '*Autenticar* dispensador',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR2518&viewlocale=en_US \n',

    'Diagnosticar *Carriage* (boletín infocenter)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR3614&viewlocale=en_US \n',

    'Atasco de *carriage*. Cómo moverlo a la posición "Closed":',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR2539&viewlocale=en_US#Jam \n',

    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])



const flowS2Reemplazos = addKeyword(['3']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / S2 / Guías de servicio técnico S2 / 👉 Reemplazo de partes FRU S2 \n',



    '*VIDEO de reemplazo de módulos (FRU) S2*',
    'https://m.ncratleos.com/resources/sites/OKM/content/live/PROCEDURE/10000/PR10115/en_US/urn_kid_ncr_moid_7ff4768c-2c2b-49e2-84a5-f14ab8e28389.mp4 \n',

    'Cómo reemplazar *pick lines* ?  (GTS OKM)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20390 \n',

    '*BAM* Cómo reemplazarlo ?  ',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Bill \n',

    'Cómo reemplazar *CARRIAGE* front o rear access ?  (infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Carriage2 \n',

    'Cómo reemplazar *NOSE* ?  (infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Nose \n',

    'Cómo reemplazar *SNT* ?  (infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Single \n',

    'Reemplazo de *MOTOR* y *BOMBA* de vacío (infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Main \n',

    'Reemplazo de *pick* module (infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Double \n',

    'Reemplazo de *main board* (infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Main2 \n',

    'Reemplazo de *presenter* (infoprod)',
    'https://m.ncratleos.com/infoprod/hardware/chapters/6890/Body/6890/FRU.htm#Presente2 \n',


    '*' + trigger + '* para volver al menu principal',



], {
    delay: 1000
}, null, [])


const flowS2Partes = addKeyword(['0']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / S2 /👉 *Partes* \n',

    ' *MIST* Siempre podés consultar partes en MIST (pág. 91) ',
    ' https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',

    ' *OKM Página principal de partes con fotos* (OKM Oracle Knowledge Management)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR22066\n',

    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])



const flowS2 = addKeyword(['2', 's2']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *S2*',
    '*0* - Partes ',
    '*1* - Descripción /Sensores /flags',
    '*2* - Diagnóstico de errores',
    '*3* - Reemplazo de partes FRU\n',

    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowS2Partes, flowS2Descripciones, flowS2Diagnostico, flowS2Reemplazos])


var s2 = {
    flowS2,

}
module.exports = s2;