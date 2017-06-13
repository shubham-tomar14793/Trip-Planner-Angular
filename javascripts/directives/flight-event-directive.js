(function(){
    var appModule = angular.module('appModule');
    appModule.directive('clickBind',[function(){
        return{
            restrict:'A',
            link : function(scope,element,attribute){
                element.bind('click',function(){
                     element.toggleClass('info-expanded');
                });
            }
        }
    }]);
})();