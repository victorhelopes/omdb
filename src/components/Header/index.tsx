import { Button } from '@ui5/webcomponents-react';
import './styles.scss'
import { useState } from 'react'

export function Header(){
    const [modalShowFavorites, setModalShowFavorites] = useState(false)
    const [favorites, setFavorites] = useState([])

    function showFavorites(){
        const favoritesLocalStorage = localStorage.getItem('favorites');
        if(!favoritesLocalStorage) return ;
        setFavorites(JSON.parse(favoritesLocalStorage))
        setModalShowFavorites(!modalShowFavorites)
    }

    return(
        <header className='py-4 d-flex aling-items-center justify-content-center'>
            <p className='m-0 text-center'>Header</p>
            <Button onClick={showFavorites} className='mx-2'>Favorites</Button>
            {modalShowFavorites && <div className='Favorites'>
                    <div 
                        onClick={
                            ()=>{
                                setModalShowFavorites(false)
                            }
                        } 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </div>
                    {favorites?.map((favorite)=>{
                        return <p>{favorite}</p>
                    })}
            </div>}
        </header>
    )
}