import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route 
            path="/" 
            element={ <Home /> } 
          />
          {/* <Route 
            path="/signin" 
            element={ <Login /> } 
          />
          <Route 
            path="/signupdon" 
            element={ <Signupdon /> } 
          />
          <Route 
            path="/signupres" 
            element={ <Signupres /> } 
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
