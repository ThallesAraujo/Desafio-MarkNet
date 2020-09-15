'use strict';

angular.module('myApp.cadastro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro', {
    templateUrl: 'cadastro/cadastro.html',
    controller: 'cadastroCtrl',
  });
}])

.controller('cadastroCtrl', function($scope) {


  $scope.usuario = {}
  $scope.sexos = ["Masculino", "Feminino","Não-Binário","Não Declarado"]

  $scope.save = function() {
    
    var usuarios = []

    
    if (localStorage.getItem('usuarios')){
      usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }

    $scope.usuario.id = usuarios.length + 1
    usuarios.push($scope.usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    alert("Usuário salvo com sucesso!")

  }

});