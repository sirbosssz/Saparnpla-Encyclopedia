import React, {Component} from 'react';
import Card from './Card';

export default class ItemList extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      search: false,
      text: 'ปลาที่ค้นหา',
      fish: [],
      selectedFish: [],
      isLoading: true,
      index: 0,
    };
  }

  componentDidMount() {
    let fish = []
    fetch('http://smartfishermans.com:7777/api/fish').then((resp) => resp.json()).then(data => {
      let size = data.length
      let pages = Math.ceil(size/12);
      let index = data.length - 1
      for (var i = 0; i < pages; i++) {
        let temp = []
        for (var j = 0; j < 12; j++){
          if(index >= 0){
            temp[j] = data[index]
            index--
          }
        }
        fish[i] = temp
      }
      console.log(fish)
      this.setState({
        fish: fish,
        isLoading: false,
        selectedFish: fish[this.state.index],
      })
    })
  }

  nextPage = () => {
    let index = this.state.index
    if (index+1 <= this.state.fish.length - 1){
      index = index+1
      this.setState({
        index: index,
        selectedFish: this.state.fish[index],
      })
    }
  }

  previousPage = () => {
    let index = this.state.index
    if (index-1 >= 0){
      index = index-1
      this.setState({
        index: index,
        selectedFish: this.state.fish[index],
      })
    }
  }

  render() {
    let index = this.state.index
    let showList = []
    if(!this.state.isLoading){
      for (var i = 0; i < this.state.selectedFish.length; i++) {
        showList[i] = (<Card key={i} fish={this.state.selectedFish[i]} />)
      }
    }
    return (
      <div className="container">
        <div className="itemhead">
          <h2>{this.state.search ? `ผลการค้นหา "`+this.state.text+`"` : `รายการปลา`}</h2>
          <h3>คลิกที่ปลาเพื่อดูรายละเอียด</h3>
        </div>
        <div className="cardarea">
          <div className="row">
            {showList}
          </div>
          <div className="page">
            <button className={index > 0 ? "page-button" : "page-button disabled-button"} onClick={this.previousPage}>
              <i className="fas fa-angle-left"></i>
            </button>
            {index > 0 && (
              <button className="page-button numbers" onClick={this.previousPage}>
                {index}
              </button>
            )}
            <button className="page-button numbers selected-button">
              {index+1}
            </button>
            {index <= this.state.fish.length-2 && (
              <button className="page-button numbers" onClick={this.nextPage}>
                {index+2}
              </button>
            )}
            <button className={index <= this.state.fish.length-2 ? "page-button" : "page-button disabled-button"} onClick={this.nextPage}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
