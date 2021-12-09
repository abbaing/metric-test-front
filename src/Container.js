import React, { Component } from 'react'

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
        this.onClickOpenModal = this.onClickOpenModal.bind(this)
    }

    onClickOpenModal() {
        this.setState(isNewMetricVisible => ({ isNewMetricVisible: true }));
    }

    render() {
        return (
            <div class="main-container">
                <Timeline></Timeline>
                <NewMetric isVisible={this.state.isNewMetricVisible}></NewMetric>
                <FloatingButton onClickOpenModal={this.onClickOpenModal} />
            </div>
        );
    }
}

export default MainContainer;