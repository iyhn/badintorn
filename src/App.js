import React, { Component } from 'react';
import './App.css';
import Logo from './A/logo.jpg';
import Image from './Image';
import Carousel from './Carousel';

const Header = (props) => (
  <div id="header" className="Header">
    <div className="HeaderContainer">
      <img className="logoHeader" src={Logo} />
      <div id="menuHeader" className="OptionContainer">
        {props.children}
      </div>
    </div>
  </div>
);

const Option = (props) => {
  return <div href={"#" + props.id + "Container"} id={props.id} className="Option" onClick={(e) => (document.getElementById(props.id + "Container")).scrollIntoView()}>
    {props.content}
  </div>
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  changeImage = () => {
    document.getElementById("CarouselImage")
  }


  scrollDownTrack = () => {
    let checker;
    if (window.innerWidth < 1920) {
      checker = 1000;
    } else {
      checker = window.innerHeight;
    }
    if (645 < document.documentElement.scrollTop - checker && document.documentElement.scrollTop - checker < 9999 && document.documentElement.scrollTop != 0) {
      document.getElementById("plan").classList.add("active");
      document.getElementById("information").classList.remove("active");
    } else if (0 < document.documentElement.scrollTop - checker && document.documentElement.scrollTop - checker < 645 && document.documentElement.scrollTop != 0) {
      document.getElementById("information").classList.add("active");
      document.getElementById("plan").classList.remove("active");
      document.getElementById("header").classList.add("out");
    } else {
      document.getElementById("information").classList.remove("active");
      document.getElementById("header").classList.remove("out");
    }
  }

  // componentWillUpdate() {

  // }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollDownTrack)
  }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  render() {
    return (
      <div id="homeContainer" className="App-header">
        <Header>
          <Option id="contact" content="ติดต่อเรา" />
          <Option id="about" content="ข้อมูลบริษัท" />
          <Option id="location" content="ที่ตั้งโครงการ" />
          <Option id="gallery" content="แกลลอรี่" />
          <Option id="plan" content="สิ่งอำนวยความสะดวก" />
          <Option id="information" content="ข้อมูลโครงการ" />
          <Option id="home" content="หน้าหลัก" />
        </Header>

        <Carousel image={Image} currentIndex={this.state.currentIndex} />

        {/* Information */}
        <div>
          <div id="informationContainer" className="Information Container">
            <h1 className="">ข้อมูลโครงการ</h1>
            <table>
              <tbody>
                <tr>
                  <td className="TopicTable">ชื่อโครงการ</td>
                  <td>บ้าน บดินทร 3</td>
                </tr>
                <tr>
                  <td className="TopicTable">ประเภทโครงการ</td>
                  <td>บ้านเดี่ยว</td>
                </tr>
                <tr>
                  <td className="TopicTable">พื้นที่โครงการ</td>
                  <td>51 ไร่ 81 ตร.วา</td>
                </tr>
                <tr>
                  <td className="TopicTable">จำนวนยูนิต</td>
                  <td>248 ยูนิต</td>
                </tr>
                <tr>
                  <td className="TopicTable">พื้นที่ใช้สอย</td>
                  <td>143 ตร.ม. บนพื้นที่ 50 ตร.วา ขึ้นไป</td>
                </tr>
                <tr>
                  <td className="TopicTable">จุดเด่นของโครงการ</td>
                  <td>
                    <ul style={{ margin: 0 }}>
                      <li>การเดินทางสะดวกสู่ทุกจุดใจกลางเมืองด้วยถนนสายหลัก ทางด่วน และลัดสู่ทุกจุดหมายไปกับรถไฟฟ้าสายสีแดงรังสิต</li>
                      <li>โครงการอยู่ใกล้แหล่งอำนวยความสะดวก อาทิ มหาวิทยาลัยรังสิต มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี และโรงเรียนเฟื่องฟ้าวิทยา</li>
                      <li>การออกแบบ และจัดวางพื้นที่บ้านให้เหมาะสมกับรูปแบบไลฟ์สไตล์ ผสานเข้ากับคุณภาพของวัสดุและบริการ ที่ทำให้คุณมั่นใจได้ว่า พื้นที่ส่วนตัวแห่งนี้จะเพิ่มประสบการณ์แห่งความสุข</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Plan */}
        <div id="planContainer" className="Plan Container">
          <h1>แบบบ้าน</h1>
          <div className="gridContainer">
            <div>
              <img src={Image[0]} className="planImage" />
            </div>
            <div>
              <img src={Image[2]} className="planImage last" />
            </div>
            <div>
              <h3>บ้านเดี่ยวชั้นเดียว</h3>
              <div className="gridTable">
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>พื้นที่ใช้สอย</td>
                        <td>59 ตร.ม.</td>
                      </tr>
                      <tr>
                        <td>ห้องนอน</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>ห้องครัว</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>ห้องรับแขก</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>ที่ดิน</td>
                        <td>70 ตร.วา</td>
                      </tr>
                      <tr>
                        <td>ห้องน้ำ</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>ที่จอดรถ</td>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <h3>บ้านเดี่ยว 2 ชั้น</h3>
              <div className="gridTable">
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>พื้นที่ใช้สอย</td>
                        <td>114 ตร.ม.</td>
                      </tr>
                      <tr>
                        <td>ห้องนอน</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>ห้องครัว</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>ห้องรับแขก</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>ที่ดิน</td>
                        <td>50 ตร.วา</td>
                      </tr>
                      <tr>
                        <td>ห้องน้ำ</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>ที่จอดรถ</td>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="galleryContainer" className="Gallery Container">
          <h1 className="">แกลลอรี่</h1>
          {Image.map((content) => {
            return <img src={content} className="planImage" />
          })}


        </div>

        <div id="locationContainer" className="LocationContainer">
          <h1 className="">ที่ตั้งโครงการ</h1>
          <div className="MapContainer">

          </div>
        </div>
      </div>
    );
  }
}

export default App;