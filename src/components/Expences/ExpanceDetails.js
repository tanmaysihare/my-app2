import Card from "../UI/Card";
import React,{useState} from "react";
function ExpanceDetails(props){
    const [expanceName , setExpenceName] = useState(props.expanceName);
    const [location , setLocation] = useState(props.location);
    const [amount , setAmount] = useState(props.amount);
        const buttonHendler = () =>{
            setExpenceName(expanceName + '  updated');
            setLocation(location + '  updated');
            setAmount(amount + 100);
            console.log('DELETED');
        }
    return(
        <Card className="expense-item__description">
            <h2>{expanceName}</h2>
            <div className="expense-item__description">{location}</div>
            <Card className="expense-item__price">${amount}</Card>
            <button onClick={buttonHendler}>ADD MONEY BUTTON</button>
           </Card>
    );
}
export default ExpanceDetails;