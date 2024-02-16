import { useState } from "react"

const User = () => {
    const [name, setName] = useState('John Doe')
    const [age, setAge] = useState(25)
    const [count, setCount] = useState(0)
    const changeName = () => {
        setName('Jane Doe')
    }
    const changeAge = () => {
        setAge(30)
    }
    const updateCount = () => {
        setCount(count + 1)
    }
  return (
    <div className='user'>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={changeName} className='btn btn-success my'>Change Name</button>
      <button onClick={changeAge} className='btn btn-success my-2'>Change Age</button>
      <button onClick={updateCount}className='btn btn-success'>Count {count}</button>
    </div>
  )
}

export default User