'use strict';

angular.module('Login', [])

    .controller('LoginCtrl', function (
        $scope, $timeout,$state, $stateParams,
        ionicMaterialInk, $ionicSideMenuDelegate,
        Backand, $cookies
    ) {
        var login = this;

        login.step = 1;

       // $scope.$parent.clearFabs();
        login.signin = signin;

        $scope.pictureNumber = picture();

        $ionicSideMenuDelegate.canDragContent(false);

        $timeout(function () {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();

        function signin(user) {

            console.log(login.email, login.password);

            Backand.signin(login.email, login.password)
                .then(function (response) {
                    console.log(response);
                    $cookies.put('access_token', response);
                    $state.go('app.profile');
                });
        }

        function picture(){
            return Math.round(Math.random()*7)+1;
        }
    });