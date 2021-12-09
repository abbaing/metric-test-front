import React, { Component } from 'react'

import FloatingButtons from 'react-floating-buttons'

import addPencilIcon from '../assets/add-pencil.png'
import addBlankIcon from '../assets/add-blank.png'

export default class FloatingButton extends Component {

  render() {
    const buttons = [
        { onClick: ()=> this.props.onClickOpenModal(), src: addPencilIcon },
        { onClick: ()=> this.props.onClickOpenModal(), src: addBlankIcon },
    ];
    return <FloatingButtons dimension={50} buttonsList={buttons} buttonType="plus" top={"85%"} left={"90%"} direction="left" />
  }
}