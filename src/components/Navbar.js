const Navbar = () => {
    return ( 
    <div className="bg-black">
          <nav class="grid grid-cols-3 pr-28">
        <span class="justify-start text-white pl-10 py-5 font-bold text-lg">joinhands</span>
        <ul class="text-white flex justify-end py-5  col-span-2  ">

            <li>
                <a href="#home" class="p-7 hover:text-red-500">Home</a>
            </li>
            <li>
                <a href="#community" class="p-7 hover:text-red-500">Community</a>    
            </li>
            <li>
                <a href="#about" class="p-7 hover:text-red-500">About</a>
            </li>
            <li>
                <a href="#serve" class="p-7 hover:text-red-500">Serve</a>
            </li>
            <li>
                <a href="#donate" class="p-7 hover:text-red-500">Donate</a>
            </li>
            <li>
                <a href="#footer" class="p-7 hover:text-red-500">ContactUs</a>
            </li>
            <li>
                <a href="sign.html"
                    class="p-7  rounded-full px-3 py-2 bg-red-500 hover:bg-white hover:text-red-500 transition-500">Sign
                    in/up</a>
            </li>
        </ul>
    </nav>
    </div>
     );
}
 
export default Navbar;