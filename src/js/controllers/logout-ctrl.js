angular.module('RDash')
        .controller('LogoutCtrl', ['$state', '$auth', 'toastr', '$localStorage',function ($state, $auth, toastr,$localStorage) {
                if (!$auth.isAuthenticated()) {
                    $state.go('login');
                } else {
                    //$auth.unlink('github')
                    //        .then(function () {
                                $auth.logout().then(function () {
                                    //  console.log("localstorage" + JSON.stringify($window.localStorage));
                                    toastr.info('Bye, '+$localStorage.get('displayName', '')+'!');
                                    $localStorage.remove('displayName');
                                    $localStorage.remove('picture');
                                    $state.go('login');
                                });
                    //        });
                }
            }]);


