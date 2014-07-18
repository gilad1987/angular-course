/**
 * Created by Gilad on 18/07/14.
 */

(function () {

    function Tasks(){
        console.log('Tasks config');

        function Get($log){
            $log.debug('Tasks construct');

        }

        this.$get = ['$log',Get];

    }

    angular.module('taskManager').provider('Tasks',Tasks);
})();
