(function(){
	var appModule = angular.module('appModule');
	appModule.service('flightResultService',['$http',function($http){
		return{
				getTopNavList : topNavigationList,
                getMainNavigationList : mainNavigationList,
                getSliderList : getSliderData,
                getTheCity : getCityData,
                getFlightList : getFlightList
		}		
        /*##################################
        ****** function to get the data for top navigation list *****
        ####################################*/
		function topNavigationList(){
			return $http.get('/data/top-nav.json')
			.success(function(data){
				console.log('successfully received');
			})
			.error(function(){
				console.log('error');
			});
		}
        /*##################################
        ****** function to get the list of cities *****
        ####################################*/
        function getCityData(){
            return $http.get('/data/cities.json')
            .success(function(){
                console.log('successfully received');
            })
            .error(function(){
                console.log('error');
            });
        }
        /*##################################
        ****** function to get the data for website main navigation list *****
        ####################################*/
        function mainNavigationList(){
            return $http.get('/data/main-navigation.json')
            .success(function(){
                console.log('successfully received');
            })
            .error(function(){
                console.log('error');
            });
        }
        /*##################################
        ****** function to get the data for flight-slider *****
        ####################################*/
        function getSliderData(){
            return $http.get('/data/flights.json')
            .success(function(){
                console.log('successfully received');
            })
            .error(function(){
                console.log('error');
            });
        }
        /*##################################
        ****** function to get flight list *****
        ####################################*/
        function getFlightList(){
            return $http.get('/data/flightList.json')
            .success(function(){
                console.log('successfully received');
            })
            .error(function(){
                console.log('error');
            });
        }
	}]);
})();