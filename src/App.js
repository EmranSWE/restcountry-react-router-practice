
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FileNotFound from './Components/FileNotFound/FileNotFound';
import Countries from './Components/Countries/Countries';
import CountriesDetailInfo from './Components/CountriesDetailInfo/CountriesDetailInfo';
function App() {
  return (
    <div className="App">
    {/* Practicing The Routes */}
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='countries' element={<Countries></Countries>}></Route>
    <Route path='/countries/:countryId' element={<CountriesDetailInfo></CountriesDetailInfo>}></Route>
    <Route path='*' element={<FileNotFound></FileNotFound>}></Route>
    </Routes>
 
    </div>
  );
}

export default App;
