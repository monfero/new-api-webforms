'use strict';

angular.module('newSomEnergiaWebformsApp')
    .controller('OrderCtrl', ['cfg', 'AjaxHandler', 'ValidateHandler', 'uiHandler', '$scope', '$http', '$routeParams', '$translate', '$timeout', '$window', '$log', function (cfg, AjaxHandler, ValidateHandler, uiHandler, $scope, $http, $routeParams, $translate, $timeout, $window, $log) {

        // INIT
        $scope.step0Ready = true;
        $scope.step1Ready = false;
        $scope.step2Ready = false;
        $scope.step3Ready = false;
        $scope.dniIsInvalid = false;
        $scope.cupsIsInvalid = false;
        $scope.cnaeIsInvalid = false;
        $scope.accountIsInvalid = false;
        $scope.showUnknownSociWarning = false;
        $scope.showBeginOrderForm = false;
        $scope.showStep1Form = false;
        $scope.initSubmitReady = false;
        $scope.initFormSubmitted = false;
        $scope.isStep2ButtonReady = false;
        $scope.isStep3ButtonReady = false;
        $scope.isFinalStepButtonReady = false;
        $scope.orderFormSubmitted = false;
        $scope.languages = [];
        $scope.provinces = [];
        $scope.cities = [];
        $scope.language = {};
        $scope.form = {};
        $scope.form.choosepayer = 'titular';
        $scope.completeAccountNumber = '';
        $scope.form.init = {};
        $scope.rates = ['2.0A', '2.0DHA', '2.1A', '2.1DHA', '3.0A'];
        if ($routeParams.locale !== undefined) {
            $translate.use($routeParams.locale);
        }

        // GET LANGUAGES
        var languagesPromise = AjaxHandler.getDataRequest($scope, cfg.API_BASE_URL + 'data/idiomes', '002');
        languagesPromise.then(
            function (response) {
                if (response.state === cfg.STATE_TRUE) {
                    $scope.languages = response.data.idiomes;
                } else {
                    uiHandler.showErrorDialog('GET response state false recived (ref.003-002)');
                }
            },
            function (reason) { $log.error('Failed', reason); }
        );

        // GET STATES
        var statesPromise = AjaxHandler.getDataRequest($scope, cfg.API_BASE_URL + 'data/provincies', '001');
        statesPromise.then(
            function (response) {
                if (response.state === cfg.STATE_TRUE) {
                    $scope.provinces = response.data.provincies;
                    $scope.provinces2 = response.data.provincies;
                    $scope.provinces3 = response.data.provincies;
                } else {
                    uiHandler.showErrorDialog('GET response state false recived (ref.003-001)');
                }
            },
            function (reason) { $log.error('Failed', reason); }
        );

        // DNI VALIDATION
        var checkDniTimer = false;
        $scope.$watch('form.init.dni', function(newValue) {
            if (checkDniTimer) {
                $timeout.cancel(checkDniTimer);
            }
            checkDniTimer = $timeout(function() {
                if (newValue !== undefined) {
                    var dniPromise = AjaxHandler.getSateRequest($scope, cfg.API_BASE_URL + 'check/vat/' + newValue, '005');
                    dniPromise.then(
                        function (response) {
                            $scope.dniIsInvalid = response === cfg.STATE_FALSE;
                            $scope.formListener();
                        },
                        function (reason) { $log.error('Failed', reason); }
                    );
                }
            }, 400);
        });
        var checkDni2Timer = false;
        $scope.$watch('form.dni', function(newValue) {
            if (checkDni2Timer) {
                $timeout.cancel(checkDni2Timer);
            }
            checkDni2Timer = $timeout(function() {
                if (newValue !== undefined) {
                    var dniPromise = AjaxHandler.getSateRequest($scope, cfg.API_BASE_URL + 'check/vat/' + newValue, '005');
                    dniPromise.then(
                        function (response) {
                            $scope.dni2IsInvalid = response === cfg.STATE_FALSE;
                            $scope.formListener();
                        },
                        function (reason) { $log.error('Failed', reason); }
                    );
                }
            }, 400);
        });
        var checkDni3Timer = false;
        $scope.$watch('form.representantdni', function(newValue) {
            if (checkDni3Timer) {
                $timeout.cancel(checkDni3Timer);
            }
            checkDni3Timer = $timeout(function() {
                if (newValue !== undefined) {
                    var dniPromise = AjaxHandler.getSateRequest($scope, cfg.API_BASE_URL + 'check/vat/' + newValue, '006');
                    dniPromise.then(
                        function (response) {
                            $scope.dni3IsInvalid = response === cfg.STATE_FALSE;
                            $scope.formListener();
                        },
                        function (reason) { $log.error('Failed', reason); }
                    );
                }
            }, 400);
        });
        var checkDni4Timer = false;
        $scope.$watch('form.accountdni', function(newValue) {
            if (checkDni4Timer) {
                $timeout.cancel(checkDni4Timer);
            }
            checkDni4Timer = $timeout(function() {
                if (newValue !== undefined) {
                    var dniPromise = AjaxHandler.getSateRequest($scope, cfg.API_BASE_URL + 'check/vat/' + newValue, '008');
                    dniPromise.then(
                        function (response) {
                            $scope.dni4IsInvalid = response === cfg.STATE_FALSE;
                            $scope.formListener();
                        },
                        function (reason) { $log.error('Failed', reason); }
                    );
                }
            }, 400);
        });

        // EMAIL VALIDATIONS
        var checkEmail1Timer = false;
        $scope.$watch('form.email1', function(newValue) {
            if (checkEmail1Timer) {
                $timeout.cancel(checkEmail1Timer);
            }
            checkEmail1Timer = $timeout(function() {
                if (newValue !== undefined) {
                    $scope.emailNoIguals = $scope.form.email2 !== undefined && newValue !== $scope.form.email2;
                    $scope.emailIsInvalid = !ValidateHandler.isEmailValid(newValue);
                    $scope.formListener();
                }
            }, 400);
        });
        var checkEmail2Timer = false;
        $scope.$watch('form.email2', function(newValue) {
            if (checkEmail2Timer) {
                $timeout.cancel(checkEmail2Timer);
            }
            checkEmail2Timer = $timeout(function() {
                if (newValue !== undefined) {
                    $scope.emailNoIguals = ($scope.form.email1 !== undefined || $scope.form.email1 !== '') && newValue !== $scope.form.email1;
                    $scope.formListener();
                }
            }, 400);
        });
        var checkAccountEmail1Timer = false;
        $scope.$watch('form.accountemail1', function(newValue) {
            if (checkAccountEmail1Timer) {
                $timeout.cancel(checkAccountEmail1Timer);
            }
            checkAccountEmail1Timer = $timeout(function() {
                if (newValue !== undefined) {
                    $scope.accountEmailNoIguals = $scope.form.accountemail2 !== undefined && newValue !== $scope.form.accountemail2;
                    $scope.accountEmailIsInvalid = !ValidateHandler.isEmailValid(newValue);
                    $scope.formListener();
                }
            }, 400);
        });
        var checkAccountEmail2Timer = false;
        $scope.$watch('form.accountemail2', function(newValue) {
            if (checkAccountEmail2Timer) {
                $timeout.cancel(checkAccountEmail2Timer);
            }
            checkAccountEmail2Timer = $timeout(function() {
                if (newValue !== undefined) {
                    $scope.accountEmailNoIguals = ($scope.form.accountemail1 !== undefined || $scope.form.accountemail1 !== '') && newValue !== $scope.form.accountemail1;
                    $scope.formListener();
                }
            }, 400);
        });

        // CUPS VALIDATION
        var checkCupsTimer = false;
        $scope.$watch('form.cups', function(newValue) {
            if (checkCupsTimer) {
                $timeout.cancel(checkCupsTimer);
            }
            checkCupsTimer = $timeout(function() {
                if (newValue !== undefined) {
                    var cupsPromise = AjaxHandler.getSateRequest($scope, cfg.API_BASE_URL + 'check/cups/' + newValue, '006');
                    cupsPromise.then(
                        function (response) {
                            $scope.cupsIsInvalid = response === cfg.STATE_FALSE;
                            $scope.formListener($scope.form);
                        },
                        function (reason) { $log.error('Failed', reason); }
                    );
                }
            }, 400);
        });

        // CNAE VALIDATION
        var cnaeCupsTimer = false;
        $scope.$watch('form.cnae', function(newValue) {
            if (cnaeCupsTimer) {
                $timeout.cancel(cnaeCupsTimer);
            }
            cnaeCupsTimer = $timeout(function() {
                if (newValue !== undefined) {
                    var cnaePromise = AjaxHandler.getSateRequest($scope, cfg.API_BASE_URL + 'check/cnae/' + newValue, '007');
                    cnaePromise.then(
                        function (response) {
                            $scope.cnaeIsInvalid = response === cfg.STATE_FALSE;
                            $scope.formListener($scope.form);
                        },
                        function(reason) { $log.error('Failed', reason); }
                    );
                }
            }, 400);
        });

        // ON CHANGE FORMS
        $scope.formListener = function() {
            $scope.initSubmitReady = $scope.form.init.dni !== undefined && $scope.form.init.socinumber !== undefined && $scope.dniIsInvalid === false;
            $scope.isStep2ButtonReady = $scope.initSubmitReady &&
                $scope.form.address !== undefined &&
                $scope.form.province !== undefined &&
                $scope.form.city !== undefined &&
                $scope.form.cups !== undefined &&
                $scope.form.cnae !== undefined &&
                $scope.cupsIsInvalid === false &&
                $scope.cnaeIsInvalid === false &&
                $scope.form.power !== undefined &&
                $scope.form.rate !== undefined;
            $scope.isStep3ButtonReady = $scope.isStep2ButtonReady &&
                ($scope.form.isownerlink === 'yes' ||
                    ($scope.form.isownerlink === 'no' &&
                        $scope.form.language !== undefined &&
                        $scope.form.name !== undefined &&
                        ($scope.form.surname !== undefined && $scope.form.usertype === 'person' || $scope.form.usertype === 'company') &&
                        $scope.form.dni !== undefined &&
                        $scope.form.email1 !== undefined &&
                        $scope.form.email2 !== undefined &&
                        $scope.form.email1 === $scope.form.email2 &&
                        $scope.form.phone1 !== undefined &&
                        $scope.form.address2 !== undefined &&
                        $scope.form.postalcode !== undefined &&
                        $scope.form.province2 !== undefined &&
                        $scope.form.city2 !== undefined &&
                        $scope.form.accept !== undefined &&
                        $scope.form.accept !== false &&
                        $scope.dni2IsInvalid === false &&
                        $scope.emailIsInvalid === false &&
                        $scope.emailNoIguals === false
                        )
                    );
            $scope.isFinalStepButtonReady = //$scope.isStep3ButtonReady &&
                !$scope.accountIsInvalid &&
                $scope.completeAccountNumber.length > 0 &&
                $scope.form.acceptaccountowner &&
                $scope.form.voluntary !== undefined && ($scope.form.choosepayer !== 'altre' ||
                ($scope.form.choosepayer === 'altre' &&
                        $scope.form.payertype !== undefined &&
                        $scope.form.accountname !== undefined &&
                        $scope.form.accountsurname !== undefined &&
                        $scope.form.accountdni !== undefined &&
                        $scope.form.accountemail1 !== undefined &&
                        $scope.form.accountemail2 !== undefined &&
                        $scope.form.accountemail1 === $scope.form.accountemail2 &&
                        $scope.form.accountphone1 !== undefined &&
                        $scope.form.accountaddress !== undefined &&
                        $scope.form.accountpostalcode !== undefined &&
                        $scope.form.province3 !== undefined &&
                        $scope.form.city3 !== undefined &&
                        $scope.form.accept2 !== undefined &&
                        $scope.form.accept2 !== false &&
                        $scope.dni4IsInvalid === false &&
                        $scope.accountEmailIsInvalid === false &&
                        $scope.accountEmailNoIguals === false))
            ;
        };
        $scope.formAccountListener = function () {
            if ($scope.form.accountbank !== undefined && $scope.form.accountoffice !== undefined && $scope.form.accountchecksum !== undefined && $scope.form.accountnumber !== undefined) {
                $scope.completeAccountNumber = $scope.form.accountbank + $scope.form.accountoffice + $scope.form.accountchecksum + $scope.form.accountnumber;
                var accountPromise = AjaxHandler.getSateRequest($scope, cfg.API_BASE_URL + 'check/bank/' + $scope.completeAccountNumber, '017');
                accountPromise.then(
                    function (response) {
                        $scope.accountIsInvalid = response === cfg.STATE_FALSE;
                        $scope.formListener($scope.form);
                    },
                    function(reason) { $log.error('Failed', reason); }
                );
            }
        };

        // ON INIT SUBMIT FORM
        $scope.initSubmit = function(form) {
            // Trigger validation flags
            $scope.initFormSubmitted = true;
            if (form.$invalid) {
                return null;
            }
            // GET SOCI VALUES
            $scope.executeGetSociValues();

            return true;
        };

        // MOVE TO STEP 1 FORM
        $scope.initOrderForm = function() {
            $scope.showStep1Form = true;
            $scope.step0Ready = false;
            $scope.step1Ready = true;
        };

        // MOVE TO STEP 2 FORM
        $scope.moveToStep2Form = function() {
            $scope.step1Ready = false;
            $scope.step2Ready = true;
        };

        // MOVE TO STEP 3 FORM
        $scope.moveToStep3Form = function() {
            $scope.step2Ready = false;
            $scope.step3Ready = true;
        };

        // ON SUBMIT FORM
        $scope.submitOrder = function(form) {
            $log.log('submitOrder', form);
            // Trigger validation flags
            $scope.orderFormSubmitted = true;
            $scope.messages = null;
            if (form.$invalid) {
                return null;
            }
            // Prepare request data
            var postData = {
                id_soci: $scope.form.init.socinumber,
                dni: $scope.form.init.dni,
                tipus_persona: $scope.form.usertype === 'person' ? 0 : 1,
                soci_titular: $scope.form.isownerlink === 'yes' ? 1 : 0,
                representant_nom: $scope.form.usertype === 'company' ? $scope.form.representantname : '',
                representant_dni: $scope.form.usertype === 'company' ? $scope.form.representantdni : '',
                titular_nom: $scope.form.name,
                titular_cognom: $scope.form.surname === undefined ? '' : $scope.form.surname,
                titular_dni: $scope.form.dni,
                titular_email: $scope.form.email1,
                titular_tel: $scope.form.phone1,
                titular_tel2: $scope.form.phone2 === undefined ? '' : $scope.form.phone2,
                titular_adreca: $scope.form.address2,
                titular_municipi: $scope.form.city2.id,
                titular_cp: $scope.form.postalcode,
                titular_provincia: $scope.form.province2.id,
                tarifa: $scope.form.rate,
                cups: $scope.form.cups,
                consum: $scope.form.estimation,
                potencia: $scope.form.power,
                cnae: $scope.form.cnae,
                cups_adreca: $scope.form.address,
                cups_provincia: $scope.form.province.id,
                cups_municipi: $scope.form.city.id,
                referencia: $scope.form.catastre,
                fitxer: $scope.form.file,
                entitat: $scope.form.accountbank,
                sucursal: $scope.form.accountoffice,
                control: $scope.form.accountchecksum,
                ncompte: $scope.form.accountnumber,
                escull_pagador: $scope.form.choosepayer,
                compte_nom: $scope.form.accountname === undefined ? '' : $scope.form.accountname,
                compte_dni: $scope.form.accountdni === undefined ? '' : $scope.form.accountdni,
                compte_adreca: $scope.form.accountaddress === undefined ? '' : $scope.form.accountaddress,
                compte_provincia: $scope.form.province3 === undefined ? '' : $scope.form.province3.id,
                compte_municipi: $scope.form.city3 === undefined ? '' : $scope.form.city3.id,
                compte_email: $scope.form.accountemail1 === undefined ? '' : $scope.form.accountemail1,
                compte_tel: $scope.form.accountphone1 === undefined ? '' : $scope.form.accountphone1,
                compte_tel2: $scope.form.accountphone2 === undefined ? '' : $scope.form.accountphone2,
                compte_cp: $scope.form.accountpostalcode === undefined ? '' : $scope.form.accountpostalcode,
                condicions: $scope.form.accept === 'accept' ? 1 : 0,
                condicions_privacitat: $scope.form.accept2 === 'accept' ? 1 : 0,
                condicions_titular: $scope.form.acceptaccountowner === 'accept' ? 1 : 0,
                donatiu: $scope.form.voluntary === 'yes' ? 1 : 0
            };
            $log.log('request post data', postData);
            // Send POST request data
            var postPromise = AjaxHandler.postRequest($scope, cfg.API_BASE_URL + 'form/contractacio', postData, '066');
            postPromise.then(
                function (response) {
                    if (response.state === cfg.STATE_FALSE) {
                        $scope.messages = $scope.getHumanizedAPIResponse(response.data);
                        $scope.submitReady = false;
                    } else if (response.state === cfg.STATE_TRUE) {
                        $log.log('response data', response.data); // TODO make welldone
                    }
                },
                function(reason) { $log.error('Failed', reason); }
            );

            return true;
        };

        // ON CHANGE SELECTED PROVINCE
        $scope.updateSelectedCity = function() {
            if ($scope.form.province !== undefined) {
                // GET CITIES
                var citiesPromise = AjaxHandler.getDataRequest($scope, cfg.API_BASE_URL + 'data/municipis/' +  $scope.form.province.id, '003');
                citiesPromise.then(
                    function (response) {
                        if (response.state === cfg.STATE_TRUE) {
                            $scope.cities = response.data.municipis;
                        } else {
                            uiHandler.showErrorDialog('GET response state false recived (ref.003-003)');
                        }
                    },
                    function (reason) { $log.error('Failed', reason); }
                );
                $scope.formListener();
            }
        };
        $scope.updateSelectedCity2 = function() {
            if ($scope.form.province2 !== undefined) {
                // GET CITIES
                var citiesPromise = AjaxHandler.getDataRequest($scope, cfg.API_BASE_URL + 'data/municipis/' +  $scope.form.province2.id, '004');
                citiesPromise.then(
                    function (response) {
                        if (response.state === cfg.STATE_TRUE) {
                            $scope.cities2 = response.data.municipis;
                        } else {
                            uiHandler.showErrorDialog('GET response state false recived (ref.003-004)');
                        }
                    },
                    function(reason) { $log.error('Failed', reason); }
                );
                $scope.formListener();
            }
        };
        $scope.updateSelectedCity3 = function() {
            if ($scope.form.province3 !== undefined) {
                // GET CITIES
                var citiesPromise = AjaxHandler.getDataRequest($scope, cfg.API_BASE_URL + 'data/municipis/' +  $scope.form.province3.id, '005');
                citiesPromise.then(
                    function (response) {
                        if (response.state === cfg.STATE_TRUE) {
                            $scope.cities3 = response.data.municipis;
                        } else {
                            uiHandler.showErrorDialog('GET response state false recived (ref.003-005)');
                        }
                    },
                    function(reason) { $log.error('Failed', reason); }
                );
                $scope.formListener();
            }
        };

        $scope.executeGetSociValues = function () {
            var sociPromise = AjaxHandler.getDataRequest($scope, cfg.API_BASE_URL + 'data/soci/' + $scope.form.init.socinumber + '/' + $scope.form.init.dni, '001');
            sociPromise.then(
                function (response) {
                    if (response.state === cfg.STATE_TRUE) {
                        $scope.soci = response.data.soci;
                        $scope.showBeginOrderForm = true;
                        $scope.showUnknownSociWarning = false;
                        $scope.showStep1Form = false; // uncomment on production
                    } else {
                        $scope.showUnknownSociWarning = true;
                        $scope.showStep1Form = false;
                    }
                },
                function (reason) { $log.error('Failed', reason); }
            );
        };

        // GET HUMANIZED API RESPONSE
        $scope.getHumanizedAPIResponse = function(arrayResponse) {
            var result = '';
            if (arrayResponse.required_fields !== undefined) {
                result = result + 'ERROR:'; // TODO $translate it
                for (var i = 0; i < arrayResponse.required_fields.length; i++) {
                    result = result + ' ' + arrayResponse.required_fields[i];
                }
            }
            if (arrayResponse.invalid_fields !== undefined) {
                result = result + ' ERROR:'; // TODO $translate it
                for (var j = 0; j < arrayResponse.invalid_fields.length; j++) {
                    result = result + ' ' + arrayResponse.invalid_fields[j].field + '·' + arrayResponse.invalid_fields[j].error;
                }
            }

            return result;
        };

        // DEBUG (comment on production)
//        $scope.form.init.socinumber = 1706;
//        $scope.form.init.dni = '52608510N';
//        $scope.form.address = 'Avda. Sebastià Joan Arbó, 6';
//        $scope.form.cups = 'ES0031406222973003LE0F';
//        $scope.form.cnae = '0520';
//        $scope.form.power = '5.5';
//        $scope.form.rate = '2.0A';
//        $scope.executeGetSociValues();
//        $scope.showStep1Form = true;
//        $scope.step0Ready = false;
//        $scope.step1Ready = true;
//        $scope.step2Ready = false;
    }]);
