import React from "react";
import { cn } from "../../lib/utils";

export type TableColumn<TData> = {
  key: string;
  header: React.ReactNode;
  headerClassName?: string;
  cellClassName?: string;
  cell: (row: TData, rowIndex: number) => React.ReactNode;
};

export type TableProps<TData> = {
  data: TData[];
  columns: Array<TableColumn<TData>>;
  getRowKey?: (row: TData, rowIndex: number) => string;
  withContainerPadding?: boolean;
  className?: string;
  tableClassName?: string;
  headClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  emptyState?: React.ReactNode;
};

export function Table<TData>({
  data,
  columns,
  getRowKey,
  withContainerPadding = true,
  className,
  tableClassName,
  headClassName,
  bodyClassName,
  rowClassName,
  emptyState,
}: TableProps<TData>) {
  return (
    <div
      className={cn(
        "overflow-x-auto",
        withContainerPadding && "p-4",
        className,
      )}
    >
      <table className={cn("w-full text-sm text-left", tableClassName)}>
        <thead
          className={cn(
            "text-xs text-black border-b border-gray-200",
            headClassName,
          )}
        >
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "bg-[#dddddd] px-6 py-5 font-medium first:rounded-tl-lg last:rounded-tr-lg",
                  column.headerClassName,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cn("divide-y divide-gray-100", bodyClassName)}>
          {data.length === 0 ? (
            <tr>
              <td className="px-6 py-8 text-gray-500" colSpan={columns.length}>
                {emptyState ?? "No data"}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={getRowKey ? getRowKey(row, rowIndex) : String(rowIndex)}
                className={cn(
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100",
                  "hover:bg-gray-100",
                  rowClassName,
                )}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      "px-6 py-3 text-gray-600",
                      column.cellClassName,
                    )}
                  >
                    {column.cell(row, rowIndex)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
