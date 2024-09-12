import React from "react";
import "./user.css"

const Users = ({data})=>{
    const tickets = data?.tickets
    let users = {}
    data?.users?.forEach((userData)=>{
        users[userData.id] = {
            name : userData?.name,
            available : userData?.available,
            tickets: []
        }
    })
    tickets?.forEach(ticket => {
        users[ticket.userId]?.tickets?.push(ticket)
    });
    console.log({tickets, users})
    return(
        <>
            {
                Object.keys(users)?.map((userId,ind) =>{
                    console.log({userId})
                    return (
                        <div key={ind} className="user-column">
                            <div className="user-header">
                                <div className="user-header-row">
                                    <span>{users[userId]?.name?.[0]}</span>
                                    <span>&nbsp;&nbsp;{users[userId]?.name}</span>
                                    <span style={{"color": "#a9a9a9"}}>&nbsp;&nbsp;{users[userId].tickets?.length}</span>
                                </div>
                                <div className="user-header-row">
                                    <img src="icons/add.svg"/>
                                    &nbsp;&nbsp;&nbsp;
                                    <img src="icons/3 dot menu.svg"/>
                                </div>
                            </div>
                            <div className="data-container">
                                {
                                    users[userId].tickets?.map((component,ind)=>{
                                        return(
                                            <div className="data-unit" key={ind} style={{minHeight: "10vh", gap:"1.5vh "}}>
                                                <div className="data-unit-upper">
                                                    <div className="data-unit-upper-left" style={{width: "100%"}}>
                                                        <span style={{"color": "#a9a9a9",marginBottom:"0.2rem"}}>
                                                            {component.id}
                                                        </span>
                                                        <div style={{display:"flex", "gap":"1rem"}}>
                                                            <img src={`icons/${component.status}.svg`}/>
                                                            <span>
                                                                {component.title}
                                                            </span>
                                                        </div>
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

export default Users