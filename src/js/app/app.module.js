/**
 * Created by Gilad on 17/07/14.
 */
(function (window,angular) {

    function Configuration($log)
    {

    }

    function OnRun($log)
    {


    }

    var events = {
        'TaskAction':'Task:Action',
        'TaskAdd':'Task:Add',
        'TaskEdit':'Task:Edit',
        'TaskRemove':'Task:Remove',
        'ClearLog':'Clear:Log'
    };

    angular.module('taskManager',[
            'ngAnimate',
            'log'
        ])
        .config([Configuration])
        .constant('EVENTS',events)
        .run(['$log',OnRun]);

})(window,angular);
