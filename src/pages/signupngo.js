import gradient from "../assets/gradient.png"
import maijhlogo from "../assets/maijhlogo.png"
import kolam from "../assets/kolam.png"
const Signupngo = () => {
    const style1 = {
        backgroundImage: `url(${gradient})`
    }
    return ( 
        
        <body class="bg-black " >

   

    <main class="grid grid-cols-2 pt-6">
        <div class="pl-20">
            <img src={maijhlogo} alt="logo" width="550px"></img>
        </div>
        <div class="pr-56 pl-32 ">              
            <div class=" grid grid-cols-2 ">
                <a  href="Register_NGO.html" class="text-white  text-xl font-semibold border bg-red-500 pl-3 p-3">Register as NGO</a>
                <a  href="Register_res.html" class="text-white  text-xl font-semibold border bg-red-500 pl-3 p-3">Register as Donor</a>
            </div>
            <div class=" pt-3 border p-10">
                
                <div class="">
                    <label for="ngoname" class="text-white  font-semibold block">NGO Name</label>
                    <input type="text" id="ngoname" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                        placeholder="Enter your NGO Name..."></input>
                </div>
                <div class=" pt-4">
                    <label for="text" class="text-white font-semibold  block">Contact Name</label>
                    <input type="text" id="contactname" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                        placeholder="Enter your Name..."></input>
                </div>
                <div class=" pt-4">
                    <label for="emailid" class="text-white font-semibold  block">Email Id</label>
                    <input type="text" id="emailid" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                        placeholder="Enter your Email Id..."></input>
                </div>
                <div class=" pt-4">
                    <label for="address" class="text-white font-semibold  block">NGO Address</label>
                    <input type="text" id="address" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                        placeholder="Enter your House Address..."></input>
                </div>
                <div class=" pt-4">
                    <label for="pincode" class="text-white font-semibold  block">Pin Code</label>
                    <input type="number" id="pincode" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                        placeholder="Enter your Pin Code..."></input>
                </div>
            
                <div class=" pt-4">
                    <label for="city" class="text-white font-semibold  block">City</label>
                    <input type="text" id="city" class="  text-base p-1 rounded-sm px-3  w-full focus:ring-0 focus:border-gray-500"
                        placeholder="Enter your city Name..."></input>
                </div>
                <div class="pt-5 flex justify-center">
                    <a href="sign.html" class="rounded-full px-16 py-2 border bg-red-500 text-white text-base font-bold hover:text-red-500 hover:bg-white">Register</a>
                </div>
               
              

            </div>

        </div>
        
    </main>

    <div class="flex justify-end">
        <img src={kolam} alt="design" width="80px"></img>
    </div>


    
</body>
     );
}
 
export default Signupngo;