//React
import { useState, useEffect } from 'react';

//Styles
import '../styles/Login.scss';

//Illustrations
import LoginIllustration from '../assets/Illustrations/Scenes05.svg';



export default function Login(){ 

    const [loginData, setState] = useState({
        email:'',
        password:'',
        errorMessages:{
            invalidEmail:'',
            invalidPassword:'',
            loginErrorMessage:''
        },        
    });
    

    const Login = (e)=>{        

    }


    const catchInputs = (e)=>{                        
        let {value, name} = e.target;        

        setState({
            ...loginData,
            [name]:value
        })

        validateInputs(name, value);       
    }

    const validateInputs = (name, value)=>{        
        const passRegex = /^[a-zA-Z0-9\.\_]{6,20}$/;
        const emailRegex = /^[áéíóúÁÉÍÓÚa-zA-Z0-9\.\_]+@[áéíóúÁÉÍÓÚa-zA-Z]+\.[A-Za-z]{1,8}$/;        

        if(name === 'email'){
            if(!emailRegex.test(value)){                
                setState({
                    ...loginData,
                    errorMessages:{
                        ...loginData.errorMessages,
                        invalidEmail:'Type a valid email*'
                    }
                })                  
            }else{
                setState({
                    ...loginData,
                    email:value,
                    errorMessages:{
                        ...loginData.errorMessages,
                        invalidEmail:''
                    }
                })  
            }
        }else{
            if(!passRegex.test(value)){                                
                setState({
                    ...loginData,
                    errorMessages:{
                        ...loginData.errorMessages,
                        invalidPassword:'Type a valid password*'
                    }
                })  
            }else{
                setState({
                    ...loginData,
                    password:value,
                    errorMessages:{
                        ...loginData.errorMessages,
                        invalidPassword:''
                    }
                })  
            }
        }
    }

    const { email, password } = loginData;
    const { invalidEmail, invalidPassword } = loginData.errorMessages;

    return(        
        <div className="LoginContainer">
            <div className='formContainer'>
                <form className='rounded p-5'>
                    <div className='d-flex justify-content-start align-items-end mb-3'>                           
                        <p className='m-1 text-white h5 font-weight-light'><span className='font-weight-light display-4'>Agenda</span>  Login</p>           
                    </div>                                             
                    <div class="input-group">                    
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <ion-icon name="mail-outline"></ion-icon>                            
                            </div>
                        </div>                        
                        <input type="email" name="email" class="form-control" placeholder="Enter email" onChange={catchInputs}/>                    
                    </div>  
                    {loginData.errorMessages.invalidEmail.length ? (
                        <small className='text-danger'>{loginData.errorMessages.invalidEmail}</small>                 
                    ):null}                    

                    <div class="input-group mt-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <ion-icon name="bag-outline"></ion-icon>
                            </div>
                        </div>
                        <input type="password" name="password" class="form-control" placeholder="Password" onChange={catchInputs}/>                    
                    </div>
                    {loginData.errorMessages.invalidPassword.length ? (
                        <small className='text-danger'>{loginData.errorMessages.invalidPassword}</small>                 
                    ):null}                                        
                    
                    <div className='d-flex justify-content-end mt-3'>                    
                        <button type="submit" className="btn btn-success w-100" disabled={ !email.length || !password.length || invalidPassword.length || invalidEmail.length ? true : false} onClick={Login}>Login</button>
                    </div>    

                    <div className='registerTextContainer mt-1'>
                        <p>Don't have an acoount? <a href='/register'>Register</a></p>
                    </div>                              
                </form>                
            </div>

            <div className='illustrationContainer'>  
                <p className='display-4 title'>Welcome to <span className='font-weight-light'>Agenda</span></p>              
                <img src={LoginIllustration} className="LoginIllustration" alt="" />                
            </div>
        </div>
    )
}