import x from './x.mp4'
import y from './y.png'
import { FcBusinessman } from "react-icons/fc";
import { useContext } from "react";
import {loginContext} from'./App'


function Login() {

    let {loginUser} = useContext(loginContext)
    let me = [1,2,3]
    let url = 'http://www.google.com'
    function containsNumbers(str) {
      return /\d/.test(str);
    }
    function clickhandler(e){
      if(e.target.className ==='sigin'){
        let y = document.getElementsByClassName('formm')[0]
        y.style.display = 'block';
        let x = document.getElementsByClassName('forml')[0]
        let yx = document.getElementsByClassName('sigin')[0]
        let xy = document.getElementsByClassName('siginup')[0]
        xy.style.opacity ='1'
        yx.style.opacity ='0.5'
        yx.style.backgroundColor = '#A17238';
        x.style.display = 'none';
      }else if(e.target.className ==='siginup'){
        let y = document.getElementsByClassName('formm')[0]
        y.style.display = 'none';
        let x = document.getElementsByClassName('forml')[0]
        let xy = document.getElementsByClassName('siginup')[0]
        let yx = document.getElementsByClassName('sigin')[0]
        yx.style.opacity ='1'
        xy.style.opacity ='0.5'
       
        xy.style.backgroundColor = '#A17238';
        x.style.display = 'block';

      }

    }
    async function submithandler(e){
     
      
     

      let yoo = document.getElementsByClassName('suces')[0]
      yoo.style.display = 'none';
      yoo.innerHTML = ""
      
      
      let error = document.getElementsByClassName('error')[0]
      error.innerHTML = ""
      let br = document.createElement('br')
        error.append(br)
      let x = document.forms["myForml"]["name"].value;
      if (containsNumbers(x)) {
        e.preventDefault()
        error.style.display = "block";
        error.innerHTML = "can not contain numbers"
        let br = document.createElement('br')
        error.append(br)
        return

      }
      let y = document.forms["myForml"]["email"].value;
      if ( ! y.endsWith("@gmail.com")) {
        e.preventDefault()
        error.style.display = "block";
        error.innerHTML = error.innerHTML + "email is not a valid email address "
        let br = document.createElement('br')
        error.append(br)
        return
      }
      let z = document.forms["myForml"]["password"].value;
      if (z.length < 8 || !containsNumbers(z) || !isNaN(z)){
        e.preventDefault()
        error.style.display = "block";
        error.innerHTML = error.innerHTML +"password must be 8 caracters long and must have apabet"
        let br = document.createElement('br')
        error.append(br)
        return

      }

      let a = document.forms["myForml"]["confirmpassword"].value;
      if (!(a === z)) {
       
        e.preventDefault()
        error.style.display = "block";
        error.innerHTML = error.innerHTML +"password is not same "
        let br = document.createElement('br')
        error.append(br)
        return
      }
      if (a == "" || z == "" || y == "" ||x == "") {
        
        e.preventDefault()
        error.style.display = "block";
        error.innerHTML = error.innerHTML + "all fileds must be filled out";
        return
      }
      e.preventDefault()
      
      var res = await fetch('http://abdulsemed.pythonanywhere.com/give',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value,'name':e.target.name.value})})
      if (res.status === 300){
        error.style.display = "block";
        error.innerHTML = "this email address has account already";
        return  
      }

    
      
      let data = await res.json()
      
      
      if(res.status === 200){
        error.style.display = 'none';
        error.innerHTML = ""
        let y = document.getElementsByClassName('formm')[0]
        y.style.display = 'block';
        let x = document.getElementsByClassName('forml')[0]
        let yx = document.getElementsByClassName('sigin')[0]
        let xy = document.getElementsByClassName('siginup')[0]
        xy.style.opacity ='1'
        yx.style.opacity ='0.5'
        yx.style.backgroundColor = '#A17238';
        x.style.display = 'none';
        
        
     
        
        


        loginUser(true)
        return false
        
        

       

      }


    }
    function shandler(e){

    }
    return (
      <div className="All">
        <div className="formcover">
          <div className='cont' onClick={clickhandler}>
          <button className='siginup' >sign up</button>
          <button className='sigin'>sigin in</button>
          </div>

         <form className='forml' onSubmit={submithandler} name="myForml">

          <input className='inpu' placeholder = 'what is your name' type = 'text' name='name' /><br/>
          <input className='inpu' placeholder='write your email' type = 'text' name='email' /><br/>
          <input className='inpu' placeholder='write your password' type = 'password' name='password' /><br/>
          <input className='inpu' placeholder='confirm your password' type = 'password' name='confirmpassword' /><br/>
          <input className='sub'  type="submit" />
         </form>

         <form className='formm' onSubmit={loginUser} name="myFormm">

          <input className='inpu' placeholder='write your email' type = 'text' name='email' /><br/>
          <input className='inpu' placeholder='write your password' type = 'password' name='password' /><br/>
          <input className='sub'  type="submit" />
        </form>
        <div className='error'>
        
       
     
        </div>
        <div className='suces'>
        
       
     
        </div>
        
    
        </div>
        
        
  
        <video 
        src ={x}
        type ='video/mp4'
        loop
        controls = {false}
        muted
        autoPlay
        poster = {y}
        />


       
      </div>
    );
  }
  export default Login;