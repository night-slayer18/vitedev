import { useEffect, useState } from "react"

const ApiCall = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        try{
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
        }catch(error){
            console.log(error)
        }
    }, [])
    
    
  return (
    <div className="container">
      <h1 className="text-center my-4">Api Component</h1>
      <div className="row">
        {product.map((item) => {
          return (
            <div key={item.id} className="card col-5">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h3>${item.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ApiCall
