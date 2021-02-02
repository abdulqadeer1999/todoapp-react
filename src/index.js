import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function Todo () {
const [data, setData] = React.useState([]);


  function post(event) {
      event.preventDefault();
      let post = document.getElementById("post").value;
   setData([...data,post]);
   document.getElementById('post').value = ''

    
    console.log(post)
      console.log(data);


    
    
  }
    return <div>
       
         <input type= "text" placeholder="enter task" id= "post" />
         <button onClick= {post}>Add</button>

        
      {
        data.map((v,i)=>{
          return(
            <div>{v}</div>
          )
        })
      }

    
</div>
}
ReactDOM.render(<Todo/>,

  document.getElementById("root")  
  )



   