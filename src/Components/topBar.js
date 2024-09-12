import React, { useState } from "react"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import "./topBar.css"
import Dropdown from "./dropdown";

const TopBar = ({viewOptions, setViewOptions})=>{
    const [showOptions, setShowOptions] = useState(false)
    const handleClick = ()=>{
        setShowOptions(!showOptions)
    }
    return(
        <div className="topbar">
            <div className="display-options-container" onClick={handleClick}>
                <HiAdjustmentsHorizontal/>
                <span>Display</span>
                <FaAngleDown />                
                {showOptions && 
                    <div className="display-options" onClick={(event)=>{event.stopPropagation()}}>
                        <Dropdown viewOptions={viewOptions} setViewOptions={setViewOptions}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default TopBar