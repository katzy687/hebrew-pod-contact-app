app.controller("ListController", ['$scope', '$http', '$location', 'contactService', function($scope, $http, $location, contactService) {

  // populate List
  var populateList = function(){
    contactService.getData();
    $scope.contacts = contactService.contactArr;
  };
  populateList();


  // add contact
  $scope.addContact = function() {

    if ($scope.newContact === {}){ return; }

    var contact = {
      name: $scope.newcontact.name,
      email: $scope.newcontact.email
    };

    contactService.add(contact);

    // Clear out contact entry fields
    $scope.newcontact = {};

    // navigate back to contact list
    $location.path('/home.html');

  };// end addContact function


  // remove one contact
  $scope.removeContact = function(id){

    $scope.contacts = contactService.contactArr;

        contactService.deleteOne(id).then(function(data){

                for(var i = 0;i < $scope.contacts.length; i++){
                    if($scope.contacts[i]._id == id){
                        $scope.contacts.splice(i, 1);
                    }
                }
        });

  }


  // remove all contacts
  $scope.removeAll = function(){
    contactService.delete();
    populateList();
  }

}]);
