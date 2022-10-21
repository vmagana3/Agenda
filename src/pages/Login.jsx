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
                    <ion-icon name="person"/>         
                    <p className='m-1 text-white'>Personal Agenda</p>           
                </div>                
                <div className="form-group">                    
                    <input
                        type="email"
                        name='email'
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        onChange={catchInputs}
                    />                    
                </div>
                <div className="form-group">                    
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={catchInputs}
                    />
                </div>
                <div className='d-flex justify-content-end'>
                    <button type="submit" className="btn btn-success w-100" onClick={Login}>Login</button>
                </div>                
            </form>
        </div>
    )
}