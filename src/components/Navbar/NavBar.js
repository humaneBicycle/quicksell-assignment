import React, { useState } from "react"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import "./NavBar.css"
import Dropdown from "./dropdown";

export default function NavBar({viewOptions, setViewOptions}){
    const [showOptions, setShowOptions] = useState(false)
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="display-options-container" onClick={()=>{
            setShowOptions(!showOptions);
          }}>
            <HiAdjustmentsHorizontal />
            <span>Display</span>
            <FaAngleDown />
            {showOptions && (
              <div
                className="display-options"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Dropdown
                  viewOptions={viewOptions}
                  setViewOptions={setViewOptions}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

 