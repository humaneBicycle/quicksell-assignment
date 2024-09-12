import React from "react";

export default function Priority({ data }) {
  const tickets = data?.tickets ?? [];

  const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
  };

  const groupedByPriority = tickets.reduce(
    (acc, ticket) => {
      if (!acc[ticket.priority]) acc[ticket.priority] = [];
      acc[ticket.priority].push(ticket);
      return acc;
    },
    { 0: [], 1: [], 2: [], 3: [], 4: [] }
  );

  const usersMap = (data?.users ?? []).reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  const renderHeader = (priority, count) => (
    <div className="status-header">
      <div className="status-header-row">
        <img
          src={`icons/${priorityLabels[priority]}.svg`}
          alt={`${priorityLabels[priority]} icon`}
        />
        <span>&nbsp;&nbsp;{priorityLabels[priority]}</span>
        <span className="ticket-count">&nbsp;&nbsp;{count}</span>
      </div>
      <div className="status-header-row">
        <img src="icons/add.svg" alt="Add icon" />
        <img src="icons/3 dot menu.svg" alt="Menu icon" />
      </div>
    </div>
  );

  const renderTicket = (ticket) => (
    <div className="data-unit" key={ticket.id}>
      <div className="data-unit-upper">
        <div className="data-unit-upper-left">
          <span className="ticket-id">{ticket.id}</span>
          <span>{ticket.title}</span>
        </div>
        <div className="data-unit-upper-right">
          <span>{usersMap[ticket.userId]?.[0]}</span>
        </div>
      </div>
      <div className="data-unit-lower">
        <span className="icon-menu-wrapper">
          <img src="icons/3 dot menu.svg" alt="Menu icon" />
        </span>
        <div className="tag-container">
          {ticket.tag.slice(0, 1).map((tag, index) => (
            <span key={index}>&bull;&nbsp;{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {Object.keys(groupedByPriority).map((priority) => (
        <div key={priority} className="status-column">
          {renderHeader(priority, groupedByPriority[priority].length)}
          <div className="data-container">
            {groupedByPriority[priority].map(renderTicket)}
          </div>
        </div>
      ))}
    </>
  );
}

