//React
import { useState } from 'react';

//Styles
import '../styles/Login.scss';

//Illustrations
import LoginIllustration from '../assets/Illustrations/Scenes05.svg';



export default function Login(){

    const [loginData, setState] = useState({
        email:'',
        password:'',
    })

    const Login = (e)=>{
        e.preventDefault();        
    }

    const catchInputs = (e)=>{
        let {value, name} = e.target;                 
        setState({
            ...loginData,
            [name]:value
        }         
        )      
    }

    return(
        <div className="LoginContainer">
            <div className='formContainer'>
                <form className='rounded p-5'>
                    <div className='d-flex justify-content-start align-items-end mb-3'>                           
                        <p className='m-1 text-white h5 font-weight-light'><span className='font-weight-light display-4'>Agenda</span>  Login</p>           
                    </div>                                             
                    <div class="input-group mb-2">                    
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <ion-icon name="mail-outline"></ion-icon>                            
                            </div>
                        </div>
                        <input type="email" name="email" class="form-control" placeholder="Enter email" onChange={catchInputs}/>                    
                    </div>

                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <ion-icon name="bag-outline"></ion-icon>
                            </div>
                        </div>
                        <input type="password" name="password" class="form-control" placeholder="Password" onChange={catchInputs}/>                    
                    </div>
                    
                    <div className='d-flex justify-content-end mt-3'>                    
                        <button type="submit" className="btn btn-success w-100" onClick={Login}>Login</button>
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