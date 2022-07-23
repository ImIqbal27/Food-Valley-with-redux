import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';


function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Cards></Cards>}></Route>
        <Route path='/cart/:id' element={<CardDetails></CardDetails>}></Route>

      </Routes>
    </div>
  );
}

export default App;
