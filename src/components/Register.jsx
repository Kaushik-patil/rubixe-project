import React from 'react'
import { useState,useEffect } from 'react';
import '../App.css';

const Register = () => {
    const initialstate = {
        name:"",
        email:"",
        mobile:""
    };

    const[formvalues,setFormvalues] = useState(initialstate);
    const[error,setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  

    const handlechange=(e)=>{
     const {name,value} = e.target ;
     setFormvalues({...formvalues,[name]:value});
     console.log(formvalues);
    }
    const handlesbmit=(e)=>{
      e.preventDefault();
      setError(validate(formvalues));
      setIsSubmit(true);
    }

    useEffect(() => {
        console.log(error);
        if (Object.keys(error).length === 0 && isSubmit) {
          console.log(formvalues);
        }
      }, [error]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
        if (!values.name) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.mobile) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };



  return (
    <div className='register'>
        <div className="form-container">
            <div className="form-text">
                <h1>Get In Touch</h1>
                <p>Please complete the form and we'll get back to you</p>
            </div>
            <div className="form">
                <form onSubmit={handlesbmit} >
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Enter Name' value={formvalues.name} required onChange={handlechange} />
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input type="email" name="email" placeholder='Enter email' value={formvalues.email} required onChange={handlechange}/>
                    </div>
                    <div className="field">
                        <label>Mobile Number</label>
                        <input type="number" name="mobile" placeholder='Enter mobile number' required value={formvalues.mobile} onChange={handlechange} />
                    </div>
                    <button>REGISTER NOW</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register