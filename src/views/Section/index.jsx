import React, { useEffect, useState } from "react";
import Bg from '../../assets/images/bg.png';
import img1Icon from '../../assets/images/img1.png';
import img2Icon from '../../assets/images/img2.png';
import img3Icon from '../../assets/images/img3.png';
import xIcon from '../../assets/images/X_icon.png'
import telegramIcon from '../../assets/images/telegram_icon.png';
import './index.css';

const Section = () => {
  const [show, setShow] = useState(false);
  const [imgs] = useState([
    {
      id: 0,
      img: img1Icon,
      title: 'Chapter 1',
      name: 'Set sail'
    },
    {
      id: 1,
      img: img2Icon,
      title: 'Chapter 2',
      name: 'Lost sea'
    },
    {
      id: 2,
      img: img3Icon,
      title: 'Chapter 3',
      name: 'Forgotten place'
    },
    {
      id: 3,
      img: img1Icon,
      title: 'Chapter 4',
      name: 'Treasure'
    }
  ])

  useEffect(()=>{
    onLoadBodyBg();
  }, []);

  const onLoadBodyBg = () => {
    document.body.style.backgroundImage = `url(${Bg})`;
    document.body.style.backgroundSize = 'cover';
  }

  const onChangeBg = (img) => {
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundSize = 'cover';
  }

  return (
    <div className="section_view">
      <div className="section_view_main">
        <div className="section_view_main_info">
          <p className="section_view_main_info_item">
            It's been four years since the last big storm<br />
            Still want to explore the treasures of TON?<br />
            This is our <span>Roadmap.</span>
          </p>
          <p className="section_view_main_info_item">
          live free or die, we have no road map,<br />we sail together. <br />Join this adventure.
          </p>
        </div>
        <div className="section_view_main_action">
          <div
            className="section_view_main_action_item white"
          >
            No,i’ll sit this one out.
          </div>
          <div
            className="section_view_main_action_item red"
            onClick={()=>{setShow(true)}}
          >
            yes,count me in！
          </div>
        </div>
      </div>
      <div className="section_view_list">
        {
          imgs.map(item=>
            <div
              className="section_view_list_item"
              key={item.id}
              onClick={()=>{onChangeBg(item.img)}}
            >
              <img
                src={item.img}
                className="section_view_list_item_img"
                alt=''
              />
              <p className="section_view_list_item_title">{item.title}</p>
              <p className="section_view_list_item_name">{item.name}</p>
            </div>
          )
        }
      </div>
      {
        show ? (
          <div className="mask">
            <div className="form">
              <h3 className="form-title">on board</h3>
              <div className="form-control">
                <div className="form-control-item">
                  <input
                    className="form-control-item-label"
                    placeholder="your twitter username？"
                  />
                </div>
                <div className="form-control-item">
                  <input
                    className="form-control-item-label"
                    placeholder="your telegram username？"
                  />
                </div>
              </div>
              <div className="form-control">
                <div className="form-control-block">
                  <input
                    className="form-control-block-label"
                    placeholder="your twitter username？"
                  />
                </div>
              </div>
              <div className="form-action">
                <div className="form-action-item" onClick={()=>{setShow(false)}}>
                  NO
                </div>
                <div className="form-action-item" onClick={()=>{setShow(false)}}>
                  YES
                </div>
                <div className="form-action-desc">
                  All development of Ton Captain is<br/>
                  jointly decided by the captains<br/>
                  (including royalties).
                </div>
              </div>
              <div className="form-icon">
                <img
                  src={xIcon}
                  className="form-icon-item"
                  alt=""
                />
                <img
                  src={telegramIcon}
                  className="form-icon-item"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}
export default Section;
