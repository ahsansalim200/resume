/**
 * 
 */
var resumeModules = [];
var myResumeApp = angular.module('myResumeApp', resumeModules);

myResumeApp.run(function(){
	
	$('body').on('click','a[data-resume-scroll-target*=#]',function() {
		var target = $(this).attr('data-resume-scroll-target');
		target =$(target);
		if(target.length) {
			target.on('hidden.bs.collapse , shown.bs.collapse', function () {
				var pos=target.offset().top-90;
				console.log(pos);
				$('html,body').animate({
					scrollTop: pos
			    }, 600);
				$('body').removeClass('resume-body-initialization');
			});
		}
	});
	$('#resumeWelcomeButton').click(function(){
		$('#welcomeOverlay').slideUp(1000,"swing");
		applyGlisse();
	});
	
});

myResumeApp.directive('resumeNavigationBar', function(){
	return {
		restrict:'E',
		templateUrl:'resources/modules/myResumeApp/partials/mainNavigationBar.html',
		controller:function($scope,$http){
			$http.get('resources/modules/myResumeApp/data/navBarDetails.json').
				success(function(data){
					$scope.navBarDetails=data;
			});
			$scope.isArray = function (input) {
				return angular.isArray(input);
			};
		}
	};
});

myResumeApp.directive('aboutModalWindow', function(){
	return {
		restrict:'E',
		templateUrl:'resources/modules/myResumeApp/partials/about.html',
		controller:function($scope,$http){
			$http.get('resources/modules/myResumeApp/data/about.json').
				success(function(data){
					$scope.aboutDetails=data;
			});
		}
	};
});

