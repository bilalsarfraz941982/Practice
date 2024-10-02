(
    function(){
        angular.module("myFirstApp", [])
        .controller("myFirstController" , MainFucntion);

        MainFucntion.$inject=["$scope", "$filter"];

        function MainFucntion($scope,$filter){
            $scope.name = "Bilal Sarfraz";
            $scope.age= "my age is 42 years old ;(";
            $scope.input="";
            $scope.ageResult =""

            $scope.ageFinder = function(){
                 $scope.ageResult = $scope.age
            };

            $scope.upperCase = function(){
                var aa = $filter("uppercase");
                var bb = aa($scope.input);
                $scope.input = bb ;
            }
        }
    }
)();
