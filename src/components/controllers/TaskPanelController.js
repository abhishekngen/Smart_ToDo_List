import React from "react";
import { useSelector } from "react-redux";
import { selectDoingTasks, selectDoneTasks, selectToDoTasks } from "../../features/tasks/tasksSlice";
import TasksList from "../../features/tasks/TasksList.js";
import { taskStatus } from "../../features/tasks/taskStatus.js";
import styles from "./TaskPanelController.module.css";
import { selectCategoryFilter } from "../../features/categoryFilter/categoryFilterSlice.js";

export default function TaskPanelController() {

    const toDoTasks = useSelector(selectToDoTasks);
    const doingTasks = useSelector(selectDoingTasks);
    const doneTasks = useSelector(selectDoneTasks);

    const categoryFilter = useSelector(selectCategoryFilter);

    const tasksCompliantWithCategoryFilter = (tasks) => {
        return tasks.filter(task => categoryFilter.includes(task.category));
    }

    return (
        <div className={styles.container}>
            <TasksList key='ToDo' tasks={tasksCompliantWithCategoryFilter(toDoTasks)} type={taskStatus.ToDo} />
            <TasksList key='Doing' tasks={tasksCompliantWithCategoryFilter(doingTasks)} type={taskStatus.Doing} />
            <TasksList key='Done' tasks={tasksCompliantWithCategoryFilter(doneTasks)} type={taskStatus.Done} />
        </div>
    );
}