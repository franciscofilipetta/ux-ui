"use client";

import { cn } from "@/lib/utils";
import { categoryLabels, type CampaignCategory } from "@/lib/types";
import {
  Trophy,
  Heart,
  GraduationCap,
  Building2,
  AlertTriangle,
  Users,
  LayoutGrid,
} from "lucide-react";

const categoryIcons: Record<CampaignCategory | "todos", React.ReactNode> = {
  todos: <LayoutGrid className="h-4 w-4" />,
  deportes: <Trophy className="h-4 w-4" />,
  salud: <Heart className="h-4 w-4" />,
  educacion: <GraduationCap className="h-4 w-4" />,
  ongs: <Building2 className="h-4 w-4" />,
  emergencias: <AlertTriangle className="h-4 w-4" />,
  comunidad: <Users className="h-4 w-4" />,
};

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const categories = [
    { id: "todos", label: "Todas" },
    ...Object.entries(categoryLabels).map(([id, label]) => ({ id, label })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
            selectedCategory === category.id
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {categoryIcons[category.id as CampaignCategory | "todos"]}
          {category.label}
        </button>
      ))}
    </div>
  );
}
