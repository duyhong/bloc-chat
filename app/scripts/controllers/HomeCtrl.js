(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;
        this.open = function() {
            $uibModal.open({
              animation: true,
              templateUrl: '/templates/addRoom.html',
              controller: 'ModalCtrl as modal',
              backdrop: 'static'
            });
        };
        
        this.messages = Message.all;
        this.getMessage = Message.getByRoomId;
    }

    //main controller
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
    
})();