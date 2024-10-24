import { ProUpgradeCard } from "@/components/pro-upgrade-card";
import SimpleBar from "@/components/simplebar";
import { TaskItem } from "@/components/task-item";
import { UserProfile } from "@/components/user-profile";
import { Plus } from "lucide-react";
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

  // Pre-fill the input field when editing a task
  React.useEffect(() => {
    if (selectedTask) {
      setTaskName(selectedTask.name);
    } else {
      setTaskName(""); // Clear the input when no task is selected
    }
  }, [selectedTask]);

  // Handle task name changes
  const handleTaskUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  // Save task - either create a new task or update an existing task
  const handleSaveTask = () => {
    if (taskName.length >= 5) {
      if (selectedTask) {
        // Update the existing task
        setTasks(
          tasks.map((task) =>
            task.id === selectedTask.id ? { ...task, name: taskName } : task
          )
        );
      } else {
        // Add a new task
        const newTask: Task = {
          id: tasks.length + 1,
          name: taskName,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      }

      setSelectedTask(null); // Clear selection after saving
      setTaskName(""); // Clear input
    }
  };

  // Delete the selected task
  const handleDeleteTask = () => {
    if (selectedTask) {
      setTasks(tasks.filter((task) => task.id !== selectedTask.id));
      setSelectedTask(null);
      setTaskName("");
    }
  };

  // Edit an existing task (select the task to prefill the input)
  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
  };

  // Toggle task completion
  const toggleCompleteTask = (task: Task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100/70 text-white">
      {/* Left Sidebar */}
      <div className="w-1/3 flex flex-col relative text-gray-900">
        {/* User Profile */}
        <UserProfile />

        <ProUpgradeCard />

        <SimpleBar className="h-full max-h-[calc(85vh-10rem)] mt-3">
          <div className="flex-grow py-8 px-4 space-y-4">
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
        <button className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-3">
          <Plus className="text-white" />
        </button>
      </div>

      {/* Right Sidebar - Edit Task */}
      <div className="w-2/3 text-gray-800">
        <div className="flex items-center justify-center py-12 bg-blue-600">
          <h2 className="text-white text-2xl font-medium mb-4">
            {selectedTask ? "Edit Task" : "Add Task"}
          </h2>
        </div>

        <div className="flex flex-col py-6 px-6">
          <div>
            <div className="space-y-3">
              <label htmlFor="taskName" className="block text-lg font-medium mb-2">
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-6 py-4 placeholder:text-base"
                placeholder="Type in your task"
                value={taskName}
                onChange={handleTaskUpdate}
                required
              />
            </div>
            {taskName.length < 5 && taskName.length > 0 && (
              <p className="text-xs text-red-500 mt-2">
                Task name must be at least 5 characters long.
              </p>
            )}
          </div>

          <div className="flex-1 h-full"></div>

          <div className="flex gap-6">
            <button
              onClick={handleDeleteTask}
              className={`bg-[#AB3535] text-white px-6 py-4 rounded-lg hover:bg-[#AB3535]/95 ${
                selectedTask ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!selectedTask}
            >
              Delete
            </button>
            <button
              onClick={handleSaveTask}
              className={`flex-1 bg-[#3556AB] text-white px-6 py-4 rounded-lg hover:bg-[#3556AB]/95 ${
                taskName.length >= 3 ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={taskName.length < 5}
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
