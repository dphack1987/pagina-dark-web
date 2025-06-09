"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface GadgetCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  gradient: string;
  onClick?: () => void;
}

export function GadgetCard({
  title,
  description,
  price,
  features,
  gradient,
  onClick
}: GadgetCardProps) {
  return (
    <Card 
      className={`group relative bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 p-6 hover:border-red-500/50 transition-all cursor-pointer overflow-hidden`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-400">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300">
              <span className="text-red-500">►</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-zinc-800/50">
          <p className="text-red-400 font-medium">{price}</p>
        </div>
      </div>
    </Card>
  );
}
