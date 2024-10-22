import  AboutImg from './assets/about.png';
function About(){
    return(
        <section className="flex bg-secondary px-5">
            <div className="w-1/2">
                <img src={AboutImg}/>
            </div>
            <div className="w-1/2 flex justify-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[160px]">About me</h1>
                <p className="text-2xl text-white">Vanakkam da mapla theni la irunthu</p>
                </div>
            </div>
        </section>

    );

} 
export default About;