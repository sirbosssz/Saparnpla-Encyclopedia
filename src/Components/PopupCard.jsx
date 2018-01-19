import React, {Component} from 'react';
import {connect} from 'react-redux'
import {hidePopup} from './../functions/hidePopup'

class PopupCard extends Component {
  render() {
    let fish = this.props.fish;
    return (
      <div className="p-card d-none" id="p-card">
        <div id="p-close" onClick={hidePopup}>
          <i className="fas fa-times"></i>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="p-img">
              <img src={fish.link_photo} alt="fish_photo" width="100%" />
            </div>
          </div>
          <div className="col-md">
            <div className="p-info">
              <span className="p-title">ชื่อปลา&emsp;</span>
              <span>{fish.thai_name}</span>
              <br />

              <span className="p-title">ชื่อปลาภาษาอังกฤษ&emsp;</span>
              <span>{fish.english_name}</span>
              <br />

              <span className="p-title">ชื่อปลาทางวิทยาศาสตร์&emsp;</span>
              <span>{fish.scientific_name}</span>
              <br />

              <span className="p-title">ชื่อปลาทางท้องถิ่น&emsp;</span>
              <span>{fish.local_name}</span>
              <br />

              <span className="p-title">กลุ่มของปลา&emsp;</span>
              <span>{fish.group_fish}</span>
              <br />

              <span className="p-title">ลักษณะ&emsp;</span>
              <span>{fish.nature}</span>
              <br />

              <span className="p-title">ที่อยู่/แหล่งที่พบ</span>
              <br />
              <span>{fish.habitat}</span>
              <br />

              <span className="p-title">ขนาดปลา (CM)&emsp;</span>
              <span>{fish.size}</span>
              <br />

              <span className="p-title">ราคาต่อกิโลกรัม (บาท)&emsp;</span>
              <span>{fish.price}</span>
              <br />

              <span className="p-title">การปรุง</span>
              <br />
              <span>-</span>
              <br />

              <span className="p-title">รายละเอียดเพิ่มเติม</span>
              <br />
              <span>{fish.other}</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    fish: state.fish,
  }
}

export default connect(mapStateToProps)(PopupCard)
