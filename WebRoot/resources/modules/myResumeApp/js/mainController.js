/**
 * 
 */
var resumeControllers = angular.module('resumeControllers',[]);
resumeModules.push('resumeControllers');
resumeControllers.controller('resumeMainController',['$scope','$http', 
    function($scope,$http){
		$http.get('resources/modules/myResumeApp/data/personDetails.json').
			success(function(data){
				$scope.person=data;
	});
	$scope.selectedTab=-0;
	$scope.selectTab = function(setTab){
		$scope.selectedTab=setTab;
	};
	$scope.isTabSelected = function(checkTab){
		return $scope.selectedTab === checkTab;
	};
}]);
