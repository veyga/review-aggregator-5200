// ROUTES
reviewsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.template.html',
            controller: 'homeController'
        })

        .when('/businesses', {
            templateUrl: 'pages/businesses.template.html',
            controller: 'businessesController'
        })

        .when('/reviews', {
            templateUrl: 'pages/reviews.template.html',
            controller: 'reviewsController'
        })

        .when('/post', {
            templateUrl: 'pages/post.template.html',
            controller: 'postController'
        })
});