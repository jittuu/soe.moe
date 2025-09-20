import * as React from "react";

import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex justify-center sm:justify-end py-10">
        <div id="theme-toggle-container"></div>
      </div>
    </footer>
  );
}
