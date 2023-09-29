import { Routes, Route } from 'react-router-dom'

import Trangchu from './pages/Trangchu'
import Chitiet from './pages/Chitiet'
import SearchResults from './components/SearchResults';
import GenreMovies from './components/GenreMovies';
import './App.css';



const App: React.FC = () => {
  return (
    <div className="App">     
      <Routes >
        <Route path="/trangchu" element={<Trangchu />} />
        <Route path="/chitet/:id" element={<Chitiet />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/genre/:id" element={<GenreMovies />} />
      </Routes>
    </div>
  );
};

export default App;

