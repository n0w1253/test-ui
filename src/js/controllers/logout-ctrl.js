angular.module('RDash')
        .controller('LogoutCtrl', ['$state', '$auth', 'toastr', '$rootScope',function ($state, $auth, toastr,$rootScope) {
                if (!$auth.isAuthenticated()) {
                    $state.go('login');
                } else {
                    //$auth.unlink('github')
                    //        .then(function () {
                                $auth.logout().then(function () {
                                    //  console.log("localstorage" + JSON.stringify($window.localStorage));
                                    toastr.info('Bye, '+$rootScope.displayName+'!');
                                    $rootScope.displayName = undefined;
                                    $state.go('login');
                                });
                    //        });
                }
            }]);


