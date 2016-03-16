'use strict';

angular.module('Friends', [])

    .controller('FriendsCtrl', FriendsCtrl);

        FriendsCtrl.$inject = [
            '$scope', '$stateParams', '$timeout',
            'ionicMaterialMotion', 'ionicMaterialInk',
            'FriendsService', '$rootScope'
        ];

        function FriendsCtrl (
        $scope, $stateParams, $timeout,
        ionicMaterialMotion, ionicMaterialInk,
        FriendsService, $rootScope
    ) {

            var vm = this;

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.$parent.setHeaderFab('left');

        // Delay expansion
        $timeout(function () {
            $scope.isExpanded = true;
            $scope.$parent.setExpanded(true);
        }, 300);

        // Set Motion
        ionicMaterialMotion.fadeSlideInRight();

        // Set Ink
        ionicMaterialInk.displayEffect();

        vm.friends = [];

            uploadFriends();

            function uploadFriends(){
                return FriendsService.getFriends($rootScope.userId).then(function(data){
                   vm.friends = data;
                    console.log("hi", vm.friends);
                    return vm.friends;
                });
            }
    }