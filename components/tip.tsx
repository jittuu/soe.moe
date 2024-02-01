import { cn } from "@/lib/utils";
import { Icons } from "./icons";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Tip({ children, ...props }: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-md border border-l-4 p-4 border-yellow-500"
      )}
      {...props}
    >
      <span className="mr-4 text-2xl text-yellow-500">
        <Icons.lightbulb fill="yellow" />
      </span>
      <div>{children}</div>
    </div>
  );
}
