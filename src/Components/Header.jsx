import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      thai_name: true,
      english_name: true,
      scientific_name: true,
      local_name: true,
      focus: false,
    };
  }

  handleSearch = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({
      [name]: value
    })

    setTimeout(() => {
      this.props.searchTextChange({
        text: this.state.search,
        thai_name: this.state.thai_name,
        english_name: this.state.english_name,
        scientific_name: this.state.scientific_name,
        local_name: this.state.local_name,
      })
    }, 1)
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  focus = () => {

    document.getElementById('popup').classList.remove('d-none');
    document.getElementById('check').classList.remove('d-none');
    document.querySelector('.searchbar').style.zIndex = 1001;
    if (window.innerWidth < 768) {
      document.querySelector('.header .title').classList.add('d-none')
    }
    if (window.innerWidth >= 990) {
      document.querySelector('.searchbar input').classList.add('focus')
    }
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
              <input className="search" type="text" placeholder="ค้นหาชื่อปลาที่สนใจ" name='search' value={this.state.search} onChange={this.handleSearch} onFocus={this.focus} />
              <button type='submit'>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div id="check" className="d-none">
              <div>
                <input type="checkbox" name="thai_name" checked={this.state.thai_name} onChange={this.handleSearch} />
                <span>ชื่อภาษาไทย</span>
              </div>
              <div>
                <input type="checkbox" name="english_name" checked={this.state.english_name} onChange={this.handleSearch} />
                <span>ชื่อภาษาอังกฤษ</span>
              </div>
              <div>
                <input type="checkbox" name="scientific_name" checked={this.state.scientific_name} onChange={this.handleSearch} />
                <span>ชื่อทางวิทยาศาสตร์</span>
              </div>
              <div>
                <input type="checkbox" name="local_name" checked={this.state.local_name} onChange={this.handleSearch} />
                <span>ชื่อท้องถิ่น</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    search_text: state.search_text,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchTextChange: text => {
      dispatch({
        type: 'SEARCH_TEXT',
        payload: text,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
