import React from "react";
import styles from './Category.module.css';
import { useDispatch, useSelector } from "react-redux";
import { removeCategory, selectCategories } from "./categoriesSlice";
import { removeCategoryFromFilter } from "../categoryFilter/categoryFilterSlice";

export default function Category(props) {
    const {category} = props;

    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(removeCategory(category));
        dispatch(removeCategoryFromFilter(category));
    }

    return (
        <div className={styles.categoryContainer}>
            <h2>{category}</h2>
            <div>
                {categories.length > 1 && <button name='remove' onClick={handleClick}>-</button>}
            </div>
        </div>
    );
}