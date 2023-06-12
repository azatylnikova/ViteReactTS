

import './index.scss'
import * as React from 'react'

import { todos } from "../../../server/db.tsx";
import Todos from './todos/todos.tsx';

import createTodos from './create-todos-form/createTodos.tsx';
//import { useMemo } from 'react';



function Home() {


  
  // const FilterTodos = useMemo(() =>
  // todos.filter( todos => todos.text === 'Eat'),[]) /////UseMemo
  
  return (
    <>
  {createTodos}
    {todos.length ? todos.map(t => 
                <Todos key ={t.id} todos={t}/>

    )
  :
  <p>There are not cars</p>}
    
    </>
  )
}

export default Home
