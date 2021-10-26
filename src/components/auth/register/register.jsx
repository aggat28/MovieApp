import './register.scss';
import Input from '../../controls/input/input';
import Button from './../../controls/button/button';
import { useState } from 'react';
import register from '../../../services/auth/register';
import { Link } from 'react-router-dom';



export default function Register(){
    const [user, setuser] = useState({
        email: "",
        password:""
    })

    function handlerSubmit(event){
        event.preventDefault();


        register(user, (isLogin, data, mes_error)=>{
            if(isLogin){
                console.log(data);
            }
            else console.log(mes_error);
        })

    }
    
    return (
        <div className="register">
            <form onSubmit={handlerSubmit}>
                      
                <Input value={user.email} type="email" title='Email' handlerChange={({target})=> {
                    setuser({...user, email: target.value})
                    
                }}/>
                <Input value={user.password}   title='Password' type="password" handlerChange={({target})=> {
                    setuser({...user, password: target.value})
                }}/>

                <Button txt="Register" handlerClick={()=> {}}></Button>
                <p> 
                    Do you have an account?
                    <Link to='/login'> log in </Link>
                </p>
            </form>

        </div>
    )
}