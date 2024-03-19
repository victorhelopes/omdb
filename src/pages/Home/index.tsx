import { useState } from 'react';
import { Button } from '@ui5/webcomponents-react';
import { Input } from '@ui5/webcomponents-react';

import { MovieInfos } from '../../components/Movie/index.tsx'
import { Header } from '../../components/Header/index.tsx';
import { Footer } from '../../components/Footer/index.tsx';

import { api } from '../../service/api.ts';

import './styles.scss';
import { IMovieInfos } from '../../types/movies.interface.ts';

export function Home(){
    const [search, setSearch] = useState("");
    const [movieInfos, setMovieInfos] = useState<IMovieInfos | null>(null);

    function getFilm(){
        api.get(`http://www.omdbapi.com/?apikey=932c9248&t=${search}`)
        .then(res => {
          if(res.data.Response === 'True'){
            setMovieInfos(res.data);
            return;
          }
          // setMovieInfos(null)
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
              <Input 
                type="Text"
                value={search}
                onChange={(value)=>{setSearch(value.target.value)}}
              />
              <Button className='mx-2' onClick={getFilm}>Search</Button>
              <Button onClick={()=>{setSearch("")}}>Reset</Button>
            </div>
            {movieInfos === null ? 
              <p>No movie founded</p>:
              <MovieInfos info={movieInfos}/>
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
}