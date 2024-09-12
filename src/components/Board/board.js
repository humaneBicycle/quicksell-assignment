import "./board.css";
import Priority from "./PriorityComponent/priority";
import Status from "./StatusComponent/status";
import Users from "./UserComponent/users";

export default function Board ({ data, viewOptions }) {
  let sortedData = { users: data?.users || [] };
  let tickets = data?.tickets ? [...data.tickets] : [];

  if (viewOptions.sorted_by === "priority") {
    tickets.sort((a, b) => b.priority - a.priority);
  } else {
    tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  sortedData.tickets = tickets;
  return (
    <div className="board-wrapper">
      <div className="board-section">
        {viewOptions.grouped_by === "status" && <Status data={sortedData} />}
        {viewOptions.grouped_by === "user" && <Users data={sortedData} />}
        {viewOptions.grouped_by === "priority" && (<Priority data={sortedData} />)}
      </div>
    </div>
  );
};

