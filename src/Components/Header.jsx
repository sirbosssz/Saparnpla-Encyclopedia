import React, {Component} from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      type: 'th_name',
    };
  }

  handleSearch = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })

    setTimeout(() => {
      this.props.searchTextChange({
        text: this.state.search,
        type: this.state.type,
      })
    }, 1)
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  focus = () => {
    document.getElementById('popup').classList.remove('d-none');
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

const mapStateToProps = state => {
  return{
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
