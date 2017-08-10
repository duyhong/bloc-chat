(function() {
    function HomeCtrl(Room, $scope, $uibModal) {
        this.rooms = Room.all;
        $scope.open = function() {
            $uibModal.open({
              animation: true,
              templateUrl: 'addRoom.html',
              controller: 'ModalCtrl as modal',
              backdrop: 'static'
            });
        };
    }

    //main controller
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', function(Room, $uibModalInstance) {
            // we'll use this in our `ng-model` for the text input in the view
            this.roomName = '';
            
            this.ok = function() {
                Room.add($scope.roomName);
                alert($scope.roomName + ' is created');
                $uibModalInstance.close(this.roomName);
            };
        
            this.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            }
        }]);
})();