import React from "react";
import Task from "./Task.js";
import { taskStatus } from "./taskStatus.js";
import styles from './TasksList.module.css';

export default function TasksList(props) {
    const {tasks, type} = props;

    let taskListTitle;
    let backgroundColor;
    switch (type) {
        case taskStatus.ToDo:
            taskListTitle = 'To Do';
            backgroundColor='green';
            break;
        case taskStatus.Doing:
            taskListTitle = 'Doing';
            backgroundColor='gold';
            break;
        case taskStatus.Done:
            taskListTitle = 'Done';
            backgroundColor='red';
            break;
        default:
            throw new Error('Incorrect Task List Status');
    }

    return (
        <div className={styles.tasksListContainer} style={{backgroundColor:backgroundColor}}>
            <h1>{taskListTitle}</h1>
            <ul className={styles.tasksList}>
                {
                    tasks.map((task) => {
                        return <Task key={task.id} task={task}/>
                    })
                }
            </ul>
        </div>
    );
}