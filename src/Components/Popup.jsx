import React, {Component} from 'react';
import PopupCard from './PopupCard';
import {hidePopup} from './../functions/hidePopup'

export default class Popup extends Component {
  render() {
    return (
      <div className="fullscreen d-none" id="popup">
        <div className="fullscreen popup-background" onClick={hidePopup}></div>
        <PopupCard />
      </div>
    );
  }
}
