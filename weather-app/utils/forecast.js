const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=770faf89cbbb8777bbb3a1b29a21f123&query=' +
    latitude +
    ',' +
    longitude +
    '&units=f';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect');
    } else if (response.body.error) {
      callback('Unable to find location');
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          '. It is currently ' +
          response.body.current.temperature +
          ' and it feel like ' +
          response.body.current.feelslike +
          ' out '
      );
    }
  });
};

module.exports = forecast;
