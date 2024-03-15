import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { MovieInfos } from '../../components/Movie';
import { Header } from '../../components/Header/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

import { api } from '../../service/api.js';

import './styles.scss';

export function Home(){
    const [search, setSearch] = useState("");
    const [movieInfos, setMovieInfos] = useState();

    function getFilm(){
        api.get(`http://www.omdbapi.com/?apikey=932c9248&t=${search}`)
        .then(res => {
          if(res.data.Response === 'True'){
            setMovieInfos(res.data);
            return;
          }
          setMovieInfos(null)
        })
    }

    return(
      <div className='Home'>
        <div>
          <Header/>
          <div className='body'>
            <h2>Movie searcher</h2>
            <p>Search a film by title</p>
            <div className="search m-auto d-md-flex d-sm-block">
              <Form.Control
                  type="text"
                  placeholder="Film name"
                  aria-describedby="searchHelpBlock"
                  value={search}
                  onChange={(value)=>{setSearch(value.target.value)}}
                  className='my-2'
              />
              <Form.Text id="searchInput"></Form.Text>
              <Button variant="secondary" size='lg' className='mx-2' onClick={getFilm}>Search</Button>
              <Button variant="secondary" size='lg' onClick={()=>{setSearch("")}}>Reset</Button>
            </div>
            {movieInfos === null && <p>No movie founded</p>}
            <MovieInfos info={movieInfos}/>
          </div>
        </div>
        <Footer/>
      </div>
    )
}