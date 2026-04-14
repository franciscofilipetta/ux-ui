import Link from "next/link";
import Image from "next/image";
import { Campaign, categoryLabels, categoryColors } from "@/lib/types";
import { formatCurrency, calculateProgress } from "@/lib/data";
import { ProgressBar } from "./progress-bar";
import { MapPin, Users, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = calculateProgress(campaign.currentAmount, campaign.goalAmount);

  return (
    <Link href={`/campana/${campaign.id}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={campaign.imageUrl}
            alt={campaign.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium",
                categoryColors[campaign.category]
              )}
            >
              {categoryLabels[campaign.category]}
            </span>
            {campaign.isUrgent && (
              <span className="flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-xs font-medium text-orange-800">
                <AlertCircle className="h-3 w-3" />
                Urgente
              </span>
            )}
            {campaign.isTrending && (
              <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <TrendingUp className="h-3 w-3" />
                Tendencia
              </span>
            )}
          </div>
        </div>

        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {campaign.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {campaign.description}
          </p>

          <ProgressBar current={campaign.currentAmount} goal={campaign.goalAmount} size="sm" />

          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-foreground">
                {formatCurrency(campaign.currentAmount)}
              </p>
              <p className="text-xs text-muted-foreground">
                de {formatCurrency(campaign.goalAmount)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">{progress}%</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                {campaign.donorCount} donantes
              </p>
            </div>
          </div>

          {campaign.location && (
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {campaign.location}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
