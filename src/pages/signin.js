import kolam from "../assets/kolam.png";
import maijhlogo from "../assets/maijhlogo.png";

const Signin = () => {
    return ( 
        <div class="bg-black h-[671px]">
    <main class="grid grid-cols-2 ">
    <div class="pl-20">
        <img src={maijhlogo} alt="logo" width="550px"></img>
    </div>
    <div class="pr-56 pl-32 pt-10">
        <div class=" pt-10 border p-10">
            <div class="flex justify-center pb-5">
                <h1 class="text-white  text-2xl font-bold m-3">Login</h1>
            </div>
            <div class="">
                <label for="username" class="text-white  font-semibold block">Username</label>
                <input type="text" id="username" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                    placeholder="Enter your Username..."></input>
            </div>
            <div class=" pt-4">
                <label for="Password" class="text-white font-semibold  block">Password</label>
                <input type="password" id="username" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                    placeholder="Enter your Password..."></input>
            </div>
            <div class="pt-20 flex justify-center">
                <a href="#signin" class="rounded-full px-16 py-2 border bg-red-500 text-white text-base font-bold hover:text-red-500 hover:bg-white">Sign in</a>
            </div>
           
            <div class="pt-5 grid grid-cols-3 items-center">
                <div class="">
                    <hr></hr>
                </div>
                <div>
                    <span class="text-white flex justify-center ">or</span>
                </div>
                <div>
                    <hr></hr>   
                </div>
                
            </div>

            <div class="px-6 pt-3"> 
                <p class="text-white">Don't have an account? <a  class="text-red-500" href="Register_NGO.html">Register here</a></p>
            </div>
        </div>
    </main>
    <div class="flex justify-end bg-black">
        <img src={kolam} alt="design" width="80px"></img>
    </div>
</div>
     );
}
 
export default Signin;

