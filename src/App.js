import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/board.js';
import NavBar from './components/Navbar/NavBar.js';

export default function App() {
  const [data, setData] = useState({})
  const [viewOptions, setViewOptions] = useState({
    "grouped_by" : "status",
    "sorted_by" : "priority"
  })
  const fetchData = async()=>{
      try {
        let response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
        let data = response = await response.json()
        setData(data)
      } catch (error) {
        console.log("Error Occured : ", error)
        alert("Something went wrong")
      }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="App">
      <NavBar viewOptions={viewOptions} setViewOptions={setViewOptions}/>
      <Board data={data} viewOptions={viewOptions}/>
    </div>
  )
}

