import { Plus } from "lucide-react";

export const FloatingButton = () => {
  return (
    <button className="button-shadow absolute bottom-6 right-4 border-2 border-[#123EB1] bg-[#3556AB] rounded-full p-3">
      <Plus className="text-white" />
    </button>
  );
};
