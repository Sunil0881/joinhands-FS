import signInImage from '../assets/signinimage.png'
import kolam from "../assets/kolam.png"
import Signupngo from '../components/signupngo';
import Signupres from '../components/signupres';
import { useState } from 'react';
const Signup = () => {
    const [selectedOption, setSelectedOption] = useState('ngo');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return ( 
        <div class="bg-black h-screen">
            <main class="flex flex-col items-center mx-5 md:flex-row md:justify-center md:mx-5">
                <div class="hidden md:block md:w-full">
                    <img src={signInImage} alt="logo" width="550px"></img>
                </div>
                <div class="mt-5 text-base rounded-3xl w-full border md:mx-28">
                    <div class="flex w-full">
                    <button
                        className={`text-white font-semibold w-full border rounded-tl-3xl hover:bg-red-500 ${
                            selectedOption === 'ngo' ? 'bg-red-500' : 'bg-gray-500'
                        } p-3`}
                        onClick={() => handleOptionClick('ngo')}
                    >
                        Register as NGO
                    </button>
                    <button
                        className={`text-white font-semibold w-full border rounded-tr-3xl hover:bg-red-500 ${
                            selectedOption === 'restaurant' ? 'bg-red-500' : 'bg-gray-500'
                        } p-3`}
                        onClick={() => handleOptionClick('restaurant')}
                    >
                        Register as Restaurant
                    </button>
                    </div>
                    <div id='sign'>
                        {selectedOption === 'ngo' && <Signupngo />}
                        {selectedOption === 'restaurant' && <Signupres />}
                    </div>
                </div>
            </main>
            <div class="flex justify-end bg-black">
                <img src={kolam} alt="design" width="80px"></img>
            </div>
        </div>
    );
}
 
export default Signup;