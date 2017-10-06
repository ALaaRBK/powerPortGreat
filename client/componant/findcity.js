angular.module('app')
   .component('findcity' , {
	controller : ($scope, $location) => {
		$scope.find = () => {
			var city = $('#cityname').val()
			$.ajax({ 
				type : 'POST',
				url : 'https://blooming-retreat-13174.herokuapp.com/cities' ,
				data :  {name :city},
				success : function(data) {
					window.currentCity = data;
                    alert('click on info page to view information about : ' + city)
					//$location.path('cityinfo');
					//appendMap(); 
				}, 
				error : ()=> {
					console.log('error')
				}
			}) 
		}
	},
   	templateUrl : `../templates/findcity.html`
   })









