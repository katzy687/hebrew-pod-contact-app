app.service('contactService', ['$http', function($http) {
  var contactService = {
    contactArr: [],

    // get all posts
    getData: function() {
      return $http.get('/api/contacts/test').then(function(response){

        console.log(response.data);
        angular.copy(response.data, contactService.contactArr);
      });﻿
    },

    // for adding a new contact
    add: function (newContact) {
      return $http.post('api/contact', newContact).then(function (response) {
        contactService.contactArr.push(response.data);
      });
    },

    // delete one contact
    deleteOne: function (id) {
      return $http.delete('api/contact/' + id).then(function(response){
        console.log("one deleted");
      });
    },

    // delete all contacts
    delete: function () {
      return $http.delete('api/contacts/test').then(function(response){

        console.log("all clear!");
      });
    }

}

  return contactService;
}]);
