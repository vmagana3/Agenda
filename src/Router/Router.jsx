//React router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//React Hooks
import { useState, useEffect } from 'react';

//Pages
import Login from '../pages/Login';
import Home from '../pages/Home';


export default function Router(){
    const [isLogged, setIsLogged] =  useState(false);

    /* useEffect(() => {
        console.log("Router Montado");
    }, []); */

    if(isLogged){
        console.log("Logueado");
        return(
            <BrowserRouter>
                {/* Posible navigation component */}
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </BrowserRouter>            
        )
    }else{
        return(
            <BrowserRouter>                
                <Routes>
                    <Route index path='/' element={<Login/>}/>
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </BrowserRouter>       
        )
    }
}