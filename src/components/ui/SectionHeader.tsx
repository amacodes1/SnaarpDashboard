import React from "react";
import { ChevronDown, LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  actions?: React.ReactNode;
}

export function SectionHeader({
  icon: Icon,
  title,
  actions,
}: SectionHeaderProps) {
  return (
    <div className="bg-white p-3 sm:py-2 sm:px-4 rounded-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#f9f8f8] flex-shrink-0">
            <Icon className="w-5 h-5 text-gray-500" />
          </div>
          <h2 className="text-lg font-bold text-gray-900 truncate">{title}</h2>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-start sm:justify-end">
          {actions}
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
