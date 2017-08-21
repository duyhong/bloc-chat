(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        
        Room.add = function(roomName) {
            //Use the firebase method $add here
            rooms.$add({"name": roomName});
        };
        
        Room.getRoomName = function(roomId) {
            return $firebaseArray(ref.orderByChild($id).equalTo(roomId));
        } 
            
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room',['$firebaseArray', Room]);
 })();