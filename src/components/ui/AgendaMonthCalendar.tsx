"use client";

import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  subMonths,
} from "date-fns";
import { id } from "date-fns/locale";
import { cn } from "@/lib/utils";
import type { Agenda } from "@/lib/mock-data/agenda";

const WEEKDAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

function toMondayBasedWeekday(date: Date): number {
  const d = date.getDay();
  return d === 0 ? 6 : d - 1;
}

export function AgendaMonthCalendar({
  viewDate,
  onViewDateChange,
  agendas,
  selectedDay,
  onSelectDay,
}: {
  viewDate: Date;
  onViewDateChange: (date: Date) => void;
  agendas: Agenda[];
  selectedDay: Date | null;
  onSelectDay: (day: Date) => void;
}) {
  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(viewDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const leadingBlanks = toMondayBasedWeekday(monthStart);

  const hasAgenda = (day: Date) =>
    agendas.some((a) => isSameDay(parseISO(a.tanggal), day));

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onViewDateChange(subMonths(viewDate, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-mid-gray/50 bg-white text-lg font-medium text-primary shadow-sm hover:bg-light-gray"
          aria-label="Bulan sebelumnya"
        >
          ‹
        </button>
        <span className="rounded-full bg-light px-4 py-1.5 text-sm font-semibold text-primary">
          {format(viewDate, "MMMM yyyy", { locale: id })}
        </span>
        <button
          type="button"
          onClick={() => onViewDateChange(addMonths(viewDate, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-mid-gray/50 bg-white text-lg font-medium text-primary shadow-sm hover:bg-light-gray"
          aria-label="Bulan berikutnya"
        >
          ›
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-medium text-dark-gray">
        {WEEKDAYS.map((w) => (
          <div key={w} className="py-1">
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: leadingBlanks }).map((_, i) => (
          <div key={`blank-${i}`} className="aspect-square" aria-hidden />
        ))}
        {days.map((day) => {
          const inMonth = isSameMonth(day, viewDate);
          const selected = selectedDay && isSameDay(day, selectedDay);
          const hasEvent = hasAgenda(day);

          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => onSelectDay(day)}
              disabled={!inMonth}
              className={cn(
                "relative flex aspect-square flex-col items-center justify-center rounded-lg text-sm transition",
                selected
                  ? "bg-success font-bold text-white"
                  : "font-medium text-primary hover:bg-light-gray",
                !inMonth && "opacity-30"
              )}
            >
              {format(day, "d")}
              {hasEvent && (
                <span
                  className={cn(
                    "absolute bottom-1 h-1.5 w-1.5 rounded-full",
                    selected ? "bg-white" : "bg-accent"
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function filterAgendaByMonth(agendas: Agenda[], viewDate: Date): Agenda[] {
  const prefix = format(viewDate, "yyyy-MM");
  return agendas.filter((a) => a.tanggal.startsWith(prefix));
}
