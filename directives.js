// DIRECTIVES
reviewsApp.directive("searchResult", function () {
    return {
        templateUrl: 'directives/searchresult.html',
        replace: true
    }
});

reviewsApp.directive('review', function () {
    return {
        templateUrl: 'directives/review.html',
        replace: true
    }
});
