import { cn } from "../../lib/utils";

interface ProgressBarProps {
  value: number;
  colorClass?: string;
  className?: string;
}

export function ProgressBar({ value, colorClass = "bg-indigo-600", className }: ProgressBarProps) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-gray-100", className)}>
      <div
        className={cn("h-full transition-all duration-500 ease-in-out", colorClass)}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
