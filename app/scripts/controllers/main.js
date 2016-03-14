(function() {
  'use strict';

  angular.module('gkeepApp')
    .controller('TasksCtrl', TasksCtrl);

    TasksCtrl.$inject = ['$rootScope', 'TaskServices'];
    function TasksCtrl($rootScope, TaskServices) {
      var vm = this;

      vm.tasks = [];
      vm.getAll = getAll;
      vm.deleteTask = deleteTask;
      vm.saveTask = saveTask;
      vm.cancelCreateTask = cancelCreateTask;
      vm.updateTask = updateTask;
      vm.saveColor = saveColor;

      function getAll() {
        TaskServices.get_all({},
          function success(response) {
            vm.tasks = response;
          },
          function error(errorResponse){
            console.log("Error: "+ JSON.stringify(errorResponse));
          }
        );
      }

      function saveTask(data) {
        TaskServices.save(data,
          function success(response) {
            document.getElementById('newtask').style.display = "none";
            vm.newtask='';
            vm.getAll();
          },
          function error(errorResponse) {
            alert("Empty fields");
          }
        );
      };

      function deleteTask(id) {
        TaskServices.delete({id: id},
          function success(response) {
            vm.getAll();
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        );
      };

      function saveColor(id, data, color) {
        var task = {
          'id': id,
          'title': data.title,
          'description': data.description,
          'color': 'rgba('+color+',0.90);'
        };
        TaskServices.update({id: id}, task,
          function success(response) {
            vm.getAll();
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        );
      };

      function updateTask(id, data) {
        if (data.description !== '' && data.title !== ''){
          TaskServices.update({id: id}, data,
            function success(response) {
              vm.getAll();
            },
            function error(errorResponse) {
              console.log("Error:"	+	JSON.stringify(errorResponse));
            }
          );
        } else {
          vm.getAll();
          alert("Empty fields");
        }
      };

      function cancelCreateTask() {
        document.getElementById('newtask').style.display = "none";
        vm.newtask='';
      };

  }
})();

