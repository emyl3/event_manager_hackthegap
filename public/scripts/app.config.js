app.config(configSettings);

function configSettings($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController as home',
  }).when('/newEvent', {
    templateUrl: 'views/newEvent.html',
    controller: 'NewEventController as newEvent',
  }).when('/existingEvents', {
    templateUrl: 'views/events.html',
    controller: 'EventsController as eventCtrl',
  });

  $locationProvider.html5Mode(true);
}
