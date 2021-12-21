import React from 'react'
import { Card } from 'react-bootstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                <Card>
                    <Card.Header>Dashboard</Card.Header>
                    <Card.Body>
                        <h5 class="card-title">Here we can see some metrics...</h5>
                        <p class="card-text">
                            Average per minute {this.props.averagePerMinute}<br />
                            Average per hour {this.props.averagePerHour}<br />
                            Average per day {this.props.averagePerDay}<br />
                        </p>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-4'></div>
            </div>
        )
    }
}

export default Dashboard;