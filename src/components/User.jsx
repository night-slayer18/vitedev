import { useState } from "react"

const User = () => {
    const [name, setName] = useState('John Doe')
    const [age, setAge] = useState(25)
    const changeName = () => {
        setName('Jane Doe')
    }
    const changeAge = () => {
        setAge(30)
    }
  return (
    <div className='user'>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={changeName} className='btn btn-success my-3'>Change Name</button>
      <button onClick={changeAge} className='btn btn-success'>Change Age</button>
    </div>
  )
}

export default User