import { Bars3Icon } from '@heroicons/react/24/solid'
import {useState} from "react";
function Header(){
    const[toggleMenu, setToggleMenu] = useState(false);
    return(
        <header className="flex justify-between px-5 py-2 bg-secondary">
        <a className="font-bold text-black" href="" >Saran</a>
        <nav className="hidden md:block">

            <ul className="flex text-white ">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden mob">

            <ul className=" flex flex-col text-white mobile-nav  ">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </nav>}
            <button onClick={()=> setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className='text-white h-1/4'/>

            </button>
        </header>

    );


}
export default Header;