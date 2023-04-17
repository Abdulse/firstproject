import axios from 'axios';
import {createContext, useState,useEffect} from 'react';

function Mypostbar(props){
  let namep = props.name
  let id = props.id
  let z = id.user_id
  let[postt,setpost]= useState(0)
  var postl = 0
  var posted = 0

  async function myFunction(id){
    await axios.delete(`https://abdulsemed.pythonanywhere.com/l/${id}`).then()
  }
 
  
  
  async function postd (){
  
    let res = await fetch('https://abdulsemed.pythonanywhere.com/imgg',{
        method: 'GET',
        headers:{
          'content-type': 'application/json'
        }
        })
        let data = await res.json()

        if(res.status === 200){
          postl = data.length - 1
          let leg = []


          for(let i = postl; i >= 0; i--){
            let value = data[i]
            let index = i
            for(let key in value){
            if(key === 'postId' && value[key] == z){
                leg.push(index)

            }
            }


          }
         

        
          for(let i = postl; i >= 0; i--){
            if( leg.includes(i)){
            let value = data[i]
            let index = i + "l"
            posted =  posted + 1
            
           
            function zmblo(){
              let x= document.getElementsByClassName("mesidepostt")[0]
              let y = document.createElement("div")
              y.classList.add(index)
              x.append(y)
  
            }
            zmblo()

            let id = null
            for(let key in value){
              
              if(key === 'id'){
                id = value[key]


            }
              

              if(key === 'postli'){


                let keyy = toString(index) + key
                let x= document.getElementsByClassName(index)[0]

                let yx =  document.createElement("button")
                yx.innerHTML = "Delete"
                yx.style.backgroundColor ='#f44336'
                yx.style.height = "40px"
                yx.style.fontSize = "30px"
                yx.style.color = 'white'
                yx.style.border = 'none'
                yx.classList.add("deletb")
                yx.addEventListener("click", function() {
                  myFunction(id);
                })
                x.append(yx)
  
              }
              let img = "https://abdulsemed.pythonanywhere.com"
              if(key === 'img' && value[key] !== null){
                
                let mgg = img + value[key]

     



                let x= document.getElementsByClassName(index)[0]
                let y = document.createElement("img")
                y.setAttribute("src",mgg)
                y.classList.add("ggg")
                x.append(y)
                let keyy = toString(index) + key

              }else if(key === 'post'&& value[key] !== ""&& value[key] !== null){
                
                let keyy = toString(index) + key
                let x= document.getElementsByClassName(index)[0]
                let y =  document.createElement("p")
                y.innerHTML = value[key]
                y.classList.add("kkk")
                x.append(y)
                

              }
              
            }

        }
          }
         

           

        }
      
    
       
    }
    useEffect(() => {
        postd ()

    },[])


    
    return(
        <div id ="13"> 
        <div className="mainContentt">
                <div></div>
                <div className="mesidee">
                 <div className="mesidepostt">
                   

                 </div>

                
       
                 </div>

        <div></div>

     </div>
     </div>
    )
}
export default Mypostbar;