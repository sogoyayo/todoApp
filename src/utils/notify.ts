import { ResponseStatus } from "@/config/enums";
import { toast } from "sonner";

export function notify(message: string, type: ResponseStatus) {
  if (type === ResponseStatus.SUCCESS) {
    toast.success(message);
  } else if (type === ResponseStatus.ERROR) {
    toast.error(message);
  }
}
