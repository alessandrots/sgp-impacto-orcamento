'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');//importante para carregar a pagina inicial

        console.log('ALESSANDRO 17:27');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/tables1.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard1.html'
            })
            .state('formulario', {
                url: '/formulario',
                templateUrl: 'templates/formulario.html'
            })
            .state('tables', {
                url: '/tables1',
                templateUrl: 'templates/tables1.html'
            });
    }
]);