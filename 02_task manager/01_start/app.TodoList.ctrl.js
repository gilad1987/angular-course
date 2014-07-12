/**
 * Created by Gilad on 12/07/14.
 */
(function(angular){


    function TodoListCtrl(TodoListData,$scope){
        this.tasks = TodoListData;

        this.search = {};
        this.search.q = '';

        this.task = {};
        this.task.done = false;

        this.indexUpdate = null;

        this.add = function(){

            if(this.indexUpdate != null && typeof TodoListData[this.indexUpdate] != 'undefined'){
                TodoListData[this.indexUpdate] = this.task;
                this.indexUpdate = null;
                $scope.$broadcast('Task:update');
            }else{
                this.tasks.push(this.task);
                $scope.$broadcast('Task:add');
            }

            this.task = {};
        }

        this.edit = function(index){
            if(typeof TodoListData[index] != 'undefined'){

                var task;

                task = {};
                task.title = TodoListData[index].title;
                task.description = TodoListData[index].description;

                this.task = task;
                this.indexUpdate = index;
            }
        }

        this.remove = function(index){
            if(typeof TodoListData[index] != 'undefined'){

                TodoListData.splice(index,1);

                $scope.$broadcast('Task:remove');
            }
        }
    }


    angular.module('app.controllers').controller('TodoListCtrl',['TodoListData','$scope',TodoListCtrl]);

})(angular);