app.controller('NewEventController', NewEventController);

function NewEventController(EventsService) {
  ctrl = this;
  ctrl.contactListStatus = false;
  ctrl.nextForm = false;

  ctrl.submit = function(eventdata) {
    ctrl.nextForm = !ctrl.nextForm;

    var data = {
      eventname: eventdata.eventname,
      type: eventdata.type,
      date: eventdata.date,
      time: eventdata.time,
      location: eventdata.location,
      contact: eventdata.contact,
    };
    EventsService.postEvent(data).then(function(res) {
      ctrl.eventsId = res.data;
      console.log(res);
    });
  };

  ctrl.showContact = function () {
    EventsService.getAttendees().then(function (res) {
      ctrl.contacts = res;
    });
    ctrl.contactListStatus = !ctrl.contactListStatus;
  };

  ctrl.submitItem = function (item, eventid) {
    var data = {
      itemname: item,
      event_id: eventid,
    };
    console.log(data);
    EventsService.postItem(data).then(function (res) {
        EventsService.getItems(eventid).then(function (res){
          console.log(eventid);
          console.log('res', res);
          ctrl.itemsObject = res;
        });
      });
      ctrl.itemname = '';
    };
  };
