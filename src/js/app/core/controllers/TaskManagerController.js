/**
 * Created by Gilad on 18/07/14.
 */
(function (angular) {

    function TaskManagerController($scope,$log,Tasks,EVENTS){


        $scope.$on(EVENTS.TaskAction,function(EVENTS,type){

            $scope.$broadcast(EVENTS[type]);
        });

    }

    angular.module('taskManager')
        .controller('TaskManagerController',['$scope','$log','Tasks','EVENTS',TaskManagerController]);

})(angular);
