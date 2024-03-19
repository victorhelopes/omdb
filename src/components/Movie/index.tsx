import './styles.scss'

import { IMovieInterface } from './movieInfos.interface';
import { Button } from '@ui5/webcomponents-react';

export function MovieInfos({info}: IMovieInterface){
    function addFavorite(){
        const data = localStorage.getItem('favorites');
        if(!data) return;
        let array = JSON.parse(data)
        if(array && !array.find((infoArray: string)=>{return infoArray === info.Title})){
            array.push(info.Title)
        }
        if(array === null)
            array = [info.Title]
            localStorage.setItem('favorites', JSON.stringify(array))
    }

    return(
        <div className='movieInfos d-flex justify-content-center align-items-center flex-wrap'>
            {info && <>
                <div>
                    <h2>{info?.Title}</h2>
                    <p>{info?.Plot}</p>
                    <div className='my-3'>
                        <h3>Actor</h3>
                        <p>{info?.Actors}</p>
                    </div>
                    <div className='my-3'>
                        <h3>Review</h3>
                        <p>{info?.Ratings[0]?.Value || 'No rating'}</p>
                    </div>
                    <div>
                        <Button onClick={addFavorite}>Favorite</Button>
                    </div>
                </div>
                <img 
                    src={info?.Poster} 
                    alt="movie poster"
                    className='mt-3'
                />
            </> 
            }
        </div>
    )
}