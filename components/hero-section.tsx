"use client";

import { Button } from "@/components/ui/button";
import { Search, Heart, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2MmgtMnYyaDJ2Mmgtdjh2MmgydjJoMnYtMmgydjJoMnYtMmgydi0yaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Ayuda a cambiar{" "}
            <span className="text-primary">una historia</span>
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
            Unite a miles de personas que estan transformando vidas. Dona a causas
            que importan o crea tu propia campana de recaudacion solidaria.
          </p>

          <form onSubmit={handleSearch} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <div className="relative flex-1 sm:max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar campanas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-lg border border-input bg-background pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button type="submit" size="lg" className="h-12">
                Buscar
              </Button>
            </div>
          </form>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <Link href="/crear">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Heart className="mr-2 h-5 w-5" />
                Crear campana
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">$52M+</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Recaudados en total
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">15,000+</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Donantes activos
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">1,200+</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Campanas exitosas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
