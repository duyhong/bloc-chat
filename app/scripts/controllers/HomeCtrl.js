(function() {
    function HomeCtrl(Room, $scope, $uibModal) {
        this.rooms = Room.all;
        $scope.open = function(size, template) {
            $uibModal.open({
              animation: true,
              templateUrl: template || '/templates/addRoom.html',
              controller: 'AddCtrl',
              backdrop: 'static'
            });
        };
    }

    //main controller
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
    
    //our modal controller
    angular
        .module('blocChat')
        .controller('AddCtrl', function($scope, $uibModalInstance) {
            // we'll use this in our `ng-model` for the text input in the view
            $scope.roomName = '';
            
            $scope.ok = function() {
                Room.add($scope.roomName);
                alert($scope.roomName + ' is created');
                $uibModalInstance.close($scope.roomName);
            };
        
            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            }
        });
})();