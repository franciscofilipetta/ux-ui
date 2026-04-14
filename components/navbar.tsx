"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Solidaridad</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Explorar
          </Link>
          <Link
            href="/crear"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Crear Campana
          </Link>
          <Link
            href="/como-funciona"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Como Funciona
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="icon" aria-label="Buscar">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/perfil">
            <Button variant="ghost" size="icon" aria-label="Perfil">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/crear">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Iniciar Campana
            </Button>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "border-b border-border bg-background md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            Explorar
          </Link>
          <Link
            href="/crear"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            Crear Campana
          </Link>
          <Link
            href="/como-funciona"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            Como Funciona
          </Link>
          <Link
            href="/perfil"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            Mi Perfil
          </Link>
          <div className="mt-2 border-t border-border pt-4">
            <Link href="/crear" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Iniciar Campana
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
