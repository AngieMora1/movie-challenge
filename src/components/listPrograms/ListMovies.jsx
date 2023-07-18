import { useState, useEffect } from "react";
import api from "../../api/api";

function PopularMovies(){
    const url ='https://api.themoviedb.org/3/trending/movie/week?language=es-ES';
        const [popularMovie, setPopularMovie] = useState([]);

    useEffect(() => {
        fetch(url,api.options)
        .then(response => response.json())
        .then(data =>{ 
            // const corte = data.slice()
            console.log(data.results.slice(0,10))
            setPopularMovie(data.results.slice(0,10))
            // setPopularMovie(data.results);
            });
    }, [])
    const list = popularMovie.map((item)=> {
        const img = api.dataApi.baseUrlw200 + item.poster_path;
        const title = item.title
        return(
            <div key={item.id}>
            <img src={img} alt={title} style={ {width: '100px'}}/>
            </div>
            )
    })
    console.log(list)
    return(
        <div> 
        </div>
    )
}
export default PopularMovies