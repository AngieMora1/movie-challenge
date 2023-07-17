import 'primereact/resources/themes/arya-orange/theme.css';
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';
// import NavBar from './components/layout/Header';
// import Getupcoming from './components/movies/Upcoming';
// import GetMovieList from './components/movies/MoviesList';
import Layout from './components/navRoutes/Layout';
import Home from './pages/Home';
import Premiere from './pages/Premiere';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="premiere" element={<Premiere />}/>
          </Route>
        </Routes>
      </>
  );
}

export default App;
 // prop 'path' en que momento se quiere renderizar un componente y el 'element' es el componente que se quiere renderizar