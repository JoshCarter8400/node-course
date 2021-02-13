const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=770faf89cbbb8777bbb3a1b29a21f123&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        '. It is currently ' +
        response.body.current.temperature +
        ' and it feel like ' +
        response.body.current.feelslike +
        ' out '
    );
  }
});

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location please search another one');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
