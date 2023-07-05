import { useEffect, useState } from "react"; 
import {Galleria} from 'primereact/galleria';

// const apiKey = '457ba92725d35c8968f3e3a5bc8b4da1'
// const base= 'https://api.themoviedb.org/3/'
    
function Getupcoming(){
    const apiImg = 'https://image.tmdb.org/t/p/w500/';
    const [upcoming, setUpcoming] = useState([]);

    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1'

    useEffect(() => { 
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTdiYTkyNzI1ZDM1Yzg5NjhmM2UzYTViYzhiNGRhMSIsInN1YiI6IjY0OTRiOTlmYTI4NGViMDBlMmI2OTAzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ad_6X7S2yTpjQTJg8Iz4dKyjtj6hAOx_LcWXRdpNe8g'
            }
            };
        fetch(url,options)
        .then(response => response.json())
        .then(data =>{ 
                setUpcoming(data.results);
            });
    }, [])

        const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    
    const prueba = upcoming.map((data)=>{
        const titulo = data.title;
        const archivo = data.poster_path;
        const imagenes = apiImg+archivo
        const video = data.video
        const estrenos = {title: titulo,linkImage:imagenes, video:video}
        return estrenos

    })

    const itemTemplate = (item) => {
        return (
            <div className="imagendiv">
            <img src={item.linkImage} alt={item.tittle} style={{ width: '50%' }} />
            </div>
            )
    }
    const thumbnailTemplate = (item) => {
        return (
            <div className="imagendiv2">
            <img src={item.linkImage} alt={item.tittle} style={{ width: '50%' }} />
            </div>
            )
    }
    const caption = (item) => {
        return (
            <>
                <div className="titleProximos">{item.title}</div>
                <div className="titleProxs">{item.video}</div>
                <p className="text-movies">{item.title}</p>
            </>
        );
    }
    
    return(
        <div className="main">
        <h1>Prueba</h1>
        <div className="gallerydiv">
        <Galleria 
            value={prueba} 
            responsiveOptions={responsiveOptions} 
            numVisible={5} 
            item={itemTemplate} 
            thumbnail={thumbnailTemplate} 
            caption={caption}
            circular autoPlay transitionInterval={3000}/>
        </div>
        </div>

    )
    }
    
export default Getupcoming;

    // return (
    //     <div className="card">
    //         <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
    //             item={itemTemplate} thumbnail={thumbnailTemplate} />
    //     </div>
    // )
    // return (
    //     <>
    //     <h2>Lista estrenos</h2>
    //     <div>
    //         {/* {upcoming.map((movielist)=>
    //         <MoviesList key={movielist.id} {...movielist}/>)} */}
    //     </div>
    //     </>
    //     );