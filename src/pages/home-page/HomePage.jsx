import ProjectForm from "../../components/have-project/ProjectForm"
import Home from "../../components/home/Home"
import Skill from './../../components/skill/Skill';


const HomePage = () => {
  return (
    <>
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
    </>
  )
}

export default HomePage
