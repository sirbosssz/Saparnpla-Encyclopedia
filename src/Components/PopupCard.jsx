import React, {Component} from 'react';

export default class PopupCard extends Component {
  hidePopup = () => {
    document.getElementById('popup').style.display = 'none'
    document.getElementById('p-card').style.display = 'none'
    document.querySelector('.searchbar').style.zIndex = 10;
  }
  render() {
    return (
      <div className="p-card" id="p-card">
        <div id="p-close" onClick={this.hidePopup}>
          <i className="fas fa-times"></i>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="p-img">
              <img src="http://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheRightFoodToFeedYourFish-Herbivores-20160818?$AR0201$" alt="fish_photo" width="100%" />
            </div>
          </div>
          <div className="col-md">
            <div className="p-info">
              <span className="p-title">ชื่อปลา&emsp;</span>
              <span>ปลาทดสอบ</span>
              <br />

              <span className="p-title">ชื่อปลาภาษาอังกฤษ&emsp;</span>
              <span>-</span>
              <br />

              <span className="p-title">ชื่อปลาทางวิทยาศาสตร์&emsp;</span>
              <span>-</span>
              <br />

              <span className="p-title">ชื่อปลาทางท้องถิ่น&emsp;</span>
              <span>-</span>
              <br />

              <span className="p-title">กลุ่มของปลา&emsp;</span>
              <span>-</span>
              <br />

              <span className="p-title">ลักษณะ&emsp;</span>
              <span>-</span>
              <br />

              <span className="p-title">ที่อยู่/แหล่งที่พบ</span>
              <br />
              <span>-</span>
              <br />

              <span className="p-title">ขนาดปลา (CM)&emsp;</span>
              <span>-</span>
              <br />

              <span className="p-title">ราคาต่อกิโลกรัม (บาท)&emsp;</span>
              <span>-</span>
              <br />

              <span className="p-title">การปรุง</span>
              <br />
              <span>-</span>
              <br />

              <span className="p-title">รายละเอียดเพิ่มเติม</span>
              <br />
              <span>-</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
