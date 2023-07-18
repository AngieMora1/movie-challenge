import { Galleria } from 'primereact/galleria';
import { useState, useEffect } from "react";
import carouselOptions from "./carouselOptions";
import api from "../../api/api";
import styles from './getUpComing.module.css'

function GetUpComing() {
    const apiImg = api.dataApi.baseUrlw500;
    const url ="https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1";
    const [upComing, setUpComing] = useState([]);

    useEffect(() => {
        fetch(url,api.options)
        .then(response => response.json())
        .then(data =>{ 
            setUpComing(data.results);
            });
    }, [])


    const imgCarousel = upComing.map((item) => {
            const pathImage = item.poster_path;
            const image = apiImg + pathImage;
            const title = item.title;
            const releaseDate = item.release_date;
            console.log(item)
            return ({img: image, title:title, date: releaseDate})
        });
    
    const itemTemplate = (item) => {
        return (
            <div className={styles.imgCarousel}>
                <img src={item.img} alt={item.title} style={{ width: '100%'}} />
                <div className={styles.dateCarousel}>Estreno: {item.date}</div>
            </div>
            )
    }
        
        return(
            <div className={styles.main}>
                <div className={styles.titleCarousel}>
                    <h3> Próximos estrenos en cines</h3>
                </div>
                <div className={styles.lCarousel}>
                    <Galleria value={imgCarousel} responsiveOptions={carouselOptions} numVisible={6} circular style={{ maxWidth: '100%' }}
                        thumbnail={itemTemplate} autoPlay transitionInterval={99999999999999}/>
                </div>
            </div>
        )
    }

export default GetUpComing;
