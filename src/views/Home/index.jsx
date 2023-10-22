import React from "react";
import { useNavigate } from 'react-router-dom';
import grilBg from '../../assets/images/home_girl.png';
import boyBg from '../../assets/images/home_boy.png';
import homeIcon from '../../assets/images/home.png';
import './index.css';

const Home = () => {
  let navigate = useNavigate()

  const showSection = () => {
    navigate('/section');
  }

  return (
    <div className="home">
      <img
        src={grilBg}
        className="home_gril"
        alt=""
      />
      <div className="home_main">
        <img
          src={homeIcon}
          className="home_main_img"
          alt=""
        />
        <div className="home_main_action">
          <div className="home_main_action_item" onClick={()=>{showSection()}}>Now, set sail.</div>
        </div>
      </div>
      <img
        src={boyBg}
        className="home_boy"
        alt=""
      />
    </div>
  )
}
export default Home;