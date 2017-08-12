(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    console.log(ref)
    var messages = $firebaseArray(ref);
    console.log(messages);
    
    //Message.all = messages;
      
    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        console.log(roomId);
        
        Message.all = ref.orderByChild('roomID').equalTo(roomId);
        
        //ref.orderByChild('roomID').equalTo(roomId).on('value', function(snapshot) {
        //    console.log(snapshot.val());
        //});
        
    };
      
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();