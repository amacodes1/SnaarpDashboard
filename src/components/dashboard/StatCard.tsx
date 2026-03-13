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

// Simple SVG sparkline for performance instead of full chart.js instance
const Sparkline = ({ color }: { color: "green" | "red" }) => {
  const strokeColor = color === "green" ? "#10B981" : "#EF4444";
  const pathData = color === "green" 
    ? "M0,20 Q10,15 20,18 T40,10 T60,15 T80,5 T100,0" 
    : "M0,0 Q10,5 20,2 T40,10 T60,5 T80,15 T100,20";
    
  return (
    <svg viewBox="0 0 100 25" className="w-24 h-8 overflow-visible" preserveAspectRatio="none">
      <path
        d={pathData}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`${pathData} L100,25 L0,25 Z`}
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
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          {icon && <span className="text-gray-400">{icon}</span>}
          <span className="font-medium text-sm">{title}</span>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
              <span className={cn("flex items-center text-xs font-medium", colorClass)}>
                <TrendIcon className="w-3 h-3 mr-0.5" />
                {Math.abs(trend)}%
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{trendLabel}</p>
          </div>
          <div className="pb-1">
            <Sparkline color={actualSparklineColor} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
