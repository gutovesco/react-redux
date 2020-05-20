import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title, description){
  return ({type: 'ADD_COURSE', title, description})
}

export default function CourseList() {
  const courses = useSelector(state => state.data)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function addCourse(){
    dispatch(addCourseAction(title, description))
  }

  return (
    <>
      <ul>
        {courses.map(course => {
          return (
            <>
            <li key={course}>{course}</li>
            <p>{course}</p>
            </>
          )
        }  
           ) }
      </ul>
      <input placeholder="adicione um curso" onChange={(e) => setTitle(e.target.value)}></input>
      <div><input placeholder="adicione a descricao" onChange={(e) => setDescription(e.target.value)}></input></div>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}
