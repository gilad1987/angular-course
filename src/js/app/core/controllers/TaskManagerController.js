/**
 * Created by Gilad on 18/07/14.
 */
(function () {

    function TaskManagerController($scope,$log,Tasks){
        $log.debug('Task controller');
    }

    angular.module('taskManager')
        .controller('TaskManagerController',['$scope','$log','Tasks',TaskManagerController]);
})();
