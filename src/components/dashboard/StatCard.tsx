import React from "react";
import { Card, CardContent } from "../ui/Card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  trend: number;
  trendLabel?: string;
  icon?: React.ReactNode;
  sparklineColor?: "green" | "red";
}

const Sparkline = ({ color }: { color: "green" | "red" }) => {
  const strokeColor = color === "green" ? "#39cb11" : "#f47037";
  const pathData = color === "green" 
    ? "M0,50 L15,45 L30,40 L45,30 L60,20 L75,10 L90,5 L100,0" 
    : "M0,0 L15,5 L30,10 L45,20 L60,30 L75,40 L90,45 L100,50";
    
  return (
    <svg viewBox="0 0 100 60" className="w-24 h-16 overflow-visible" preserveAspectRatio="none">
      <path
        d={pathData}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`${pathData} L100,60 L0,60 Z`}
        fill={`url(#gradient-${color})`}
        stroke="none"
        opacity="0.2"
      />
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={strokeColor} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export function StatCard({ title, value, trend, trendLabel = "Compared to last week", icon, sparklineColor }: StatCardProps) {
  const isPositive = trend >= 0;
  const colorClass = isPositive ? "text-green-500" : "text-red-500";
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;
  const actualSparklineColor = sparklineColor || (isPositive ? "green" : "red");

  return (
    <Card>
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          {icon && <span className="text-gray-400">{icon}</span>}
          <span className="font-medium text-sm">{title}</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
              <span
                className={cn(
                  "flex items-center text-xs font-medium",
                  colorClass,
                )}
              >
                <TrendIcon className="w-3 h-3 mr-0.5" />
                {Math.abs(trend)}%
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-6">{trendLabel}</p>
          </div>
          <div className="pb-1">
            <Sparkline color={actualSparklineColor} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
