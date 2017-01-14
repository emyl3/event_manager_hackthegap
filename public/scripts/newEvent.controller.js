app.controller('NewEventController', NewEventController);

function NewEventController(EventsService) {
  ctrl = this;
  ctrl.contactListStatus = false;
  ctrl.submit = function(eventdata) {
    var data = {
      eventname: eventdata.eventname,
      type: eventdata.type,
      date: eventdata.date,
      time: eventdata.time,
      location: eventdata.location,
      contact: eventdata.contact,
    };
    EventsService.postEvent(data).then(function(res) {
    });
  };

  ctrl.showContact = function () {
    EventsService.getAttendees().then(function (res) {
      ctrl.contacts = res;
    });
    ctrl.contactListStatus = !ctrl.contactListStatus;
  };
}
