import HeroImg from './assets/hero.png';
import { FaLinkedin,FaGithub,FaInstagram, } from "react-icons/fa";
import { GiSnake } from "react-icons/gi";



function Hero(){
    return (
        <section className="flex px-5 py-32 bg-primary justify-center">
            <div className="w-1/2 flec flex-col">
        <h1 className="md:w-1/2 text-white text-6xl font-hero-font ">Hi,<br/> I'm <span className="text-black">Saran</span>
        <p className="text-2xl"><a href="" className='hover:white'><GiSnake size={40}/><span>Developer</span></a>
             </p></h1>
            <div className="flex py-10 ">
                <a href="#" className=" pr-5 hover:text-white"  ><FaLinkedin size={35} />

                </a>
                <a  href="#" className=" pr-5 hover:text-white"><FaGithub size={35} />

                </a>
                <a href="#"className="hover:text-white"><FaInstagram  size={35}/>

                </a>
            </div>
            </div>
        <img className="md:w-1/3" src={HeroImg} />
        </section>
    )


}
export default Hero;