/**
 * Created by Gilad on 18/07/14.
 */

(function () {

    function Tasks(){

        function Get($log){

            this.tasks = [];

            this.add = function(task){
                this.tasks.push(task);
            }

            this.edit = function(task){
                this.tasks[this.tasks.indexOf(task)] = task;
            }

            this.remove = function(index){
                this.tasks.splice(index,1);
            }

            this.get = function(key){
                return this.tasks[key];
            }
            return this;

        }

        this.$get = ['$log'];

    }

    angular.module('taskManager').provider('Tasks',Tasks);
})();
