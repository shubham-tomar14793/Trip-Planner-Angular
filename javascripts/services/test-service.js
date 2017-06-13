(function(){
	var appModule = angular.module('appModule');
	appModule.service('testService',['$interval','$log',function($interval,$log){
		var messageQueue = ['1','2'];

  function log() {
    if (messageQueue.length) {
      $log.log('batchLog messages: ', messageQueue);
      messageQueue = [];
    }
  }

  // start periodic checking
  $interval(log, 5000);
        
	}]);
    
    
    
    appModule.factory('routeTemplateMonitor', ['$route', 'testService', '$rootScope',
  function($route, batchLog, $rootScope) {
    return {
      startMonitoring: function() {
        $rootScope.$on('$routeChangeSuccess', function() {
          batchLog($route.current ? $route.current.template : null);
        });
      }
    };
  }]);
})();