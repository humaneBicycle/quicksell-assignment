import React from "react";
import "./user.css";

export default function Users({ data }) {
  const tickets = data?.tickets || [];
  let users = {};

  (data?.users || []).forEach((userData) => {
    users[userData.id] = {
      name: userData.name,
      available: userData.available,
      tickets: [],
    };
  });

  tickets.forEach((ticket) => {
    if (users[ticket.userId]) {
      users[ticket.userId].tickets.push(ticket);
    }
  });
  return (
    <>
      {Object.keys(users)?.map((userId, ind) => {
        return (
          <div key={ind} className="user-column">
            <div className="user-header">
              <div className="user-header-row">
                <span className="profile_dp">{users[userId]?.name?.[0]}</span>
                <span className="user-name">
                  &nbsp;&nbsp;{users[userId]?.name}
                </span>
                <span className="ticket-count">
                  &nbsp;&nbsp;{users[userId].tickets?.length}
                </span>
              </div>
              <div className="user-header-row">
                <img src="icons/add.svg" className="icon-add" />
                &nbsp;&nbsp;&nbsp;
                <img src="icons/3 dot menu.svg" className="icon-menu" />
              </div>
            </div>
            <div className="data-container">
              {users[userId].tickets?.map((component, ind) => {
                return (
                  <div className="data-unit" key={ind}>
                    <div className="data-unit-upper">
                      <div className="data-unit-upper-left">
                        <span className="ticket-id">{component.id}</span>
                        <div className="ticket-info">
                          <img
                            src={`icons/${component.status}.svg`}
                            className="status-icon"
                          />
                          <span>{component.title}</span>
                        </div>
                      </div>
                    </div>
                    <div className="data-unit-lower">
                      <span className="icon-menu-wrapper">
                        <img src="icons/3 dot menu.svg" className="icon-menu" />
                      </span>
                      <div className="tag-container">
                        {component.tag.slice(0, 1).map((tag) => {
                          return <span key={tag}>&bull;&nbsp;{tag}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
