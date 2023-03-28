import React,{useState} from 'react';
import './Expence2.css'
import ExpenceForm from './ExpenceForm';

function NewExpence(props){
    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenceDataHandler = (enteredExpenceData) => {
    const expenceData = {
        ...enteredExpenceData,
        id: Math.random().toString()
    };
    props.onAddExpence(expenceData);
    setIsEditing(false);
   };
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
   return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>ADD NEW EEXPENCE</button>}
            {isEditing && <h1 id='h1'>WELCOME TO JAVASCRIPT REACT</h1>}
           {isEditing && <ExpenceForm onSaveExpanceData={saveExpenceDataHandler} onCancel={stopEditingHandler}/> }
        </div>
    );
};

export default NewExpence;