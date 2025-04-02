  import { useEffect, useState } from 'react'
  import './App.css'

  function App() {
  
      const[product,setProduct]=useState([]);

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch((error)=>console.error(error));
    
    },[])
    return (
      <div className="App">
        <table className='main_table'>
          <caption><h2>Product For Sale</h2></caption>
          <thead className='table_head'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>category</th>
            <th>image</th>
            <th>Rating</th>
            
          </tr>
          </thead>
          <tbody className='table_body'>
          {product.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>
          <img src={item.image} className='images' />
        </td>
        <td>{item.rating.rate}</td>

      </tr>
    ))}
        </tbody>



        </table>
        
      </div>
    )
  }

  export default App
