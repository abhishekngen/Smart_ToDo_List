import React from "react";
import styles from './Task.module.css';
import { taskStatus } from "./taskStatus";
import { useDispatch } from "react-redux";
import { updateTask } from "./tasksSlice";

export default function Task(props) {
    const {task} = props;

    const dispatch = useDispatch();

    const handleClick = (e) => {
        if(e.target.name === 'moveBack'){
            if(task.status === taskStatus.Doing) dispatch(updateTask({task: task, newStatus: taskStatus.ToDo}));
            else dispatch(updateTask({task: task, newStatus: taskStatus.Doing}));
        }
        else{
            if(task.status === taskStatus.ToDo) dispatch(updateTask({task: task, newStatus: taskStatus.Doing}));
            else dispatch(updateTask({task: task, newStatus: taskStatus.Done}));
        }
    }

    return (
        <div className={styles.taskContainer}>
            <h2>{task.title}</h2>
            <p>Category: {task.category}</p>
            <p>Deadline: {task.deadline}</p>
            <div>
                {task.status !== taskStatus.ToDo && <button name='moveBack' onClick={handleClick}>-</button>}
                {task.status !== taskStatus.Done && <button name='moveForward' onClick={handleClick}>+</button>}
            </div>
        </div>
    );
}