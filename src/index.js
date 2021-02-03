import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function Todo() {
  const [data, setData] = React.useState([]);


  function post(event) {
    event.preventDefault();
    let post = document.getElementById("post").value;
    setData([...data, post]);
    document.getElementById('post').value = ''


    console.log(post)
    console.log(data);


  };




  const remove = (i) => {

    let todo = ([...data])
    todo.splice(i)
    setData(todo)

  };




  const delete1 =  (v)  =>{

    let todo1 =  [...data]
    todo1.splice(v,1)
    setData(todo1)
    

  };

  const edit = (v) => {
        
    // let edit =  [...data]
    // edit.push(v,1)
    // setData(edit)
    
  }


  return <div className="input">

    <input  type="text" placeholder="enter task" id="post" />
    <button  onClick={post}>Add</button>
    <button className="delete" onClick={remove}>Delete All</button>


    



    {
      data.map((v, i) => {
        return (
          <div>
            {v} <button className="delete1" onClick={delete1}>Delete1</button>
            <button  onClick={edit}>edit </button>
            </div>

        )
      })

    }


  </div>
}
ReactDOM.render(<Todo />,

  document.getElementById("root")
)



