import { useState,useContext } from "react"
import { TaskContext } from "../context/TaskContext"


function TaskForm(){

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    const { createTask } = useContext(TaskContext)

    const handleSubmit=(e)=>{
        
        e.preventDefault()
        createTask({
            title,
            description
        })
        setDescription("")
        setTitle("")
    }

    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4"
            onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-white mb-3
                ">Crea tu tarea</h1>
                <input 
                className="bg-slate-300 pd-3 w-full mb-2"
                onChange={(e)=>{
                    setTitle(e.target.value)
                }} placeholder="Escribe tu tarea" 
                type="text" value={title}
                autoFocus />
                <textarea 
                className="bg-slate-300 pd-3 w-full mb-2"
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                placeholder="Escribe la descripcion"
                value={description}
                
                ></textarea>
                <button className="bg-indigo-500 px-3 py-1
                text-white
                ">Guardar</button>
                </form>
        </div>
    )
}

export default TaskForm