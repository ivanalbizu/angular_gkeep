'use strict';

angular.module('gkeepApp')
  .controller('TasksCtrl', ['$scope', 'TaskServices',
    function ($scope, TaskServices) {

      $scope.getAll = function() {
        TaskServices.get_all({},
          function success(response) {
            $scope.tasks = response;
          },
          function error(errorResponse){
            console.log("Error: "+ JSON.stringify(errorResponse));
          }
        )
      }

      $scope.save = function(data) {
        TaskServices.save(data,
          function success(response) {
            document.getElementById('newtask').style.display = "none";
            $scope.newtask='';
            $scope.getAll();
          },
          function error(errorResponse) {
            alert("Empty fields");
          }
        )
      };

      $scope.delete = function(id) {
        TaskServices.delete({id: id},
          function success(response) {
            $scope.getAll();
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        )
      };

      $scope.saveColor = function(id, data, color) {
        var task = {
          'id': id,
          'title': data.title,
          'description': data.description,
          'color': 'rgba('+color+',0.90);'
        };
        TaskServices.update({id: id}, task,
          function success(response) {
            $scope.getAll();
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        )
      };

      $scope.update = function(id, data) {
        if (data.description !== '' && data.title !== ''){
          TaskServices.update({id: id}, data,
            function success(response) {
              $scope.getAll();
            },
            function error(errorResponse) {
              console.log("Error:"	+	JSON.stringify(errorResponse));
            }
          )
        } else {
          $scope.getAll();
          alert("Empty fields");
        }
      };

      $scope.cancel = function() {
        document.getElementById('newtask').style.display = "none";
        $scope.newtask='';
      };

  }]);
