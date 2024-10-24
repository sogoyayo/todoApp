import SimpleBar from "@/components/simplebar";
import { Task } from "@/pages/todo-app";
import React from "react";
import { UserProfile } from "./user-profile";
import { TaskActionButtons } from "./task-buttons";
import { TaskInput } from "./task-input";
import { TaskList } from "./task-list";

interface MainContentProps {
  selectedTask: Task | null;
  taskName: string;
  tasks: Task[];
  onTaskNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleComplete: (task: Task) => void;
  onEditTask: (task: Task) => void;
  onSaveTask: () => void;
  onDeleteTask: () => void;
}

export const MainContent = ({
  selectedTask,
  taskName,
  tasks,
  onTaskNameChange,
  onToggleComplete,
  onEditTask,
  onSaveTask,
  onDeleteTask,
}: MainContentProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSaveTask();
    }
  };

  return (
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
        <TaskInput
          taskName={taskName}
          onTaskNameChange={onTaskNameChange}
          onKeyPress={handleKeyPress}
        />

        <div className="flex-1 md:hidden">
          <SimpleBar className="flex-grow overflow-y-auto max-h-[calc(100vh-25rem)] mt-2">
            <TaskList
              tasks={tasks}
              onToggleComplete={onToggleComplete}
              onEditTask={onEditTask}
              className="py-8"
            />
          </SimpleBar>
        </div>

        <TaskActionButtons
          selectedTask={!!selectedTask}
          taskNameLength={taskName.length}
          onDeleteTask={onDeleteTask}
          onSaveTask={onSaveTask}
        />
      </div>
    </div>
  );
};
