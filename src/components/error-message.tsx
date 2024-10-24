import { CircleAlert } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({
  message = "Something went wrong!",
}: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center gap-2 p-4 text-red-700 bg-red-100 border border-red-400 rounded">
      <CircleAlert size={20} />
      <p>{message}</p>
    </div>
  );
};
