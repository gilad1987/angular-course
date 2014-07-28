/**
 * Created by Gilad on 18/07/14.
 */

(function () {

    function Tasks()
    {
        var tasks = [];
        var log = false;

        this.setLogger = function(bol){
            log = bol;
        }

        this.$get = function(){

            return {

                add:function(task){

                    if(log){
                        console.log('add');
                    }

                    tasks.push(task);
                },

                getTasks:function (){
                    return tasks;
                }
            }
        }
    }

    angular.module('services').provider('Tasks',Tasks);
})();


//var options = {
//    log:false
//};
//
//console.log(options.log);
//
//function Get($log){
//
//    console.log(options.log);
//
//    this.tasks = [];
//
//    this.add = function(task){
//        this.tasks.push(task);
//    }
//
//    this.edit = function(task){
//        this.tasks[this.tasks.indexOf(task)] = task;
//    }
//
//    this.remove = function(index){
//        this.tasks.splice(index,1);
//    }
//
//    this.get = function(key){
//        return this.tasks[key];
//    }
//
//
//    return this;
//
//}
//
//this.$get = ['$log',Get];