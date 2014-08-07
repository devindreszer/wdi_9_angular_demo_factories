(function customersFactoryIIFE(){

  // Create a customers factory
  var customersFactory = function($http, remoteSettings){
    // customers is private, only available in this scope

    var factory = {};

    factory.getCustomers = function(){
      // similar to $.ajax
      return $http.get(remoteSettings.remoteServer + '/customers');
    };

    factory.getCustomer = function(customerId){
      return $http.get(remoteSettings.remoteServer + '/customers/' + customerId);
    };
    return factory;
  };

  customersFactory.$inject = ['$http', 'remoteSettings'];

  angular.module('customersApp').factory('customersFactory', customersFactory);
})();
