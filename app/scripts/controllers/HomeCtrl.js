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
            this.messages = Message.getByRoomId(roomName);
            this.activeRoom = roomName;
        };
        
        this.submitMsg = function(typedMsg, activeRoom) {
            this.typedMsg = typedMsg;
            
            Message.send(typedMsg, activeRoom);  
            this.typedMsg = null;
        };
    }

    //main controller
    angular
        .module('blocChat')
        .controller('HomeCtrl', [ 'Room', '$uibModal', 'Message', HomeCtrl]);
    
})();