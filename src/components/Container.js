import React from 'react'

import './Container.css'
import Timeline from './Timeline.js'
import NewMetric from './NewMetric.js'
import FloatingButton from './FloatingButton.js'
import DeleteMetric from './DeleteMetric'

class MainContainer extends React.Component {
    
    constructor(){
        super();
        this.state = {
            isNewMetricVisible: false,
            isDeleteMetricVisible: false,
            metricToDelete: null,
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

    onDeleteMetric = (metric) => {
        this.setState({ isDeleteMetricVisible: true });
        this.setState({ metricToDelete: metric });
    }

    onNoSelected = () => {
        this.setState({ isDeleteMetricVisible: false });
    }

    onYesSelected = () => {
        this.setState({ isDeleteMetricVisible: false });
    }

    render() {
        return (
            <div className="main-container">
                <Timeline 
                    metrics={this.state.metrics}
                    onDeleteMetric={this.onDeleteMetric}></Timeline>
                <NewMetric 
                    isVisible={this.state.isNewMetricVisible}
                    onClickCloseModal={this.onClickCloseModal}
                    onPostSubmit={this.onClickCloseModal}></NewMetric>
                <DeleteMetric 
                    metric={this.state.metricToDelete}
                    isVisible={this.state.isDeleteMetricVisible}
                    onClickCloseModal={this.onNoSelected}
                    onNoSelected={this.onNoSelected}
                    onYesSelected={this.onYesSelected}></DeleteMetric>
                <FloatingButton onClickOpenModal={this.onClickOpenModal} />
            </div>
        );
    }
}

export default MainContainer;