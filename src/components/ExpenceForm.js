import React from 'react';
import './ExpenceForm.css';
function ExpenceForm(){
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label className="col-form-label-lg">PLEASE INPUT EXPENCE NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="new-expense__controls">
                    <label className="col-form-label-lg">PLEASE INPUT EXPENCE AMOUNT</label>
                    <input type="number" min='0.01' step='0.01' className="form-control" />
                </div>
                <div className="new-expense__controls">
                    <label className="col-form-label-lg">PLEASE INPUT DATE</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" className="form-control"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>ADD EXPENCE</button>
            </div>

        </form>
    );
}
export default ExpenceForm;