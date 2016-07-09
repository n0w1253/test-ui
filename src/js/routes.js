'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider', '$authProvider', 'toastrConfig',
    function ($stateProvider, $urlRouterProvider, $authProvider, toastrConfig) {


        // For unmatched routes
        $urlRouterProvider.otherwise('/master');

        // Application routes
        $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                            //  resolve: {
                            //            skipIfLoggedIn: skipIfLoggedIn
                            //          }
                })
                .state('logout', {
                    url: '/logout',
                    template: null,
                    controller: 'LogoutCtrl'
                })
                .state('master', {
                    url: '/master',
                    templateUrl: 'templates/master.html',
                    controller: 'MasterCtrl',
                    data: {requiredLogin: true}
                    //    resolve: {
                    //        loginRequired: loginRequired
                    //    }
                })
                .state('master.tasks', {
                    url: '/tasks',
                    templateUrl: 'templates/tasks.html',
                    controller: 'TasksCtrl'
                })
                .state('master.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'templates/dashboard.html'
                })
                .state('master.tables', {
                    url: '/tables',
                    templateUrl: 'templates/tables.html'
                });

        $authProvider.github({
            clientId: '8adc1933c5912519d28c'
        });



//    replace with gitlab???
        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            clientId: 'Foursquare Client ID',
            redirectUri: window.location.origin,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
        });

        function skipIfLoggedIn($q, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }

        function loginRequired($q, $location, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $location.path('/login');
            }
            return deferred.promise;
        }


        angular.extend(toastrConfig, {
            closeButton: true,
            extendedTimeOut: 500,
            timeOut: 1000
        });

    }

]);


angular.module('RDash').run(['$rootScope', '$state', '$auth', function ($rootScope, $state, $auth) {
        $rootScope.$on('$stateChangeStart',
                function (event, toState) {
                    console.log("toState" + JSON.stringify(toState));
                    var requiredLogin = false;
                    // check if this state need login
                    if (toState.data && toState.data.requiredLogin)
                        requiredLogin = true;

                    console.log("toState.data" + JSON.stringify(toState.data));
                    console.log("$auth.isAuthenticated()" + $auth.isAuthenticated());
                    // if yes and if this user is not logged in, redirect him to login page
                    if (requiredLogin && !$auth.isAuthenticated()) {
                        event.preventDefault();
                        $state.go('login');
                    }
                });
    }]);
 