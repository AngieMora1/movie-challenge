import { useState, useEffect } from 'react';
import {Galleria} from 'primereact/galleria';

const apiImg = 'https://image.tmdb.org/t/p/w500/';

const MoviesList = ({title,poster_path}) => {
    return(
        <>
            {<h3>{title}</h3> }
            {<img src={apiImg+poster_path }/>}
        </>
    );
}
export default MoviesList;

{/* <h3>{ title }</h3>
<img src={ apiImg+poster_path }/> */}
// const poster = apiImg+poster_path
// const titles = title
// const [images, setImages] = useState(null);
// const responsiveOptions = [
//     {
//         breakpoint: '991px',
//         numVisible: 4
//     },
//     {
//         breakpoint: '767px',
//         numVisible: 3
//     },
//     {
//         breakpoint: '575px',
//         numVisible: 1
//     }
// ];
// useEffect(()=>{
//     setImages
// })

// const itemTemplate = () => {
//     return <img src={apiImg+poster_path} alt={titles} style={{ width: '100%' }} />
// }

// return(
//     <div>
//         <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
//             item={itemTemplate} />
//     </div>
// )