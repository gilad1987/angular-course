/**
 * Created by Gilad on 17/07/14.
 */

(function (windows,angular) {

    function Configuration()
    {

    }

    function OnRun()
    {

    }

    angular.module('app',[
        'logModule'
    ])
    .config(Configuration)
    .run(OnRun);

})(windows,angular);
