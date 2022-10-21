//React
import { useState } from 'react';

//Styles
import '../styles/Login.scss';



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
            <form className='formContainer rounded p-5'>
                <div className='d-flex justify-content-start align-items-end mb-3'>
                    <ion-icon name="person" className="" id="iconMain"/>         
                    <p className='m-1 text-white'>Personal Agenda</p>           
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
                
                <div className='d-flex justify-content-end'>
                    <button type="submit" className="btn btn-success w-100" onClick={Login}>Login</button>
                </div>  
                             
            </form>
        </div>
    )
}