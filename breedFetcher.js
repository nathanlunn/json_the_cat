const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error !== null) {
    console.log('error:', error);
    return;
  }
  
  let data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log(`https://api.thecatapi.com/v1/breeds/search?q=${breed} could not be found.`);
    console.log('This breed does not exist.');
    return;
  }

  console.log(data[0].description);
});