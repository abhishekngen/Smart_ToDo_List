import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, selectCategories } from '../categories/categoriesSlice';
import { useNavigate } from 'react-router';
import styles from './AddCategoryForm.module.css';
import Category from './Category';

export default function AddCategoryForm() {

    const navigate = useNavigate();

    const categories = useSelector(selectCategories);

    const dispatch = useDispatch();

    const [categoryInput, setCategoryInput] = useState('');

    const handleCategoryInput = (e) => {
        setCategoryInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!categories.includes(e.target.value)){
            dispatch(addCategory(categoryInput));
            setCategoryInput('');
        }
    }

    return (
        <div className={styles.AddCategoryForm}>
            <form style={{margin: '25px 500px', display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label htmlFor='categoryInput'>New Category:</label>
                <input
                    type='text'
                    name='categoryInput'
                    value={categoryInput}
                    onChange={handleCategoryInput}
                />
                <input type='submit'/>
            </form>
            <ul className={styles.categoriesList}>
                {
                    categories.map((category, index) => {
                        return <Category key={index} category={category}/>
                    })
                }
            </ul>
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}