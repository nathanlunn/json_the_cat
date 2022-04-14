const request = require('request');
// const breed = process.argv[2];

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (body === '[]') {
      callback("breed not found", null);
      return;
    }
    if (error) {
      callback(error, null);
      return;
    }

    let data = JSON.parse(body);
    callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};



