//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import NewExpence from './components/NewExpence';
import ItemDisplay from './components/Expences/ItemDisplay';
import Card from './components/UI/Card';

const App=() => {
  let [expences, setExpences] = useState([{date: new Date(2023, 1, 12), expanceName:'car', amount:560000, location:'delhi'},
  {date: new Date(2023, 0, 22), expanceName:'QLED TV', amount:56000, location:'delhi'},
  {date: new Date(2023, 3, 24), expanceName:'AC', amount:15000, location:'delhi'},
  {date: new Date(2023, 6, 22), expanceName:'PS5', amount:55000, location:'delhi'}
]);
  const addExpenceHandler = (expence) => {
    setExpences((expences)=>{
      return [...expences,expence];
    }); 
      
    
    console.log(expences);
  };

  return (
    <Card>
      <div className="MainBody2">
      <h1 id='h1'>WELCOME TO JAVASCRIPT REACT</h1>
      <NewExpence onAddExpence={addExpenceHandler} />
      </div>
      <div className="MainBody">
      <ItemDisplay items={expences}/>
     
     
      </div>
    </Card>
  );
}

export default App;
