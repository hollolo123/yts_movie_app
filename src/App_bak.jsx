import { Component } from 'react'
import './App.css'
import axios from 'axios';
import Movie from './components/Movie';

class App extends Component {
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async() => {
    // 객체구조분해할당 
    const { 
      data : {
        data : {
          movies
        }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');

    // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
    // console.log('movies :', movies); // 경로 : data > data > movies 
    // console.log('movies :', movies.data.data.movies); // 경로 : data > data > movies 

    this.setState({movies, isLoading : false });  // {key : value} ---> movies : [] 에 덮어씀(?)
    // 데이터를 담고 통신 -- 끗 ! 
  }

  //component가 Moute가 되면
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state; // isLoading : true 을 말함 
    return (
      <section className='container inner'>
        <h1>YTS Movie App</h1>
        { 
          // isLoading ? 'loading...' : 'We are ready'
          isLoading 
          ? (
            <div className='loader'>
              <p className='loader_text'>loading...</p>
            </div>
          ) : (
            <div className="movies">
              { 
                movies.map(movie => {
                  // console.log('movie :', movie)
                  // <Movie movie={movie} />
                  return <Movie 
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                })
              }
            </div>
          )
        }
      </section>
    )
  }
}

export default App
