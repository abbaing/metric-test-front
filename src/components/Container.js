import React from 'react'

import './Container.css'
import Timeline from './Timeline.js'
import NewMetric from './NewMetric.js'
import FloatingButton from './FloatingButton.js'

class MainContainer extends React.Component {
    
    constructor(){
        super();
        this.state = {
            isNewMetricVisible: false,
            lastTableUpdate: Date.now(),
            metrics: [],
        }
        this.onClickOpenModal = this.onClickOpenModal.bind(this);
        this.onClickCloseModal = this.onClickCloseModal.bind(this);
    }

    componentDidMount(){
        this.loadMetrics();
    }

    onClickOpenModal() {
        this.setState({ isNewMetricVisible: true });
    }

    onClickCloseModal() {
        this.setState({ isNewMetricVisible: false });
        this.loadMetrics();
    }

    loadMetrics(){
        fetch(process.env.REACT_APP_API_URL + '/metrics')
        .then((response) => response.json())
        .then(metrics => this.setState({metrics}))
    }

    render() {
        return (
            <div className="main-container">
                <Timeline metrics={this.state.metrics}></Timeline>
                <NewMetric 
                    isVisible={this.state.isNewMetricVisible}
                    onClickCloseModal={this.onClickCloseModal}
                    onPostSubmit={this.onClickCloseModal}></NewMetric>
                <FloatingButton onClickOpenModal={this.onClickOpenModal} />
            </div>
        );
    }
}

export default MainContainer;