import { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems.jsx';

const Todo = ()=>{
    const inputref = useRef()
    const [addtask , setAddTask] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);


    const add = ()=>{
        const inputtext = inputref.current.value.trim();
        if(inputtext === ''){
            return null;
        }
        const newTodo = {
            id : Date.now(),
            text : inputtext,
            isComplete : false
        }
        setAddTask((prev)=>[...prev , newTodo]);
        inputref.current.value = ''
    }


    const delete_todo = (id)=>{
        setAddTask((prvTodos)=>{
            return prvTodos.filter((todo)=> todo.id !== id)
        })
    }


    const toggle = (id)=>{
        setAddTask((prvTodos)=>{
            return prvTodos.map((todo)=>{
                if(todo.id == id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
        })
    }


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(addtask));
    },[addtask])


    return(
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[505px] rounded-xl ">
            
            {/* title */}
            <div className="flex items-center mt-7 gap-2">
                <img className='w-8' src={todo_icon} alt="" />
                <h1 className="text-3xl font-semibold mb-2">To-Do list</h1>
            </div>
            {/* input box */}
            <div className='flex items-center  bg-gray-200 rounded-full'>
                <input ref={inputref} className='bg-transparent border-0 outline-none flex-1 h-14 w-full !pl-7 !pr-2 placeholder:text-slate-600 '
                 type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
            </div>
            {/* To do list */}
            <div>
                {addtask.map((item, index)=>{
                    return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo = {delete_todo} toggle={toggle} />
                })} 
            </div>
        </div>
    )
}
export default Todo