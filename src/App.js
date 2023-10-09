import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Signin from "./pages/signin"
import Signupres from "./pages/signupres"


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
            {/*<Route 
            path="/signupdon" 
            element={ <Signupdon /> } 
          />*/}
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
