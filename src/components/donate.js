import family from '../assets/families.png';
const Donate = () => {
    const mycolor = {
        color: '#F65F5F'
    }
    return (
        <div class="border-black">
            <div id="donate" class="grid grid-col md:grid-cols-2 md:gap-8 md:pt-14 px-3 md:text-start text-justify gap-4 bg-black">
                <div className='md:px-5 md:py-10'>
                    <h1 class="font-bold italic md:text-center text-3xl font-[poppins] pt-20" style={mycolor}>Wanna join with us to
                        serve the poors ?</h1>
                    <p class="text-white text-base font-[poppins] pt-10">Your simple act of donation can help nourish lives
                        and turn surplus food into smiles for those in need. Join us in the fight against hunger and food
                        waste today!</p>
                    <p class="text-white text-base font-sans pt-3">Verified Partnerships: We collaborate only with
                        reputable NGOs and verified restaurants, ensuring that your donations reach the intended
                        beneficiaries.</p>
                    <div class="flex justify-center pt-5">
                        <a href="#donate" class="rounded-full bg-red-500 text-white px-3 py-2 hover:text-red-500 hover:bg-white font-sans">Donate</a>
                    </div>
                </div>


                <div class="flex justify-center">
                    <img src={family} alt="serve" width="100%" height="100%"></img>
                </div>
            </div>
            
            <hr></hr>
        </div>
    );
}

export default Donate;