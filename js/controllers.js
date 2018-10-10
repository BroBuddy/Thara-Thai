var nameSpace = angular.module("MealApp", []);

nameSpace.controller("MealFunction", ['$scope','$http', function($scope, $http)
    {
        $http.get('js/data.json').success (function(data){
            $scope.mealVariable = data;
            $scope.orderMeal = 'id';
            $scope.query1 = 'Vorspeisen';
            $scope.query2 = 'Gemischte Vorspeise';
            $scope.query3 = 'Suppen';
            $scope.query4 = 'Salate';
            $scope.query5 = 'Kindermenü';
            $scope.query6 = 'Gerichte mit Huhn';
            $scope.query7 = 'Gerichte mit Rind';
            $scope.query8 = 'Gerichte mit Lamm';
            $scope.query9 = 'Gerichte mit Ente';
            $scope.query10 = 'Gerichte mit Garnelen';
            $scope.query11 = 'Gerichte mit Fisch';
            $scope.query12 = 'Tintenfisch und Meeresfrüchte Gerichte';
            $scope.query13 = 'Vegetarische Gerichte';
            $scope.query14 = 'Reis und Nudeln';
            $scope.query15 = 'Beilagen';
            $scope.query16 = 'Desserts';
        });

    }]
);
