import React, {Component} from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  popup = () => {
    this.props.fishInsert(this.props.fish)
    document.getElementById('popup').classList.remove('d-none')
    document.getElementById('p-card').classList.remove('d-none')
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
          <img src={"http://smartfishermans.com:7777/image/"+this.props.fish.link_photo} alt="fish_photo" height="200px"/>
          <span>{name}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    Selectedfish: state.fish,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fishInsert: data => {
      dispatch({
        type: 'FISH',
        payload: data,
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
