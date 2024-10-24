import { Loader } from "lucide-react";

const SuspenseLoader = () => {
  return (
    <div className="h-screen grid place-content-center mt-[-130px]">
      <Loader className="size-10 animate-spin text-primary-700" />
    </div>
  );
};

export default SuspenseLoader;
