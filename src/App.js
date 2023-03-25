//import logo from './logo.svg';
import './App.css';
import NewExpence from './components/NewExpence';
import ItemDisplay from './components/Expences/ItemDisplay';
import Card from './components/UI/Card';
const App=() => {
  const expences = [{date: new Date(2023, 1, 12), expanceName:'car', amount:560000, location:'delhi'},
  {date: new Date(2023, 0, 22), expanceName:'QLED TV', amount:56000, location:'delhi'},
  {date: new Date(2023, 3, 24), expanceName:'AC', amount:15000, location:'delhi'},
  {date: new Date(2023, 6, 22), expanceName:'PS5', amount:55000, location:'delhi'}
]
  

  return (
    <Card>
      <div className="MainBody2">
      <h1 id='h1'>WELCOME TO JAVASCRIPT REACT</h1>
      <NewExpence />
      </div>
      <div className="MainBody">
      <ItemDisplay date={expences[0].date} expanceName={expences[0].expanceName} location={expences[0].location} amount={expences[0].amount}></ItemDisplay>
      <ItemDisplay date={expences[1].date} expanceName={expences[1].expanceName} location={expences[1].location} amount={expences[1].amount}></ItemDisplay>
      <ItemDisplay date={expences[2].date} expanceName={expences[2].expanceName} location={expences[2].location} amount={expences[2].amount}></ItemDisplay>
      <ItemDisplay date={expences[3].date} expanceName={expences[3].expanceName} location={expences[3].location} amount={expences[3].amount}></ItemDisplay>
      </div>
    </Card>
  );
}

export default App;
