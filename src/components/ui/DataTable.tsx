import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Column<T> = {
  key: string;
  header: string;
  className?: string;
  cell: (row: T, index: number) => ReactNode;
};

export function DataTable<T>({
  columns,
  rows,
  minWidth = 640,
  emptyMessage = "Tidak ada data untuk ditampilkan.",
}: {
  columns: Column<T>[];
  rows: T[];
  minWidth?: number;
  emptyMessage?: string;
}) {
  if (rows.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-mid-gray/60 bg-light-gray/50 px-4 py-8 text-center text-sm text-dark-gray">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div>
      <p className="mb-2 text-sm text-dark-gray md:hidden">
        Geser ke kanan untuk melihat selengkapnya ›
      </p>
      <div className="overflow-x-auto rounded-lg border border-mid-gray/30">
        <table
          className="w-full text-sm"
          style={{ minWidth }}
        >
          <thead className="bg-primary text-white">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn("p-3 text-left font-semibold", col.className)}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-light-gray" : "bg-white"}
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn("p-3 align-top", col.className)}>
                    {col.cell(row, i)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
