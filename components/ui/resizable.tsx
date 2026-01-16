import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface ResizablePanelGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface ResizableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean;
}

// Stub implementation - react-resizable-panels API differs
const ResizablePanelGroup = ({ className, children, ...props }: ResizablePanelGroupProps) => (
  <div className={cn("flex h-full w-full", className)} {...props}>
    {children}
  </div>
);

const ResizablePanel = ({ children, className, ...props }: ResizablePanelProps) => (
  <div className={cn("flex-1", className)} {...props}>
    {children}
  </div>
);

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) => (
  <div
    className={cn(
      "relative flex w-px items-center justify-center bg-border",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </div>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
