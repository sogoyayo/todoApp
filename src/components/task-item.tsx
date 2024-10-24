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
      className="flex items-center justify-between bg-white border border-gray-200 px-4 py-6 shadow-md rounded-lg w-full cursor-pointer"
      onClick={() => onToggleComplete(task)}
    >
      <div className="flex items-center">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full mr-4 ${
            task.completed ? "bg-[#53DA69]" : "border-2 border-[#071D55]"
          }`}
        >
          {task.completed && <Check strokeWidth={3} className="w-4 h-4 text-[#399649]" />}
        </div>

        <span
          className={`${
            task.completed ? "line-through text-gray-400" : "text-[#071D55]"
          } font-medium`}
        >
          {task.name}
        </span>
      </div>

      <button
        className={`text-[#071D55] border border-[#071D55] rounded px-4 py-2 text-sm hover:bg-[#3556AB]/25 ${
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
