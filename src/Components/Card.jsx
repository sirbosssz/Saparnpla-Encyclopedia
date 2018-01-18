import React, {Component} from 'react';

export default class Card extends Component {
  popup = () => {
    document.getElementById('popup').style.display = 'inherit';
  }

  render() {
    let name
    if (this.props.fish.thai_name === '-') {
      name = this.props.fish.english_name
    } else {
      name = this.props.fish.thai_name + ' - ' + this.props.fish.english_name
    }
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="fish-card" onClick={this.popup}>
          <img src="http://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheRightFoodToFeedYourFish-Herbivores-20160818?$AR0201$" alt="fish_photo" height="200px"/>
          <span>{name}</span>
        </div>
      </div>
    );
  }
}
