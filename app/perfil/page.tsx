"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/campaign-card";
import { mockUser, mockCampaigns, mockDonations, formatCurrency } from "@/lib/data";
import {
  MapPin,
  Calendar,
  Settings,
  Heart,
  Plus,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "campanas" | "donaciones";

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState<Tab>("campanas");

  const userCampaigns = mockCampaigns.filter(
    (c) => c.creatorId === mockUser.id
  );

  const userDonations = mockDonations.filter((d) => !d.isAnonymous);

  const totalDonated = userDonations.reduce((acc, d) => acc + d.amount, 0);
  const totalRaised = userCampaigns.reduce((acc, c) => acc + c.currentAmount, 0);

  return (
    <div className="pb-12">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-b from-accent/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="relative">
              <Image
                src={mockUser.avatar}
                alt={mockUser.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-background shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                {mockUser.name}
              </h1>
              {mockUser.bio && (
                <p className="mt-2 max-w-xl text-muted-foreground">
                  {mockUser.bio}
                </p>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
                {mockUser.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {mockUser.location}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Miembro desde{" "}
                  {new Date(mockUser.createdAt).toLocaleDateString("es-AR", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/crear">
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Nueva campana
                </Button>
              </Link>
              <Button variant="outline" size="icon" aria-label="Configuracion">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-foreground">
                {userCampaigns.length}
              </p>
              <p className="text-sm text-muted-foreground">Campanas creadas</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-primary">
                {formatCurrency(totalRaised)}
              </p>
              <p className="text-sm text-muted-foreground">Total recaudado</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(totalDonated)}
              </p>
              <p className="text-sm text-muted-foreground">Total donado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("campanas")}
              className={cn(
                "flex items-center gap-2 border-b-2 px-1 py-4 text-sm font-medium transition-colors",
                activeTab === "campanas"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <Heart className="h-4 w-4" />
              Mis campanas
            </button>
            <button
              onClick={() => setActiveTab("donaciones")}
              className={cn(
                "flex items-center gap-2 border-b-2 px-1 py-4 text-sm font-medium transition-colors",
                activeTab === "donaciones"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <Heart className="h-4 w-4" />
              Mis donaciones
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === "campanas" && (
          <>
            {userCampaigns.length === 0 ? (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Aun no creaste ninguna campana
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Crea tu primera campana y empieza a recibir donaciones.
                </p>
                <Link href="/crear">
                  <Button className="mt-6">Crear campana</Button>
                </Link>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {userCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "donaciones" && (
          <>
            {userDonations.length === 0 ? (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Aun no hiciste ninguna donacion
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Explora campanas y ayuda a quienes lo necesitan.
                </p>
                <Link href="/">
                  <Button className="mt-6">Explorar campanas</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userDonations.map((donation) => {
                  const campaign = mockCampaigns.find(
                    (c) => c.id === donation.campaignId
                  );
                  return (
                    <div
                      key={donation.id}
                      className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/30"
                    >
                      {campaign && (
                        <Image
                          src={campaign.imageUrl}
                          alt={campaign.title}
                          width={80}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-card-foreground">
                          {campaign?.title || "Campana"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(donation.createdAt).toLocaleDateString(
                            "es-AR",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                        {donation.message && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {"\u201C"}{donation.message}{"\u201D"}
                          </p>
                        )}
                      </div>
                      <p className="text-lg font-bold text-primary">
                        {formatCurrency(donation.amount)}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
