import { Helmet } from "react-helmet-async"
import Disclaimer from "../../components/disclaimer/Disclaimer"

const DisclaimerPage = () => {
    window.scrollTo(0,0)
    return (
        
        <div>
            <>
            <Helmet>
                <title>Disclaimer - My Portfolio</title>
            </Helmet>
            </>
            <Disclaimer></Disclaimer>
        </div>
    )
}

export default DisclaimerPage
