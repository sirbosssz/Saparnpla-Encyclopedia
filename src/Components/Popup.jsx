import React, {Component} from 'react';

export default class Popup extends Component {
  hidePopup = () => {
    document.getElementById('popup').style.display = 'none'
  }
  render() {
    return (
      <div className="fullscreen" id="popup">
        <div className="fullscreen popup-background" onClick={this.hidePopup}></div>
      </div>
    );
  }
}
