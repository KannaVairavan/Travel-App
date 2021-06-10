import React, {useState, useEffect} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function FavoriteButton() {
    const [favorite, setFavorite] = useState(0);


    function setState(e) {
        e.preventDefault();
        console.log(favorite)
            favorite ? setFavorite(0) :
            setFavorite(1)
        
    }
    return(
        favorite ? 
        <FavoriteBorderIcon onClick = {
            (e) => setState(e)}/> : 
        <FavoriteIcon onClick = {
            (e) => setState(e)}/>
    )
}

 export default FavoriteButton;  