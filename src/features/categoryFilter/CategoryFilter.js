import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../categories/categoriesSlice";
import { addCategoryToFilter, removeCategoryFromFilter, selectCategoryFilter, setCategoryFilter } from "./categoryFilterSlice";


export default function CategoryFilter() {
    const categoriesFiltered = useSelector(selectCategoryFilter);
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const [allChecked, setAllChecked] = useState(categoriesFiltered.every(category => categories.includes(category))
    && categories.every(category => categoriesFiltered.includes(category)));

    const handleChange = (e, category) => {
        if(e.target.name === 'All'){
            console.log(e.target);
            if(!allChecked) {
                if(categoriesFiltered.every(category => categories.includes(category))
                    && categories.every(category => categoriesFiltered.includes(category)))
                    setAllChecked(true);
                else dispatch(setCategoryFilter(categories));
            }
            else setAllChecked(false);
            return;
        }
        console.log(e);
        if(categoriesFiltered.includes(category)){
            setAllChecked(false);
            dispatch(removeCategoryFromFilter(category));
        }
        else{
            dispatch(addCategoryToFilter(category));
        }
    }

    useEffect(() => {
        if(categoriesFiltered.every(category => categories.includes(category))
            && categories.every(category => categoriesFiltered.includes(category))){
            setAllChecked(true);
        }
    }, [dispatch, categoriesFiltered, categories]);

    return (
        <ul style={{listStyle:'none'}}>
            <li>
                <label>
                    <input
                        type='checkbox'
                        checked={allChecked}
                        onChange={handleChange}
                        name='All'
                    />
                    All
                </label>
            </li>
            {categories.map((category, index) => {
                return (
                    <label key={index}>
                        <input
                            type='checkbox'

                            checked={categoriesFiltered.includes(category)}
                            onChange={(e) => handleChange(e, category)}
                        />
                        {category}
                    </label>
                )
            })}
        </ul>
    );
}
