'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {


        // For unmatched routes
        $urlRouterProvider.otherwise('/login');

        // Application routes
        $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html'
                 //   controller: 'LoginCtrl'
                })  
               .state('master', {
                    url: '/master',
                    templateUrl: 'templates/master.html',
                    controller: 'MasterCtrl'
                })
                .state('master.session', {
                    url: '/session',
                    templateUrl: 'templates/session.html',
                    controller: 'SessionCtrl'
                })
                .state('master.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'templates/dashboard.html'
                })
                .state('master.tables', {
                    url: '/tables',
                    templateUrl: 'templates/tables.html'
                });
    }
]);