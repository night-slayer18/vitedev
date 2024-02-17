import { useEffect, useState } from "react"

const Effect = () => {
  
  const [mount, setMount] = useState(true)
  const [effect, setEffect] = useState('India')
  useEffect(() => {
    console.log('useEffect called')

    return () => {
      console.log('Component Unmounted')
    }
  }, [mount])

  // by default useEffect is called when the component is mounted
  // if we want to call the useEffect when the state of the variable changes then we can pass the variable in the array as the second argument
  // if we want to call the useEffect only once then we can pass the empty array as the second argument

  return (
    <div>
      <h1 className="text-center my-2">UseEffect Component</h1>
      {mount ? <button className="btn btn-danger my-2" onClick={() => setMount(false)}>Unmount</button> : <button className="btn btn-success my-2" onClick={() => setMount(true)}>Mount</button>}
      <div className="country">
        <h2>{effect}</h2>
        <p>The useEffect is called when the state of the variable changes</p>
        <button className="btn btn-primary my-2 " onClick={() => setEffect('India')}>Click Me</button>
        <button className="btn btn-warning my-2 " onClick={() => setEffect('USA')}>Click Me</button>
      </div>
    </div>
  )
}

export default Effect
