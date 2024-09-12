import "./mainSection.css"
import Priority from "./PriorityComponent/priority"
import Status from "./StatusComponent/status"
import Users from "./UserComponent/users"

const MainSection = ({data,viewOptions})=>{
    let sortedData = {users: data?.users}
    if(viewOptions.sorted_by==='priority'){
        let tickets = data?.tickets ? [...data?.tickets] : []
        tickets?.sort((a, b) => b.priority - a.priority);
        console.log(tickets);
        sortedData.tickets = tickets
    }
    else{
        let tickets = data?.tickets ? [...data?.tickets] : []
        tickets.sort((a, b) => a.title.localeCompare(b.title));
        console.log(tickets);
        sortedData.tickets = tickets
    }
    return(
        <div className="main-section">
            {viewOptions.grouped_by==="status" && <Status data={sortedData}/>}
            {viewOptions.grouped_by==='user' && <Users data={sortedData}/>}
            {viewOptions.grouped_by==='priority' && <Priority data={sortedData}/>}
        </div>
    )
}

export default MainSection