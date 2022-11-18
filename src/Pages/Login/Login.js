import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
     const handleLogin = data =>{
         console.log(data);
     }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
             <div className='w-96 p-7'>
             <h2 className='text-3xl text-center'>Login</h2>
             <form onSubmit={handleSubmit(handleLogin)}>
           
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Email</span>
                
                </label>
                <input type="email" placeholder="Your  Email" className="input input-bordered w-full max-w-xs"  {...register("email")} />


                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Password</span>
                
                </label>
                <input type="password" placeholder=" Your Password" className="input input-bordered w-full max-w-xs"  {...register("password")} />
              
                <label className="label">
                <span className="label-text">Forget Password</span>
                
                </label>

                </div>

                <input className='btn btn-accent w-full'  value="Login" type="submit" />
    
    </form>
    

    <div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card  rounded-box place-items-center">
  <p >New To Doctors Portal <Link className='text-secondary' to='/register'>Create New Account</Link></p>
  </div>
  <div className="divider">OR</div>
  <div className="grid h-20 card  rounded-box place-items-center">
     <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
  </div>
</div>
             </div>
           
        </div>
    );
};

export default Login;