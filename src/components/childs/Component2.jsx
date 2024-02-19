import { useContext } from "react"
import valueContext from "../../context/Context"

const Component2 = () => {
  const {username,setUsername} =  useContext(valueContext)
  return (
    <div className="container">
      <h1>Component 2 {username}</h1>
      <button className="btn btn-success" onClick={()=>setUsername('rohan')}>Change Username</button>
    </div>
  )
}

export default Component2