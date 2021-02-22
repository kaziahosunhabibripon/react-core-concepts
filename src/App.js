import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['Razzaque','Jasim','Anwar', 'Jafor','Alomgir', 'Salman','Serious Kanchon'];
const products = [
  {name:'Photoshop', price:'$90.99'},
  {name:'Ilustrator', price:'$60.99'},
  {name:'PDF Reader', price:'$6.99'},
  {name:'Premiere El', price:'$249.99'},
];
const nayoksName = nayoks.map(nayok=> nayok);

  return (
    <div className="App">
      <header className="App-header">
        <p>My first React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(nayok=><li>{nayok}</li>)}
        </ul>
        {
          products.map(product=> <li>{product.name}</li>)
        }
        {
          products.map(product=> <Product product={product}></Product>)
        }
        <Person></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Counter: {count} </h1>
      <button onMouseMove= { () => setCount(count - 1) }>Decrease</button>
      <button onMouseMove= { () => setCount(count + 1) }>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=> res.json())
    .then(data=> setUsers(data));
  },[])
  return(
    <div>
      <h3> Dynamic Users:{users.length}</h3>
      <ul>
      {
        users.map(user=> 
          <div>
            <li>
              {user.name} <br></br> <span>{user.email} </span>
            </li>
          </div>  
        )
      }
    </ul>    
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'orangered',
    width:'400px',
    float:'left',
    margin:'2px',
    color:"Black",
    padding:'5px'
  }
  
  const {name, price} = props.product;
  
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid gold', width:'400px', padding:'5px', margin:'10px', color:"cyan"}}>
      <h3>My Name: {props.name} </h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
