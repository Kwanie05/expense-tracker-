import React from 'react';
import './ExpenseList.css';

function ExpenseList({ items, deleteItem})  {

    return(
       <table className="table">
        <thead>
         <tr>
            <th scope="col">Id</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
         </tr>
        </thead>
        <tbody>

            {items.map((item) => <tr key ={item.id} >
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>R{item.amount}</td>
                <td>{item.category}</td>
                <td><button className="btn btn-outline-danger" onClick={()=>deleteItem(item.id)}>Delete</button> </td>
        </tr>)
        }

        <tr>
            <td><h3>Total</h3></td>
            <td><h3>R{ items.reduce((total, item) => total + item.amount,0).toFixed(2)}</h3></td>
        </tr>
        
    </tbody>
       </table>
    );
}

export default ExpenseList;