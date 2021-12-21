import React from 'react'

import './Container.css'
import Timeline from './Timeline.js'
import NewMetric from './NewMetric.js'
import Dashboard from './Dashboard.js'
import FloatingButton from './FloatingButton.js'
import DeleteMetric from './DeleteMetric'
import MetricService from '../data-layer/MetricService'
import CalculationService from '../data-layer/CalculationService'

class MainContainer extends React.Component {
    
    constructor(){
        super();
        this.state = {
            isNewMetricVisible: false,
            isDeleteMetricVisible: false,
            metricToDelete: null,
            lastTableUpdate: Date.now(),
            metrics: [],
            averagePerMinute: 0.0,
            averagePerHour: 0.0,
            averagePerDay: 0.0,
        }
        this.onClickOpenModal = this.onClickOpenModal.bind(this);
        this.onClickCloseModal = this.onClickCloseModal.bind(this);
    }

    componentDidMount(){
        this.loadMetrics();
        this.loadDashboard();
    }

    onClickOpenModal() {
        this.setState({ isNewMetricVisible: true });
    }

    onClickCloseModal() {
        this.setState({ isNewMetricVisible: false });
        this.loadMetrics();
        this.loadDashboard();
    }

    loadMetrics() {
        MetricService.getAll((metrics) => this.setState({metrics}));
    }

    loadDashboard() {
        CalculationService.getAveragePerMinute((averagePerMinute) => this.setState({averagePerMinute}));
        CalculationService.getAveragePerHour((averagePerHour) => this.setState({averagePerHour}));
        CalculationService.getAveragePerDay((averagePerDay) => this.setState({averagePerDay}));
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
        this.loadMetrics();
        this.loadDashboard();
    }

    render() {
        return (
            <div className="main-container">
                <br />
                <Dashboard
                    averagePerMinute={this.state.averagePerMinute}
                    averagePerHour={this.state.averagePerHour}
                    averagePerDay={this.state.averagePerDay}>
                </Dashboard>
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