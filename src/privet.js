import {Route,Redirect,Navigate} from 'react-router-dom'
import Login from './login';
import { useContext } from "react";
import {loginContext} from'./App'

function PrivateRoute({ children }) {
    let {user} = useContext(loginContext)
    const auth = true;
    return user ? <>{children}</> : <Login/>;
  }
export default PrivateRoute