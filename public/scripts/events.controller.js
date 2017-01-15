app.controller('EventsController', EventsController);

function EventsController(EventsService) {
  ctrl = this;
  ctrl.eventsSelect = true;


  function getEvents() {
    EventsService.getAllEvents().then(function(res){
      console.log(res);
      ctrl.eventObject = res;
    });
  }

  ctrl.openEvent = function(data) {
    ctrl.eventsSelect = false;
    EventsService.getEvent(data).then(function(res) {
      ctrl.eventInfo = res;
    });
  };

  getEvents();
}
