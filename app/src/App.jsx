import { useState } from 'react'
import './App.css'

function App() {
  const [datas, setDatas] = useState([]);

  async function fetchData() {
    const dats = await fetch('http://localhost:3000/users')
    const datsJSON = await dats.json()
    setDatas(datsJSON)
    console.log(datas)
  }


  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        {datas.map((user, i) => (
          <div key={i}>
            <h1>{user.FullName}</h1>
            <h2>{user.gender === 1 ? "Female" : "Male"}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
