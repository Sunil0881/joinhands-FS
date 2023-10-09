import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Signin from "./pages/signin"
import Signupres from "./pages/signupres"
import Signupngo from './pages/signupngo'


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
         <Route 
            path="/signin" 
            element={ <Signin /> } 
          />
            <Route 
            path="/signupngo" 
            element={ <Signupngo /> } 
          />
          <Route 
            path="/signupres" 
            element={ <Signupres /> } 
          /> 
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
