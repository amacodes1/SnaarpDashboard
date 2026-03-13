import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

import { CloudNetwork } from './sections/CloudNetwork';
import { DeviceManagement } from './sections/DeviceManagement';
import { ProductivityReport } from './sections/ProductivityReport';
import { OnlineUsersTable, ActivityReports } from './sections/Tables';

// Define the initial widgets
const initialWidgets = [
  { id: 'cloud-network', component: <CloudNetwork /> },
  { id: 'device-management', component: <DeviceManagement /> },
  { id: 'productivity-report', component: <ProductivityReport /> },
  { id: 'online-users', component: <OnlineUsersTable /> },
  { id: 'activity-reports', component: <ActivityReports /> },
];

// Sortable Item Wrapper
function SortableWidget({ id, children }: { id: string, children: React.ReactNode }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group mb-8">
      {/* Drag Handle */}
      <div 
        {...attributes} 
        {...listeners}
        className="absolute left-2 top-2 p-1.5 bg-white border border-gray-200 rounded-md shadow-sm opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing transition-opacity z-20"
      >
        <GripVertical className="w-4 h-4 text-gray-400" />
      </div>
      {children}
    </div>
  );
}

export function DashboardLayout() {
  const [widgets, setWidgets] = useState(initialWidgets);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require 8px movement before dragging starts to allow clicking inside
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setWidgets((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="px-3 max-w-[1600px] mx-auto">
      <div className=" flex justify-between items-center">
        {/* <p className="text-sm text-gray-500">Hover over the left edge of any section to drag and reorder your dashboard.</p> */}
      </div>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={widgets.map(w => w.id)}
          strategy={verticalListSortingStrategy}
        >
          {widgets.map((widget) => (
            <SortableWidget key={widget.id} id={widget.id}>
              {widget.component}
            </SortableWidget>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
