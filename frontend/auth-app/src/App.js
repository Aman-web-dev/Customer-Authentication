import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/logIn';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import EditWindow from './components/edit';

function App() {
  return (
    <div className="App">


    <BrowserRouter>  
<Navbar/>

    <Routes>
<Route exaxt path='/' element={<HomePage/>}/>
<Route exaxt path='/log-in' element={<LogIn/>}/>
<Route exaxt path='/sign-up' element={<SignIn/>}/>
<Route exaxt path='/:id' element={<EditWindow/>}/>






</Routes>
</BrowserRouter>
 
 </div>
  );
}

export default App;
