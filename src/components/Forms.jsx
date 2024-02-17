import { useState } from "react";
const Forms = () => {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const onChangeName = (e) => {
        setName(e.target.value)  // This will log the value entered in the input field. the target is the input field and the value is the value entered in the input field. do console.log(e) to see the whole event object.
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)  
    }
  return (
    <div className="card">
        <h5>{name}</h5>
        <h5>{email}</h5>
        <input value={name} onChange={onChangeName} type="text" className="input-group-text my-4" placeholder='Enter name'/> 
        <input value={email} onChange={onChangeEmail} type="text" className="input-group-text my-4" placeholder ='Enter Email' />
    </div>
  )
}

export default Forms
