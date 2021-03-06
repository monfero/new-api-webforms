'use strict';

angular.module('newSomEnergiaWebformsApp')
.directive('memberChooser', function () {
    return {
        restrict: 'E',
        scope: {
            buttonText: '@',
            soci: '=',
            formvalues: '=',
            model: '=',
            onproceed: '&',
        },
        templateUrl: 'views/memberchooser.html',
        controller: 'memberChooserCtrl',
        link: function(scope, element, attrs, memberChooserCtrl) {
            memberChooserCtrl.init(element, attrs);
        },
    };
})
.controller('memberChooserCtrl', function (
        cfg,
        $scope,
        $timeout,
        $log,
        AjaxHandler,
        ValidateHandler
        ) {
    var self = this;
    self.init = function(element, attrs) {
        $scope.soci = {};
        $scope.formvalues = {};
        $scope.model = $scope;
        $scope.mostraNomSociTrobat = attrs.showMemberName !== undefined;
        $scope.developing = false;
        $scope.dniIsInvalid = true;

        $scope._states = {
            IDLE: 1,
            VALIDATINGID: 2,
            VALIDATINGMEMBER: 3,
            INVALIDID: 4,
            INVALIDMEMBER: 5,
            READY: 6,
            APIERROR: 7
        };
        $scope._state = $scope._states.IDLE;

        $scope.isIdle = function () {
            return $scope._state === $scope._states.IDLE;
        };
        $scope.isValidatingId = function () {
            return $scope._state === $scope._states.VALIDATINGID;
        };
        $scope.isValidatingMember = function () {
            return $scope._state === $scope._states.VALIDATINGMEMBER;
        };
        $scope.isInvalidId = function () {
            return $scope._state === $scope._states.INVALIDID;
        };
        $scope.isInvalidMember = function () {
            return $scope._state === $scope._states.INVALIDMEMBER;
        };
        $scope.isReady = function () {
            return $scope._state === $scope._states.READY;
        };
        $scope.isApiError = function () {
            return $scope._state === $scope._states.APIERROR;
        };
        $scope.currentInitState = function() {
            return Object.keys($scope._states)
                .filter(function(key) {
                    return $scope._states[key] === $scope._state;
                })[0];
        };

        var timeoutCheckSoci = false;
        $scope.$watch('formvalues.socinumber', function(newValue) {
            if ($scope.isIdle()) {return;}
            if ($scope.isValidatingId()) {return;}
            if ($scope.isInvalidId()) {return;}

            if (newValue === undefined) {
                $scope._state = $scope._states.INVALIDMEMBER;
                return;
            }

            $scope._state = $scope._states.VALIDATINGMEMBER;

            if (timeoutCheckSoci) {
                $timeout.cancel(timeoutCheckSoci);
            }
            timeoutCheckSoci = $timeout(function() {
                // TODO: Remove redundant conditions
                if (newValue !== undefined && !$scope.dniIsInvalid && $scope.formvalues.dni !== undefined) {
                    $scope.executeGetSociValues();
                }
            }, cfg.DEFAULT_MILLISECONDS_DELAY);
        });

        var timeoutCheckDni = false;
        $scope.$watch('formvalues.dni', function(newValue) {
            if (newValue === undefined) {
                $scope._state = $scope._states.IDLE;
                return;
            }
            $scope._state = $scope._states.VALIDATINGID;
            if (timeoutCheckDni) {
                $timeout.cancel(timeoutCheckDni);
            }
            timeoutCheckDni = $timeout(function() {
                var dniPromise = AjaxHandler.getStateRequest($scope, cfg.API_BASE_URL + 'check/vat/' + newValue, '005');
                dniPromise.dni = newValue;
                dniPromise.then(
                    function (response) {
                        if (dniPromise.dni !== $scope.formvalues.dni) {
                            //console.log('Ignorant validació del DNI '+dniPromise.dni+' perque ja val '+$scope.formvalues.dni);
                            return;
                        }
                        $scope.dniIsInvalid  = response === cfg.STATE_FALSE;
                        if ($scope.dniIsInvalid) {
                            $scope._state = $scope._states.INVALIDID;
                            return;
                        }
                        if ($scope.formvalues.socinumber === undefined) {
                            // TODO: Review this transition
                            $scope._state = $scope._states.INVALIDMEMBER;
                            return;
                        }
                        $scope._state = $scope._states.VALIDATINGMEMBER;
                        $scope.executeGetSociValues();
                    },
                    // TODO: Server error state and display reason
                    function (reason) {
                        $log.error('Check DNI failed', reason);
                        $scope._state = $scope._states.APIERROR;
                    }
                );
            }, cfg.DEFAULT_MILLISECONDS_DELAY);
        });
        // Backward with order.js  
        $scope.formListener = function() {
        };

        // PARTNER NUMBER VALIDATION
        ValidateHandler.validateInteger($scope, 'formvalues.socinumber');

        // GET PARTNER DATA
        $scope.executeGetSociValues = function() {
            var sociPromise = AjaxHandler.getDataRequest($scope, cfg.API_BASE_URL + 'data/soci/' + $scope.formvalues.socinumber + '/' + $scope.formvalues.dni, '001');
            sociPromise.soci = $scope.formvalues.socinumber;
            sociPromise.dni = $scope.formvalues.dni;
            sociPromise.then(
                function(response) {
                    if ($scope.formvalues.socinumber !== sociPromise.soci) {return;}
                    if ($scope.formvalues.dni !== sociPromise.dni) {return;}

                    if (response.state === cfg.STATE_TRUE) {
                        $log.log('Get partner info response received', response);
                        $scope.soci = response.data.soci;
                        $scope._state = $scope._states.READY;
                    } else {
                        $scope._state = $scope._states.INVALIDMEMBER;
                    }
                },
                function(reason) {
                    $scope._state = $scope._states.APIERROR;
                    $scope.apiError = reason;
                    $log.error('Get partner info failed', reason);
                }
            );
        };
        $scope.proceed = function() {
            $scope.onproceed();
        };
    };
});



