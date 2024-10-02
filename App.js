(
    function(){
        angular.module("myFirstApp", [])
        .controller("myFirstController" , MainFucntion)
        .filter("cName","ChangeName");

        MainFucntion.$inject=["$scope", "$filter","$injector","CnameFilter"];

        function MainFucntion($scope,$filter,$injector,CnameFilter){
            $scope.age= "my age is 42 years old ;(";
            $scope.input="";
            $scope.input1="";
            $scope.ageResult ="";
            $scope.cost  = 45 ;

            $scope.name  = function(){
                var aa = "Bilal Sarfraz"
                return aa;
            };

            $scope.change = function(){
                var aa = "Bilal Sarfraz";
                aa = ChangeName(aa);
                return aa ;
            }

            $scope.ageFinder = function(){
                 $scope.ageResult = $scope.age
            };

            $scope.upperCase = function(){
                var aa = $filter("uppercase");
                var bb = aa($scope.input);
                $scope.input = bb ;
            };

            $scope.lowerCase = function(){
                var aa = $filter("lowercase")($scope.input1);
                $scope.input1 = aa ;
            };

            console.log($injector.annotate(MainFucntion))
        }
        function information(name,age,location){
            return "lolly pop"};

            console.log(information.toString());;

        function ChangeName(){
            return function(input){
                input = input.replace("Bilal", "Adeel")
                return input
            }
        }
        })
    ();
