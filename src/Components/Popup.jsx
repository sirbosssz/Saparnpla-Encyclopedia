import React, {Component} from 'react';
import PopupCard from './PopupCard';

export default class Popup extends Component {
  hidePopup = () => {
    document.getElementById('popup').style.display = 'none'
    document.getElementById('p-card').style.display = 'none'
    document.querySelector('.searchbar').style.zIndex = 10;
  }
  render() {
    return (
      <div className="fullscreen" id="popup">
        <div className="fullscreen popup-background" onClick={this.hidePopup}></div>
        <PopupCard />
      </div>
    );
  }
}
