import { Task } from "@/pages/todo-app";
import { Check } from "lucide-react";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (task: Task) => void;
  onEditTask: (task: Task) => void;
}

export const TaskItem = ({ task, onToggleComplete, onEditTask }: TaskItemProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      key={task.id}
      className="flex items-center justify-between bg-white px-4 py-6 shadow-md rounded-lg w-full cursor-pointer"
      onClick={() => onToggleComplete(task)}
    >
      <div className="flex items-center">
        {/* Checkmark container with green background when completed */}
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full mr-4 ${
            task.completed ? "bg-green-500" : "border-2 border-blue-900"
          }`}
        >
          {task.completed && <Check strokeWidth={3} className="w-4 h-4 text-white" />}
        </div>

        <span
          className={`${
            task.completed ? "line-through text-gray-400" : "text-blue-900"
          } font-medium`}
        >
          {task.name}
        </span>
      </div>

      {/* Conditionally disable and style the Edit button if the task is completed */}
      <button
        className={`text-blue-900 border border-blue-900 rounded px-4 py-2 text-sm hover:bg-blue-50 ${
          task.completed ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          if (!task.completed) {
            onEditTask(task);
          }
        }}
        disabled={task.completed}
      >
        Edit
      </button>
    </div>
  );
};
