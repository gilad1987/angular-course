/**
 * Created by Gilad on 08/07/14.
 */

(function(angular){
    angular.module('app.controllers',[])

        .config(Configuration)

        .controller({
            'TodoListCtrl':TodoListCtrl
        });

    function TodoListCtrl(TodoListData){
        this.list = TodoListData;

        this.add = function(){

            var task;

            task = {
                'title':this.title,
                'description':this.description
            }

            this.title = '';
            this.description = '';

            this.list.push(task);
        }
    }

    function Configuration(){

    }
})(angular);
