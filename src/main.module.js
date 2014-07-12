/**
 * Created by Gilad on 09/07/14.
 */
(function(angular){
    /**
     * @param $scope
     * @constructor
     */
    function MyController($scope)
    {
        $scope.msg = 'msg';
    }


    angular.module('app',[])
        .controller('MyController',['$scope',MyController]);

})(angular);
