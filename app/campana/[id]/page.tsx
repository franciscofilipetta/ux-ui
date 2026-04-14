"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/progress-bar";
import { DonationList } from "@/components/donation-list";
import { DonationModal } from "@/components/donation-modal";
import {
  getCampaignById,
  getDonationsByCampaignId,
  formatCurrency,
  calculateProgress,
} from "@/lib/data";
import { categoryLabels, categoryColors } from "@/lib/types";
import {
  Heart,
  Share2,
  MapPin,
  Users,
  Calendar,
  ChevronLeft,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CampaignPageProps {
  params: Promise<{ id: string }>;
}

export default function CampaignPage({ params }: CampaignPageProps) {
  const { id } = use(params);
  const campaign = getCampaignById(id);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  if (!campaign) {
    notFound();
  }

  const donations = getDonationsByCampaignId(campaign.id);
  const progress = calculateProgress(campaign.currentAmount, campaign.goalAmount);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: campaign.title,
        text: campaign.description,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <div className="pb-12">
      {/* Back link */}
      <div className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver a campanas
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={campaign.imageUrl}
                alt={campaign.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <span
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-medium",
                    categoryColors[campaign.category]
                  )}
                >
                  {categoryLabels[campaign.category]}
                </span>
                {campaign.isUrgent && (
                  <span className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800">
                    <AlertCircle className="h-4 w-4" />
                    Urgente
                  </span>
                )}
                {campaign.isTrending && (
                  <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                    <TrendingUp className="h-4 w-4" />
                    Tendencia
                  </span>
                )}
              </div>
            </div>

            {/* Campaign Info */}
            <div className="mt-6">
              <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                {campaign.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {campaign.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {campaign.location}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Creada el {new Date(campaign.createdAt).toLocaleDateString("es-AR")}
                </span>
              </div>

              {/* Creator */}
              <div className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Image
                  src={campaign.creatorAvatar}
                  alt={campaign.creatorName}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Organizado por</p>
                  <p className="font-semibold text-card-foreground">
                    {campaign.creatorName}
                  </p>
                </div>
              </div>

              {/* Story */}
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  Nuestra historia
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {campaign.story}
                  </p>
                </div>
              </div>

              {/* Donations */}
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  Donaciones recientes
                </h2>
                <DonationList donations={donations} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-sm">
              {/* Progress */}
              <div className="mb-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-foreground">
                    {formatCurrency(campaign.currentAmount)}
                  </span>
                  <span className="text-lg font-semibold text-primary">
                    {progress}%
                  </span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  recaudados de {formatCurrency(campaign.goalAmount)}
                </p>
                <ProgressBar
                  current={campaign.currentAmount}
                  goal={campaign.goalAmount}
                  size="lg"
                />
              </div>

              {/* Stats */}
              <div className="mb-6 flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      {campaign.donorCount}
                    </p>
                    <p className="text-xs text-muted-foreground">Donantes</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <p className="text-lg font-bold text-foreground">
                    {formatCurrency(
                      Math.round(campaign.currentAmount / campaign.donorCount)
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">Promedio</p>
                </div>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full gap-2"
                onClick={() => setIsDonationModalOpen(true)}
              >
                <Heart className="h-5 w-5" />
                Donar ahora
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="mt-3 w-full gap-2"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
                Compartir
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Tus datos estan protegidos. Plataforma 100% segura.
              </p>
            </div>
          </div>
        </div>
      </div>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        campaignTitle={campaign.title}
      />
    </div>
  );
}
