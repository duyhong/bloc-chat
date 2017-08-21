(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    Message.getByRoomId = function(roomName) {
        
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild('roomID').equalTo(roomName));
    };
      
    Message.send = function(newMessage, activeRoom) {
        
        var username = $cookies.get('blocChatCurrentUser');
        var date = new Date();
        var time = $filter('date')(new Date(), 'hh:mm:ss a');
        
        Message.typedMsg = newMessage;
        
        messages.$add({"username": username, "roomID": activeRoom, "content": newMessage, "sentAt": time});
    };
      
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();