import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './tasksSlice';
import { taskStatus } from './taskStatus';
import { selectCategories } from '../categories/categoriesSlice';
import { useNavigate } from 'react-router';
import styles from './AddTaskForm.module.css';

export default function AddTaskForm() {

    const navigate = useNavigate();

    const categories = useSelector(selectCategories);

    const dispatch = useDispatch();

    const [taskFormData, setTaskFormData] = useState({
        title: '',
        description: '',
        category: categories[0],
        deadline: '24'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTaskFormData({
            ...taskFormData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        console.log('moo');
        e.preventDefault();
        dispatch(addTask({
            ...taskFormData,
            status: taskStatus.ToDo,
            id: Date.now()
        })); //Will have to change this to a POST value (could probably ignore the addTask?)
        navigate('/');
    }

    return (
        <div className={styles.AddTaskForm}>
            <form style={{margin: '25px 500px', display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label htmlFor='title'>Task Title:</label>
                <input
                    type='text'
                    name='title'
                    value={taskFormData.title}
                    onChange={handleChange}
                />
                <label htmlFor='description'>Task Description:</label>
                <input
                    type='text'
                    name='description'
                    value={taskFormData.description}
                    onChange={handleChange}
                />
                <label htmlFor='category'>Task Category:</label>
                <select value={taskFormData.category} name='category' onChange={handleChange}>
                    {categories.map((category, index) => {
                        return (<option key={index} value={category} style={{textAlign: 'center'}}>
                            {category}
                        </option>)
                    })}
                </select>
                <label htmlFor='deadline'>Task Deadline:</label>
                <input
                    type='text'
                    name='deadline'
                    value={taskFormData.deadline}
                    onChange={handleChange}
                />
                <input type='submit'/>
            </form>
        </div>
    )
}