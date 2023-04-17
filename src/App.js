
import {createContext, useState,useEffect} from 'react';

import { Routes,Route,useNavigate} from 'react-router-dom'
import PrivateRoute from'./privet'
import Home from './home';
import Login from './login';
import jwt_decode from "jwt-decode";



export const loginContext = createContext();






function App() {


  let[auth,setAuth]= useState(localStorage.getItem('auth')? JSON.parse(localStorage.getItem('auth')) : null)
  let[user,setUser]= useState(localStorage.getItem('auth')? jwt_decode(localStorage.getItem('auth')):null)
  let[ logi,logii] = useState(false)
  const navigate = useNavigate();
  let[loging,setloging] = useState(true)

  let loginUser = async(e) => {
    try {
      
      e.preventDefault()
      
  } catch (e) {
    
    return
  }
    
    
    let res = await fetch('http://abdulsemed.pythonanywhere.com/api/token/',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:  JSON.stringify({ 'email':e.target.email.value, 'password':e.target.password.value})})
    
    let data = await res.json()
    if(res.status === 200){
      e.preventDefault()
      setAuth(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('auth', JSON.stringify(data))
      logii(true)
      navigate('/')
      window.location.reload()
      

    }else{
      let error = document.getElementsByClassName('error')[0]
      error.innerHTML = ""
      error.innerHTML = " incorrect information"
      error.style.display = "block";
      return
    }
    
    

  }
  let UpdateUser = async() => {


   if(logi) {
    if(auth){
      
      let res = await fetch('http://abdulsemed.pythonanywhere.com/api/token/refresh/',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({'refresh':auth?.refresh})})
    
     let data = await res.json()
     if(res.status === 200){
      setAuth(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('auth', JSON.stringify(data))
      

     }else{
      clickhan()
     }
     if(loging){
      setloging(false)

     }

    }
    


   }

    
    
    

  }



  function clickhan(){
    setAuth(null)
    setUser(null)
    localStorage.removeItem('auth')
    localStorage.clear();
    setloging(false)
    navigate('/login')
    logii(false)
    
    
  }


 
  let nn = {
    user:user,
    loginUser :loginUser,
    clickhan : clickhan,
    loging:loging
    
  }
  useEffect(()=>{
    if(logi){
      
      
      UpdateUser()

      

    
      

    }
    let fo = 1000 * 60 * 4
    let inter =setInterval(()=>{
      if(auth){
        UpdateUser()
        
      }

    },fo)
    return ()=>clearInterval(inter)

  },[auth,logi])

  const meta = {
    meta:{ http-equiv :"Content-Security-Policy",
            content:"upgrade-insecure-requests"}
  }


  return (
  
   <loginContext.Provider value= {nn} >   
    <DocumentMeta {...meta} />  
  
    <Routes>
    
    <Route
          path='/*'
          element={
            <PrivateRoute>
              < Home />
            </PrivateRoute>
          }
        />
     
       <Route path='/login' element={< Login />} />
    

     
      
    </Routes>
    </loginContext.Provider>
    /*<div className="App">
      <div className="conte">
        <h1> abdulsmed </h1>
        {meme.map(function(v){
          return <div className={v.id}>
                    <h1>{v.name }</h1>
                    <h1>{v.age }</h1>
                 </div>
        })}
        <a href={url}>google</a>
      </div>
      <Nava/>
      <p>{mem}</p>
      <button onClick={hndle}>hii</button>
    </div>*/

  );
}

export default App;
