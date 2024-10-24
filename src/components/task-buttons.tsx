interface TaskButtonsProps {
  handleDeleteTask: () => void;
  handleSaveTask: () => void;
  selectedTask: boolean;
  taskNameLength: number;
}

export const TaskButtons = ({
  handleDeleteTask,
  handleSaveTask,
  selectedTask,
  taskNameLength,
}: TaskButtonsProps) => {
  return (
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
          taskNameLength >= 3 ? "" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={taskNameLength < 3}
      >
        {selectedTask ? "Save" : "Add"}
      </button>
    </div>
  );
};
