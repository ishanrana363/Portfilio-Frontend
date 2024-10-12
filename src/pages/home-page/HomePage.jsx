import { Helmet } from "react-helmet-async";
import ProjectForm from "../../components/have-project/ProjectForm"
import Home from "../../components/home/Home"
import Skill from './../../components/skill/Skill';
import FeedbackPage from "../feedback-page/FeedbackPage";


const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
      <div>
        <div className="bg-bgPrimary" >
          <Home></Home>

        </div>
      </div>
      <div className="bg-[#54C392] py-8 font-mono " >
      <ProjectForm></ProjectForm>
      </div>
      <div>
        <Skill></Skill>
      </div>
      <div>
        <FeedbackPage></FeedbackPage>
      </div>
    </>
  )
}

export default HomePage
