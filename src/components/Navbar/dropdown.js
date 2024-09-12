import React from "react";

export default function Dropdown({ viewOptions, setViewOptions }) {
  return (
    <>
      <div className="dropdown-option">
        Grouping
        <select
          onChange={(event) => {
            setViewOptions({
              sorted_by: viewOptions.sorted_by,
              grouped_by: event.target.value,
            });
          }}
          value={viewOptions.grouped_by}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="dropdown-option">
        Ordering
        <select
          onChange={(event) => {
            setViewOptions({
              sorted_by: event.target.value,
              grouped_by: viewOptions.grouped_by,
            });
          }}
          value={viewOptions.sorted_by}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </>
  );
};

