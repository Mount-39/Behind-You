'use strict';

angular.module('Login', [])

    .controller('LoginCtrl', function (
        $scope, $timeout,$state, $stateParams,
        ionicMaterialInk, $ionicSideMenuDelegate,
        Backand, $cookies, ionicMaterialMotion
    ) {
        var login = this;

        login.step = 1;

       // $scope.$parent.clearFabs();
        login.signin = signin;

        $scope.pictureNumber = picture();
        $scope.whichBg = whichBg();

        $scope.nextStep = function (){
            $timeout(function () {
                return login.step++;
            }, 500);

        };

        $scope.backStep = function (){
            $timeout(function () {
                return login.step--;
            }, 500);

        };

        $timeout(function() {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 500);

        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

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
            return Math.round(Math.random()*6)+1;
        }

        function whichBg(){
            var bg = {
                1 : "rgb(52, 46, 61)",
                2 : "rgb(52, 73, 92)",
                3 : "rgb(92, 102, 120)",
                4 : "rgb(249, 227, 210)",
                5 : "rgb(61, 61, 61)",
                6 : "rgb(234, 126, 108)",
                7 : "rgb(51, 41, 86)"
            };

            return bg[$scope.pictureNumber];
        }

    });