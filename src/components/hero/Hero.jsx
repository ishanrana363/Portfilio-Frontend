import { NavLink } from "react-router-dom"
import CarvedHeading from "../carved-heading/CarvedHeading "
import WavyUnderline from "../wavy-nderline/WavyUnderline"
import Animation from './../../animation/Animation';


const Hero = () => {
    return (
        <Animation>
            <div className="font-mono bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 " >
                <div
                    className="  mx-auto "
                    style={{
                        backgroundImage: "url()",
                        backgroundPosition: "center",
                        height: "100%",
                        backgroundSize: "content",
                        backgroundRepeat: "no-repeat",

                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center mr-10"> {/* Added margin-right */}
                        <div className="max-w-md">
                            <WavyUnderline /> <br />
                            <CarvedHeading /> <br />
                            <NavLink target="blank" to={"https://drive.google.com/file/d/1oLUhrAZECNu3LOSiCRaMBBBDisU7J2nQ/view?usp=sharing"} ><button className="btn btn-primary my-3 text-textSecondary hover:scale-105 hover:translate-x-2 transition ">Download my cv</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
    )
}

export default Hero
