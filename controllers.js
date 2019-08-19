// CONTROLLERS
reviewsApp.controller('homeController', ['$scope', '$location', 'businessService',
    function ($scope, $location, businessService) {

        $scope.businessName = businessService.businessName;
        $scope.city = businessService.businessName;

        $scope.$watch('businessName', function () {
            businessService.businessName = $scope.businessName;
        });

        $scope.$watch('city', function () {
            businessService.city = $scope.city;
        });

        $scope.submit = function () {
            $location.path('/businesses');
        }
    }]);

reviewsApp.controller('businessesController', ['$scope', 'businessService', 'businessesDAOService', 'formattingService',
    function ($scope, businessService, businessesDAOService, formattingService) {
        $scope.businessName = businessService.businessName;
        $scope.city = businessService.city;

        $scope.businesses = businessesDAOService.searchForBusinesses($scope.businessName, $scope.city);

        $scope.formattedAddress = (business) => formattingService.formattedAddress(business);

        $scope.showReviews = (business) => $scope.business = business;

        $scope.$watch('business', function () {
            businessService.business = $scope.business;
        });

    }]);

reviewsApp.controller('reviewsController', ['$scope', 'businessService', 'formattingService',
    function ($scope, businessService, formattingService) {

        $scope.business = businessService.business;

        $scope.formattedAddress = (business) => formattingService.formattedAddress(business);

    }]);

reviewsApp.controller('postController', ['$scope', '$location', 'toastr', 'businessService', 'businessesDAOService',
    function ($scope, $location, toastr, businessService, businessesDAOService) {
        $scope.business = businessService.business;


        $scope.post = function () {
            var review = {
                date: new Date(),
                stars: $scope.stars,
                text: $scope.reviewtext,
            };

            businessesDAOService.post($scope.business.business_id, review);
            toastr.success('Review Posted!');
            $location.path('/reviews');
        }

    }]);
