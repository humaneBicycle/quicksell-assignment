import "./mainSection.css"
import Status from "./StatusComponent/status"
import Users from "./UserComponent/users"

const MainSection = ({data,viewOptions})=>{
    return(
        <div className="main-section">
            {viewOptions.grouped_by==="status" && <Status data={data}/>}
            {viewOptions.grouped_by==='user' && <Users data={data}/>}
        </div>
    )
}

export default MainSection