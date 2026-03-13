import React from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  actions?: React.ReactNode;
}

export function SectionHeader({ icon: Icon, title, actions }: SectionHeaderProps) {
  return (
    <div className="bg-white py-2 px-4 rounded-md">
    <div className="flex items-center justify-between pb-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f9f8f8' }}>
          <Icon className="w-5 h-5 text-gray-500" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      <div className="flex items-center gap-2">
        {actions}
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
    </div>
  );
}
