angular.module('RDash').controller('GruposController', function($scope, $http) {
   $scope.grupos = [];

   $http.get('http://10.224.126.253:3001/sgp/astec/orcamento/grupos')
   .success(function (grupos) {
      $scope.grupos = grupos;
   })
   .error(function (erro){
      console.log('Error1 = ', erro);
  })
})