/**
 * Arquivo: js/controllers/main.js
 * Descrição: Arquivo responsável pela integração da api back com o Front
 * Data: 24/01/2019
 * Author: Glaucia Lemos
 */

angular.module('todoController', [])

  .controller('mainController', ['$scope', '$http', 'Todos', function ($scope, $http, Todos) {
    $scope.formData = {};
    $scope.loading = true;

    // Retornar os 'Todos':
    Todos.get()
      .success((data) => {
        $scope.todos = data;
        $scope.loading = false;
      });

    // Adicionar 'Todo':
    $scope.createTodo = function () {
      if ($scope.formData.text !== undefined) {
        $scope.loading = true;

        Todos.create($scope.formData)
          .success((data) => {
            $scope.loading = false;
            $scope.formData = {};
            $scope.todos = data;
          });
      }
    };

    // Excluir 'Todo':
    $scope.deleteTodo = function (id) {
      $scope.loading = true;

      Todos.delete(id)
        .success((data) => {
          $scope.loading = false;
          $scope.todos = data;
        });
    };
  }]);
