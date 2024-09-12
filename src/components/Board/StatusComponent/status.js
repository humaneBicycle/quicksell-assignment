import React from "react";
import "./status.css";

export default function Status({ data }) {
  const tickets = data?.tickets || [];
  const users = (data?.users || []).reduce((acc, userData) => {
    acc[userData.id] = userData.name;
    return acc;
  }, {});

  const possibleStatus = tickets.reduce(
    (acc, ticket) => {
      if (!acc[ticket.status]) {
        acc[ticket.status] = [];
      }
      acc[ticket.status].push(ticket);
      return acc;
    },
    {
      Backlog: [],
      Todo: [],
      "In progress": [],
      Done: [],
      Cancelled: [],
    }
  );

  const renderStatusHeader = (status, count) => (
    <div className="status-header">
      <div className="status-header-row">
        <img src={`icons/${status}.svg`} alt={`${status} icon`} />
        <span>&nbsp;&nbsp;{status}</span>
        <span className="ticket-count">&nbsp;&nbsp;{count}</span>
      </div>
      <div className="status-header-row">
        <img src="icons/add.svg" alt="Add icon" />
        &nbsp;&nbsp;&nbsp;
        <img src="icons/3 dot menu.svg" alt="Menu icon" />
      </div>
    </div>
  );

  const renderDataUnit = (component) => (
    <div className="data-unit" key={component.id}>
      <div className="data-unit-upper">
        <div className="data-unit-upper-left">
          <span className="ticket-id">{component.id}</span>
          <span>{component.title}</span>
        </div>
        <div className="data-unit-upper-right">
          <span>{users[component.userId]?.[0]}</span>
        </div>
      </div>
      <div className="data-unit-lower">
        <span className="icon-menu-wrapper">
          <img src="icons/3 dot menu.svg" alt="Menu icon" />
        </span>
        <div className="tag-container">
          {component.tag.slice(0, 1).map((tag) => (
            <span key={tag}>&bull;&nbsp;{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {Object.keys(possibleStatus).map((status) => (
        <div key={status} className="status-column">
          {renderStatusHeader(status, possibleStatus[status]?.length)}
          <div className="data-container">
            {possibleStatus[status].map(renderDataUnit)}
          </div>
        </div>
      ))}
    </>
  );
}
