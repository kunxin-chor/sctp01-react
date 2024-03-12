import { useState } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "description": "Walk the dog",
            "done": false
        },
        {
            "id": 2,
            "description": "Water the plants",
            "done": false,
        },
        {
            "id": 3,
            "description": "Clean the room",
            "done": true
        }
    ]);

    const [newTaskDescription, setNewTaskDescription] = useState("");

    // if indexBeingModified is -1, it means nothing is being edited
    const [indexBeingModified, setIndexBeingModified] = useState(-1);

    // the state variable is for editing a task description
    const [modifiedTaskDescription, setModifiedTaskDescription] = useState("");

    const addNewTask = () => {
        const newTask = {
            "id": Math.floor(Math.random() * 10000 + 1),
            "description": newTaskDescription,
            "done": false,
        }

        // The 'inelegant' method
        // // 1. clone the array
        // const cloned = tasks.slice();

        // // 2. modify the clone
        // cloned.push(newTask);

        // // 3. replace the original with the clone
        // setTasks(cloned);

        // Elegant method
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (index) => {
        const left = tasks.slice(0, index);
        const right = tasks.slice(index + 1);
        const modified = [...left, ...right];
        setTasks(modified);

        // setTasks([...tasks.slice(0, index), ...tasks.slice(index+1)])

    }

    const displayTask = (task, index) => {
        return <li key={task.id} className="list-group-item">
            {task.description}
            <input type="checkbox" className="ms-2" checked={task.done} />
           
            {/* Edit Button */}
            <button className="ms-2 btn btn-success btn-sm"
                onClick={()=>{
                    setIndexBeingModified(index);
                    setModifiedTaskDescription(task.description);
                }}
            >Edit</button>

            {/* Delete Button */}
            <button className="ms-2 btn btn-danger btn-sm"
                onClick={() => {
                    deleteTask(index);
                }}
            >Delete</button>
        </li>
    }

    const displayEditTask = (task,index) => {
        return <li key={task.id} className="list-group-item">
            <input type="text" value={modifiedTaskDescription} onChange={(e)=>{
                setModifiedTaskDescription(e.target.value)
            }} />
            <button className="btn btn-primary btn-sm ms-2" onClick={()=>{
                processEditTask(task, index);
            }}>Update</button>
        </li>
    }

    const processEditTask = (task, index) => {
        
        const modifiedTask = {
            id: task.id,
            description: modifiedTaskDescription,
            done: task.done
        }
        
        const left = tasks.slice(0, index);
        const right = tasks.slice(index + 1);
        const modified = [...left, modifiedTask, ...right];
        setTasks(modified);
        setIndexBeingModified(-1);
    }

    return <>
        <h1>Tasks</h1>
        <ul className="list-group">
            {
                tasks.map((t, index) => {
                    return index === indexBeingModified ? displayEditTask(t, index)
                        : displayTask(t, index)
                })
            }
        </ul>

        <h1>Add a New Task</h1>
        <div>
            <label>Task Description</label>
            <input className="form-control"
                type="text"
                value={newTaskDescription}
                onChange={(e) => {
                    setNewTaskDescription(e.target.value)
                }}
            />
        </div>
        <div>
            <button className="mt-3 btn btn-primary" onClick={addNewTask}>Add New Task</button>
        </div>
    </>

}