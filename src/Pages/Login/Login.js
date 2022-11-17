import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState(" ");
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <h2 className='text-4xl'>Login</h2>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Email</span>
                
                </label>
                <input type="email" placeholder="Type Tour Email" className="input input-bordered w-full max-w-xs"  {...register("email")} />


                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Password</span>
                
                </label>
                <input type="password" placeholder="Type Tour Password" className="input input-bordered w-full max-w-xs"  {...register("password")} />


                </div>

      <input type="submit" />
    </form>
        </div>
    );
};

export default Login;