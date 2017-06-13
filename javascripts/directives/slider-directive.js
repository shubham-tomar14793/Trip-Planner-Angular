(function(){
    var appModule = angular.module('appModule');
    appModule.directive('sliderDirective',[function(){
        return {
                restrict: 'E',
                scope: true,// follow prototypical inheritence and make all scope properties and methods to directive
                /*{   //explicitly assigning the scope to directive scope, doesnot foloow the prototypical inheritence
                  sliderItemList : '=sliderList',
                    sort : '=sort'
                }*/
                templateUrl: '/directive-views/flight-slider.html'
              };
    }]);
})();