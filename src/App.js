import logo from './logo.svg';
import './App.css';
import Web3 from 'web3/dist/web3.min';
import ABI from './ABI.json'
import { useEffect, useState } from 'react';

function App() {

  const[name, setName]= useState()

  const getData= ()=>{
    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/1af77a26224c4df2a5836ff155ff47be'));
    
    const data =  new web3.eth.Contract(ABI,'0x6d8ecf3c4d113285532a456eb6f2b3f7d02a7873');
    // const name= data.methods.getName().call();
    // console.log(data.methods.getName().call())
    data.methods.getName().call().then((res)=>{
      setName(res)
      console.log(res, "Name");
    }).catch((err)=>{
      console.log(err,"Error")
    })
  }
       useEffect(()=>{
  
            getData();
       },[])


  return (
    <div className="App">
      <header className="App-header">
        
      {name &&  <h1>
         {name}
        </h1>}
      
      </header>
    </div>
  );
}

export default App;
