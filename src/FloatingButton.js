import React, { Component } from 'react'

import FloatingButtons from 'react-floating-buttons'

import addPencilIcon from './assets/add-pencil.png'
import addBlankIcon from './assets/add-blank.png'

export default class FloatingButton extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    const buttons = [
        { onClick: ()=> alert('clicked icon1'), src: addPencilIcon },
        { onClick: ()=> alert('clicked icon2'), src: addBlankIcon },
    ];
    return <FloatingButtons dimension={50} buttonsList={buttons} buttonType="plus" dimension={50} top={"85%"} left={"90%"} direction="left" />
  }
}