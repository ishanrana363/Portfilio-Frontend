import { Helmet } from "react-helmet-async";
import ProjectForm from "../../components/have-project/ProjectForm"
import Home from "../../components/home/Home"
import Skill from './../../components/skill/Skill';
import FeedbackPage from "../feedback-page/FeedbackPage";
import ProjectPage from './../project-page/ProjectPage';


const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100" >
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <div className="" >
          <Home></Home>

        </div>
      </div>
      <div className=" font-mono " >
        <ProjectForm></ProjectForm>
      </div>
      <div>
        <Skill></Skill>
      </div>
      <div>
        <ProjectPage></ProjectPage>
      </div>
      <div>
        <FeedbackPage></FeedbackPage>
      </div>
    </div>
  )
}

export default HomePage
