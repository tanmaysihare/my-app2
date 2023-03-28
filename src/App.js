//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import NewExpence from './components/NewExpence';
import ItemDisplay from './components/Expences/ItemDisplay';


const preExpences = [
{id: 'e1', date: new Date(2022, 1, 12), expanceName:'car', amount:560000, location:'delhi'},
{id: 'e2', date: new Date(2020, 0, 22), expanceName:'QLED TV', amount:56000, location:'delhi'},
{id: 'e3', date: new Date(2021, 3, 24), expanceName:'AC', amount:15000, location:'delhi'},
{id: 'e4', date: new Date(2022, 6, 22), expanceName:'PS5', amount:55000, location:'delhi'}
];
const App=() => {
  let [expences, setExpences] = useState(preExpences);
  const addExpenceHandler = (expence) => {
    setExpences((expences)=>{
      return [expence,...expences];
    }); 
      
    
    console.log(expences);
  };

  return (
    <div className="app">
      <div className="MainBody1">

      <NewExpence onAddExpence={addExpenceHandler} />
      </div>
      <div className="MainBody">
      <ItemDisplay items={expences}/>
     
     
      </div>
    </div>
  );
}

export default App;
