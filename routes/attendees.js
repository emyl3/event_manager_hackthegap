const router = require('express').Router();
const pool = require('../database/connection');

//gets all attendees
router.get('/allAttendees', function (req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the database', err);
        res.sendStatus(500);
        return;
      }

      client.query('SELECT name FROM attendees',
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
