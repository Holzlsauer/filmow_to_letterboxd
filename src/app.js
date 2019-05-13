import React, {Component} from 'react';
import Form from './components/Form';
import readMovies from './utils/javascript/fileReader';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleMovieAdded = this.handleMovieAdded.bind(this);
    this.state = {
      movies: []
    };
  }
  handleMovieAdded() {
    const emitter = new readMovies();

    emitter.on('movieAdded', (movie) => {
      const newMovies = this.state.movies.concat(movie);
      this.setState({movies: newMovies});
    });
  }
  render () {
    return (
      <div className="column is-two-thirds">
        <Form handleMovieSubmit={this.handleMovieAdded}/>
        {this.state.movies ? this.state.movies.map((film) => {
          return <div>{film}</div>;
        }) : null}
      </div>
    );
  }
};

export default App;
