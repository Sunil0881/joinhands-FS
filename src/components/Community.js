import profileimg from '../assets/profileimg.png';


 const Community = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Adjust the speed of counting (lower value means faster)

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();
    });

    const myStyleimg1 = {
        backgroundImage: `url(${profileimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        height: '100%',
        backgroundSize: '65% 90%',
    };
    const myStyleimg2 = {
        backgroundImage: `url(${profileimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        height: '100%',
        backgroundSize: '65% 90%',
    };
    const myStyleimg3 = {
        backgroundImage: `url(${profileimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        height: '100%',
        backgroundSize: '65% 90%',
    };
    const mycolor ={
        color: '#F65F5F'
    }
    return (
        <div class="bg-black">
            <div id="community">
                <h1 style={mycolor} class=" font-bold text-5xl flex justify-center py-2">Community</h1>
                <p class="text-white font-semibold flex justify-center">Joining the hands of NGO people and restaurant people to
                    serve the poors</p>
            </div>
            <div class="grid grid-cols-3 gap-5 pt-10 ">
                <div>
                    <p style={myStyleimg1}
                        class=" text-white font-semibold   text-4xl  py-64 flex justify-center">No of Users   <span class="counter text-white " data-target="100">0</span></p>


                </div>

                <div>
                    <p style={myStyleimg2}
                        class=" text-white font-semibold  text-4xl py-64 flex justify-center">No of NGO's <span class="counter text-white " data-target="45">0</span> </p>
                </div>

                <div>
                    <p style={myStyleimg3}
                        class=" text-white font-semibold  text-4xl py-64 flex justify-center">No of Restaurants <span class="counter text-white " data-target="65">0</span> </p>
                </div>
            </div>

        </div>
    );
}

export default Community;