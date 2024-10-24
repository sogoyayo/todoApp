import { TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import cn from "@/utils/class-names";

type ErrorNotificationProps = {
  message: string;
  retryFunction?: () => void;
  resetErrorBoundary?: () => void;
  goBack?: boolean;
  goBackHome?: boolean;
  showIcon?: boolean;
  errorClassName?: string;
};

export const ErrorNotification = ({
  message,
  retryFunction,
  resetErrorBoundary,
  goBack = false,
  goBackHome = false,
  showIcon = true,
  errorClassName,
}: ErrorNotificationProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const isBoundaryError = Boolean(resetErrorBoundary);
  const titleColorClass = isBoundaryError ? "text-primary-red" : "text-primary-500";
  const iconColorClass = isBoundaryError ? "text-primary-red" : "text-primary-500";
  const buttonVariant = isBoundaryError ? "danger" : "default";

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div
        className={cn(
          "flex flex-col justify-center items-center space-y-4",
          errorClassName
        )}
      >
        {showIcon && (
          <div className="mb-4">
            <TriangleAlert className={`size-20 ${iconColorClass}`} />
          </div>
        )}

        <h1 className={`text-3xl font-semibold mb-2 ${titleColorClass}`}>
          Oops! Something Went Wrong.
        </h1>
        <p className="text-gray-600 text-center mb-4 max-w-[65ch]">{message}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {goBack && (
            <Button variant="default" onClick={handleGoBack}>
              Go Back
            </Button>
          )}

          {goBackHome && (
            <Button variant="default" onClick={handleGoHome}>
              Go Back Home
            </Button>
          )}

          {retryFunction && (
            <Button variant={buttonVariant} onClick={retryFunction}>
              Retry
            </Button>
          )}

          {resetErrorBoundary && (
            <Button variant={buttonVariant} onClick={resetErrorBoundary}>
              Go Home
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
