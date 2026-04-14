import Image from "next/image";
import { Donation } from "@/lib/types";
import { formatCurrency } from "@/lib/data";
import { User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

interface DonationListProps {
  donations: Donation[];
  showAll?: boolean;
}

export function DonationList({ donations, showAll = false }: DonationListProps) {
  const displayDonations = showAll ? donations : donations.slice(0, 5);

  if (donations.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-secondary/30 p-6 text-center">
        <p className="text-muted-foreground">
          Se el primero en donar a esta campana
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {displayDonations.map((donation) => (
        <div
          key={donation.id}
          className="flex gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/30"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary">
            {donation.isAnonymous || !donation.donorAvatar ? (
              <User className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Image
                src={donation.donorAvatar}
                alt={donation.donorName}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-card-foreground">
                  {donation.isAnonymous ? "Donante anonimo" : donation.donorName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(donation.createdAt), {
                    addSuffix: true,
                    locale: es,
                  })}
                </p>
              </div>
              <p className="font-semibold text-primary">
                {formatCurrency(donation.amount)}
              </p>
            </div>
            {donation.message && (
              <p className="mt-2 text-sm text-muted-foreground">
                {"\u201C"}{donation.message}{"\u201D"}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
