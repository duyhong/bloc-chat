(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        //console.log(ref)
        var rooms = $firebaseArray(ref);
        console.log(rooms);
        
        Room.all = rooms;
        
        Room.add = function(roomName) {
            //Use the firebase method $add here
            rooms.$add({"name": roomName});
        };
        
        Room.getRoomName = function(roomId) {
            return $firebaseArray(ref.orderByChild($id).equalTo(roomId));
            /*var roomName = $firebaseArray(ref.orderByChild('name').equalTo(roomId));
            console.log(roomName);
            return roomName; */
        } 
            
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room',['$firebaseArray', Room]);
 })();