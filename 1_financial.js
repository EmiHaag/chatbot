const {

    addKeyword
} = require('@bot-whatsapp/bot')
const {
    flowS1
} = require('./modulos/s1')
const keywordThrigger = "menu"

const flow1FinancialOp1 = addKeyword(['1', 'modulo']).addAnswer([
    '📂 Estás en / Financial - Bancos / 👉 *Módulos*\n',
    'Cual es el módulo que buscas ?\n',
    '*1* - S1 Dispensador de dinero',
    '*2* - S2 Dispensador de dinero',
    '*3* - Bna3 Deposito dinero',
    '*4* - GBRU Reciclador de dinero',
    '*5* - BRM Reciclador de dinero',
    '*6* - SCPM Depósito de cheques',
    '*7* - MCRW Lectora de tarjetas motorizada',

    '',
    '*' + keywordThrigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowS1])
const flow1FinancialOp0 = addKeyword(['0', 'PIM']).addAnswer([
    '📂 Estás en / Financial - Bancos / 👉 *PIM* - Parts Identification Manual ',
    '',
    '(✅Acceso sin VPN | ⚠️Acceso con VPN)',
    '',
    '📌 *PIM* Página principal ⚠️  ',
    '🔗 https://www.infoprod.ncr.com/New/Content/PIM.htm',
    '',
    '📌 *PIM* Modelo *6622* ✅  ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/ETmbI65JcotPrvCi3Tafv6oBAkNQiZvfl1wXuxTTApl0IA?e=XjKm3M',
    '',
    '📌 *PIM* Modelo *6626* ✅  ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/Edn8QAD5cnhFgk0OaRsVvD4BlMzs7TgWfsTv6fx69X-T5Q?e=r2v52c',
    '',
    '📌 *PIM* Modelo *6632* ✅  ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/Edj_0dFFhIhIm1B5MYGHcQMBIBcWgTf5XRSRXqrFCz7tog?e=8BRc0F',
    '',
    '📌 *PIM* Modelo *6634* ✅  ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/EdNag4O7a7ROkaBlZem7Eg8B1BdkZdSEx1iURZ2Vihjogw?e=ZKEUJu',
    '',
    '📌 *PIM* Modelo *6682* ✅  ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/EcpHC-SYPz9Fmm3YdDBxxocB4wbTJu4oJzZ0DG0TnQPNVw?e=vtpn2n',
    '',
    '📌 *PIM* Modelo *6683* ✅  ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/ESxQyLKZ1gdHr3uHlKvTmtQBrLn9qx4XzbCrVM85Ol_SnA?e=j2A1gp',
    '',

    '',
    '*' + keywordThrigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [flowS1])
const flow1Financial = addKeyword(['1', 'financial', 'bancos']).addAnswer(
    [
        '📂 Estás en / *Financial - Bancos*',
        '',
        '*0* - Busco el manual (*PIM - Parts Identification Manual*) de un modelo de ATM (6622, 6632, 6626, 6634, 6682, 6683)',
        '*1* - Busco información sobre un *módulo*',
        '*2* - Quiero saber que sistema operativo tiene o que tipo de pc',
        '*3* - Instalaciones-remasterizaciones',
        '*4* - cambio denominaciones',
        '*4* - Instalar templates',
        '*6* - Otros(tiras ej, etc..)',
        '',
        '*' + keywordThrigger + '* para volver al menu principal',
    ], {
        delay: 1000
    },
    null,
    [flow1FinancialOp0, flow1FinancialOp1]
)

var financial = {
    flow1Financial,

}
module.exports = financial;