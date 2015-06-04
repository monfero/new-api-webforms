'use strict';

angular.module('newSomEnergiaWebformsApp')
    .config(function($translateProvider) {
        $translateProvider
            .translations('ca', {
                SELECCIONA: 'Selecciona',
                PARTICULAR: 'Persona física',
                EMPRESA: 'Persona jurídica',
                OBLIGATORI: 'Obligatori',
                IDIOMA: 'Idioma',
                SELECCIONA_IDIOMA: 'Selecciona idioma',
                NOM: 'Nom',
                COGNOMS: 'Cognoms',
                RAO_SOCIAL: 'Raó social',
                PERSONA_REPRESENTANT: 'Persona representant',
                REPETEIX_EMAIL: 'Repeteix email',
                TELEFON: 'Telèfon',
                ADRECA: 'Adreça',
                CODI_POSTAL: 'Codi postal',
                PROVINCIA: 'Província',
                POBLACIO: 'Municipi',
                ACCEPTO_POLITICA_PRIVACITAT: 'Accepto la <strong><a target="_blank" href="//www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/">política de privacitat</a></strong> de Som Energia',
                ACCEPTO_CONDICIONS_I_POLITICA_PRIVACITAT: 'Accepto les <strong><a target="_blank" href="//www.somenergia.coop/ca/condicions-del-contracte-de-som-energia/">condicions generals del contracte</a></strong> i la <strong><a target="_blank" href="//www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/">política de privacidad</a></strong>',
                METODE_PAGAMENT: 'Mètode de pagament',
                REBUT_BANCARI: 'Rebut bancari',
                TARGETA_CREDIT: 'Targeta de crèdit',
                COST: 'cost per a la cooperativa',
                INFO_APORTACIO: 'L\'aportació per a esdevenir soci/a és de 100€<br/>Els 100€ es paguen una sola vegada, no hi ha quota anual i són retornables si et dones de baixa.',
                FINALITZA_PROCES: 'Continuar el procés',
                FORMULARI_NO_DISPONIBLE: 'Formulari no disponible, disculpeu les molèsties.',
                INVALID: 'Invàlid',
                EMAIL_NO_IGUALS: 'Emails diferents',
                DIGITS_LENGTH_5: 'Ha de ser un número amb 5 dígits',
                REGISTRE_EXISTENT: 'Aquest registre ja existeix',
                REGISTRE_OK: 'Felicitats!',
                REGISTRE_OK_MSG: 'Has completat el registre correctament',
                ACCEDINT_SERVEI_PAGAMENT: 'Accedint al servei de pagament',
                FORMULARI_CONTRACTACIO: 'Formulari de contractació',
                NUMERO_SOCI: 'Número de soci/a',
                HELP_POPOVER_IDIOMA: 'Aquest serà l\'idioma amb el que ens comunicarem amb tu a partir d\'ara',
                CARREGAR_DADES_SOCI_VINCULAT: 'Carregar les dades del soci/a vinculat',
                SOCI_VINCULAT: 'Soci vinculat',
                NO_TROBEM_CAP_SOCI_VINCULAT: 'No trobem cap soci/a vinculat a aquestes dades!',
                NO_ETS_SOCI_FES_TE_AQUI: 'No ets soci/a? Fes-te soci/a <a href="//www.somenergia.coop/ca/fes-te-soci-a/" target="_blank">aquí</a>!',
                INICIAR_CONTRACTACIO: 'Iniciar contractació',
                DADES_PUNT_SUBMINISTRAMENT: 'Dades del punt de subministrament',
                DADES_PUNT_SUBMINISTRAMENT_HELPER: 'Poseu-hi les dades tal i com estan en la factura actual. Si voleu fer canvis de tarifa o potència, cal que us espereu a tenir el contracte amb Som Energia per sol·licitar-nos-els. Si voleu fer un canvi de titular, el podreu fer en el pas núm. 2 d\'aquest formulari.',
                NUMERO_DE_CUPS: 'Número de CUPS',
                HELP_POPOVER_CUPS: 'Ho trobareu a la vostra factura actual. És un codi de 20 o 22 xifres i lletres. Exemple: ES0031031321313W0F',
                HELP_POPOVER_CNAE: 'En cas d\'habitatges: 9820. En cas d\'empreses el de la vostra activitat econòmica',
                QUINA_POTENCIA_TENS_CONTRACTADA: 'Quina potència tens contractada?',
                HELP_POPOVER_POWER: 'Anota la potència ACTUAL del teu contracte',
                QUINA_TARIFA_TENS_CONTRACTADA: 'Quina tarifa tens contractada?',
                SELECCIONAR: 'Seleccionar',
                HELP_POPOVER_RATE: 'Ho trobareu a la vostra factura actual. Podeu trobar més informació a l\'apartat FAQ',
                INFORMACIO_OPCIONAL: 'Informació opcional',
                HELP_POPOVER_OPTIONAL_INFO: 'La dada de consum anual podria ser útil per a emetre les nostres primeres factures.',
                CONSUM_ANUAL_ESTIMAT: 'Consum anual estimat (kWh)',
                REFERENCIA_CATASTRAL: 'Referència cadastral de l\'immoble',
                HELP_POPOVER_REFERENCIA_CATASTRAL: 'Més informació aquí:<br/><a target="_blank" href="https://www1.sedecatastro.gob.es/OVCFrames.aspx?TIPO=CONSULTA">Espanya</a><br/><a target="_blank" href="http://www.bizkaia.net/home2/Temas/DetalleTema.asp?Tem_Codigo=5181&Idioma=CA">Bizkaia</a><br/><a target="_blank" href="http://catastroalava.tracasa.es/navegar/?lang=es">Araba</a><br/><a target="_blank" href="http://www4.gipuzkoa.net/ogasuna/catastro/presenta.asp">Guipuzkoa</a><br/><a target="_blank" href="https://catastro.navarra.es/">Navarra</a>',
                ADJUNTAR_ULTIMA_FACTURA: 'Adjuntar última factura elèctrica (PDF o JPG) - 10Mb màxim',
                BAD_EXTENSION: 'Adjuntar només arxius PDF o JPG',
                OVERFLOW_FILE: 'L\'arxiu adjunt NO pot ocupar més de 10Mb',
                SEGUENT_PAS: 'Següent pas',
                PAS_ANTERIOR: 'Pas anterior',
                DADES_TITULAR_NOU_CONTRACTE: 'Dades del/la titular del nou contracte amb Som Energia',
                DADES_TITULAR_NOU_CONTRACTE_HELPER: 'Poseu les dades de qui serà el titular del nou contracte amb Som Energia. Pot ser el mateix que apareix en el vostre contracte anterior o podeu aprofitar per canviar-ho.',
                VOLS_FER_CANVI_TITULAR: 'Vols fer un canvi de titular?',
                AVIS_CANVI_TITULAR: '<span class="glyphicon glyphicon-warning-sign"></span>&nbsp;Atenció: En alguns casos, la distribuïdora pot demanar la renovació del Butlletí de la Instal·lació, si aquest està caducat (20 anys). Més informació <a target="_blank" href="http://ca.support.somenergia.coop/article/500-que-es-el-butlleti-electric">aquí</a>',
                SI: 'Sí',
                NO: 'No',
                HELP_POPOVER_OWNER: 'Comparat amb el vostre contracte actual, al nou contracte voleu posar a una altra persona de titular?',
                EL_TITULAR_ES: 'El titular és',
                EL_TITULAR_ES_SOCI_VINCULAT_AL_CONTRACTE: 'El titular és el soci vinculat a aquest contracte?',
                DADES_PAGAMENT: 'Dades de pagament',
                QUI_ES_TITULAR_COMPTE_BANCARI: 'Qui és el titular del compte bancari?',
                TITULAR_CONTRACTE_ELECTRICITAT: 'Titular del contracte d\'electricitat',
                SOCI_SOM_ENERGIA: 'Soci/a de Som Energia',
                ALTRE_TITULAR: 'Un altre titular',
                NUM_COMPTE: 'Número de compte bancari',
                IBAN_EXEMPLE: 'exemple IBAN',
                BANC: 'Banc',
                OFICINA: 'Oficina',
                COMPTE: 'Número compte',
                CONFIRMO_TITULAR_COMPTE_ACCEPTA_DOMICILIACIO: 'Confirmo que el titular del compte bancari autoritza la domiciliació de les factures d\'electricitat',
                SOM_UNA_COOPERATIVA_SENSE_ANIM_DE_LUCRE: 'Som una Cooperativa sense ànim de lucre amb l\'objectiu ferm de canviar el model energètic',
                VOLS_PARTICIPAR_AMB_LA_TEVA_ENERGIA: 'Vols participar amb la teva energia a fer-ho possible?',
                DONATIU_VOLUNTARI: 'Donatiu voluntari de 0,01€/kWh',
                ELS_SOCIS_I_SOCIES_QUE_HO_DESITGIN_PODEN_REALITZAR_UN_DONATIU_VOLUNTARI: 'Els socis i sòcies que ho desitgin poden realitzar un donatiu voluntari de 0,01€/kWh destinat a recolzar i facilitar l\'acció social i voluntària dels més de 50 Grups Locals repartits pel territori. Per un consum mitjà d\'una família (aproximadament 300kWh/mes) això representa un increment de 3€ mensuals. Sempre que ho vulguis podràs activar o desactivar aquest donatiu a l\'instant des de l\'Oficinal Virtual.',
                CONFIRMAR_CONTRACTACIO: 'Confirmar contractació',
                SENDING: 'Enviant dades...',
                ENVIANT_DADES: 'Si has adjuntat una factura aquest procès pot tardar una estona i aquesta estona dependrà del pes de l\'arxiu i de la teva connexió a internet. Ànims i bona energia, que ja gairebé ho has aconseguit! :)',
                REVISIO_CONFIRMACIO_DADES: 'Revisió i confirmació de les dades',
                EL_CONTRACTE_CANVIA_TITULAR: 'El contracte canvia de titular?',
                TARIFA: 'Tarifa',
                POTENCIA_CONTRACTADA: 'Potència contractada',
                NOM_O_RAO_SOCIAL: 'Nom o raó social',
                SI_LES_DADES_SON_CORRECTES: 'Si les dades són correctes premi Sí per finalitzar el procés de contractació',
                SI_TOT_CORRECTE: 'Sí, tot correcte',

                HELP_POPOVER_SOCIA: 'No recordes el teu nº? el pots veure dins l\'apartat "Dades Personals" de l\'<a target="_blank" href="https://oficinavirtual.somenergia.coop/">Oficina Virtual</a>.',
                HELP_POPOVER_DNI: 'Exemple DNI: 12345678P (amb lletra final)',
                SOCIA_TROBADA: 'Soci/sòcia trobat/da!',
                VALIDANT_ID: 'Validant document d\'identificació...',
                IDENTIFICANT_SOCIA: 'Identificant soci/sòcia...',
                DNI_INVALID: 'Codi del DNI/NIE/CIF invàlid.',
                SERVER_ERROR: 'Error accedint al servidor:',
                INICIAR_INVERSIO: 'Iniciar Inversió',
                FORMULARI_D_INVERSIO: 'Formulari d\'<b>inversió</b>',
                BENVINGUDA: 'Benvingut/da, ',
                QUANT_VOLS_INVERTIR: 'Quant vols <b>invertir</b>?<br/><small>En aportació voluntària al capital social</small>',
                RECORDA: 'Recorda: ',
                AMOUNT_HELPER_MIN: 'Mínima aportació 100€',
                AMOUNT_HELPER_MAX: 'Màxima aportació 25.000€',
                AMOUNT_HELPER_STEP: 'Quantitat múltiple de 100€',
                DES_DE_QUIN_COMPTE: 'Des de quin <b>compte</b>?',
                NUMERO_DE_COMPTE_FORMAT_IBAN: 'Número de compte en format IBAN. Exemple: ES11 2222 3333 4444 5555 6666',
                CONFIRMO_CONDICIONS_INVERSIO: 'Confirmo que sóc el titular del compte corrent, autoritzo la domiciliació i accepto les <a target="_blank" href="https://somenergia.coop/ca/condicions-generals-inversio">condicions generals de la inversió</a> i la <a target="_blank" href="https://www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/">política de privacitat</a>',
                CONFIRMAR_INVERSIO: 'Confirmar inversió',
                COMPROVANT: 'Comprovant...',
                CORRECTE: 'Correcte.',
                INVEST_OK_REDIRECT_URL: 'https://www.somenergia.coop/ca/inversio-realitzada',
                CONTRACT_OK_REDIRECT_URL: 'https://www.somenergia.coop/es/contratacion-realizada/',

                // En desarrollo (sujetas a cambios)
                CODI_IBAN_DEL_COMPTE: 'Codi IBAN del compte',
                REQUERIT: 'Requerit.',
                HI_HA_LLUM_AL_PUNT_DE_SUBMINISTRAMENT: 'Hi ha llum al punt de subministrament actualment?',
                AVIS_ALTA_DE_SERVEI: 'El punt de suministre no té servei i vols fer l\'alta directament amb SomEnergia',
                AVIS_CANVI_COMERCIALITZADORA: 'El punt de subministre ja té servei amb altre comercialitzadora i vols passar-te a SomEnergia',

                ET_DONARA_DRET_A_APROX_KWHANY: 'Aproximadament, et donarà dret a <b>{{kwhany}} kWh l\'any</b> a preu de cost.',
                SUPOSA_UN_PERCENT_CONSUM_ANUAL_ESTIMAT: 'Suposa un {{percent}}% de la teva estimació de consum anual als contractes dels que ets titular o pagador. La nostra recomanació és un màxim del 78% perqué no et sobrin KWh si els preus de cost encara baixen més.',
                QUANTES_ACCIONS_ENERGETIQUES_VOLS: 'Quàntes accions energètiques vols?',
                CONTRACTE: 'Contracte',
                TOTAL_CONSUM_ANUAL_ESTIMAT: 'Consum anual estimat total',
                CONSUM_APROXIMAT_COBERT: 'Consum cobert (aproximat)',
                CONSUM_EN_KWH: ' Consum anual',
            })
        ;
    });

