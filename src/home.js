import { useContext } from "react";
import {loginContext} from'./App'
import { Routes,Route,useNavigate} from 'react-router-dom'
import Nva from "./navbar";
import Mainbar from"./mainbar"
import Postbar from "./postbar"
import Mypostbar from "./Mypostbar"



function Home() {
    const navigate = useNavigate()
    let {user} = useContext(loginContext)
    let {clickhan} = useContext(loginContext)


    return (
      
      <div className="App">
        < Nva name = {user.name} logout ={clickhan} />
        < Mainbar />
        <Postbar name = {user.name} id ={user}/>
        <Mypostbar name = {user.name} id ={user}/>
        

        
       
      </div>
    );
  }
  export default Home;