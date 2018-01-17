import React, {Component} from 'react'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  render() {
    return (<div className="header">
      <div className="container">
        <div className="title">
          <h2>สะพานปลา</h2>
          <h1>สารานุกรมปลา</h1>
        </div>
        <div className="searchbar">
          <form action="">
            <div className="inputgroup">
              <input type="text" placeholder="ค้นหาชื่อปลาที่สนใจ"/>
              <button type='submit'>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>);
  }
}

export default Header
