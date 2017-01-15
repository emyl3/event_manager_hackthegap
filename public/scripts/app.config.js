app.config(configSettings);

function configSettings($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController as home',
  }).when('/addEvent', {
    templateUrl: 'views/newEvent.html',
    controller: 'NewEventController as newEvent',
  }).when('/yourEvents', {
    templateUrl: 'views/events.html',
    controller: 'EventsController as ctrl',
  });

  $locationProvider.html5Mode(true);
}
