import { useState } from "react"

const User = () => {
    const [name, setName] = useState('John Doe')
    const [age, setAge] = useState(25)
    const [count, setCount] = useState(0)
    const [animal, setAnimal] = useState(['dog', 'cat', 'rabbit', 'lion', 'tiger', 'elephant', 'giraffe'])
    const changeName = () => {
        setName('Jane Doe')
    }
    const changeAge = () => {
        setAge(30)
    }
    const updateCount = () => {
        setCount(count + 1)
    }
    const addAnimal = () => {
        const newAnimal = document.querySelector('input').value
        setAnimal([...animal, newAnimal])
        document.querySelector('input').value = ''
    }
  return (
    <>
    <div className='user'>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={changeName} className='btn btn-success my'>Change Name</button>
      <button onClick={changeAge} className='btn btn-success my-2'>Change Age</button>
      <button onClick={updateCount}className='btn btn-success'>Count {count}</button>
    </div>
    <div className="user">
      <h1>Animals</h1>
      <ul>
        {animal.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
      <input className="input-group-text my-2" type="text" placeholder="Enter animal name" />
      <h5>Animal Count: {animal.length}</h5>
      <button onClick={addAnimal} className="btn btn-success">Add Animal</button>
    </div>
    </>
  )
}

export default User