/**
 * Arquivo: js/services/todos.js
 * Descrição: Arquivo responsável pelo services da api da aplicação Angular
 * com Back-End.
 * Data: 24/01/2019
 * Author: Glaucia Lemos
 */

angular.module('todoService', [])

  .factory('Todos', ['$http', function ($http) {
    return {
      get() {
        return $http.get('/api/todos');
      },
      create(todoData) {
        return $http.post('/api/todos', todoData);
      },
      delete(id) {
        return $http.delete(`/api/todos/${id}`);
      },
    };
  }]);
