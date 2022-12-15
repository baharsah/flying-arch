
import CustomNavbar from './components/navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/Home'
import DetailTour from './components/DetailTour'




function App() {

  return (
 
    <>
    <Router>

    <CustomNavbar></CustomNavbar>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<DetailTour />}></Route>
      </Routes>
    <Footer></Footer>
    {/* css module and scss modeling */}
    {/* PR for react cards */}
    {/* footer  */}
    {/* add router */}
    </Router>

    </>

  )
}

export default App
