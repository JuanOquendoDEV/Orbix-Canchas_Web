"use client";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const chartData = [
  { month: "Enero", reservas: 45 },
  { month: "Febrero", reservas: 62 },
  { month: "Marzo", reservas: 80 },
  { month: "Abril", reservas: 50 },
  { month: "Mayo", reservas: 95 },
  { month: "Junio", reservas: 70 },
];

const chartConfig = {
  reservas: {
    label: "Reservas",
    color: "hsl(200, 90%, 60%)",
  },
} satisfies ChartConfig;

export function ReservasCanchasChart() {
  return (
    <Card className="bg-lime-200 text-blue-950">
    
      <CardHeader>
        <CardTitle>Reservas de Canchas</CardTitle>
        <CardDescription>Enero - Junio 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 1,
              right: 40,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#1E3A8A"
              strokeDasharray="5 5"
            />

            <XAxis
              dataKey="month"
              interval={0}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "#1E3A8A", fontWeight: "bold" }}
            />

            <YAxis tick={{ fill: "#1E3A8A", fontWeight: "bold" }} />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  style={{
                    backgroundColor: "#1E3A8A",
                    borderColor: "#0EA5E9",
                    color: "#F0FDF4",
                  }}
                />
              }
            />

            <Line
              dataKey="reservas"
              type="natural"
              stroke="#0EA5E9"
              strokeWidth={3}
              dot={{ fill: "#1E3A8A", stroke: "#0EA5E9" }}
              activeDot={{ r: 6 }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-blue-900"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Tendencia al alza este mes{" "}
          <TrendingUp className="h-4 w-4 text-blue-900" />
        </div>
        <div className="text-blue-900 leading-none">
          Mostrando el total de reservas de los últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
