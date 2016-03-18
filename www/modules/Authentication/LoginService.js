(function () {

    "use strict";

    angular.module('Login')

        .service('LoginService', loginService);

    loginService.$inject = ['$timeout', 'Backand', '$cookies'];

    function loginService($timeout, Backand, $cookies, $rootScope) {

        var userInfo = {};

        return {
            signin: signin
        };

        function signin(email, password) {

           return Backand.signin(email, password)
                .then(function (response) {
                    userInfo = response;
                    $cookies.put('access_token', response.access_token);
                    return response;
                });
        }


    }

}());