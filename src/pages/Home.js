import Community from "../components/Community";
import Mainhome from "../components/Mainhome";
import About from "../components/about"
import Donate from "../components/donate";
import Footer from "../components/footer"

const Home = () => {
    return ( 
        <div>
          <Mainhome />
          <Community />
          <About />
          <Donate />
          <Footer />
         
        </div>
     );
}
 
export default Home;