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
        
        this.getMessages = function (roomId, roomName) {
            this.messages = Message.getByRoomId(roomId);
            this.activeRoom = roomName;
                //Room.getRoomName(roomId);
        }
    }

    //main controller
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
    
})();