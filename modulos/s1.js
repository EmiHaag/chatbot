const {

    addKeyword
} = require('@bot-whatsapp/bot')
const trigger = "menu"


const flowS1Manual = addKeyword(['2']).addAnswer([
    '📂 Estás en  Financial - Bancos / Módulos / S1 /👉 *Guías de servicio técnico* ',
    '',
    '(✅Acceso sin VPN | ⚠️Acceso con VPN)',
    '',
    ' *MIST* Siempre podés consultar MIST ✅ (pág. 81 - Calibración pick aria) ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ',
    '',
    ' *Manual* de servicio / Alineación y funcionamiento del pick module. INFOPROD (NO VPN ✅)',
    '🔗 https://m.ncr.com/infoprod/hardware/chapters/6714/Body/6714/Aria%20Pick%20Module.htm?tocpath=Aria%20Pick%20Module%7C_____0',
    '',
    ' *Troubleshooting* Solución de problemas  (NO VPN ✅)',
    'Consulta M_status /Posibles causas y resoluciones\n',
    '🔗 https://m.ncr.com/infoprod/hardware/chapters/6712/Body/6712/Standard/Troubleshooting.htm?tocpath=S1%20Bill%20Alignment%20Dispenser%7C_____2',
    '',
    ' *Video Cómo chequear vacío*  (NO VPN ✅)',
    '🔗 https://ncr-my.sharepoint.com/:v:/p/eh185079/EUK5On34datNgBriwLKSCV0BOzXbuY0x5NMYWtdABq4AdQ?e=721jO1',
    '',
    ' *Reemplazo de partes FRU*  (NO VPN ✅)',
    '🔗 https://m.ncr.com/infoprod/hardware/chapters/6713/Body/6713/Standard/Removal%20and%20Replacement.htm?tocpath=S1%20Currency%20Dispenser%20Removal%20and%20Replacement%7C_____1',
    '',
    ' *Clear NVRAM*  (OKM VPN ⚠️)',
    '🔗 https://okm.corp.ncr.com/infocenter/index?page=content&id=PR2311&viewlocale=en_US#clear%20NVRam%20NID2',
    '',

    ' *Fallas en Clamp M-Status 12*  Resolución (infoprod VPN ⚠️) OBS:(También podés consultar MIST pág. 84 )',
    '🔗 http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2012%20-%20Presenter%20Jammed.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____3',
    '',
    ' *Fallas de pick M-Status 3*  Resolución (infoprod VPN ⚠️) OBS:(También podés consultar MIST pág. 84 )',
    '🔗 http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2003%20-%20Pick%20Failure.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____1',
    '',
    ' *Atascos de billetes M-Status 5*  Resolución (infoprod VPN ⚠️) OBS:(También podés consultar MIST pág. 87)',
    '🔗 http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2005%20-%20Currency%20Jam.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____2',
    '',
    ' *Atascos de billetes en presentador M-Status 18*  Resolución (infoprod VPN ⚠️) OBS:(También podés consultar MIST pág. 88 )',
    '🔗 http://www.infoprod.ncr.com/html/swi/Topics/Dispenser/M_Status%20Codes/M-Status%2018%20-%20Currency%20Jam.htm?tocpath=Dispenser%7CM-Status%20Codes%7C_____7',
    '',

    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])

const flowS1Partes = addKeyword(['1']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos / S1 /👉 *Partes* ',
    '',
    '(✅Acceso sin VPN | ⚠️Acceso con VPN)',
    '',
    ' *MIST* Siempre podés consultar partes en MIST ✅ (pág. 66) ',
    '🔗 https://ncr-my.sharepoint.com/:b:/p/eh185079/ETnRQKr9Ip9HueXJrGCn1uEB4OcPDA8ugg6MMvEoUw8NOQ',
    '',
    ' *OKM Página principal de partes* (OKM Oracle Knowledge Management - Sólo por VPN ⚠️)',
    '🔗https://okm.corp.ncr.com/infocenter/index?page=content&id=PR5811&viewlocale=en_US',
    '',
    ' *Todas las partes con fotos* (OKM Oracle Knowledge Management - Sólo por VPN ⚠️)',
    '🔗https://okm.corp.ncr.com/infocenter/index?page=content&id=PR21878#',
    '',
    ' *Caseteras* (Consultar con AS cuando corresponde reposición) (OKM Oracle Knowledge Management - Sólo por VPN ⚠️)',
    '🔗https://okm.corp.ncr.com/infocenter/index?page=content&id=PR21878#PNCASS',
    '',
    ' *PCB* (printed circuit board / Plaquetas) (OKM Oracle Knowledge Management - Sólo por VPN ⚠️)',
    '🔗https://okm.corp.ncr.com/infocenter/index?page=content&id=PR21878#PNPCB',
    '',
    ' *Kits* de reemplazo de partes (OKM Oracle Knowledge Management - Sólo por VPN ⚠️)',
    '🔗 https://okm.corp.ncr.com/infocenter/index?page=content&id=PR21878#PNKITS',
    '',
    ' *Herramientas* necesarias (OKM Oracle Knowledge Management - Sólo por VPN ⚠️)',
    '🔗 https://okm.corp.ncr.com/infocenter/index?page=content&id=PR21878#PNTOOLS',
    '',


    '',
    '*' + trigger + '* para volver al menu principal',

], {
    delay: 1000
}, null, [])



const flowS1 = addKeyword(['1']).addAnswer([
    '📂 Estás en / Financial - Bancos / Módulos /👉 *S1*',
    '*1* - Partes ',
    '*2* - Manual de servicio',
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