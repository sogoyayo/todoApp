import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-gray-50">
      <div className="flex items-center px-6 grow xl:px-10">
        <div className="mx-auto text-center">
          <h1 className="text-[14rem] font-black text-gray-200">404</h1>
          <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
            Uh-oh! Sorry, We can't find that page
          </h1>
          <p className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
            Try searching again, or return home to start from the beginning.
          </p>
          <div className="space-x-4">
            <Button
              onClick={() => navigate(-1)}
              size={"sm"}
              className="h-12 px-4 mt-8 xl:h-14 xl:px-6 bg-primary-500"
            >
              <House className="mr-1.5 text-lg" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
