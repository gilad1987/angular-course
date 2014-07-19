/**
 * Created by Gilad on 19/07/14.
 */

(function () {

    function TableTaskController(Tasks,EVENTS,$scope,$log){

        this.tasks = Tasks.tasks;

        this.currentTask = {};

        this.edit = function($index){
            this.currentTask = Tasks.get($index);
        }

        this.remove = function($index){
            Tasks.remove($index);
            $scope.$emit(EVENTS.TaskAction,EVENTS.TaskRemove);
        }

        this.add = function(task){

            if( this.tasks.indexOf(task)){
                Tasks.add(task);
                $scope.$emit(EVENTS.TaskAction,EVENTS.TaskAdd);
            }else{
                Tasks.edit(task);
                $scope.$emit(EVENTS.TaskAction,EVENTS.TaskEdit);
            }

            this.currentTask  = {};

        }
    }

    angular.module('taskManager').controller('TableTaskController',['Tasks','EVENTS','$scope','$log',TableTaskController]);
})();
