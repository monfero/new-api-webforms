'use strict';

angular.module('newSomEnergiaWebformsApp')
    .config(function($translateProvider) {
        $translateProvider
           .translations('gl', {
                SELECCIONA: 'Selecciona',
                PARTICULAR: 'Persoa física',
                EMPRESA: 'Persoa xurídica',
                OBLIGATORI: 'Obrigatorio',
                IDIOMA: 'Idioma',
                SELECCIONA_IDIOMA: 'Selecciona idioma',
                NOM: 'Nome',
                COGNOMS: 'Apelidos',
                RAO_SOCIAL: 'Razón social',
                PERSONA_REPRESENTANT: 'Persoa representante',
                REPETEIX_EMAIL: 'Repetir email',
                TELEFON: 'Teléfono',
                ADRECA: 'Enderezo',
                CODI_POSTAL: 'Código postal',
                PROVINCIA: 'Provincia',
                POBLACIO: 'Poboación',
                ACCEPTO_POLITICA_PRIVACITAT: 'Acepto a <strong><a target="_blank" href="//www.somenergia.coop/gl/politica-de-privacidade-cookies-y-aviso-legal/">política de privacidade</a></strong> de Som Energia',
                ACCEPTO_CONDICIONS_I_POLITICA_PRIVACITAT: 'Acepto as <strong><a target="_blank" href="//www.somenergia.coop/gl/condicions-xerais-do-contrato-de-subministro-de-enerxia-electrica/">condicións xerais do contrato</a></strong> e a <strong><a target="_blank" href="//www.somenergia.coop/gl/politica-de-privacidade-cookies-y-aviso-legal/">política de privacidade</a></strong>',
                METODE_PAGAMENT: 'Forma de pagamento',
                REBUT_BANCARI: 'Recibo bancario',
                TARGETA_CREDIT: 'Tarxeta de crédito',
                COST: 'custe para a cooperativa',
                INFO_APORTACIO: 'A achega para ser socio/a é de 100€<br/>Os 100€ páganse unha soa vez, non hai cota anual e devólvense se te dás de baixa.',
                FINALITZA_PROCES: 'Continuar o proceso',
                FORMULARI_NO_DISPONIBLE: 'Formulario non dispoñible, desculpen as molestias.',
                INVALID: 'Inválido',
                EMAIL_NO_IGUALS: 'Emails diferentes',
                DIGITS_LENGTH_5: 'Ten que ser un número de 5 díxitos',
                REGISTRE_EXISTENT: 'Este rexistro xa existe',
                REGISTRE_OK: 'Parabéns!',
                REGISTRE_OK_MSG: 'Completaches o rexistro correctamente',
                ACCEDINT_SERVEI_PAGAMENT: 'A acceder ao servizo de pago',
                FORMULARI_CONTRACTACIO: 'Formulario de contratación',
                NUMERO_SOCI: 'Número de socio/a',
                HELP_POPOVER_IDIOMA: 'Este será o idioma co que nos comunicaremos a partir de agora',
                CARREGAR_DADES_SOCI_VINCULAT: 'Cargar datos do/a socio/a vinculado',
                SOCI_VINCULAT: 'Socio vinculado',
                NO_TROBEM_CAP_SOCI_VINCULAT: 'Non se atopou ningún socio/a vinculado a estos datos!',
                NO_ETS_SOCI_FES_TE_AQUI: 'Non es socio/a? Faite socio/a <a href="//www.somenergia.coop/gl/faite-socio-a/" target="_blank">aquí</a>!',
                INICIAR_CONTRACTACIO: 'Iniciar contratación',
                DADES_PUNT_SUBMINISTRAMENT: 'Datos do punto de subministro',
                DADES_PUNT_SUBMINISTRAMENT_HELPER: 'Poñer os datos tal e como están na túa factura actual. Se queres facer cambios de tarifa ou potencia, fai falla que agardes a ter primeiro o contrato con Som Energia para logo solicitalos. Se queres facer un cambio no titular do contrato, poderalo facer no paso  núm.2 deste formulario.',
                NUMERO_DE_CUPS: 'Número de CUPS',
                HELP_POPOVER_CUPS: 'Atoparalo na túa factura actual. É un código de 20 ou 22 díxitos e letras.',
                HELP_POPOVER_CNAE: 'En caso de ser unha vivenda poñer: 9820. En caso de ser unha empresa pon o da túa actividade económica.',
                QUINA_POTENCIA_TENS_CONTRACTADA: 'Que potencia tes contratada?',
                HELP_POPOVER_POWER: 'Anota a potencia ACTUAL do teu contrato',
                QUINA_TARIFA_TENS_CONTRACTADA: 'Que tarifa tes contratada?',
                SELECCIONAR: 'Seleccionar',
                HELP_POPOVER_RATE: 'Atoparalo na túa factura actual. Para máis información consulta o apartado de Axuda da web.',
                INFORMACIO_OPCIONAL: 'Información opcional',
                HELP_POPOVER_OPTIONAL_INFO: 'Los datos de consumo anual podrían ser útiles para emitir nuestras primeras facturas.',
                CONSUM_ANUAL_ESTIMAT: 'Consumo anual estimado (kWh)',
                REFERENCIA_CATASTRAL: 'Referencia catastral do inmoble',
                HELP_POPOVER_REFERENCIA_CATASTRAL: 'Máis información aquí:<br/><a target="_blank" href="https://www1.sedecatastro.gob.es/OVCFrames.aspx?TIPO=CONSULTA">España</a><br/><a target="_blank" href="http://www.bizkaia.net/home2/Temas/DetalleTema.asp?Tem_Codigo=5181&Idioma=CA">Bizkaia</a><br/><a target="_blank" href="http://catastroalava.tracasa.es/navegar/?lang=es">Araba</a><br/><a target="_blank" href="http://www4.gipuzkoa.net/ogasuna/catastro/presenta.asp">Guipuzkoa</a><br/><a target="_blank" href="https://catastro.navarra.es/">Navarra</a>',
                ADJUNTAR_ULTIMA_FACTURA: 'Anexar a última factura eléctrica (PDF ou JPG) - 10Mb máximo',
                BAD_EXTENSION: 'Anexar só PDF ou JPG',
                OVERFLOW_FILE: 'O ficheiro anexo NON pode ocupar máis de 10Mb',
                SEGUENT_PAS: 'Seguinte paso',
                PAS_ANTERIOR: 'Paso anterior',
                DADES_TITULAR_NOU_CONTRACTE: 'Datos da persoa titular do contrato',
                DADES_TITULAR_NOU_CONTRACTE_HELPER: 'Poñer os datos de quen vai a ser a titular do novo contrato con Som Energia. Pode ser a mesma persoa que aparece no teu contrato anterior ou podes aproveitar agora para mudalo',
                VOLS_FER_CANVI_TITULAR: 'Queres facer un cambio de titular?',
                AVIS_CANVI_TITULAR: '<span class="glyphicon glyphicon-warning-sign"></span>&nbsp;Atención: En certos casos a distribuidora pode solicitar a renovación do Boletín de Instalación se este está caducado (20 anos). Máis información <a target="_blank" href="http://gl.support.somenergia.coop/article/556-boletin-electrico">aquí</a>',
                SI: 'Si',
                NO: 'Non',
                HELP_POPOVER_OWNER: 'Comparado co teu contrato actual, no novo contrato queres poñer a outra persoa de titular?',
                EL_TITULAR_ES: 'A persoa titular é',
                EL_TITULAR_ES_SOCI_VINCULAT_AL_CONTRACTE: 'A persoa titular é socia vinculada ao contrato?',
                DADES_PAGAMENT: 'Datos de pago',
                QUI_ES_TITULAR_COMPTE_BANCARI: 'Quen é a persoa titular da conta bancaria?',
                TITULAR_CONTRACTE_ELECTRICITAT: 'Titular do contrato de electricidade',
                SOCI_SOM_ENERGIA: 'Socio/a de Som Energia',
                ALTRE_TITULAR: 'Outra titular',
                NUM_COMPTE: 'Número de conta bancaria',
                IBAN_EXEMPLE: 'exemplo IBAN',
                BANC: 'Banco',
                OFICINA: 'Oficina',
                COMPTE: 'Número de conta',
                CONFIRMO_TITULAR_COMPTE_ACCEPTA_DOMICILIACIO: 'Confirmo que a persoa titular da conta bancaria autoriza a domiciliación das facturas de electricidade',
                SOM_UNA_COOPERATIVA_SENSE_ANIM_DE_LUCRE: 'Somos unha Cooperativa sen ánimo de lucro co obxectivo firme de mudar o modelo enerxético',
                VOLS_PARTICIPAR_AMB_LA_TEVA_ENERGIA: 'Queres participar coa túa enerxía a facelo posible?',
                DONATIU_VOLUNTARI: 'Donativo voluntario',
                ELS_SOCIS_I_SOCIES_QUE_HO_DESITGIN_PODEN_REALITZAR_UN_DONATIU_VOLUNTARI: 'As persoas socias que o desexen poden realizar unha doazón voluntaria de 0,01 €/kWh destinada a apoiar e facilitar a acción social e voluntaria dos máis de 50 Grupos Locais repartidos polo territorio. Para un consumo medio dunha familia (aproximadamente 300kWh/mes) isto representa un incremento de 3€ mensuais. Sempre o que desexes poderás activar ou desactivar esta doazón ao instante desde a Oficina Virtual.',
                CONFIRMAR_CONTRACTACIO: 'Confirmar contratación',
                SENDING: 'A enviar os datos...',
                ENVIANT_DADES: 'Se anexaches unha factura este proceso pode demorar un tempo e este tempo dependerá do peso do ficheiro e da túa conexión a internet. Ánimo e boa enerxía, que xa case o conseguiches! :)',
                REVISIO_CONFIRMACIO_DADES: 'Revisión e confirmación dos datos',
                EL_CONTRACTE_CANVIA_TITULAR: 'O contrato cambia de titular?',
                TARIFA: 'Tarifa',
                POTENCIA_CONTRACTADA: 'Potencia contratada',
                NOM_O_RAO_SOCIAL: 'Nome ou razón social',
                SI_LES_DADES_SON_CORRECTES: 'Se os datos son correctos preme Si para finalizar o proceso de contratación',
                SI_TOT_CORRECTE: 'Si, todo correcto',

// Traducciones pendientes

                HELP_POPOVER_SOCIA: 'Non lembras o teu nº de socio/a? Búscao no apartado "Datos Persoais" da <a target="_blank" href="https://oficinavirtual.somenergia.coop/">Oficina Virtual</a>.',
                HELP_POPOVER_DNI: 'Exemplo DNI: 12345678P (con letra final)',
                SOCIA_TROBADA: 'Socio/a encontrado/a',
                VALIDANT_ID: 'A validar o documento de identificación...',
                IDENTIFICANT_SOCIA: 'A identificar socio/a...',
                DNI_INVALID: 'Código de DNI/NIE/CIF incorrecto.',
                SERVER_ERRROR: 'Houbo un erro ao acceder ao servidor:',
                INICIAR_INVERSIO: 'Iniciar Investimento',
                FORMULARI_D_INVERSIO: 'Formulario de <b>investimento</b>',
                BENVINGUDA: 'Benvido/a, ',
                QUANT_VOLS_INVERTIR: 'Canto queres <b>investir</b>? <br/> <small>En achega voluntaria ao capital social</small>',
                RECORDA: 'Lembra: ',
                AMOUNT_HELPER_MIN: 'Achega mínima 100€',
                AMOUNT_HELPER_MAX: 'Achega máxima  25.000€',
                AMOUNT_HELPER_STEP: 'Cantidade múltiple de 100€',
                DES_DE_QUIN_COMPTE: 'Desde que <b>conta?</b>',
                NUMERO_DE_COMPTE_FORMAT_IBAN: 'Número de conta en formato IBAN. Exemplo: ES11 2222 3333 4444 5555 6666',
                CONFIRMO_CONDICIONS_INVERSIO: 'Confirmo que son titular da conta corrente, autorizo a domiciliación e acepto as <a target="_blank" href="https://somenergia.coop/es/condiciones-generales-inversion">condicións xerais do investimento</a> e a <a target="_blank" href="https://www.somenergia.coop/es/politica-de-privacidad-cookies-y-aviso-legal/">política de privacidade</a>',
                CONFIRMAR_INVERSIO: 'Confirmar investimento',
                COMPROVANT: 'A comprobar...',
                CORRECTE: 'Correcto.',
                INVEST_OK_REDIRECT_URL: 'https://www.somenergia.coop/es/inversion-realizada',
                CONTRACT_OK_REDIRECT_URL: 'https://www.somenergia.coop/es/contratacion-realizada/',

//                HI_HA_LLUM_AL_PUNT_DE_SUBMINISTRAMENT: '¿Hay actualmente luz en el punto de suministro?',
            })
        ;
    });

