import { Helmet } from "react-helmet-async";
import Hero from "../hero/Hero"

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Helmet>
        <title>Home - My Portfolio</title>
      </Helmet>
      <div>
      <Hero></Hero>
      </div>
    </div>
  )
}

export default Home
