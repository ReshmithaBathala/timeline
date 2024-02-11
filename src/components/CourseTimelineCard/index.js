import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const renderTags = tag => {
    const {id, name} = tag
    return (
      <p key={id} className="list-tem">
        {name}
      </p>
    )
  }

  return (
    <div>
      <div className="course-title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-main-container">
        {tagsList.map(eachTag => renderTags(eachTag))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
