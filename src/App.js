import { useEffect, useState } from 'react';
import './App.css';
import MainSection from './Components/MainSection/mainSection';
import TopBar from './Components/topBar';
import axios from 'axios';

function App() {
  const [viewOptions, setViewOptions] = useState({
    "grouped_by" : "status",
    "sorted_by" : "priority"
  })
  const [data, setData] = useState({})
  const fetchData = async()=>{
      try {
        let response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
        setData(response.data)
      } catch (error) {
        console.log("Error Occured : ", error)
        alert("Something went wrong")
      }
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log({data})
  console.log({viewOptions})
  return (
    <div className="App">
      <TopBar viewOptions={viewOptions} setViewOptions={setViewOptions}/>
      <MainSection data={data} viewOptions={viewOptions}/>
    </div>
  )
}

export default App;
