(function() {
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', function(Room, $uibModalInstance, $cookies) {
            // we'll use this in our `ng-model` for the text input in the view
            this.roomName = '';
            this.username = '';
            
            this.ok = function() {
                Room.add(this.roomName);
                alert(this.roomName + ' is created');
                $uibModalInstance.close(this.roomName);
            };
            
            this.setUsername = function() {
                // Setting username cookie
                if (this.username !== '' && this.username !== ' ') {
                    $cookies.put('blocChatCurrentUser', this.username);
                    $uibModalInstance.close(this.username);
                }
                
            };
        
            this.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            }
        }]);
})();