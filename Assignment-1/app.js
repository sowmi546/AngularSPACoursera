(function()
{
    'use strict';
    angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope)
    {
        $scope.items="";
        $scope.message="";
        $scope.checkIfTooMuch = function()
        {
            $scope.items = $scope.items.trim();
            if($scope.items==='')
                {
                    $scope.message="Please enter the items needed";
                    $scope.testType="danger";
                }
            else
                {
                    var $total = $scope.items.split(",");
                    var $length= $total.length;
                    if($length<=3)
                        {
                            $scope.message="Enjoy!";
                            $scope.testType="success";
                        }
                    else
                        {
                            $scope.message="Too much!";
                            $scope.testType="warning";
                        }
                }
        };
    }
})();

