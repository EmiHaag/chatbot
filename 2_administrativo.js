const {
    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"

const flow3AdministrativoOp1 = addKeyword(['1']).addAnswer([
    'Estás en 👉 Administrativo 👉 Dudas con *ES mobility* \n  ',

    'Falla: *Download database fail ES MOBILITY* 👇🏼\n',
    'https://ncr-my.sharepoint.com/:b:/p/eh185079/EbQZ375v971PuAecWKrggJgBdtHeOImL3-Sf58thep4Okg?e=Wo2tGv\n',

    'Métrica: *ETA Misshandled* Si no te están dando bien las métricas de ETAs consulta este tip 👇🏼\n',
    'https://ncr-my.sharepoint.com/:b:/p/eh185079/Efvlr8D-q2lNvlpMKVsthxgBPa_lVnUWlovIAxRtX42oog?e=kbpaw5 \n\n',
    '*v* - *volver*\n',
    '',
    '*' + trigger + '* para volver al menu principal',

],{capture:true},async(ctx, {gotoFlow}) => {       
    if (ctx.body == "v"){
        await gotoFlow(flow3Administrativo)
    }
    
},[])

const flow3AdministrativoOp2 = addKeyword(['2']).addAnswer([
    'Estás en 👉 Administrativo 👉 *Códigos globales para reportar* \n  ',
    'Accedé a los códigos globales 2023 en este enlace 👇🏼 \n',

    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/ERE-IKcRQPlFiCeo4duaOsEB8OFUatMTs8QoTT4DDP9xGA\n\n',


    '*v* - *volver*\n',
    '',
    '*' + trigger + '* para volver al menu principal',

],{capture:true},async(ctx, {gotoFlow}) => {       
    if (ctx.body == "v"){
        await gotoFlow(flow3Administrativo)
    }
    
},[])


const flow3Administrativo = addKeyword(['2', 'administrativo']).addAnswer(
    [
        'Estás en 👉 Administrativo\n',
        '*1* - Dudas con la app ES mobility\n',
        '*2* - Códigos globales para reportar\n',
        '*v* - *volver*\n',

        '*' + trigger + '* para volver al menu principal',
    ],{capture:true},async(ctx, {gotoFlow}) => {       
        if (ctx.body == "v"){
            await gotoFlow(require('./app'))
        }
    },
    [flow3AdministrativoOp1, flow3AdministrativoOp2]
)

var administrativo = {
    flow3Administrativo,

}
module.exports = administrativo;