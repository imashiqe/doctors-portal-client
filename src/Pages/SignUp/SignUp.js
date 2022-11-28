import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext)
   const [signUpError, setSignUPError] = useState('')
   const navigate = useNavigate() 

    const handleSignUp = (data) => {
         console.log(data);
         setSignUPError('');
         createUser(data.email, data.password)
         .then(result => {
           const user = result.user;
           console.log(user);
           toast.success('User Created Successfully.!')
           const userInfo = {
             displayName: data.name
           }
           updateUser(userInfo)
           .then(() => {
              navigate('/');
           })
           .catch(err => console.log(err));
         })
         .catch(error =>{
          console.log(error)
          setSignUPError(error.message)
        });
    }

    return (
        <div className='lg:h-[800px] md:h-[800px]  h-[700px] flex justify-center items-center'>
             <div className='w-96 p-7'>
             <h2 className='text-3xl text-center'>SignUp</h2>
             <form onSubmit={handleSubmit(handleSignUp)}>
           
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Name</span>
                
                </label>
                <input type="text" 
                placeholder="Your  Name" 
                className="input input-bordered w-full max-w-xs" 
                 {...register("name", {required: "Name is required"})} />
                  {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}


                </div>
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
                <div className="form-control w-full max-w-xs pb-5">
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
              

                </div>

                <input className='btn btn-accent w-full'  value="SignUp" type="submit" />
        {signUpError && <p className='text-red-600'>{signUpError}</p>}
    </form>
    

    <div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card  rounded-box place-items-center">
  <p >Already have an account..? <Link className='text-secondary' to='/login'>Please Login</Link></p>
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

export default SignUp;