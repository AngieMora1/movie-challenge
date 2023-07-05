// import { useState, useEffect } from 'react';
// import {Galleria} from 'primereact/galleria';


// const Hola = () => {
//         // const [images, setImages] = useState(null);
//         const responsiveOptions = [
//             {
//                 breakpoint: '991px',
//                 numVisible: 4
//             },
//             {
//                 breakpoint: '767px',
//                 numVisible: 3
//             },
//             {
//                 breakpoint: '575px',
//                 numVisible: 1
//             }
//         ];
    
//         // useEffect(() => {
//         //     PhotoService.getImages().then(data => setImages(data));
//         // }, [])
    
//         const itemTemplate = (item) => {
//             return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
//         }
    
//         const thumbnailTemplate = (item) => {
//             return <img src={item.thumbnailImageSrc} alt={item.alt} />
//         }
    
//         return (
//             <div className="card">
//                 <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
//                     item={itemTemplate} thumbnail={thumbnailTemplate} />
//             </div>
//         )
// }
// export default Hola;

// // ``import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';}
// // import { useState, useEffect } from 'react';
// // import { Galleria } from 'primereact/galleria';
// // import { RadioButton } from 'primereact/radiobutton';
// // // import { PhotoService } from './service/PhotoService';
// // import Getupcoming from './Header'


// // export default function ThumbnailDemo() {
// //     const [images, setImages] = useState(null);
// //     const [position, setPosition] = useState('bottom');
// //     const positionOptions = [
// //         {
// //             label: 'Bottom',
// //             value: 'bottom'
// //         },
// //         {
// //             label: 'Top',
// //             value: 'top'
// //         },
// //         {
// //             label: 'Left',
// //             value: 'left'
// //         },
// //         {
// //             label: 'Right',
// //             value: 'right'
// //         }
// //     ];
// //     const responsiveOptions = [
// //         {
// //             breakpoint: '991px',
// //             numVisible: 4
// //         },
// //         {
// //             breakpoint: '767px',
// //             numVisible: 3
// //         },
// //         {
// //             breakpoint: '575px',
// //             numVisible: 1
// //         }
// //     ];

// //     useEffect(() => {
// //         Getupcoming().then(data => setImages(data));
// //     }, []);

// //     const itemTemplate = (item) => {
// //         return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
// //     }

// //     const thumbnailTemplate = (item) => {
// //         return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
// //     }

// //     return (
// //         <div className="card">
// //             <div className="flex flex-wrap gap-3 mb-5">
// //                 {positionOptions.map((option) => {
// //                     const { label, value } = option;

// //                     return (
// //                         <div className="flex align-items-center" key={label}>
// //                             <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
// //                             <label htmlFor={label} className="ml-2">
// //                                 {label}
// //                             </label>
// //                         </div>
// //                     );
// //                 })}
// //             </div>
// //             <Galleria style={{ maxWidth: '640px' }} value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnailsPosition={position} thumbnail={thumbnailTemplate} />
// //         </div>
// //     )
// // }``