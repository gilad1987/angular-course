/**
 * Created by Gilad on 13/07/14.
 */

(function(angular){

    function LogCtrl($scope){

        var _this = this;

        this.log = [];

        function getNow(){
            var dateObj;

            dateObj = new Date();

            return dateObj.getDate()+'/'+dateObj.getMonth()+'/'+dateObj.getFullYear()+'  '+dateObj.getHours()+':'+dateObj.getMinutes();
        }

        function onTaskClear(){
            _this.log = [];
        }


        function onTaskUpdate(){
            _this.log.push(getNow()+' - task update');
        }

        function onTsskAdd(){

            _this.log.push(getNow()+' - task add');
    }

        function onTaskRemove(){
            _this.log.push(getNow()+' - task remove');
        }

        // todo: you can do it with only one listener :)
        $scope.$on('Log:clear',onTaskClear);
        $scope.$on('Task:update',onTaskUpdate);
        $scope.$on('Task:add',onTsskAdd);
        $scope.$on('Task:remove',onTaskRemove);

    }

    angular.module('app.controllers').controller('LogCtrl',['$scope',LogCtrl]);
})(angular);
