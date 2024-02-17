import { useState } from "react";
const Forms = () => {
    const [details, setDetails] = useState({name: '', email: '', age: ''})
    const onChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
        console.log(details)
    }
  return (
    <div className="card">
        <h5>Name : {details.name}</h5>
        <h5>Email : {details.email}</h5>
        <h5>Age : {details.age}</h5>
        <input name="name" value={details.name} onChange={onChange} type="text" className="input-group-text my-4" placeholder='Enter name'/> 
        <input name="email" value={details.email} onChange={onChange} type="text" className="input-group-text my-4" placeholder ='Enter Email' />
        <input name="age" value={details.age} onChange={onChange} type="text" className="input-group-text my-4" placeholder ='Enter Age' />
    </div>
  )
}

export default Forms
