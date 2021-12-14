import React from 'react';
import { Button } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Timeline.css';

export default class Timeline extends React.Component {

  constructor() {
    super();
  }

  formatDate(dateString) {
    const options = { 
      year: "numeric", 
      month: "long", 
      day: "numeric",
      hour: "numeric",
      minute: "2-digit", 
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  render() {
      return (
      <VerticalTimeline>
        <ul>
          {this.props.metrics.map((metric, i) => (
            <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={this.formatDate(metric.time)}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCheckCircle} className="inside-button" />}
              >
                <h3 className="vertical-timeline-element-title">{metric.name}
                  <button 
                    className='btn' 
                    title='Remove this metric' 
                    onClick={()=> this.props.onDeleteMetric(metric)} >
                    <FontAwesomeIcon icon={faTrash} className="inside-button" />
                  </button>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Metric registry</h4>
                <p>
                  {metric.value}
                </p>
              </VerticalTimelineElement>
          ))}
        </ul>
      </VerticalTimeline>);
  }
}