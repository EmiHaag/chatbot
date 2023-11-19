const { 
    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"
 const {
    flowS1
} = require('./modulos/s1')
const {
    flowS2
} = require('./modulos/s2')
const {
    flowBna3
} = require('./modulos/bna3')
const {
    flowgbru
} = require('./modulos/gbru')
const {
    flowEpp
} = require('./modulos/epp')




const flow1FinancialOp1 = addKeyword(['1', 'modulo']).addAnswer([
    '📂 Estás en / Financial - Bancos / 👉 *Módulos*\n',
    'Cual es el módulo que buscas ?',
    '*1* - *S1* Dispensador de dinero',
    '*2* - *S2* Dispensador de dinero',
    '*3* - *BNA3* Depósito dinero',
    '*4* - *GBRU* Reciclador de dinero',
    '*5* - ~BRM Reciclador de dinero~',
    '*6* - ~SCPM Depósito de cheques~',
    '*7* - ~MCRW Lectora de tarjetas motorizada~',
    '*8* - Teclado encryptor EPP',
    
    '*Enlaces de interés* \n',
    '👉 *Biometría* - Todo lo que tenés que saber está en OKM',
    'https://m.ncratleos.com/infocenter/index?page=content&id=PR20816',
    '',
    '*' + trigger + '* para volver al menu principal',
],null,null, [flowS1, flowS2, flowEpp, flowBna3, flowgbru])

module.exports = {flow1FinancialOp1}