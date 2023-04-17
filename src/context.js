import { createContext } from "react";

const AuthcContext = createContext

export default AuthcContext

export const AuthProvider = ({children}) =>{
    return(
        <AuthcContext.providear value ={{'name': 'abdul'}} >
            {children}
        </AuthcContext.providear>
    )
}