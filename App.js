(
    function(){
        angular.module("myFirstApp", [])
        .controller("myFirstController" , MainFucntion);

        MainFucntion.$inject=["$scope", "$filter"];

        function MainFucntion($scope,$filter){
            $scope.name = "Bilal Sarfraz"
        }
    }
)();
