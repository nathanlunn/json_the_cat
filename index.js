let { fetchBreedDescription } = require('./breedFetcher');
let breed = process.argv[2];


fetchBreedDescription(breed, (error, description) => {
  if (error !== null) {
    console.log('error:', error);
    return;
  }
  console.log(description);
});

