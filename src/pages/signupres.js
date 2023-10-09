import signInImage from '../assets/signinimage.png'
import kolam from "../assets/kolam.png"
const Signupres = () => {
    return ( 
        <div class="bg-black h-screen">
            <main class="flex flex-col items-center mx-5 md:flex-row md:justify-center md:mx-5">
                <div class="hidden md:block md:w-full">
                    <img src={signInImage} alt="logo" width="550px"></img>
                </div>
                <div class="mt-5 text-base rounded-3xl w-full border md:mx-28">
                    <div class="flex w-full">
                        <a href="Register_NGO.html" class="text-white font-semibold w-full border rounded-tl-3xl bg-red-500 p-3">Register as NGO</a>
                        <a href="Register_res.html" class="text-white font-semibold w-full border rounded-tr-3xl bg-red-500 p-3">Register as Donor</a>
                    </div>
                    <div class="px-5 py-5">
                    <div class="pt-4">
                        <label for="restaurantname" class="text-white  font-semibold block">Restaurant Name</label>
                        <input type="text" class="text-base p-1 rounded-sm px-3 w-full focus:ring-0 focus:border-gray-500"
                            placeholder="Enter your Restaurant Name..."></input>
                    </div>
                    <div class=" pt-4">
                        <label for="text" class="text-white font-semibold  block">Contact Name</label>
                        <input type="text" class="text-base p-1 rounded-sm px-3 w-full focus:ring-0 focus:border-gray-500"
                            placeholder="Enter your Name..."></input>
                    </div>
                    <div class=" pt-4">
                        <label for="emailid" class="text-white font-semibold  block">Email Id</label>
                        <input type="text" class="text-base p-1 rounded-sm px-3 w-full focus:ring-0 focus:border-gray-500"
                            placeholder="Enter your Email Id..."></input>
                    </div>
                    <div class=" pt-4">
                        <label for="address" class="text-white font-semibold  block">Restaurant Address</label>
                        <input type="text" class="text-base p-1 rounded-sm px-3 w-full focus:ring-0 focus:border-gray-500"
                            placeholder="Enter your Restaurant Address..."></input>
                    </div>
                    <div class=" pt-4">
                        <label for="pincode" class="text-white font-semibold  block">Pin Code</label>
                        <input type="number" id="pincode" class="text-base p-1 rounded-sm px-3 w-full focus:ring-0 focus:border-gray-500"
                            placeholder="Enter your Pin Code..."></input>
                    </div>
                    <div class=" pt-4">
                        <label for="city" class="text-white font-semibold  block">City</label>
                        <input type="text" class="text-base p-1 rounded-sm px-3 w-full focus:ring-0 focus:border-gray-500"
                            placeholder="Enter your city Name..."></input>
                    </div>
                    <div class="pt-5 flex justify-center">
                        <button class="rounded-full px-16 py-1 border bg-red-500 text-white text-base font-bold hover:text-red-500 hover:bg-white">Register</button>
                    </div>
             </div>
        </div>
    </main>
    <div class="flex justify-end bg-black">
        <img src={kolam} alt="design" width="80px"></img>
    </div>
</div>
     );
}
 
export default Signupres;