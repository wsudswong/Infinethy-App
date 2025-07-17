import React from 'react'

const Habitracker = () => {
  const todo = ["Read Something New", "Meditate", "Eat Lunch", "Water Plants"];
  return (
    <>
      <div>This is my Habit Tracker page</div>
      {todo.map((task) => (<li key={task}>{task}</li>))}
    </>
  )
}

export default Habitracker