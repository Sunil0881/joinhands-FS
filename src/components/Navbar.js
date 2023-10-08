import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navStyle = {
        top: menuOpen ? '8%' : '-100%',
    };

    return (
        <header className='bg-black px-8 h-12 pt-2 text-white'>
            <nav className="flex justify-between items-center w-full mx-auto">
                <div className='font-bold text-2xl'>
                    joinhands
                </div>
                <div className={`md:static absolute bg-black md:min-h-fit left-0 w-full md:w-auto min-h-[41vh] flex items-center px-5 transition-all duration-700 ease-in-out`} style={navStyle}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-4 gap-8">
                        <li className="hover:text-red-600 cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
                        <li className="hover:text-red-600 cursor-pointer" onClick={() => scrollToSection('community')}>Community</li>
                        <li className="hover:text-red-600 cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
                        <li className="hover:text-red-600 cursor-pointer" onClick={() => scrollToSection('serve')}>Serve</li>
                        <li className="hover:text-red-600 cursor-pointer" onClick={() => scrollToSection('donate')}>Donate</li>
                        <li className="hover:text-red-600 cursor-pointer" onClick={() => scrollToSection('footer')}>ContactUs</li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <button className="flex bg-red-600 px-2 py-1 justify-center rounded-full text-white hover:bg-white hover:text-red-600">Signin/up</button>
                    {menuOpen ? (
                        <svg onClick={toggleMenu} className="h-6 w-6 cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" fill="#ffffff"/>
                        </svg>
                    ) : (
                        <svg onClick={toggleMenu}  className="h-6 w-6 cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="#ffffff"/>
                        </svg>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
