import type { Campaign, Donation, User } from "./types";

export const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Reconstruccion del Club Atletico San Martin",
    description:
      "Ayudanos a reconstruir las instalaciones del club despues de la tormenta",
    story:
      "El Club Atletico San Martin lleva mas de 50 anos siendo el corazon de nuestra comunidad. El pasado mes de marzo, una fuerte tormenta destruyo gran parte de nuestras instalaciones, incluyendo los vestuarios y la cancha principal. Necesitamos tu ayuda para poder volver a ofrecer un espacio seguro y de calidad para los mas de 200 jovenes que entrenan con nosotros cada semana.",
    category: "deportes",
    goalAmount: 500000,
    currentAmount: 325000,
    donorCount: 142,
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop",
    creatorId: "user1",
    creatorName: "Carlos Rodriguez",
    creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    location: "Buenos Aires, Argentina",
    createdAt: "2024-01-15",
    isTrending: true,
  },
  {
    id: "2",
    title: "Tratamiento medico para Sofia",
    description:
      "Sofia necesita un tratamiento especializado que no cubre su obra social",
    story:
      "Sofia tiene 8 anos y fue diagnosticada con una condicion rara que requiere tratamiento en el exterior. Su familia ha agotado todos sus recursos y necesita de nuestra solidaridad para poder darle a Sofia la oportunidad de una vida plena.",
    category: "salud",
    goalAmount: 2000000,
    currentAmount: 1850000,
    donorCount: 523,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    creatorId: "user2",
    creatorName: "Maria Gonzalez",
    creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    location: "Cordoba, Argentina",
    createdAt: "2024-02-01",
    isUrgent: true,
    isTrending: true,
  },
  {
    id: "3",
    title: "Becas para estudiantes de bajos recursos",
    description: "Financiamos materiales escolares y uniformes para 50 ninos",
    story:
      "En nuestra escuela rural, muchos ninos no pueden acceder a los materiales basicos para estudiar. Con tu donacion, podemos asegurar que 50 estudiantes tengan todo lo necesario para un ano escolar exitoso.",
    category: "educacion",
    goalAmount: 150000,
    currentAmount: 89000,
    donorCount: 67,
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    creatorId: "user3",
    creatorName: "Ana Martinez",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    location: "Tucuman, Argentina",
    createdAt: "2024-02-10",
  },
  {
    id: "4",
    title: "Comedor comunitario Los Amigos",
    description: "Servimos 200 almuerzos diarios a familias necesitadas",
    story:
      "Desde hace 15 anos, el comedor Los Amigos alimenta a familias en situacion de vulnerabilidad. Con el aumento de los costos, necesitamos tu ayuda para seguir brindando alimento y esperanza.",
    category: "ongs",
    goalAmount: 300000,
    currentAmount: 178000,
    donorCount: 234,
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    creatorId: "user4",
    creatorName: "Roberto Diaz",
    creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    location: "Rosario, Argentina",
    createdAt: "2024-01-28",
    isTrending: true,
  },
  {
    id: "5",
    title: "Ayuda urgente inundaciones Litoral",
    description: "Familias afectadas necesitan alimentos, ropa y medicamentos",
    story:
      "Las recientes inundaciones en el Litoral han dejado a cientos de familias sin hogar. Estamos coordinando la entrega de ayuda humanitaria y necesitamos fondos para comprar suministros esenciales.",
    category: "emergencias",
    goalAmount: 800000,
    currentAmount: 620000,
    donorCount: 412,
    imageUrl: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop",
    creatorId: "user5",
    creatorName: "Voluntarios Unidos",
    creatorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    location: "Entre Rios, Argentina",
    createdAt: "2024-02-20",
    isUrgent: true,
  },
  {
    id: "6",
    title: "Plaza inclusiva para el barrio",
    description: "Construyamos juegos accesibles para todos los ninos",
    story:
      "Queremos transformar un terreno abandonado en una plaza con juegos inclusivos donde todos los ninos, sin importar sus capacidades, puedan jugar juntos y crear memorias felices.",
    category: "comunidad",
    goalAmount: 450000,
    currentAmount: 112000,
    donorCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
    creatorId: "user6",
    creatorName: "Vecinos Solidarios",
    creatorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    location: "Mendoza, Argentina",
    createdAt: "2024-02-05",
  },
];

export const mockDonations: Donation[] = [
  {
    id: "d1",
    campaignId: "1",
    donorName: "Juan Perez",
    donorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    amount: 5000,
    message: "Fuerza! El club es de todos.",
    createdAt: "2024-02-22T14:30:00",
    isAnonymous: false,
  },
  {
    id: "d2",
    campaignId: "1",
    donorName: "Anonimo",
    amount: 15000,
    createdAt: "2024-02-22T12:00:00",
    isAnonymous: true,
  },
  {
    id: "d3",
    campaignId: "1",
    donorName: "Laura Fernandez",
    donorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    amount: 2500,
    message: "Mi hijo entrena ahi, gracias por todo lo que hacen!",
    createdAt: "2024-02-21T18:45:00",
    isAnonymous: false,
  },
  {
    id: "d4",
    campaignId: "2",
    donorName: "Pedro Sanchez",
    donorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    amount: 10000,
    message: "Sofia, sos muy valiente. Te mandamos toda la fuerza!",
    createdAt: "2024-02-22T16:00:00",
    isAnonymous: false,
  },
  {
    id: "d5",
    campaignId: "2",
    donorName: "Familia Martinez",
    amount: 25000,
    message: "Desde Mendoza te enviamos todo nuestro amor.",
    createdAt: "2024-02-22T10:30:00",
    isAnonymous: false,
  },
];

export const mockUser: User = {
  id: "user1",
  name: "Carlos Rodriguez",
  email: "carlos@ejemplo.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  bio: "Presidente del Club Atletico San Martin desde 2018. Comprometido con el deporte comunitario.",
  location: "Buenos Aires, Argentina",
  createdAt: "2023-06-15",
};

export function getCampaignById(id: string): Campaign | undefined {
  return mockCampaigns.find((c) => c.id === id);
}

export function getDonationsByCampaignId(campaignId: string): Donation[] {
  return mockDonations.filter((d) => d.campaignId === campaignId);
}

export function getCampaignsByCategory(category: string): Campaign[] {
  if (category === "todos") return mockCampaigns;
  return mockCampaigns.filter((c) => c.category === category);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateProgress(current: number, goal: number): number {
  return Math.min(Math.round((current / goal) * 100), 100);
}
