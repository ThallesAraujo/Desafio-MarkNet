'use strict';

angular.module('myApp.listagem', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listagem', {
    templateUrl: 'listagem/listagem.html',
  });
}])
.controller('listagemCtrl', function($scope, $route, $location) {

    $scope.usuarios = JSON.parse(localStorage.getItem('usuarios'))

    $scope.addUsuario = function() {
      $location.path('/cadastro')
    }

    $scope.editUsuario = function(idUsuario) {
      $location.path(`edicao/${idUsuario}`)
    }

    $scope.deleteUsuario = function(idUsuario) {
      var usuarios = JSON.parse(localStorage.getItem('usuarios'))
      usuarios.splice(idUsuario-1, 1)
      localStorage.setItem('usuarios', JSON.stringify(usuarios))
      $route.reload()
      alert("Usuario removido com sucesso!")
    }

})