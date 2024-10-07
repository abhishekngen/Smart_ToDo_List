import React from "react";
import TaskPanelController from "../components/controllers/TaskPanelController";
import { NavLink } from "react-router-dom";
import CategoryFilter from "../features/categoryFilter/CategoryFilter";

export default function MainPage() {
  return (
    <div>
    <h1>To Do List</h1>
    <button>
      <NavLink to='/add-task'>Add Task</NavLink>
    </button>
    <button>
      <NavLink to='/modify-categories'>Modify Categories</NavLink>
    </button>
    <CategoryFilter />
    <TaskPanelController />
    </div>
  );
}