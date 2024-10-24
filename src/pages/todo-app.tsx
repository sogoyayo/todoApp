import { FloatingButton } from "@/components/floating-button";
import { ProUpgradeCard } from "@/components/pro-upgrade-card";
import SimpleBar from "@/components/simplebar";
import { TaskItem } from "@/components/task-item";
import { UserProfile } from "@/components/user-profile";
import React, { useState } from "react";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export const TodoApp: React.FC = () => {
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
        const newTask: Task = {
          id: tasks.length + 1,
          name: taskName,
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
      <div className="sidebar-shadow hidden md:block w-[30rem] min-w-[30rem] flex flex-col relative text-gray-900 h-full">
        <UserProfile />

        <ProUpgradeCard />

        <SimpleBar className="flex-grow overflow-y-auto max-h-[calc(100vh-12rem)] mt-3">
          <div className="py-8 px-4 space-y-4">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={toggleCompleteTask}
                onEditTask={handleEditTask}
              />
            ))}
          </div>
        </SimpleBar>
        <FloatingButton />
      </div>

      <div className="w-full text-gray-800 flex flex-col h-full">
        <div className="header-shadow flex items-center justify-between md:justify-center h-44 bg-[#3556AB]">
          <div className="md:hidden">
            <UserProfile />
          </div>
          <h2 className="text-shadow__black px-4 md:px-0 text-white text-base md:text-2xl font-medium mb-4">
            {selectedTask ? "Edit Task" : "Add Task"}
          </h2>
        </div>

        <div className="flex flex-col flex-grow py-6 px-6">
          <div>
            <div className="space-y-3">
              <label
                htmlFor="taskName"
                className="block text-lg tracking-widest font-light mb-2"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-base text-[#0D2972] rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-6 py-4 placeholder:text-base"
                placeholder="Type in your task"
                value={taskName}
                onChange={handleTaskUpdate}
                required
              />
            </div>
            {taskName.length < 5 && taskName.length > 0 && (
              <p className="text-xs text-[#720D0D] mt-1">
                Task name must be at least 5 characters long.
              </p>
            )}
          </div>

          <div className="flex-1 md:hidden">
            <SimpleBar className="flex-grow overflow-y-auto max-h-[calc(100vh-25rem)] mt-2">
              <div className="py-8 space-y-4">
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={toggleCompleteTask}
                    onEditTask={handleEditTask}
                  />
                ))}
              </div>
            </SimpleBar>
          </div>

          <div className="flex gap-6 mt-auto">
            <button
              onClick={handleDeleteTask}
              className={`btn-shadow text-shadow__black border-2 border-[#720D0D] bg-[#AB3535] text-white px-6 py-4 rounded-lg hover:bg-[#AB3535]/95 ${
                selectedTask ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!selectedTask}
            >
              Delete
            </button>
            <button
              onClick={handleSaveTask}
              className={`btn-shadow text-shadow__black border-2 border-[#123EB1] flex-1 bg-[#3556AB] text-white px-6 py-4 rounded-lg hover:bg-[#3556AB]/95 ${
                taskName.length >= 3 ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={taskName.length < 3}
            >
              {selectedTask ? "Save" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
