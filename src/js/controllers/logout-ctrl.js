angular.module('RDash')
        .controller('LogoutCtrl', ['$state', '$auth', 'toastr', '$window', function ($state, $auth, toastr, $window) {
                if (!$auth.isAuthenticated()) {
                    $state.go('login');
                } else {
                    $auth.logout()
                            .then(function () {
                                console.log("localstorage" + JSON.stringify($window.localStorage));
                                toastr.info('You have been logged out');
                                $state.go('login');
                            });
                }
            }]);


