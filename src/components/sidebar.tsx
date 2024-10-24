import { Task } from "@/pages/todo-app";
import { FloatingButton } from "./floating-button";
import { ProUpgradeCard } from "./pro-upgrade-card";
import SimpleBar from "./simplebar";
import { UserProfile } from "./user-profile";
import { TaskList } from "./task-list";

interface SidebarProps {
  tasks: Task[];
  toggleCompleteTask: (task: Task) => void;
  handleEditTask: (task: Task) => void;
}

export const Sidebar = ({ tasks, toggleCompleteTask, handleEditTask }: SidebarProps) => {
  return (
    <div className="sidebar-shadow hidden md:block w-[30rem] min-w-[30rem] flex flex-col relative text-gray-900 h-full">
      <UserProfile />
      <ProUpgradeCard />

      <div className="">
        <SimpleBar className="flex-grow overflow-y-auto max-h-[calc(100vh-20rem)] mt-3">
          <TaskList
            tasks={tasks}
            onToggleComplete={toggleCompleteTask}
            onEditTask={handleEditTask}
            className="py-8 px-4"
          />
        </SimpleBar>
      </div>
      <FloatingButton />
    </div>
  );
};
