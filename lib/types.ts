export type CampaignCategory =
  | "deportes"
  | "salud"
  | "educacion"
  | "ongs"
  | "emergencias"
  | "comunidad";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  story: string;
  category: CampaignCategory;
  goalAmount: number;
  currentAmount: number;
  donorCount: number;
  imageUrl: string;
  creatorId: string;
  creatorName: string;
  creatorAvatar: string;
  location?: string;
  createdAt: string;
  isUrgent?: boolean;
  isTrending?: boolean;
}

export interface Donation {
  id: string;
  campaignId: string;
  donorName: string;
  donorAvatar?: string;
  amount: number;
  message?: string;
  createdAt: string;
  isAnonymous: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  location?: string;
  createdAt: string;
}

export const categoryLabels: Record<CampaignCategory, string> = {
  deportes: "Deportes",
  salud: "Salud",
  educacion: "Educacion",
  ongs: "ONGs",
  emergencias: "Emergencias",
  comunidad: "Comunidad",
};

export const categoryColors: Record<CampaignCategory, string> = {
  deportes: "bg-blue-100 text-blue-800",
  salud: "bg-red-100 text-red-800",
  educacion: "bg-amber-100 text-amber-800",
  ongs: "bg-green-100 text-green-800",
  emergencias: "bg-orange-100 text-orange-800",
  comunidad: "bg-violet-100 text-violet-800",
};
