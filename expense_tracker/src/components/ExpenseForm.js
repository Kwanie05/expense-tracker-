import React from 'react';
import {useForm} from "react-hook-form";

const ExpenseForm = ({addExpense, setNewItem}) => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        setNewItem(data);
        addExpense();
    }

  return (
   <form action="" className="mb-5" onSubmit = {handleSubmit(onSubmit)}>
     <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input  id="description" type="text" className="form-control" {...register("description", {minlength:6, required:true})}/>
        {errors.description?.type === "required" && <p className="text-danger">This field is required</p>}
        {errors.description?.type === "minlength" && <p>This field requires at least 6 characters</p>}
    
    </div>

    <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input  id="amount" type="number" className="form-control" {...register("amount")} />
        {errors.amount?.type === "required" && <p className="text-danger">This field is required</p>}
    </div>

    <div className="mb-3">

        <label htmlFor="description" className="form-label">Category</label>
        <select name="" id="" className="form-select">
          <option value=""></option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="groceries">Groceries</option>
        </select>
        {errors.category?.type === "required" && <p className="text-danger">This field is required</p>}

    </div>

<button className="btn primary">Submit</button>
   </form>
  );
};

export default ExpenseForm;