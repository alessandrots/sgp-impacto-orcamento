var app = angular.module('RDash').controller('NomeacaoController', function($scope, $http) {
   $scope.nomeacoes = null;
   $scope.currentPage = 0;
   $scope.pageSize = 5;
   // $scope.data = [];

   $http.get('http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao')
   .success(function (nomeacoes) {

	  if (nomeacoes){
	  	$scope.nomeacoes = nomeacoes;
	  	$scope.numberOfPages=function(){
		    return Math.ceil($scope.nomeacoes.length/$scope.pageSize);                
		}
   	  	// console.log('nomeacoes = ', nomeacoes);	
   	  	// console.log('numberOfPages = ', $scope.numberOfPages);
   	  }

   })
   .error(function (erro){
      console.log('Error1 = ', erro);
  })
});

 app.filter('startFrom', function() {
	return function(input, start) {
		if (input){
			console.log('input = ', input);
	    	start = +start; //parse to int
	    	return input.slice(start);	
		}
	}
 });