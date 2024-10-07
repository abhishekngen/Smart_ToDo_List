import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddTaskPage from './pages/AddTaskPage';
import ModifyCategoriesPage from './pages/ModifyCategoriesPage';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<MainPage />}></Route>
    <Route path='/add-task' element={<AddTaskPage />}></Route>
    <Route path='/modify-categories' element={<ModifyCategoriesPage />}></Route>
  </>
));

function App() {
  return (
    <div className='App' style={{marginTop: '100px'}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
