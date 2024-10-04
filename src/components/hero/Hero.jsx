import { NavLink } from "react-router-dom"
import CarvedHeading from "../carved-heading/CarvedHeading "
import WavyUnderline from "../wavy-nderline/WavyUnderline"


const Hero = () => {
    return (
        <div className="bg-bgPrimary" >
            <div
                className="hero min-h-[calc(100vh-304px)] mx-auto " // Added flex and justify-end
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
                        <CarvedHeading />
                        <NavLink target="blank" to={"https://drive.google.com/file/d/1-VDO9KfC2w4AWLOcGEU42wwT7tY8nXzj/view"} ><button className="btn btn-primary my-3 text-textSecondary hover:scale-105 hover:translate-x-2 transition ">Download my cv</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
