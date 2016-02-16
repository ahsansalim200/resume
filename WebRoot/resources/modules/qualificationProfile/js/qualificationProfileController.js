/**
 * 
 */
resumeControllers.controller('qualificationProfileController',['$scope','$http', 
    function($scope,$http) {
		$http.get('resources/modules/qualificationProfile/data/qualificationProfile.json').
			success(function(data) {
				$scope.qualificationProfile=data;
		});
}]);
