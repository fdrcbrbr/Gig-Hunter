import fs from 'fs';

// Save the list
const artists = [];
fs.writeFileSync("artists.json", JSON.stringify(artists));

// Read the list
//const savedArtists = JSON.parse(fs.readFileSync("artists.json"));
