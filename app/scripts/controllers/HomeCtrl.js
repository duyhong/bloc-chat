(function() {
    function HomeCtrl(Room, $scope, $uibModal) {
        this.rooms = Room.all;
        $scope.open = function() {
            $uibModal.open({
              animation: true,
              templateUrl: '/templates/addRoom.html',
              controller: 'ModalCtrl as modal',
              backdrop: 'static'
            });
        };
    }

    //main controller
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
    
})();