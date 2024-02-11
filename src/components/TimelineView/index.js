import {Chrono} from 'react-chrono'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="time-line-container">
      <h1 className="time-line-heading">
        MY JOURNEY OF <br />
        <span className="span-heading">CCBP 4.0</span>
      </h1>
      <div style={{width: '80%', height: '950px'}}>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachTimeLine => renderTimeLine(eachTimeLine))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
