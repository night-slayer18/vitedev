import { useContext } from "react"
import valueContext from "../../context/Context"

const Component3 = () => {
  const {username} = useContext(valueContext)
  return (
    <div className="container">
      <h1>Component 3 {username}</h1>
    </div>
  )
}

export default Component3
