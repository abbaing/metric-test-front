import React, { Component } from 'react'

import './Container.css'
import Timeline from './Timeline.js'
import NewMetric from './NewMetric.js'
import FloatingButton from './FloatingButton.js'

class MainContainer extends React.Component {
    
    onClickOpenModal() {
        alert('hey!');
    }

    render() {
        return (
            <div class="main-container">
                <Timeline></Timeline>
                <NewMetric></NewMetric>
                <FloatingButton onClickOpenModal={this.onClickOpenModal} />
            </div>
        );
    }
}

export default MainContainer;