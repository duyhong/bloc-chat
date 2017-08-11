(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.open = function() {
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
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
    
})();