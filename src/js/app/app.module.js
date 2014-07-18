/**
 * Created by Gilad on 17/07/14.
 */
(function (window,angular) {

    function Configuration($log)
    {

    }

    function OnRun($log)
    {
        $log.debug('OnRun app');
    }

    angular.module('taskManager',[
            'ngAnimate',
            'log'
        ])
        .config([Configuration])
        .run(['$log',OnRun]);

})(window,angular);
