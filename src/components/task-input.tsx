import React from "react";

interface TaskInputProps {
  taskName: string;
  handleTaskUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskInput = ({ taskName, handleTaskUpdate }: TaskInputProps) => {
  return (
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
  );
};
