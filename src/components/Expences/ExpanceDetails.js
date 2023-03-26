import Card from "../UI/Card";
import React,{useState} from "react";
import ExpenceDate from './ExpenceDate';
import './ItemDisplay.css';
function ExpanceDetails(props){
    const [expanceName , setExpenceName] = useState(props.expanceName);
    const [location , setLocation] = useState(props.location);
    const [amount , setAmount] = useState(props.amount);
        const buttonHendler = () =>{
            setExpenceName(expanceName + '  updated');
            setLocation(location + '  updated');
            setAmount(amount + 100);
        
        }
    return(
        <Card className="expense-item">
            <ExpenceDate date={props.date}/>
            <h2>{expanceName}</h2>
            <div className="expense-item__description">{location}</div>
            <Card className="expense-item__price">${amount}</Card>
            <button className="btn btn-primary" onClick={buttonHendler}>ADD</button>
        </Card>
    );
}
export default ExpanceDetails;