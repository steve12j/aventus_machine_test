
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';

function App() {



  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register"  element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
