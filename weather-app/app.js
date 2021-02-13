const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=770faf89cbbb8777bbb3a1b29a21f123&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  console.log(
    'It is currently ' +
      response.body.current.temperature +
      ' and it feel like ' +
      response.body.current.feelslike +
      ' out '
  );
});
