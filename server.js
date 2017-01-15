const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const events = require('./routes/events');
const attendees = require('./routes/attendees');
const items = require('./routes/items');


var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.use('/events', events);
app.use('/attendees', attendees);
app.use('/items', items);


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Press CTRL + C to exit. Listening on PORT:', port);
});
