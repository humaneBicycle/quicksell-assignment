import React from "react";
import "./status.css"

const Status = ({data})=>{
    const tickets = data?.tickets
    const possibleStatus = {'Backlog' : [],'Todo': [],'In progress': [],'Done': [],'Cancelled': []}
    tickets?.forEach(ticket => {
        possibleStatus[ticket.status]?.push(ticket)
    });
    let users = {}
    data?.users?.forEach((userData)=>{
        users[userData.id] = userData.name
    })
    console.log({tickets, users})
    return(
        <>
            {
                Object.keys(possibleStatus)?.map((status,ind) =>{
                    return (
                        <div key={ind} className="status-column">
                            <div className="status-header">
                                <div className="status-header-row">
                                    <img src={`icons/${status}.svg`}/>
                                    <span>&nbsp;&nbsp;{status}</span>
                                    <span style={{"color": "#a9a9a9"}}>&nbsp;&nbsp;{possibleStatus[status]?.length}</span>
                                </div>
                                <div className="status-header-row">
                                    <img src="icons/add.svg"/>
                                    &nbsp;&nbsp;&nbsp;
                                    <img src="icons/3 dot menu.svg"/>
                                </div>
                            </div>
                            <div className="data-container">
                                {
                                    possibleStatus[status]?.map((component,ind)=>{
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

export default Status