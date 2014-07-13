/**
 * Created by Gilad on 08/07/14.
 */

(function(angular){

    angular.module('app.services',[])

        .config(Configuration)
        .service('TodoListData',[TodoListData]);

    function TodoListData()
    {
        var list;

        list = [];

        return list;
    }

    function Configuration()
    {

    }

})(angular);
