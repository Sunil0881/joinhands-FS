import aboutserve from '../assets/about_serve.png';
import tree from '../assets/tree.png';
const About = () => {
    const mycolor ={
        color: '#F65F5F'
    }
    const style1 = {
        width: '90px',
        paddingBottom: '10px'
    };
    const style2 = {
        width: '550px',
        height: '500px',
        paddingBottom: '20px'
        
    }
    return (
        <div class="bg-black">
            <div id="about" class="grid grid-cols-3">
                <div class="col-span-2 md:mr-24 ">
                    <p style={mycolor} class="font-bold text-5xl flex justify-end pt-10">About</p>
                </div>
                <div class="flex justify-end">
                    <img style={style1} src={tree} alt="tree"></img>
                </div>
            </div>
            <div class="grid grid-col md:grid-cols-2 mx-4 items-center">
                <div class="">
                    <img src={aboutserve} alt="serve" style={style2}></img>
                </div>
                <div className='text-justify md:text-left'>
                    <p class="text-white">Welcome to our website, a platform that aims to unite NGOs and restaurants in a
                        common mission to serve the less fortunate by redistributing surplus food. Our vision is to bridge the
                        gap between those with excess food resources and those in need, creating a sustainable and impactful
                        solution to combat food waste and hunger simultaneously.</p><br></br>
                        <p class="text-white">With the pressing issue of food insecurity affecting millions worldwide, we
                            believe that working together can make a significant difference in alleviating hunger and reducing food
                            wastage. Our platform serves as a conduit, connecting restaurants and food establishments willing to
                            donate their leftover food to NGOs and charitable organizations that specialize in distributing meals to
                            the underserved communities.</p><br></br>
                            <p class="text-white">By joining hands with us, restaurants have the opportunity to turn their surplus
                                food into a powerful instrument of change, positively impacting the lives of the less fortunate. The
                                food that would otherwise go to waste becomes a source of nourishment and hope for those facing
                                difficult circumstances.</p>
                            <p class="text-white">At the same time, NGOs partnering with us can extend their reach and impact,
                                enabling them to serve more individuals and families in need. Together, we can strengthen the safety
                                nets of our communities and contribute to a more equitable and compassionate society.</p>
                        </div>
                </div>
            </div>
            );
}

export default About;