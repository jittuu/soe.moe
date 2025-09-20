import { cn } from "@/lib/utils";

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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      </span>
      <div>{children}</div>
    </div>
  );
}
