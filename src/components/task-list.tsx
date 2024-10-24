import { TaskItem } from "@/components/task-item";
import { Task } from "@/pages/todo-app";
import cn from "@/utils/class-names";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (task: Task) => void;
  onEditTask: (task: Task) => void;
  className?: string;
}

export const TaskList = ({
  tasks,
  onToggleComplete,
  onEditTask,
  className,
}: TaskListProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};
