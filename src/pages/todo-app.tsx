import { Sidebar } from "@/components/sidebar";
import { TaskButtons } from "@/components/task-buttons";
import { TaskInput } from "@/components/task-input";
import React, { useState } from "react";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Training at the Gym", completed: true },
    { id: 2, name: "Play Paddle with friends", completed: false },
    { id: 3, name: "Burger BBQ with family", completed: false },
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
    if (taskName.length >= 3) {
      if (selectedTask) {
        setTasks(
          tasks.map((task) =>
            task.id === selectedTask.id ? { ...task, name: taskName } : task
          )
        );
      } else {
        const newTask: Task = { id: tasks.length + 1, name: taskName, completed: false };
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

      <div className="w-full text-gray-800 flex flex-col h-full">
        <div className="header-shadow flex items-center justify-between md:justify-center h-44 bg-[#3556AB]">
          <h2 className="text-shadow__black px-4 md:px-0 text-white text-base md:text-2xl font-medium mb-4">
            {selectedTask ? "Edit Task" : "Add Task"}
          </h2>
        </div>

        <div className="flex flex-col flex-grow py-6 px-6">
          <TaskInput taskName={taskName} handleTaskUpdate={handleTaskUpdate} />

          <TaskButtons
            handleDeleteTask={handleDeleteTask}
            handleSaveTask={handleSaveTask}
            selectedTask={!!selectedTask}
            taskNameLength={taskName.length}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
