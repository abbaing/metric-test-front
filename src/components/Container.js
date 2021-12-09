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
        }
        this.onClickOpenModal = this.onClickOpenModal.bind(this);
        this.onClickCloseModal = this.onClickCloseModal.bind(this)
    }

    onClickOpenModal() {
        this.setState({ isNewMetricVisible: true });
    }

    onClickCloseModal() {
        this.setState({ isNewMetricVisible: false });
    }

    render() {
        return (
            <div className="main-container">
                <Timeline></Timeline>
                <NewMetric 
                    isVisible={this.state.isNewMetricVisible}
                    onClickCloseModal={this.onClickCloseModal}></NewMetric>
                <FloatingButton onClickOpenModal={this.onClickOpenModal} />
            </div>
        );
    }
}

export default MainContainer;