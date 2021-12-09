import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Timeline.css';

export default class Timeline extends React.Component {

  constructor() {
    super();
    this.state = {
      metrics: []
    }
  }

  componentDidMount(){
    fetch(process.env.REACT_APP_API_URL + '/metrics')
    .then((response) => response.json())
    .then(metrics => this.setState({metrics}))
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
          {this.state.metrics.map((metric, i) => (
            <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={this.formatDate(metric.time)}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCheckCircle} className="inside-button" />}
              >
                <h3 className="vertical-timeline-element-title">Metric registry</h3>
                <h4 className="vertical-timeline-element-subtitle">{metric.name}</h4>
                <p>
                  {metric.value}
                </p>
              </VerticalTimelineElement>
          ))}
        </ul>
      </VerticalTimeline>);
  }
}