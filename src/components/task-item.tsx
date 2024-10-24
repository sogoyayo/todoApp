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
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full mr-4 ${
            task.completed ? "bg-green-500" : "border-2 border-[#3556AB]"
          }`}
        >
          {task.completed && <Check strokeWidth={3} className="w-4 h-4 text-white" />}
        </div>

        <span
          className={`${
            task.completed ? "line-through text-gray-400" : "text-[#3556AB]"
          } font-medium`}
        >
          {task.name}
        </span>
      </div>

      <button
        className={`text-[#3556AB] border border-[#3556AB] rounded px-4 py-2 text-sm hover:bg-[#3556AB]/25 ${
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
