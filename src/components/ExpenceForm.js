import React,{useState} from 'react';
import './ExpenceForm.css';
function ExpenceForm(props){
    const [enteredName, setEnteredName]= useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');
    const [enteredLocation, setEnteredLocation]= useState('');

    const ExpenceNameChangeHandler = (event) =>{
       setEnteredName(event.target.value);
     };
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        };
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
          };
    const LocationChangeHandler = event =>{
        setEnteredLocation(event.target.value);
    };
    const SubmitHandler = (event) => {
        event.preventDefault();
        const ExpenceData = {
            expanceName: enteredName,
            amount: enteredAmount,
            date: new Date(enteredDate),
            location: enteredLocation
        };
        props.onSaveExpanceData(ExpenceData);
        setEnteredName('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');
    };
    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className='label' >PLEASE INPUT EXPENCE NAME</label>
                    <input type="text" className='input' value={enteredName} onChange={ExpenceNameChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label className="label">PLEASE INPUT EXPENCE AMOUNT</label>
                    <input type="number" min='0.01' step='0.01' className="input" value={enteredAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label className="label">PLEASE ADD LOCATION OF PECHASE</label>
                    <input type="text" className="input" value={enteredLocation} onChange={LocationChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label className="label">PLEASE INPUT DATE</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" className="input" value={enteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>CANCEL</button>
                <button type='submit'>ADD EXPENCE</button>
            </div>

        </form>
    );
}
export default ExpenceForm;