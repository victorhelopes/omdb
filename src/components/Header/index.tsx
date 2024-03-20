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
                        <span className="material-icons-outlined">close</span>
                    </div>
                    {favorites?.map((favorite)=>{
                        return <p>{favorite}</p>
                    })}
            </div>}
        </header>
    )
}