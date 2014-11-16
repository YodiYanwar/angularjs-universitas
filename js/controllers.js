var univ = angular.module("univ", ["ngRoute"]);

	// configure our routes
	univ.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mhsController'
			})

			// route for the about page
			.when('/mahasiswa', {
				templateUrl : 'pages/students.html',
				controller  : 'mhsController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'mhsController'
			})

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'mhsController'
			})

			// route for the contact page
			.when('/detailMahasiswa', {
				templateUrl : 'pages/detailStudent.html',
				controller  : 'mhsController'
			});
	});
	
	univ.controller("mhsController", function($scope){
		$scope.students = [
			{npm : "12215410549",
			 nama : "Yodi Yanwar",
			 fakultas : "Teknik",
			 prodi : "Teknik Informatika"},

			 {npm : "12215410540",
			 nama : "Nabilah Ratna Ayu Azalia",
			 fakultas : "Kedokteran",
			 prodi : "Kedokteran"},

			 {npm : "12215410541",
			 nama : "Melody Nurramdhani",
			 fakultas : "Keguruan",
			 prodi : "Keguruan"}
		];

	$scope.tambahMhs = function(){

		$scope.students.push({
			npm : $scope.npm,
			nama : $scope.nama,
			fakultas : $scope.fakultas,
			prodi : $scope.prodi
		});
	}

	$scope.kosongField = function(){
		$scope.npm = "";
		$scope.nama = "";
		$scope.fakultas = "";
		$scope.prodi = "";
	}

	$scope.deleteMhs = function(student){

		var index = $scope.students.indexOf(student);
		$scope.students.splice(index, 1);
	}

	$scope.detailMhs = function(student){
		$scope.student = student;

		$scope.student.npm = student.npm;
		$scope.student.nama = student.nama;
		$scope.student.fakultas = student.fakultas;
		$scope.student.prodi = student.prodi;
	}

	$scope.injectIndex = function(student){
		var index = $scope.students.indexOf(student);
		
		$scope.student = student;
		$scope.noIndex = index;
	}

	$scope.editMhs = function(student){
		$scope.student = student;

		$scope.student.npm = student.npm;
		$scope.student.nama = student.nama;
		$scope.student.fakultas = student.fakultas;
		$scope.student.prodi = student.prodi;
	}
	});