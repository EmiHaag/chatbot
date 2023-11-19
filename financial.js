const {
    addKeyword
} = require('@bot-whatsapp/bot')
const powerappLinks = require("./modulos/powerappslinks")

main_modules = require('./main_modules') 

const trigger = "menu"

const flow1FinancialOp0 = addKeyword(['0', 'PIM']).addAnswer([
    '📂 Estás en / Financial - Bancos / 👉 *PIM* - Parts Identification Manual\n ',
    '*v* - *volver*\n',

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

    
    '*' + trigger + '* para volver al menu principal',

],{capture:true},async(ctx, {gotoFlow}) => {       
    if (ctx.body == "v"){
        await gotoFlow(flow1Financial)
    }
})

const reconocerSO = addKeyword(["2"]).addAnswer(
    [
        '📂 Estás en / Financial - Bancos / *Quiero reconocer *que sistema operativo tiene* este equipo*',
        '',       
        "Para reconocer el sistema operativo seguí el link que te llevará a powerapps 👉 'THE ABC OF TOOLS selecciona 👉 *VERSIONES DE SOFT*'\n",
        "*link* ->  THE ABC OF TOOLS (ATLEOS) ",
        "https://apps.powerapps.com/play/e/default-6539da08-b835-422b-bc32-76ca20bec464/a/e45d1b56-8682-4e28-8689-68e08f7db541?tenantId=6539da08-b835-422b-bc32-76ca20bec464&hint=991718c9-6ece-4991-aa84-88fdd7a8b198&sourcetime=1697929436504&source=portal\n",
        '*v* - *volver*',
    ],{capture:true},async(ctx, {gotoFlow}) => {       
        if (ctx.body == "v"){
            await gotoFlow(flow1Financial)
        }
        
    }, [])
const cambioDenom = addKeyword(["4"]).addAnswer(
        [
            '📂 Estás en / Financial - Bancos / *Cambio de denominaciones*\n',
            '',       
            "Cambio de denominación en ATM con Dispenser *S1*",
            "https://m.ncratleos.com/infocenter/index?page=content&id=PR20422\n",
            "Cambio de denominación en ATM con *S2*",
            "https://m.ncratleos.com/infocenter/index?page=content&id=PR20502\n",
            "Cambio de denominación en ATM´s con *GBRU*",
            "https://ncratleos.sharepoint.com/:b:/r/sites/clafse/Shared%20Documents/Espa%C3%B1ol%20-%20Financial%20-%20Boletines%20T%C3%A9cnicos/CLA-FIN-FSE-TD372-rev00%20Cambio%20de%20denominaci%C3%B3n%20en%20ATM%C2%B4s%20con%20GBRU.pdf\n",
            
            '*v* - *volver*',
        ],{capture:true},async(ctx, {gotoFlow}) => {       
            if (ctx.body == "v"){
                await gotoFlow(flow1Financial)
            }
            
        }, [])
 
const templates = addKeyword(["5"]).addAnswer(
            [
                '📂 Estás en / Financial - Bancos / *Templates*\n',
                '(*Prisma*) Siempre asegurate de que el ATM se encuentre en modo "UPDATE" o "DISABLED"\n',
                'Para esto podés correr en línea de comandos (win + r => cmd) el comando "sadmin status"\n',
                'En caso de que figure "ENABLED" deberás contactar soporte a GTS para que pida a la red Prisma que lo pasen a Disabled o UPDATE\n',     

                "*BNA2 y BNA3* - Instalación de *template* PR20196",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20196\n",

                "Carga y configuración de Template Técnico en BNA3 y *GBRU*",
                "https://ncratleos.sharepoint.com/:b:/r/sites/clafse/Shared%20Documents/Espa%C3%B1ol%20-%20Financial%20-%20Boletines%20T%C3%A9cnicos/CLA-FIN-FSE-TD329-rev01%20Carga%20y%20configuraci%C3%B3n%20de%20Template%20T%C3%A9cnico.pdf\n",
                
                "Cómo chequeo *cual template tiene actualmente* asignado el ATM ? \n",
                "En SysApp ir a 👇",
                "8 SelfServ Configuration", "3 Select device configuration","Hardware and information recovery", "Display firmware version.\n",
                '*v* - *volver*',
            ],{capture:true},async(ctx, {gotoFlow}) => {       
                if (ctx.body == "v"){
                    await gotoFlow(flow1Financial)
                }
                
            }, [])

