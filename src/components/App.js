import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)


  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(taskText){
    setTasks(tasks.filter( task =>
      task.text !== taskText
    ))
  }

  const tasksToDisplay = tasks.filter(task => 
    selectedCategory === "All" || task.category === selectedCategory
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategorySelect={setSelectedCategory} 
        selectedCategory={selectedCategory}
      />

      <NewTaskForm 
        categories={CATEGORIES.filter(category => 
          category !== "All"
        )}
        onTaskFormSubmit={handleAddTask}
      />

      <TaskList 
        tasks={tasksToDisplay}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
