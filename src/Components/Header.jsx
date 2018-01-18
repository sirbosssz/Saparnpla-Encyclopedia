import React, {Component} from 'react'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleSearch = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  focus = () => {
    document.getElementById('popup').style.display = 'inherit'
    document.querySelector('.searchbar').style.zIndex = 1001;
  }

  render() {
    return (<div className="header">
      <div className="container">
        <div className="title">
          <h2>สะพานปลา</h2>
          <h1>สารานุกรมปลา</h1>
        </div>
        <div className="searchbar">
          <form onSubmit={this.handleSubmit}>
            <div className="inputgroup">
              <input type="text" placeholder="ค้นหาชื่อปลาที่สนใจ" name='search' value={this.state.search} onChange={this.handleSearch} onFocus={this.focus} />
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
