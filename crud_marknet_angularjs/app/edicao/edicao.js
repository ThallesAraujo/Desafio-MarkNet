'use strict';

angular.module('myApp.edicao', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edicao/:idUsuario', {
    templateUrl: 'edicao/edicao.html',
    controller: 'edicaoCtrl',
  });
}])

.controller('edicaoCtrl', function($scope, $http, $routeParams) {

  $scope.usuario = {}
  $scope.usuarios = []
  $scope.sexos = ["Masculino", "Feminino","Não-Binário","Não Declarado"]

  $scope.getUsuario = function () {
    $scope.usuarios = JSON.parse(localStorage.getItem('usuarios'))
    $scope.usuario = $scope.usuarios[$routeParams.idUsuario-1]
  }

  $scope.save = function (){
    let usuarios = JSON.parse(localStorage.getItem('usuarios'))
    usuarios[$routeParams.idUsuario-1] = $scope.usuario
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert("Usuário editado com sucesso!")
  }

});