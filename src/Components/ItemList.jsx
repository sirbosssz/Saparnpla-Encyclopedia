import React, {Component} from 'react';
import Card from './Card';

export default class ItemList extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      search: false,
      text: 'ปลาอะไรสักอย่าง',
      fish: [],
      isLoading: true,
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
          if(index > 0){
            temp[j] = data[index]
          }
          index--
        }
        fish[i] = temp
      }
      console.log(fish)
      this.setState({
        fish: fish,
        isLoading: false,
      })
    })
  }
  render() {
    let index = 0;
    let showList = []
    if(!this.state.isLoading){
      for (var i = 0; i < 12; i++) {
        showList[i] = (<Card key={this.state.fish[index][i].id} fish={this.state.fish[index][i]} />)
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
        </div>
      </div>
    );
  }
}
