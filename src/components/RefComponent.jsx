import { useState } from "react";
import { useRef } from "react";

const RefComponent = () => {
    const bRef = useRef(null);
    const [name, setName] = useState("");
    const changeColor = () => {
        setName("Button color changed to red");
        bRef.current.style.backgroundColor = "red";
    }
  return (
    <>
    <h1 className="text-center mt-2">UseRef Component</h1>
    <div className="card">
      Ref Component
        <button className="btn btn-primary" ref={bRef} onClick={changeColor}>
            {name === "" ? "Change Color" : name}
        </button>
    </div>
    </>
  )
}

export default RefComponent
