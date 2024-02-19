import { useContext } from "react"
import valueContext from "../../context/Context"

const Component1 = () => {
  const {setUsername} = useContext(valueContext)
  return (
    <div className="container">
      <h1>Component 1</h1>
      <button className="btn btn-primary" onClick={()=>setUsername('rohan')}>Change Username</button>
    </div>
  )
}

export default Component1
