import React from 'react'
import { Todo } from '../model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
type Props={
  todo:Todo;
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
export const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form className='single_todo'>
        <span className="single_todo--text">{todo.todo}</span>
        <div>
            <div className="icon">
              <AiFillEdit />
            </div>
            <div className="icon">
              <AiFillDelete />
            </div>
            <div className="icon">
              <MdDone />
            </div>
        </div>
    </form>
  )
}
