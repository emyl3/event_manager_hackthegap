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

  function getAllEvents() {
    return $http.get('/events/allEvents')
    .then(function (response) {
      return response.data;
    });
  }

  function getEvent(data) {
    return $http.get('/events/eventInfo', data)
    .then(function (response) {
      return response.data;
    });
  }

  return {
    postEvent: postEvent,
    getAttendees: getAttendees,
    getAllEvents: getAllEvents,
  };
}
