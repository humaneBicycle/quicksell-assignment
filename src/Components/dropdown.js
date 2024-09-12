import React from "react";

const Dropdown = ({viewOptions, setViewOptions})=>{
    const handleChange = (event,change)=>{
        if(change==="grouping_change"){
            setViewOptions({
                "sorted_by" : viewOptions.sorted_by,
                "grouped_by" : event.target.value
            })
        }
        else{
            setViewOptions({
                "grouped_by" : viewOptions.grouped_by,
                "sorted_by" : event.target.value
            })
        }
    }
    return(
        <>
            <div className="dropdown-option">
                <span>Grouping</span>
                <select onChange={(event)=>{handleChange(event,"grouping_change")}} value={viewOptions.grouped_by}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className="dropdown-option">
                <span>Ordering</span>
                <select onChange={(event)=>{handleChange(event,"priority_change")}} value={viewOptions.sorted_by}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </>
    )
}

export default Dropdown