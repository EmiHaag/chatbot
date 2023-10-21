const {

    addKeyword
} = require('@bot-whatsapp/bot')
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
const {
    flowPm
} = require('./pms/pm')

const trigger = "menu"

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

], {
    delay: 1000
}, null, [flowS1, flowS2, flowBna3, flowgbru, flowEpp])
const flow1FinancialOp0 = addKeyword(['0', 'PIM']).addAnswer([
    '📂 Estás en / Financial - Bancos / 👉 *PIM* - Parts Identification Manual\n ',

    '📌 *PIM* Página principal   ',
    '🔗 https://www.infoprod.ncr.com/New/Content/PIM.htm',
    '',
    '📌 *PIM* Modelo *6622*   ',
    '🔗 https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ETmbI65JcotPrvCi3Tafv6oBAkNQiZvfl1wXuxTTApl0IA?e=XjKm3M',
    '',
    '📌 *PIM* Modelo *6623*   ',
    '🔗 https://ncratleos-my.sharepoint.com/:b:/p/eh185079/Ecjy4O9fdttHkHtO0oECUgYBXsB1zu745xMIA5wc6EPC7w?e=XSJBAs',
    '',
    '📌 *PIM* Modelo *6626*   ',
    '🔗 https://ncratleos-my.sharepoint.com/:b:/p/eh185079/Edn8QAD5cnhFgk0OaRsVvD4BlMzs7TgWfsTv6fx69X-T5Q?e=r2v52c',
    '',
    '📌 *PIM* Modelo *6632*  ',
    '🔗 https://ncratleos-my.sharepoint.com/:b:/p/eh185079/Edj_0dFFhIhIm1B5MYGHcQMBIBcWgTf5XRSRXqrFCz7tog?e=8BRc0F',
    '',
    '📌 *PIM* Modelo *6634*  ',
    '🔗 https://ncratleos-my.sharepoint.com/:b:/p/eh185079/EdNag4O7a7ROkaBlZem7Eg8B1BdkZdSEx1iURZ2Vihjogw?e=ZKEUJu',
    '',
    '📌 *PIM* Modelo *6682*  ',
    '🔗 https://ncratleos-my.sharepoint.com/:b:/p/eh185079/EcpHC-SYPz9Fmm3YdDBxxocB4wbTJu4oJzZ0DG0TnQPNVw?e=vtpn2n',
    '',
    '📌 *PIM* Modelo *6683*  ',
    '🔗 https://ncratleos-my.sharepoint.com/:b:/p/eh185079/ESxQyLKZ1gdHr3uHlKvTmtQBrLn9qx4XzbCrVM85Ol_SnA?e=j2A1gp',
    '',

    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowS1])
const flow1Financial = addKeyword(['1', 'financial', 'bancos']).addAnswer(
    [
        '📂 Estás en / *Financial - Bancos *',
        '',
        '*0* - Ver *PIM* - Parts Identification Manual de un modelo de ATM (6622, 6623, 6632, 6626, 6634, 6682, 6683)',
        '*1* - *MODULOS* Busco información sobre un *módulo*',
        '*2* - ~Quiero reconocer *que sistema operativo tiene* este equipo~',
        '*3* - ~Instalaciones-remasterizaciones~',
        '*4* - ~cambio denominaciones~',
        '*4* - ~Instalar templates~',
        '*6* - ~Otros(tiras ej, etc..)~',
        '*7* - *PowerApps links* (Atleos)',
        '*' + trigger + '* para volver al menu principal',
    ], {
        delay: 1000
    },
    null,
    [flow1FinancialOp0, flow1FinancialOp1, flowPm ]
)

var financial = {
    flow1Financial,

}
module.exports = financial;