import React, { useEffect, useRef, useState } from "react";
import './Acardeon.css';
import Chevron from './img/Chevron.svg'

export const Acardeon = ({ name, title }) => {
  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState();
  const [stypeP, setStypeP] = useState(false);


  const refHeight = useRef()

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => {
    setToggle(!toggle);
    setStypeP(!stypeP);
  }

  return (
    <div className="accordion">
      <button
        onClick={toggleState}
        className="accordion-visible">
        <p className={stypeP ? 'accordion-p-bold animated' : 'accordion-p'}>{name}</p>
        <img
          className={toggle && "active"}
          src={Chevron}
          alt='arrow'
        />
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <div className="accordint-toggle-wrap">
          <p className="accordion-toggle-p" aria-hidden={toggle ? "true" : "false"}>
            {title}
          </p>
        </div>
      </div>

    </div>
  )
}