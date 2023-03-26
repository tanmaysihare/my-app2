import React,{useState} from 'react';
import './ExpenceForm.css';
function ExpenceForm(props){
    const [enteredName, setEnteredName]= useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');

    const ExpenceNameChangeHandler = (event) =>{
       setEnteredName(event.target.value);
     };
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        };
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
          };
    const SubmitHandler = (event) => {
        event.preventDefault();
        const ExpenceData = {
            expanceName: enteredName,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpanceData(ExpenceData);
        setEnteredName('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label className="col-form-label-lg">PLEASE INPUT EXPENCE NAME</label>
                    <input type="text" className="form-control" value={enteredName} onChange={ExpenceNameChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label className="col-form-label-lg">PLEASE INPUT EXPENCE AMOUNT</label>
                    <input type="number" min='0.01' step='0.01' className="form-control" value={enteredAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label className="col-form-label-lg">PLEASE INPUT DATE</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" className="form-control" value={enteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>ADD EXPENCE</button>
            </div>

        </form>
    );
}
export default ExpenceForm;