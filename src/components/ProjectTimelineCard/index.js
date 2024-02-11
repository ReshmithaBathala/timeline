import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="pro-title-container">
        <h1 className="pro-title">{projectTitle}</h1>
        <div className="pro-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeLineCard
