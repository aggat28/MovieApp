import './login.scss';
import Input from '../../controls/input/input';
import Button from './../../controls/button/button';
import { useCallback, useContext } from 'react';
import login from '../../../services/auth/login';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { LoaderContext } from '../../../contexts/loaderContext';
import {UserContext} from '../../../contexts/userContext';

export default function Login(){

    const {setisShowLoader} = useContext(LoaderContext);
    const {setIsLoginUser} = useContext(UserContext);
    const {user} = useContext(UserContext);
    const {setuser} = useContext(UserContext);

    const history = useHistory();

    function handlerSubmit(event){
        event.preventDefault();
        setisShowLoader(true);

        login(user)
            .then(data => {
              console.log(data); 
              setuser(() =>  {return {...user, "token": data.user.uid}})

              setIsLoginUser(true);
              history.push('/');

            })
            .catch(error => {

                setuser({...user, isError: true});
                setIsLoginUser(false);

                setInterval((setuser) => {
                    setuser({...user, isError: false});
                }, 3000, setuser);
            })
            .finally(() => {
                setisShowLoader(false);
                
            })
    }

    const handleLogin = useCallback(
        ({target}) => {
            setuser({...user, email: target.value})
        }, [user]
    )
    const handlePassword = useCallback(
        ({target}) => {
            setuser({...user, password: target.value})
        }, [user]
    )

    return (
        <div className="login">
            <form onSubmit={handlerSubmit}>
                      
                <Input value={user.email} type="email" title='Email' handlerChange={handleLogin}/>
                <Input value={user.password}   title='Password' type="password" handlerChange={handlePassword}/>
                 {
                     user.isError ? (
                        <p> Invalid account information </p>
                     ) : ''
                 }
                <Button txt="Login"></Button>

                <p> 
                    Don't have an account?
                    <Link to='/registration'> registration </Link>
                </p>
            </form>

        </div>
    )
}