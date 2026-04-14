"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/hero-section";
import { CategoryFilter } from "@/components/category-filter";
import { CampaignCard } from "@/components/campaign-card";
import { mockCampaigns, getCampaignsByCategory } from "@/lib/data";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaigns = useMemo(() => {
    let campaigns = getCampaignsByCategory(selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      campaigns = campaigns.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(query) ||
          campaign.description.toLowerCase().includes(query) ||
          campaign.location?.toLowerCase().includes(query)
      );
    }

    return campaigns;
  }, [selectedCategory, searchQuery]);

  const trendingCampaigns = mockCampaigns.filter((c) => c.isTrending);

  return (
    <div>
      <HeroSection onSearch={setSearchQuery} />

      {/* Trending Section */}
      {trendingCampaigns.length > 0 && !searchQuery && selectedCategory === "todos" && (
        <section className="border-b border-border bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Campanas en tendencia
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trendingCampaigns.slice(0, 3).map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Campaigns Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {searchQuery
                ? `Resultados para "${searchQuery}"`
                : "Explorar campanas"}
            </h2>
          </div>

          <div className="mb-8">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {filteredCampaigns.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <h3 className="text-lg font-semibold text-foreground">
                No se encontraron campanas
              </h3>
              <p className="mt-2 text-muted-foreground">
                Intenta con otros filtros o terminos de busqueda
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Tenes una causa que necesita apoyo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Crea tu campana en minutos y empieza a recibir donaciones de personas
            que quieren ayudar.
          </p>
          <a
            href="/crear"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-background px-8 text-base font-medium text-foreground transition-colors hover:bg-background/90"
          >
            Crear mi campana
          </a>
        </div>
      </section>
    </div>
  );
}
