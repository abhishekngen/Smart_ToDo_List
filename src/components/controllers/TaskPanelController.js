import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, selectDoingTasks, selectDoneTasks, selectToDoTasks } from "../../features/tasks/tasksSlice";
import TasksList from "../../features/tasks/TasksList.js";
import { taskStatus } from "../../features/tasks/taskStatus.js";
import styles from "./TaskPanelController.module.css";
import { selectCategoryFilter } from "../../features/categoryFilter/categoryFilterSlice.js";

export default function TaskPanelController() {

    const dispatch = useDispatch();

    const { isLoading, hasError } = useSelector(state => state.tasks);

    const toDoTasks = useSelector(selectToDoTasks);
    const doingTasks = useSelector(selectDoingTasks);
    const doneTasks = useSelector(selectDoneTasks);

    const categoryFilter = useSelector(selectCategoryFilter);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const tasksCompliantWithCategoryFilter = (tasks) => {
        return tasks.filter(task => categoryFilter.includes(task.category));
    }

    const content = isLoading ? <h1>Loading...</h1> : (hasError ? <h1>There was an error loading tasks</h1> : (
        <div className={styles.container}>
            <TasksList key='ToDo' tasks={tasksCompliantWithCategoryFilter(toDoTasks)} type={taskStatus.ToDo} />
            <TasksList key='Doing' tasks={tasksCompliantWithCategoryFilter(doingTasks)} type={taskStatus.Doing} />
            <TasksList key='Done' tasks={tasksCompliantWithCategoryFilter(doneTasks)} type={taskStatus.Done} />
        </div>
    ));
    return content;
}