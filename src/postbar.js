import {createContext, useState,useEffect} from 'react';
import axios from 'axios';

function Postbar(props){
    let namep = props.name
    let id = props.id
    console.log(id.user_id)
    var[postimage,setImage] = useState('')
   



    function handleimage(e){
      let xyy = document.getElementsByClassName("gggg")[0]
      if(xyy !== undefined){
        xyy.remove();
      }
      setImage(e.target.files[0])
      let xy = document.getElementsByClassName("subimag")[0]
      let y = document.createElement("img")

      let reader = new FileReader()
      reader.onload = function(event) {
    // The file's text will be printed here
    let uploded = event.target.result
    y.setAttribute("src",uploded)
    y.classList.add("gggg")

    xy.append(y)
  };

  reader.readAsDataURL(e.target.files[0]);

    }

    async function submithandle(e){
      e.preventDefault()
      let x = e.target.post.value
      let y = namep
      let z = id.user_id


     const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	   const URL = "https://abdulsemed.pythonanywhere.com/imggl";
     let formData = new FormData();
     formData.append("img",postimage);
     formData.append("post", x);
     formData.append("postli", y);
     formData.append("postId", z);
	   axios
	   	.post(URL, formData, config)
      .then((res) => {
    		console.log(res.data);
      	})
      .catch((err) => console.log(err))

      e.preventDefault()
      window.location.reload()


    }
      
    






    return(
      <div id ='12'>
        <div className='postmadregiya'>
          <div></div>

                     <form className='postm' onSubmit={submithandle} name="myForml">
                        <input className='inpu' id = "inpute" type = 'text' name='post'placeholder='wirte what you want to post here....' /><br/>
                        <input className='inpu'  onChange={handleimage} type = 'file' name='img' id ='ples' accept=".png, .jpg, .jpeg"/><br/>
                        <div className='subimag'></div><br/>
                        <input className='sub'  type="submit" />
                    </form>
            <div></div>
        </div>
        </div>

    )
}
export default Postbar;