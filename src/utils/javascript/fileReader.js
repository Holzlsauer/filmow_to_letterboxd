const fs = require('fs');
const watch = require('node-watch');
const {EventEmitter} = require('events');

function readMovies() {
  const eventEmitter = new EventEmitter();
  const moviesFile = process.cwd() + '/current_movie.txt';
  watch(moviesFile, (event, name) => {
    const data = fs.readFileSync(moviesFile, 'utf8');
    eventEmitter.emit('movieAdded', data.split(',')[0]);
  });
  return eventEmitter;
}

module.exports = readMovies;
