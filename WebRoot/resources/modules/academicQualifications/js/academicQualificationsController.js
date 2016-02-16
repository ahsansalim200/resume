/**
 * 
 */
var academicQualificationApp = angular.module('academicQualificationApp',[]);
resumeModules.push('academicQualificationApp');
academicQualificationApp.directive('post-link', ['$timeout', '$scope', function ($timeout,$scope) {
    return {
    	restrict:'AE',
        link: function ($scope) {
            $scope.$on('dataloaded', function () {
            	alert('hi');
                $timeout(function () { // You might need this timeout to be sure its run after DOM render.
                	$('.resume-picture').glisse({
                        changeSpeed: 550, 
                        speed: 500,
                        effect:'bounce',
                        fullscreen: true
                    }); 
                }, 100, false);
            });
        }
    };
}]);
academicQualificationApp.controller('academicQualificationsController',['$scope','$http', 
    function($scope,$http){
		$http.get('resources/modules/academicQualifications/data/academicQualifications.json').
			success(function(data){
				$scope.academicQualifications=data;
				$scope.$broadcast('dataloaded');
				//alert('hi1');
				/*setTimeout(applyGlisse(), 7000);
				$scope.$on('dataloaded', function(){
					applyGlisse();
				});*/
		});
}]);
/*academicQualificationApp.run('$scope',function($scope){
	$scope.$on('dataloaded', function () {
		$('.resume-picture').glisse({
		    changeSpeed: 550, 
		    speed: 500,
		    effect:'bounce',
		    fullscreen: true
		});
	});
});*/
function applyGlisse() {
	//alert('hi4');
	$('.resume-picture').glisse({
	    changeSpeed: 550, 
	    speed: 500,
	    effect:'bounce',
	    fullscreen: true
	});
}
