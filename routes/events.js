const router = require('express').Router();
const pool = require('../database/connection');

//add a new event
router.post('/newEvent', function (req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the database', err);
        res.sendStatus(500);
        return;
      }

      client.query('INSERT INTO events (eventsname, type, date, time, location, contact) VALUES ($1, $2, $3, $4, $5, $6) returning *;',
        [req.body.eventname, req.body.type, req.body.date, req.body.time, req.body.location, req.body.contact],
        function (err, result) {
          if (err) {
            console.log('Error querying the database', err);
            res.sendStatus(500);
            return;
          }

          console.log('Got rows from the database: ', result.rows);
          res.send(result.rows);
        });
    } finally {
      done();
    }
  });
});

//add a new attendee
router.post('/newAttendee', function (req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the database', err);
        res.sendStatus(500);
        return;
      }

      client.query('INSERT INTO attendees (name, events_id) VALUES ($1, $2) returning *;',
        [req.body.name, req.body.events_id],
        function (err, result) {
          if (err) {
            console.log('Error querying the database', err);
            res.sendStatus(500);
            return;
          }

          console.log('Got rows from the database: ', result.rows);
          res.send(result.rows);
        });
    } finally {
      done();
    }
  });
});

//gets all Events and info
router.get('/allEvents', function (req, res) {
  var eventId = req.query.eventId;
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the database', err);
        res.sendStatus(500);
        return;
      }

      client.query('SELECT * FROM events',
        function (err, result) {
          if (err) {
            console.log('Error querying the database', err);
            res.sendStatus(500);
            return;
          }

          console.log('Got rows from the database: ', result.rows);
          res.send(result.rows);
        });

    } finally {
      done();
    }
  });
});

//gets one event info with event id
router.get('/eventInfo', function (req, res) {
  var eventId = req.query.eventId;
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the database', err);
        res.sendStatus(500);
        return;
      }

      client.query('SELECT * FROM events WHERE events.id = $1;',
        [eventId],
        function (err, result) {
          if (err) {
            console.log('Error querying the database', err);
            res.sendStatus(500);
            return;
          }

          console.log('Got rows from the database: ', result.rows);
          res.send(result.rows);
        });

    } finally {
      done();
    }
  });
});
//
// //gets event items with eventID
// router.get('/eventItems', function (req, res) {
//   var eventId = req.query.eventId;
//   pool.connect(function (err, client, done) {
//     try {
//       if (err) {
//         console.log('Error connecting to the database', err);
//         res.sendStatus(500);
//         return;
//       }
//
//       client.query('SELECT attendees.id, name, itemname FROM events JOIN attendees ' +
//       'ON events.id = attendees.events_id JOIN items ON attendees.id = items.attendees_id ' +
//       'WHERE events.id = $1',
//         [eventId],
//         function (err, result) {
//           if (err) {
//             console.log('Error querying the database', err);
//             res.sendStatus(500);
//             return;
//           }
//
//           console.log('Got rows from the database: ', result.rows);
//           res.send(result.rows);
//         });
//
//     } finally {
//       done();
//     }
//   });
// });

module.exports = router;