const otros = addKeyword(["6"]).addAnswer(
                [
                    '📂 Estás en / Financial - Bancos / *Otros*\n',
                    '\n',
                    'Deshabilitar secure boot:',
                    'A veces al intentar utilizar el multi boot nos muestra que la bios ha bloqueado el dispositivo',
                    'Seguí los pasos en este instructivo  👇',
                    '\n',
                    'https://ncratleos-my.sharepoint.com/:b:/r/personal/eh185079_ncratleos_com/Documents/CE-BOT/tips/Deshabilitar%20secure%20boot%20(2).pdf\n',

                    'No aparece opción para bootear en legacy en mother Pocono ?\n',
                    '👉 https://ncratleos-my.sharepoint.com/:i:/p/eh185079/Ec9TQVWYYcBIn3hLrf0uiIEBxNC7GJKIYsJuswVtEd7T7Q?e=t1GJbX',

                    '\n',
                    '',
                  
                    '*v* - *volver*',
                ],{capture:true},async(ctx, {gotoFlow}) => {       
                    if (ctx.body == "v"){
                        await gotoFlow(flow1Financial)
                    }
                    
                }, [])
const software = addKeyword(["3"]).addAnswer(
            [
                '📂 Estás en / Financial - Bancos / *Instalaciones-remasterizaciones - software*\n',
                '',       

                " 👉  HERRAMIENTAS\n",
                'MULTIBOOT v2 ONLINE  - PR22320',
                'https://m.ncratleos.com/infocenter/index?page=content&id=PR22320\n',
               
                'USEFUL SOFTWARE TOOLS/APPS PR21218',
                'https://m.ncratleos.com/infocenter/index?page=content&id=PR21218\n\n',

                " 👉  PRISMA - LINK\n",
                "*RED PRISMA*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20474\n",
                "*RED LINK*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20978\n\n",

                " 👉  REDES PROPIAS \n",
                "*BANCO BBVA*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=pr20518\n",
                "*BANCO COMAFI*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20520\n",
                "*BANCO GALICIA*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20523\n",
                "*BANCO HIPOTECARIO*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20692\n",
                "*BANCO ICBC*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20693\n",
                "*BANCO INDUSTRIAL (Bind)*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=pr20989\n",
                "*BANCO ITAU*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=pr20991\n",
                "*BANCO MACRO*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR28314\n",
                "*BANCO PATAGONIA*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR23106\n",
                "*BANCO PROVINCIA DE BUENOS AIRES (BAPRO)*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20495\n",
                "*BANCO SANTANDER RIO*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR23108\n",
                "*BANCO SUPERVIELLE*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR23107\n",
                "*FRAVEGA*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR23102\n",
                "*NARANJA X*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR23105\n",
                "*GRUPO PETERSEN (Repositorio)*",
                "https://ncratleos.sharepoint.com/:f:/r/sites/clafse/cs-repository/Applications/WCS/Grupo%20Petersen?csf=1&web=1&e=inEczQ\n",
                "*PREVENCION ART (Repositorio)*",
                "https://ncratleos.sharepoint.com/:f:/r/sites/clafse/cs-repository/Applications/WCS/Prevencion%20ART?csf=1&web=1&e=VgSIWc\n",
                "*RED LINK*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20978\n",
                "*RED LINK*",
                "https://m.ncratleos.com/infocenter/index?page=content&id=PR20978\n",
                  
                '*v* - *volver*',
            ],{capture:true},async(ctx, {gotoFlow}) => {       
                if (ctx.body == "v"){
                    await gotoFlow(flow1Financial)
                }
                
            }, [])
const flow1Financial = addKeyword(['1', 'financial', 'bancos']).addAnswer(
    [
        '📂 Estás en / *Financial - Bancos *',
        '',
        '*0* - Ver *PIM* - Parts Identification Manual de un modelo de ATM (6622, 6623, 6632, 6626, 6634, 6682, 6683)',
        '*1* - *MODULOS* Busco información sobre un *módulo*',
        '*2* - Quiero reconocer *que sistema operativo tiene* este equipo',
        '*3* - Instalaciones-remasterizaciones - *software*',
        '*4* - Cambio *denominaciones*',
        '*5* - *Templates*',
        '*6* - *Otros* (Deshabilitar *secure boot*, etc..)',
        '*7* - *PowerApps links* (Atleos)',
        '*v* - *volver*',
        '*' + trigger + '* para volver al menu principal',
    ],{capture:true},async(ctx, {gotoFlow}) => {       
        if (ctx.body == "v"){
            await gotoFlow(require("./app"))
        }else if (ctx.body == "1"){
     
           const main_modules = require("./main_modules")
           await gotoFlow(main_modules.flow1FinancialOp1) 
        }
    }, [flow1FinancialOp0, reconocerSO, powerappLinks , cambioDenom,software, templates]
)






module.exports = {flow1FinancialOp0, flow1Financial};