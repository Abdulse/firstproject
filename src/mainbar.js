import {createContext, useState,useEffect} from 'react';

function Mainbar(){
  let[postt,setpost]= useState(0)
  var postl = 0
  var posted = 0
 
  
  
  async function postd (){
    if(posted === 0){
    let res = await fetch('https://abdulsemed.pythonanywhere.com/imgg',{
        method: 'GET',
        headers:{
          'content-type': 'application/json'
        }
        })
        let data = await res.json()

        if(res.status === 200){
          postl = data.length - 1
         

        
          for(let i = postl; i >= 0; i--){
            let value = data[i]
            let index = i
            posted =  posted + 1
            
           
            function zmblo(){
              let x= document.getElementsByClassName("mesidepost")[0]
              let y = document.createElement("div")
              y.classList.add(index)
              x.append(y)
  
            }
            zmblo()


            for(let key in value){
              

              if(key === 'postli'){

                let keyy = toString(index) + key
                let x= document.getElementsByClassName(index)[0]
                let y =  document.createElement("p")
                y.innerHTML = "By " + value[key].toUpperCase()
                y.classList.add("kkkk")
                x.append(y)
  
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
            if(posted % 5 === 0){
              return

            }
          }
         

           

        }
      }
      if(posted > 0){
        let res = await fetch('https://abdulsemed.pythonanywhere.com/imgg',{
          method: 'GET',
          headers:{
            'content-type': 'application/json'
          }
          })
          let data = await res.json()
  
        if(res.status === 200){
     
        postl = postl - posted
        posted = 0
        for(let i = postl; i >= 0; i--){
          let value = data[i]
          let index = i
          posted =  posted + 1
         
         
          function zmblo(){
            let x= document.getElementsByClassName("mesidepost")[0]
            let y = document.createElement("div")
            y.classList.add(index)
            x.append(y)

          }
          zmblo()


          for(let key in value){
            


            let img = "https://abdulsemed.pythonanywhere.com"

            if(key === 'postli'){

              let keyy = toString(index) + key
              let x= document.getElementsByClassName(index)[0]
              let y =  document.createElement("p")
              y.innerHTML = "By " + value[key].toUpperCase()
              y.classList.add("kkkk")
              x.append(y)

            }
            
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
          if(posted % 5 === 0){
           
            return

          }
        }}

      }
       
    }
    useEffect(() => {
        postd ()

    },[])


    
    return(
        <div id ="11"> 
        <div className="mainContent">
                <div className="leside"></div>
                <div className="meside">
                 <div className="mesidepost">
                   

                 </div>
                 <button className="button1" onClick={postd}>NEXT</button>
                
       
                 </div>

        <div className="reside"></div>

     </div>
     </div>
    )
}
export default Mainbar;