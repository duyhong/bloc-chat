(function() {
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', function(Room, $uibModalInstance) {
            // we'll use this in our `ng-model` for the text input in the view
            this.roomName = '';
            
            this.ok = function() {
                Room.add(this.roomName);
                alert(this.roomName + ' is created');
                $uibModalInstance.close(this.roomName);
            };
        
            this.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            }
        }]);
})();