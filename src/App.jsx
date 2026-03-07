import './App.css'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
