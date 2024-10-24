import { Plus } from "lucide-react";

export const FloatingButton = () => {
  return (
    <button className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-3">
      <Plus className="text-white" />
    </button>
  );
};
