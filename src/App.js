import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import CarouselUI from './components/CarouselUI';
import Home from './components/Home';
import Footer from './components/Footer';



function App() {
  return (
    <div>

      <Header></Header>

      <Routes>

        {/* <Route path='/' element={<Cards></Cards>}></Route> */}
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart/:id' element={<CardDetails></CardDetails>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
