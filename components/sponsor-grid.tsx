"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Sponsor {
  id: number;
  nombre: string;
  cuadricula: number;
}

interface SponsorGridProps {
  rows?: number;
  cols?: number;
  demoMode?: boolean;
}

// Demo sponsors for the landing page showcase
const demoSponsors: Sponsor[] = [
  { id: 1, nombre: "TechCorp", cuadricula: 5 },
  { id: 2, nombre: "GlobalBank", cuadricula: 12 },
  { id: 3, nombre: "EcoGreen", cuadricula: 23 },
  { id: 4, nombre: "SportsBrand", cuadricula: 34 },
  { id: 5, nombre: "MediaCo", cuadricula: 41 },
  { id: 6, nombre: "HealthPlus", cuadricula: 56 },
  { id: 7, nombre: "AutoDrive", cuadricula: 67 },
  { id: 8, nombre: "FoodFirst", cuadricula: 78 },
];

export function SponsorGrid({
  rows = 10,
  cols = 10,
  demoMode = true,
}: SponsorGridProps) {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const totalCells = rows * cols;

  useEffect(() => {
    if (demoMode) {
      // Use demo data for the landing page
      setSponsors(demoSponsors);
      setIsLoaded(true);
    } else {
      // Connect to real API (preserving existing backend integration pattern)
      const fetchSponsors = async () => {
        try {
          const response = await fetch("/api/sponsors");
          if (response.ok) {
            const data = await response.json();
            setSponsors(data);
          }
        } catch (error) {
          console.error("Error fetching sponsors:", error);
        } finally {
          setIsLoaded(true);
        }
      };
      fetchSponsors();
    }
  }, [demoMode]);

  const getSponsorForCell = (cellIndex: number): Sponsor | undefined => {
    return sponsors.find((s) => s.cuadricula === cellIndex);
  };

  const occupiedCount = sponsors.length;
  const availableCount = totalCells - occupiedCount;
  const occupancyRate = Math.round((occupiedCount / totalCells) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Stats bar */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]" />
          <span className="text-[var(--muted-foreground)]">
            Sold: <span className="text-[var(--foreground)] font-medium">{occupiedCount}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[var(--muted)] border border-[var(--border)]" />
          <span className="text-[var(--muted-foreground)]">
            Available: <span className="text-[var(--foreground)] font-medium">{availableCount}</span>
          </span>
        </div>
        <div className="text-[var(--muted-foreground)]">
          Occupancy: <span className="text-[var(--primary)] font-medium">{occupancyRate}%</span>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] p-2 md:p-4"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 pointer-events-none" />

        <div
          className="grid gap-1 md:gap-1.5 relative"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: totalCells }, (_, index) => {
            const sponsor = getSponsorForCell(index);
            const isOccupied = !!sponsor;
            const isHovered = hoveredCell === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.005,
                  type: "spring",
                  stiffness: 200,
                }}
                onMouseEnter={() => setHoveredCell(index)}
                onMouseLeave={() => setHoveredCell(null)}
                className={`
                  sponsor-cell relative aspect-square rounded-md cursor-pointer
                  flex items-center justify-center text-xs font-medium
                  ${
                    isOccupied
                      ? "bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white shadow-lg shadow-[var(--primary)]/20"
                      : "bg-[var(--muted)] border border-[var(--border)] hover:border-[var(--primary)]/50 hover:bg-[var(--secondary)]"
                  }
                `}
              >
                {isOccupied && isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] px-2 py-1 rounded text-xs whitespace-nowrap z-20 shadow-lg"
                  >
                    {sponsor.nombre}
                  </motion.div>
                )}
                {!isOccupied && isHovered && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-[var(--primary)]"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Call to action */}
      <p className="text-center text-[var(--muted-foreground)] text-sm mt-4">
        Hover over cells to see sponsor names. Click to purchase available spots.
      </p>
    </div>
  );
}
