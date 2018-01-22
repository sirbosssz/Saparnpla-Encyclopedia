import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './Card';

class ItemList extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      search: false,
      text: 'ปลาที่ค้นหา',
      fish: [],
      originalFish: [],
      selectedFish: [],
      isLoading: true,
      index: 0,
    };
  }

  componentDidMount() {
    let fish = []
    fetch('http://smartfishermans.com:7777/api/fish').then((resp) => resp.json()).then(data => {
      let size = data.length
      let pages = Math.ceil(size/24);
      let index = data.length - 1
      for (var i = 0; i < pages; i++) {
        let temp = []
        for (var j = 0; j < 24; j++){
          if(index >= 0){
            temp[j] = data[index]
            index--
          }
        }
        fish[i] = temp
      }
      // console.log(fish)
      this.setState({
        fish: fish,
        isLoading: false,
        selectedFish: fish[this.state.index],
        originalFish: fish,
      })
    })
    this.searchUpdate = setInterval(() => {
      let search = true
      let text = this.props.search_text.text
      if (!text) {search = false}
      this.setState({
        search: search,
        text: text,
      })
      if (!this.state.isLoading && search) {
        let fish = this.state.originalFish
        let temp = []
        fish.forEach(page => {
          page.forEach(item => {
            if ((item.thai_name.indexOf(text) !== -1) || (item.english_name.indexOf(text) !== -1) || (item.scientific_name.indexOf(text) !== -1) || (item.local_name.indexOf(text) !== -1)) {
              temp.push(item)
            }
          })
        })
        let temp2 = []
        if (temp.length >= 24) {
          let index = 0
          for (var i = 0; i < temp.length; i++) {
            let temp3 = []
            for (var j = 0; j < 24; j++) {
              temp3[j] = temp[index++]
            }
            temp2[i] = temp3
          }
        } else {
          temp2[0] = temp
        }
        this.setState({
          fish: temp2,
          selectedFish: temp2[this.state.index]
        })
      } else if (!this.state.isLoading && !search) {
        fish = this.state.originalFish
        this.setState({
          fish: fish,
          selectedFish: fish[this.state.index],
        })
      }
    }, 1000/30)
  }

  componentWillUnmount() {
    clearInterval(this.searchUpdate)
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
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
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
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  render() {
    let index = this.state.index
    let showList = []
    if(!this.state.isLoading) {
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
const mapStateToProps = state => {
  return{
    search_text: state.search_text,
  }
}

export default connect(mapStateToProps)(ItemList)
