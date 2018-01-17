import React, {Component} from 'react';

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
      data.sort((a, b) => {
        var nameA = a.thai_name;
        var nameB = b.thai_name;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      let size = data.length
      let pages = Math.ceil(size/14);
      let index = 0
      for (var i = 0; i < pages; i++) {
        let temp = []
        for (var j = 0; j < 14; j++){
          if(index < size){
            temp[j] = data[index]
          }
          index++
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
      for (var i = 0; i < 14; i++) {
        showList[i] = (<li key={this.state.fish[index][i].id}>{this.state.fish[index][i].thai_name} - {this.state.fish[index][i].english_name}</li>)
      }
    }
    return (
      <div className="container">
        <div className="itemhead">
          <h2>{this.state.search ? `ผลการค้นหา "`+this.state.text+`"` : `รายการปลา`}</h2>
          <h3>คลิกที่ปลาเพื่อดูรายละเอียด</h3>
        </div>
        <div className="cardarea">
          {showList}
        </div>
      </div>
    );
  }
}
