const router = require('express').Router();
const pool = require('../database/connection');

//add a new event
router.post('/newItem', function (req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the database', err);
        res.sendStatus(500);
        return;
      }

      client.query('INSERT INTO items (events_id, itemname) VALUES ($1, $2) returning *;',
        [req.body.event_id, req.body.itemname],
        function (err, result) {
          if (err) {
            console.log('Error querying the database', err);
            res.sendStatus(500);
            return result;
          }

          console.log('Got rows from the database: ', result.rows);
          res.send(result.rows);
        });
    } finally {
      done();
    }
  });
});

router.get('/allItems', function (req, res) {
  var eventId = req.query.eventId;
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the database', err);
        res.sendStatus(500);
        return;
      }

      client.query('SELECT * FROM items WHERE events_id = $1;',
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

module.exports = router;
