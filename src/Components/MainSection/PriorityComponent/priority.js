import React from "react";

const Priority = ({data})=>{
    const tickets = data?.tickets
    let stringValOfPriority = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No priority"
    }
    let prioritiesData = {0:[],1:[],2:[],3:[],4:[]}
    tickets?.forEach(ticket => {
        prioritiesData[ticket.priority]?.push(ticket)
    });
    let users = {}
    data?.users?.forEach((userData)=>{
        users[userData.id] = userData.name
    })
    console.log({tickets, users})
    return(
        <>
            {
                Object.keys(prioritiesData)?.map((data,ind) =>{
                    return (
                        <div key={ind} className="status-column">
                            <div className="status-header">
                                <div className="status-header-row">
                                    <img src={`icons/${stringValOfPriority[data]}.svg`}/>
                                    <span>&nbsp;&nbsp;{stringValOfPriority[data]}</span>
                                    <span style={{"color": "#a9a9a9"}}>&nbsp;&nbsp;{prioritiesData[data]?.length}</span>
                                </div>
                                <div className="status-header-row">
                                    <img src="icons/add.svg"/>
                                    &nbsp;&nbsp;&nbsp;
                                    <img src="icons/3 dot menu.svg"/>
                                </div>
                            </div>
                            <div className="data-container">
                                {
                                    prioritiesData[data]?.map((component,ind)=>{
                                        console.log({component : users[component.userId]})
                                        return(
                                            <div className="data-unit" key={ind}>
                                                <div className="data-unit-upper">
                                                    <div className="data-unit-upper-left">
                                                        <span style={{"color": "#a9a9a9"}}>
                                                            {component.id}
                                                        </span>
                                                        <span>
                                                            {component.title}
                                                        </span>
                                                    </div>
                                                    <div className="data-unit-upper-right">
                                                        <span>{users[component.userId][0]}</span>
                                                    </div>
                                                </div>
                                                <div className="data-unit-lower">
                                                    <span><img src="icons/3 dot menu.svg"/></span>
                                                        <div>
                                                            {component.tag.slice(0,1).map((tag)=>{
                                                                return(
                                                                    <span>&bull;&nbsp;{tag}</span>
                                                                )
                                                            })}
                                                        </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Priority