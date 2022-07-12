import React from "react";
import './Footer.css';
import Frame from './imgFooter/Frame.png';
import facebook from './imgFooter/facebook.svg';
import inst from './imgFooter/inst.svg';
import tg from './imgFooter/tg.svg';
import viber from './imgFooter/viber.svg';
import WhatsApp from './imgFooter/WhatsApp.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <footer className="footer-content">
            <a href="/" target="_blank" className='footer-content__link'>
              <img src={Frame} alt="logo" className='footer-content-logo' />
            </a>
          <div className="footer-content__mini-logo">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook" className='mini-logo' />
              </a>
              <a href="https://web.telegram.org" target="_blank" rel="noreferrer">
                <img src={tg} alt="tg" className='mini-logo' />
              </a>
              <a href="https://www.viber.com" target="_blank" rel="noreferrer">
                <img src={viber} alt="viber" className='mini-logo' />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={inst} alt="inst" className='mini-logo' />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
                <img src={WhatsApp} alt="WhatsApp" className='mini-logo' />
              </a>
            </div>
          <div className="footer-content__contacts">
            <p className="footer-contacts-name">
              <a href="tel:+380951234567" className="footer-contacts-name-tel">
                Валерия: +380951234567
              </a>
            </p>
            <p className="footer-contacts-name">
              <a href="tel:+380951234567" className="footer-contacts-name-tel">
                Анна: +380951234567
              </a>
            </p>
            <p className="footer-contacts-name">
              <a href="tel:+380951234567" className="footer-contacts-name-tel">
                Валерия: +380951234567
              </a>
            </p>
          </div>
          <div className="footer-content__email">
            <a href="mailto:hr@dv-s.com" className="footer-contacts-malito">
              hr@dv-s.com
            </a>
          </div>
          <div className="footer-content__save-rules-wrap">
            <p className="footer-content__save-rules">
              Developers 2018-2021 © All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
} 