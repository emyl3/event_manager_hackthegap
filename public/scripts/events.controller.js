app.controller('EventsController', EventsController);

function EventsController(EventsService) {
  ctrl = this;
  ctrl.eventsSelect = true;

  function getEvents() {
    EventsService.getAllEvents().then(function(res){
      ctrl.eventObject = res;
      return ctrl.eventObject;
    });
  }

  function showContact () {
    EventsService.getAttendees().then(function (res) {
      ctrl.contacts = res;
    });
  };

  ctrl.openEvent = function(data) {
    ctrl.eventsSelect = false;
    EventsService.getEvent(data).then(function(res) {
      ctrl.eventInfo = res;
      return res;
    }).then(function(res) {
      EventsService.getItems(data).then(function(res) {
        console.log(res);
        ctrl.itemsList = res;
      });
    });
  };

  getEvents();
  showContact();
}
