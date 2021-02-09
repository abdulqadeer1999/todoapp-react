import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';




function Todo() {
  const [data, setData] = React.useState([]);


  function post(event) {
    event.preventDefault();
    var post = document.getElementById("post").value;
    
    setData([...data, post]);
    document.getElementById('post').value = ''

    // console.log(post)
    // console.log(data);


  };





  const remove = (i) => {

    let todo = ([...data])
    todo.splice(i)
    setData(todo)

  };




  const delete1 =  (v)  =>{

    let todo1 =  [...data]
    todo1.splice(v)
    setData(todo1)
    

  };



  

  // const edit = () => {
  //     v  
  //   // let edit =  [...data]
  //   // edit.push(,1)
  //   // setData(edit)
    
  // }


  return <div className= "input">
<form onSubmit = {post}>

   
  
 
    <input  type="text" placeholder="enter task" id="post" required="required" />
    <button  className="btn btn-outline-primary">Add</button>
    {/* <button className = "addbtn">Add</button> */}

    <button  className="btn btn-outline-danger" onClick ={remove} >Danger</button>
    {/* <button className="delete" onClick={remove}>Delete All</button> */}
  
    
    </form>

    



    {
      data.map((v, i) => {
        return (
          <div>
            {v} <button className="delete1" onClick={delete1}>Delete1</button>
           {/* {v} <button  className="btn btn-outline-warning" onClick={delete1}  >Warning</button> */}
            {/* <button  onClick={edit}>edit </button> */}
          
            </div>

        )
      })

    }


  </div>
}
ReactDOM.render(<Todo />,

  document.getElementById("root")
)



