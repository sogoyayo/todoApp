import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { messages } from "@/config/messages";
import { ErrorNotification } from "./error-notification";

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div className="h-screen">
      <ErrorNotification
        errorClassName="-mt-40"
        message={messages.unexpectedError}
        resetErrorBoundary={resetErrorBoundary}
      />
    </div>
  );
}

function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default AppErrorBoundary;
