import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import xIcon from '../../assets/images/x.png';
import telegramIcon from '../../assets/images/telegram.png';
import { Outlet } from 'react-router-dom'
import './index.css';

const Layout = () => {
  return (
    <>
    <header className="header_view">
        <div className="header_view_main">
          <div className="header_view_main_title">
            System Online <br/>
            Fxxk SEC
          </div>
          <img
            src={logo}
            className="header_view_main_logo"
            alt=''
          />
          <div className="header_view_main_action">CONNECT WALLET</div>
        </div>
      </header>
      <div className="main_body">
        <Outlet/>
      </div>
      <footer className="footer_view">
        <div className="footer_view_rights">ⓒ 2023 ALL RIGHTS RESERVED.</div>
        <div className="footer_view_link">
          TERMS & CONDITIONS&nbsp;|&nbsp;|&nbsp;PRIVACY POLICYNFT LICENSE
          <div className="footer_view_link_icons">
            <img
              src={telegramIcon}
              className="footer_view_link_icons_item"
              alt=""
            />
            <img
              src={telegramIcon}
              className="footer_view_link_icons_item"
              alt=""
            />
            <img
              src={telegramIcon}
              className="footer_view_link_icons_item"
              alt=""
            />
            <img
              src={telegramIcon}
              className="footer_view_link_icons_item"
              alt=""
            />
          </div>
        </div>
      </footer>
    </>
  )
}
export default Layout;