(function() {
    function BlocChatCookies($cookies, $uibModal) {
        //$cookies.put('blocChatCurrentUser', '');
        var currentUser = $cookies.get('blocChatCurrentUser');
        //console.log(currentUser);
        if (!currentUser || currentUser === '') {
          // Do something to allow users to set their username
            $uibModal.open({
              animation: true,
              templateUrl: '/templates/setUsername.html',
              controller: 'ModalCtrl as modal',
              backdrop: 'static'
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();