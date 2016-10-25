var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tripSchema = new Schema({
  username: String,
  trip_name: String,
  playlist_uri: String,
  start_latitude: String,
  start_longitude: String,
  end_latitude: String,
  end_longitude: String
  }, { timestamps: { createdAt: 'created_at' } });

var TripModel = mongoose.model('Trip', tripSchema);

module.exports = TripModel;