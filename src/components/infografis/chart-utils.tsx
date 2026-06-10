"use client";

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Line,
  LineChart,
} from "recharts";
import { cn } from "@/lib/utils";
import { CHART_COLORS } from "@/lib/mock-data/infografis";

/** Parent dengan tinggi/lebar pasti — hindari ResponsiveContainer -1 */
export function ChartShell({
  children,
  className,
  heightClass = "h-[200px] sm:h-[220px] md:h-[260px]",
}: {
  children: React.ReactNode;
  className?: string;
  heightClass?: string;
}) {
  return (
    <div className={cn("w-full min-w-0", heightClass, className)}>
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}

export function DonutChart({
  data,
  dataKey = "value",
  nameKey = "name",
}: {
  data: readonly { name: string; value: number }[];
  dataKey?: string;
  nameKey?: string;
}) {
  return (
    <ChartShell>
      <PieChart>
        <Pie
          data={[...data]}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="45%"
          innerRadius="40%"
          outerRadius="65%"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
        />
      </PieChart>
    </ChartShell>
  );
}

export function PieChartSimple({
  data,
  dataKey = "value",
  nameKey = "name",
}: {
  data: readonly { name: string; value: number }[];
  dataKey?: string;
  nameKey?: string;
}) {
  return (
    <ChartShell>
      <PieChart>
        <Pie
          data={[...data]}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="45%"
          outerRadius="65%"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
        />
      </PieChart>
    </ChartShell>
  );
}

export function HorizontalBarChart({
  data,
  dataKey = "jumlah",
  nameKey = "name",
}: {
  data: readonly { name: string; jumlah: number }[];
  dataKey?: string;
  nameKey?: string;
}) {
  return (
    <ChartShell>
      <BarChart
        data={[...data]}
        layout="vertical"
        margin={{ left: 4, right: 8, top: 4, bottom: 4 }}
      >
        <XAxis type="number" tick={{ fontSize: 10 }} />
        <YAxis
          dataKey={nameKey}
          type="category"
          width={72}
          tick={{ fontSize: 10 }}
        />
        <Tooltip />
        <Bar dataKey={dataKey} fill="#2F6F4E" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ChartShell>
  );
}

export function VerticalBarChart({
  data,
  xKey,
  dataKey,
  fill = "#2F6F4E",
}: {
  data: readonly Record<string, string | number>[];
  xKey: string;
  dataKey: string;
  fill?: string;
}) {
  return (
    <ChartShell>
      <BarChart data={[...data]} margin={{ bottom: 8, left: 0, right: 8 }}>
        <XAxis
          dataKey={xKey}
          tick={{ fontSize: 10 }}
          interval={0}
          angle={-25}
          textAnchor="end"
          height={56}
        />
        <YAxis tick={{ fontSize: 10 }} width={40} />
        <Tooltip />
        <Bar dataKey={dataKey} fill={fill} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartShell>
  );
}

export function LineChartSimple({
  data,
  xKey,
  dataKey,
}: {
  data: readonly Record<string, string | number>[];
  xKey: string;
  dataKey: string;
}) {
  return (
    <ChartShell>
      <LineChart data={[...data]}>
        <XAxis dataKey={xKey} tick={{ fontSize: 11 }} />
        <YAxis tick={{ fontSize: 11 }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke="#2F6F4E"
          strokeWidth={2}
          dot={{ fill: "#2F6F4E", r: 4 }}
        />
      </LineChart>
    </ChartShell>
  );
}
