import { MainContent } from "@/components/main-content";
import { Sidebar } from "@/components/sidebar";
import React, { useState } from "react";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: Date.now(), name: "Training at the Gym", completed: true },
    { id: Date.now() + 1, name: "Play Paddle with friends", completed: false },
    { id: Date.now() + 2, name: "Burger BBQ with family", completed: false },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [taskName, setTaskName] = useState<string>("");

  React.useEffect(() => {
    if (selectedTask) {
      setTaskName(selectedTask.name);
    } else {
      setTaskName("");
    }
  }, [selectedTask]);

  const handleTaskUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSaveTask = () => {
    const trimmedTaskName = taskName.trim();

    if (trimmedTaskName.length >= 3) {
      if (selectedTask) {
        setTasks(
          tasks.map((task) =>
            task.id === selectedTask.id ? { ...task, name: trimmedTaskName } : task
          )
        );
      } else {
        const newTask: Task = {
          id: Date.now(),
          name: trimmedTaskName,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      }
      setSelectedTask(null);
      setTaskName("");
    }
  };

  const handleDeleteTask = () => {
    if (selectedTask) {
      setTasks(tasks.filter((task) => task.id !== selectedTask.id));
      setSelectedTask(null);
      setTaskName("");
    }
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
  };

  const toggleCompleteTask = (task: Task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100/70 text-white overflow-hidden">
      <Sidebar
        tasks={tasks}
        toggleCompleteTask={toggleCompleteTask}
        handleEditTask={handleEditTask}
      />

      <MainContent
        selectedTask={selectedTask}
        taskName={taskName}
        tasks={tasks}
        onTaskNameChange={handleTaskUpdate}
        onToggleComplete={toggleCompleteTask}
        onEditTask={handleEditTask}
        onSaveTask={handleSaveTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TodoApp;
