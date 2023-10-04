const Community = () => {
    const myStyle = {
        backgroundImage: 'url(./assets/profileimg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        height: '100%',
        backgroundSize: '65% 90%',
      };
    return ( 
        <div>
         <div id="community">
        <h1 style="color: #F65F5F;" class=" font-bold text-5xl flex justify-center py-2">Community</h1>
        <p class="text-white font-semibold flex justify-center">Joining the hands of NGO people and restaurant people to
            serve the poors</p>
    </div>
    <div class="grid grid-cols-3 gap-5 pt-10 ">
        <div>
            <p style={myStyle}
                class=" text-white font-semibold   text-4xl  py-64 flex justify-center">No of Users   <span class="counter text-white " data-target="100">0</span></p>
              

        </div>

        <div>
            <p style="background-image: url(asset/profile\ img.png); background-repeat: no-repeat ; background-position-x:center; height: 100%; background-size: 65% 90%;"
                class=" text-white font-semibold  text-4xl py-64 flex justify-center">No of NGO's <span class="counter text-white " data-target="45">0</span> </p>
        </div>

        <div>
            <p style="background-image: url(asset/profile\ img.png); background-repeat: no-repeat;  background-position-x: center; height: 100%; background-size: 65% 90%;"
                class=" text-white font-semibold  text-4xl py-64 flex justify-center">No of Restaurants <span class="counter text-white " data-target="65">0</span> </p>
        </div>
    </div>

        </div>
     );
}
 
export default Community;