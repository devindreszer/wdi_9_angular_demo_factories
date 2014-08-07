// Create applicaton wide settings
angular.module("customersApp").value('appSettings', {
  title: "Customers Application",
  version: "1.0",
  remoteServer: "http://localhost:3000"
});


// Use constant if you need app wide values available inside the app config
angular.module("customersApp").constant('remoteSettings', {
  remoteServer: "http://localhost:3000"
});
