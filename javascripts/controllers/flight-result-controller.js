(function(){
	var appModule = angular.module('appModule');
	appModule.controller('flightResultController',['$scope','flightResultService',function($scope,flightResultService){
		$scope.dataLoaded = false;
        $scope.topNavList = []; 
        $scope.cityList = [];
        $scope.flightList = [];
        $scope.companyHeader = [];
        $scope.mainNavigationList = [];
        $scope.sliderItemList = [];
        $scope.flightResult = [];
        $scope.suggestionBoxFlight = $scope.suggestionBoxTo = $scope.suggestionBoxFrom = 'false';
        $scope.priceOrder = '';
        $scope.filghtResultOrderBy = '';
        $scope.bookingObject = {
                                "from": "Bangalore",
                                "to": "New Delhi",
                                "departure": "19:00",
                                "arrival": "22:00",
                                "airline": "Indigo",
                                "passenger": [{
                                    "adults": "1"
                                }, {
                                    "children": "0"
                                }, {
                                    "Infants": "0"
                                }],
                                "flightStops": "0",
                                "duration": "3",
                                "onwards":"true",
                                "return" : "false",
                                "onwardsDate": '03/08/2017',
                                "returnDate" :''
                               }; 
        $scope.modifiedBookingObject = {};
        console.log($scope.bookingObject);
        
        $scope.selectAndCloseFrom = function(cityName){
            $scope.modifiedBookingObject.from = cityName;
            $scope.suggestionBoxFrom = 'true';
        }
        $scope.selectAndCloseTo = function(cityName){
            $scope.modifiedBookingObject.to = cityName;
            $scope.suggestionBoxTo = 'true';
        }
        $scope.selectAndCloseFlight = function(flightName){
            $scope.modifiedBookingObject.airline = flightName;
            $scope.suggestionBoxFlight = 'true';
        }
        
        
        /*##################################
        ******function to update the flight details object*****
        ####################################*/        
        $scope.getModifiedData = function(){
            console.log($scope.modifiedBookingObject); 
            $scope.bookingObject = $scope.modifiedBookingObject;
            
        }        
        /*##################################
        ******call service function to get the data of cities *****
        ####################################*/
        flightResultService.getTheCity().then(function(response){
            $scope.cityList = response.data;
            console.log($scope.cityList);
        },
        function(response){
            console.log('data retrieval failed');
        });
         /*##################################
        ******call service function to get list of flights *****
        ####################################*/
        flightResultService.getFlightList().then(function(response){
            $scope.flightList = response.data;
            console.log($scope.flightList);
        },
        function(response){
            console.log('data retrieval failed');
        });
        /*##################################
        ******call service function to get the data for top navigation list *****
        ####################################*/
        flightResultService.getTopNavList().then(
        function(response){
            $scope.topNavList = response.data.topNavList;
            console.log($scope.topNavList);
        },
        function(response){
            console.log('data retrieval failed');
        });
        /*##################################
        call service function to get the data for website navigation list *****
        ####################################*/
        
        flightResultService.getMainNavigationList().then(
        function(response){
            $scope.companyHeader = response.data.mainNavigationList.companyHeader;
            $scope.mainNavigationList = response.data.mainNavigationList.navListItems;
            console.log($scope.mainNavigationList);
        },
        function(response){
            console.log('data retrieval failed');
        });
        /*##################################
        ****** call service function to get the data for the slider *****
        ####################################*/
        flightResultService.getSliderList().then(
        function(response){
            $scope.dataLoaded = true;            
            $scope.flightResult = $scope.sliderItemList = response.data.flight_data;
            console.log($scope.flightResult);
        },
        function(response){
            console.log('data retrieval failed');
        });         
	}]);
})();