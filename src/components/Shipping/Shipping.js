import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const { user } = useAuth()
  return (
    <div className='shipping'>
      <div className='shipping-form'>
        <h1>Shipping Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input defaultValue={user.displayName} {...register("example")} />

          <input defaultValue={user.email} {...register("email", { required: true })} />
          <input placeholder='Phone Number' />
          <input placeholder='City' />
          <input placeholder='Road' />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;