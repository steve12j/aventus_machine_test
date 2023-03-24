
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register"  element={<Register />}></Route>
        <Route path="/update/:userid"  element={<Update />} ></Route>
      </Routes>
    </>
  );
}

export default App;
