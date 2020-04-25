import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Alamgir','Rubel','Josim','Anwar','Salmanshah','khanna', ]
  const products = [
    {name:'Photoshop', price: '$20.99'},
    {name:'Illustrator', price: '$15.99'},
    {name:'Adobe XD', price: '$9.99'},
    {name:'Adobe pdf', price: '$19.99'}
  ]
 
  return (
    <div className="App">
      <header className="App-header">
        
    
     <p>I am a react person. </p>
     <Counter ></Counter>
     <Post></Post>
     <ul>
       {
         nayoks.map(nayok=> <li>{nayok}</li>)
       }
        {
          products.map(prods=><li>{prods.name}</li>)
        }
        {
          products.map(product1=><Product product2={product1}></Product>)
        }
     </ul>
     {/* <Product product2={products[0]}></Product>
     <Product product2={products[1]}></Product>
     <Product product2={products[2]}></Product> */}
      
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount]= useState(0);
  const handleIncrease = () => setCount(count + 1);
 
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>

    </div>
  )
}
function Post(){
  const [post, setPost] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=>setPost(data))

  },[])
  
  return(
    <div>
      <h3>Dynamic posts: {post.length}</h3>
      {
        <ul>
         {
           post.map(userPost=><li>{userPost.id}</li>)
         }
        </ul>
    
      }
  
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightGray',
    height: '200px',
    width:'200px',
   

  }
  const {name, price} = props.product2;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}



export default App;
