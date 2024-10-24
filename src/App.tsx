import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
const TodoApp = lazy(() => import("@/pages/todo-app"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));
import { Toaster } from "sonner";
import AppErrorBoundary from "./components/errors/app-error-boundary";

function App() {
  return (
    <main>
      <BrowserRouter>
        <AppErrorBoundary>
          <Routes>
            <Route index path="/" element={<TodoApp />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster position="top-center" richColors />
        </AppErrorBoundary>
      </BrowserRouter>
    </main>
  );
}

export default App;
