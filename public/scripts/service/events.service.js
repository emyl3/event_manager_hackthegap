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
    console.log(data);
    return $http.get('/events/eventInfo', {
      params: {
        eventId: data,
      },
    })
    .then(function (response) {
      return response.data;
    });
  }

  function postItem(data) {
    return $http.post('/items/newItem', data)
    .then(function (response) {
      return response;
    });
  }

  function getItems(data) {
    console.log(data);
    return $http.get('/items/allItems', {
      params: {
        eventId: data,
      },
    })
    .then(function (response) {
      return response.data;
    });
  }

  return {
    postEvent: postEvent,
    getAttendees: getAttendees,
    getAllEvents: getAllEvents,
    getEvent: getEvent,
    postItem: postItem,
    getItems: getItems,
  };
}
