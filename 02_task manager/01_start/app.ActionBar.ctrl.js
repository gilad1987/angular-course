/**
 * Created by Gilad on 13/07/14.
 */

(function(angular){

    function ActionBar($rootScope){

        this.clearLog = function(){
           $rootScope.$broadcast('Log:clear');
        }
    }

    angular.module('app.controllers').controller('ActionBar',['$rootScope',ActionBar]);
})(angular);
