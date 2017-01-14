app.service('EventsService', EventsService);

function EventsService($http) {

  function postEvent(data) {
    return $http.post('/events/newEvent', data)
    .then(function (response) {
      return response;
    });
  }

  function getAttendees() {
    return $http.get('/attendees/allAttendees')
    .then(function (response) {
      return response.data;
    });
  }

  return {
    postEvent: postEvent,
    getAttendees: getAttendees,
  };
}
