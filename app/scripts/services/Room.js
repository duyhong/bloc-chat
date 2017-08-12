(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        console.log(ref)
        var rooms = $firebaseArray(ref);
        console.log(rooms);
        
        Room.all = rooms;
        
        Room.add = function(roomName) {
            //Use the firebase method $add here
            rooms.$add(roomName);
        };
        
        //Room.getRoomId = ref.orderByChild($id).equalTo(1)
            
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room',['$firebaseArray', Room]);
 })();