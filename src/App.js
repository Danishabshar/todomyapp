import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';

function App() {
const[todos,settodos]=useState([])
const [todo, setTodo] = useState("");
const [todoediting,settodoediting] =useState(null);
const [edittext,setedittext]=useState("")

const handleSubmit = (e) => {
  e.preventDefault();


  const newtodo= {
    id: new Date().getTime(),
    text : todo,
    completed: false,
  }

  settodos([...todos].concat(newtodo))
  setTodo("")

}


const Deletetodo=(id)=>{
  const updatedtodo=[...todos].filter((todo)=> todo.id !== id)
  settodos(updatedtodo)
}



const edittodo=(id)=>{
  const updatedtodo=[...todos].map((todo)=>{
    if(todo.id===id){
      todo.text=edittext
    }
    return todo
  })
  settodos(updatedtodo)
  settodoediting(null)
}

  return (
    <div className="App">
    <h1>Todo-list</h1>
      <form onSubmit={handleSubmit} >
        {/* <input type="text" onChange={(e)=>setTodo(e.target.value) } value={todo}  /> */}

        <input
            type="text"
            value={todo}
            onChange={(e) => { 
              setTodo(e.target.value)
              console.log(e.target.value)
              }}
              />
        <button type="submit">Add Todo</button>
      </form>
    {todos.map((todo)=>
    <div key={todo.id}>
    
    {todoediting===todo.id ? ( <input type="text"
     onChange={(e)=> setedittext(e.target.value)}
     value={edittext}

    />) : (<div>{todo.text}</div>)}

   <button onClick={()=> Deletetodo(todo.id)}>DElete</button>

   {todoediting===todo.id ? (<button onClick={()=>edittodo(todo.id)}>submit</button>):( <button onClick={()=>settodoediting(todo.id)}>edit</button>)}
  


    </div>
    
    
    )}
    </div>
    
    

   
  );
}

export default App;
