const {
    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"



const flowBna3pm = addKeyword(['1']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / Bna3 / 👉 *Mantenimiento preventivo del módulo Bna3* \n',
    '*v* - *volver*\n',

    '*Mantenimiento preventivo* general del BNA3 (Okm)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728\n',


    'Limpieza de sensores de *cassette*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#cassette\n',

    'Limpieza de sensores de *inlet*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#inlet\n',

    'Limpieza de sensores del *feed-reject*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#feed/reject\n',

    'Limpieza de sensores del *main-transport*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#Main%20Transport\n',

    'Limpieza de sensores del *validador*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#validator\n',

    'Limpieza de sensores del *escrow*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#escrow\n',

    'Limpieza del *garage unit*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#garage\n',

    'Calibración final de *sensores*',
    'Luego de haber realizado el mantenimiento preventivo, siempre es recomendable realizar una calibración final de sensores.',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20728#calibracion\n',

    'También podés ver este *video* sobre mantenimiento preventivo',
    'https://m.ncratleos.com/library/OKM/NCRKM_KNOWLEDGE_VIEW/NCRKM_SVCS_VIEW/NCRKM_GTS_GLOBAL_TECHNICAL_SUPPORT_VIEW/Yimmy%20Garcia/BNA3%20Videos/BNA3%20Video3.mp4\n',


    '*' + trigger + '* para volver al menu principal',

],{capture:true},async(ctx, {gotoFlow}) => {       
    if (ctx.body == "v"){
      
        await gotoFlow(flowBna3)
    }
}, [])




const flowBna3Partes = addKeyword(['0']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / Bna3 /👉 *Partes* \n',
    '*v* - *volver*\n',
    '*MIST* Consultar partes de Bna3 en MIST (pág. 306) ',
    'https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',

    '*OKM Página principal de partes con diagrama* (OKM Oracle Knowledge Management)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR5906&viewlocale=en_US \n',

    '*Caseteras* (solicitud) consultar por cliente en tabla de MIST pág 307',
    'Recordá: Toda task que implique cambio de casetera bna3 corresponde tipo cash & charge - chgc',
    'https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ\n',


    'Partes (full) en *6632*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR6558&viewlocale=en_US \n',

    'Partes (full) en *6634*',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR6659&viewlocale=en_US \n',

    '*' + trigger + '* para volver al menu principal',

],{capture:true},async(ctx, {gotoFlow}) => {       
    if (ctx.body == "v"){
        await gotoFlow(flowBna3)
    }
}, [])

const flowBna3Videos = addKeyword(['3']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / Bna3 /👉 *Videos* \n',
    '*v* - *volver*\n',
    '*Overview* del módulo',
    'https://m.ncratleos.com/library/OKM/NCRKM_KNOWLEDGE_VIEW/NCRKM_SVCS_VIEW/NCRKM_GTS_GLOBAL_TECHNICAL_SUPPORT_VIEW/Yimmy%20Garcia/BNA3%20Videos/BNA3%20Video1.mp4\n',

    '*Desarmado* del módulo',
    'https://m.ncratleos.com/library/OKM/NCRKM_KNOWLEDGE_VIEW/NCRKM_SVCS_VIEW/NCRKM_GTS_GLOBAL_TECHNICAL_SUPPORT_VIEW/Yimmy%20Garcia/BNA3%20Videos/BNA3%20Video2.mp4\n',

    '*Mantenimiento*',
    'https://m.ncratleos.com/library/OKM/NCRKM_KNOWLEDGE_VIEW/NCRKM_SVCS_VIEW/NCRKM_GTS_GLOBAL_TECHNICAL_SUPPORT_VIEW/Yimmy%20Garcia/BNA3%20Videos/BNA3%20Video3.mp4\n',

    '*Diagnóstico*',
    'https://m.ncratleos.com/library/OKM/NCRKM_KNOWLEDGE_VIEW/NCRKM_SVCS_VIEW/NCRKM_GTS_GLOBAL_TECHNICAL_SUPPORT_VIEW/Yimmy%20Garcia/BNA3%20Videos/BNA3%20Video4.mp4\n',




    '*' + trigger + '* para volver al menu principal',

],{capture:true},async(ctx, {gotoFlow}) => {       
    if (ctx.body == "v"){
        await gotoFlow(flowBna3)
    }
}, [])

const flowBna3ExcRechazos = addKeyword(['2']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / Bna3 /👉 *Exceso de rechazos por m-status 14 y 23* \n',
    '*v* - *volver*\n',
    '*Exceso de rechazos de BNA por falta de mantenimiento*. El dispositivo reporta el M-Status 23 de validador, con MData     recurrente 8B51 y 8B52. Además, se adiciona la revisión del BNA por presencia recurrente del M-Status 14 (Escrow empty).',
    'https://ncratleos-my.sharepoint.com/:b:/p/eh185079/EV-zm0afxc1DnTF3PlQdBIoBsPKwOVlRsNq4Is0zzAwpeg?e=GqPYVc\n',




    '*' + trigger + '* para volver al menu principal',

],{capture:true},async(ctx, {gotoFlow}) => {       
    if (ctx.body == "v"){
        await gotoFlow(flowBna3)
    }
}, [])


const flowBna3 = addKeyword(['3', 'bna3']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *BNA3*\n',
    '*v* - *volver*\n',
    '*0* - *Partes* BNA3 ',
    '*1* - *Mantenimiento preventivo* del módulo BNA3',
    '*2* - Exceso de rechazos por *m-status 14 y 23*',
    '*3* - *Videos* sobre desarme, mantenimiento y diagnósticos generales\n',

    '*Otros enlaces de interés*',

    '👉 Diagnóstico y reemplazo de módulo *Escrow* en BNA3',
    'https://ncratleos-my.sharepoint.com/:b:/p/eh185079/EbmuJmN_vTpGsIlRiSDsxEIBSnFhdMmTcRYHsVb2YIZG6w?e=pGlNBq \n',

    '👉 *RAS* de fábrica GLORY MANUAL (PDF)',
    'https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ERGGVf6EV-tDhDnaAlG9W7oB-Zvijmo-HnhOMBWOmDzKyQ?e=urUnCW \n ',

    '👉 Instalar *templates* Bna3 (GTS)',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20196 \n ',

    '👉 Instalar *templates* Bna3 (PDF)',
    'https://ncratleos-my.sharepoint.com/:b:/p/eh185079/Eb2a06nb6G5Ng1dzGvWDpNUBOApg_gbbyJN_qgk4MD04hA?e=iaxo0r \n ',

    
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000,
    capture:true
    },
    async(ctx, { gotoFlow}) => {     
        console.log("jwepfpjwepfpwejfpj")  
        if (ctx.body == "v"){
           // await gotoFlow(require("..1_financial"))
        }
    }
    
,[flowBna3Partes, flowBna3pm, flowBna3ExcRechazos, flowBna3Videos])


var bna3 = {
    flowBna3,

}
module.exports = bna3;