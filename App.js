(
    function(){
        angular.module("myFirstApp", [])
        .controller("myFirstController" , MainFucntion);

        MainFucntion.$inject=["$scope", "$filter"];

        function MainFucntion($scope,$filter){
            $scope.name = "Bilal Sarfraz";
            $scope.age= "my age is 42 years old ;("

            $scope.ageFinder = function(){
                 $scope.age
            }
        }
    }
)();
