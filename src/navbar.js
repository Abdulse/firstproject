import search from './search.svg'
import IMG_6835 from './IMG_6835.JPG'
import log from './log.jpg'
import { FcReading } from "react-icons/fc";
import { FcAdvertising,FcAbout,FcHome,FcKindle,FcSearch,FcList
} from "react-icons/fc";
import {createContext, useState,useEffect} from 'react';
function Nva(props){
   let namep = props.name
   let clickhan = props.logout
   function cc(){
   
      let x= document.getElementById("1")
      x.style.backgroundColor = "black"
      for(let i = 1 ; i <= 3; i++){
         let m = i + ''
         let k = i + 10
         k = k + ''
         if(i !== 1){
   
            let xyy= document.getElementById(m)
            xyy.style.backgroundColor = "#11345a"
            let xy= document.getElementById(k)
            if(xy !== null && xy !== undefined){
            xy.style.display = "none"}
   
         }
         if( i == 1){
            let xy= document.getElementById(k)
            if(xy !== null && xy !== undefined){
            xy.style.display = "block"}
         }
      }
   
   
   }
   useEffect(() => {
      cc ()

  },[])

  function myFunction(){
   console.log("hii")
  }


function homec(e){
   
   let x= document.getElementById("1")
   x.style.backgroundColor = "black"
   for(let i = 1 ; i <= 3; i++){
      let m = i + ''
      let k = i + 10
      k = k + ''
      if(i !== 1){

         let xyy= document.getElementById(m)
         xyy.style.backgroundColor = "#11345a"
         let xy= document.getElementById(k)
         if(xy !== null && xy !== undefined){
         xy.style.display = "none"}

      }
      if( i == 1){
         let xy= document.getElementById(k)
         if(xy !== null && xy !== undefined){
         xy.style.display = "block"}
      }
   }


}
function homc(e){
  
   let x= document.getElementById("2")

   x.style.backgroundColor = "black"
   for(let i = 1 ; i <= 3; i++){
      let m = i + ''
      let k = i + 10
      k = k + ''
      if(i !== 2){
         let xyy= document.getElementById(m)
         xyy.style.backgroundColor = "#11345a"
         let xy= document.getElementById(k)
         if(xy !== null && xy !== undefined){
         xy.style.display = "none"}


      }
      if( i == 2){
         let xy= document.getElementById(k)
         if(xy !== null && xy !== undefined){
         xy.style.display = "block"}
      }
   }

}
function homcl(e){

   let x= document.getElementById("3")
   x.style.backgroundColor = "black"
   for(let i = 1 ; i <= 3; i++){
      let m = i + ''
      let k = i + 10
      k = k + ''
      if(i !== 3){
         let xyy= document.getElementById(m)
         xyy.style.backgroundColor = "#11345a"
         let xy= document.getElementById(k)
         if(xy !== null && xy !== undefined){
         xy.style.display = "none"}


      }
      if( i == 3){
         let xy= document.getElementById(k)
         if(xy !== null && xy !== undefined){
         xy.style.display = "block"}
      }
   }

}





    return(
   
    <div className="navall">
         <div className="Nlogo">
            <div></div>
         <img className = "iconimage"src={IMG_6835 } alt="profile" />

           
        </div>

        <div className="Nmenu">
        <button className="nicons" onClick={homec} id="1"><FcHome className="nicon"/></button>
        <button className="nicons"onClick={homc} id="2"><FcKindle className="nicon"/></button>
        <button className="nicons"onClick={homcl} id="3"><FcAdvertising className="nicon"/></button>
       
       
        
      
        
       

           
        </div>
        <div className="Nprofi">
            <img className = "profilimage"src={log } onClick={clickhan} alt="profile" />
           <p className="Nprofii">{namep}</p>

           
        </div>


     </div>
     
 
        
    )
}
export default Nva;