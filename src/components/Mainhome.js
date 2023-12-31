import maijhlogo from "../assets/maijhlogo.png"

const Mainhome = () => {
    return ( 
        <main  class=" text-white flex flex-col-reverse items-center bg-black md:grid md:grid-cols-2" id="home" >
        <div class="mx-10 text-left">
            <h1 class="text-yellow-300 py-12 md:py-20 font-bold pb-3 text-5xl md:text-7xl">Feeding the <span style={{ color: '#F65F5F' }}
                    class=" font-bold">Need</span></h1>
            <p class=" font-semibold text-lg">A Fusion of Caring Hearts and Flavorful Art: NGOs & Restaurants Unite.</p>
            <p class="pt-10 text-base pb-5">Our website offers an intuitive and user-friendly interface that
                facilitates seamless communication and coordination between restaurants and NGOs. Restaurants can post
                their surplus food details, and NGOs can readily access this information to collect and distribute the
                meals efficiently.</p>
            <p class="text-base pr-6 pb-3 justify-center">Join us in this meaningful endeavor to create a world where food
                resources are utilized responsibly and compassionately. By working hand in hand, we can make a lasting
                impact on the lives of the underprivileged, one meal at a time. Together, let's transform surplus food
                into a lifeline for those in need and build a brighter, hunger-free future for all.</p>
        </div>

        <div class="px-10">
            <img class="flex justify-end" src={maijhlogo} alt="joinhands"></img>
        </div>
        <br></br>
        <br></br>
    </main>
     );
}
 
export default Mainhome;