const pg = require('pg');

var config = {
  database: 'event_manager',
};

var pool = new pg.Pool(config);

module.exports = pool;
