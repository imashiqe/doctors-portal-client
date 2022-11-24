import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
     const handleLogin = data => {
         console.log(data);
         setLoginError('');
         signIn(data.email, data.password)
         .then(result => {
            const user = result.user;
            console.log(user)

            navigate(from, {replace: true});
         })
         .catch(error => {
          console.log(error.message)
          setLoginError(error.message)
        });
     }
    return (
        <div className='lg:h-[800px] md:h-[800px]  h-[600px] flex justify-center items-center'>
             <div className='w-96 p-7'>
             <h2 className='text-3xl text-center'>Login</h2>
             <form onSubmit={handleSubmit(handleLogin)}>
           
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Email</span>
                
                </label>
                <input type="email" 
                placeholder="Your  Email" 
                className="input input-bordered w-full max-w-xs" 
                 {...register("email", {required: "Email Address is required"})} />
                  {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}


                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Password</span>
                
                </label>
                <input type="password"
                 placeholder=" Your Password" 
                 className="input input-bordered w-full max-w-xs" 
                  {...register("password" , {
                    required:  "Password is Required",
                    minLength: { value: 6,  message: 'Password Must Be 6 Character or Longer'}
                  })} />
                   {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
              
                <label className="label">
                <span className="label-text">Forget Password</span>
                
                </label>

                </div>

                <input className='btn btn-accent w-full'  value="Login" type="submit" />
       
       <div>
         {loginError && <p className='text-red-600'>{loginError}</p>}
       </div>
    </form>
    

    <div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card  rounded-box place-items-center">
  <p >New To Doctors Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
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